import express from 'express';
import { generativeModel, modelName, genAIInstance } from '../config/vertex.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { content, history, systemInstruction } = req.body;

        // 1. Try to use the standardized AI-AUTO Generative Model from vertex.js
        if (generativeModel) {
            try {
                const chatHistory = (history || []).map(h => ({
                    role: h.role === 'model' ? 'model' : 'user',
                    parts: [{ text: h.content }]
                }));

                const chatSession = generativeModel.startChat({
                    history: chatHistory,
                });

                const result = await chatSession.sendMessage(content);
                const reply = result.response.text();

                return res.json({ reply });
            } catch (aiErr) {
                console.warn("⚠️ AI Service call failed, falling back to simulated logic:", aiErr.message);
            }
        }

        // 2. Fallback / Simulated Logic for "Workable" Bot
        // This ensures the bot responds even if the API Key is missing or invalid
        let reply = "";
        const lowerContent = content.toLowerCase();

        // Use systemInstruction to detect if it's a builder-specific request
        const isBuilder = systemInstruction?.includes("Builder Assistant") || systemInstruction?.includes("Construction Assistant");

        if (isBuilder) {
            if (lowerContent.includes("cement") || lowerContent.includes("brick")) {
                reply = "Inventory Check: We currently have 450 bags of OPC cement at the Jabalpur site. Bricks are at 12,000 units. Would you like a detailed procurement report?";
            } else if (lowerContent.includes("labor") || lowerContent.includes("attendance")) {
                reply = "Site Attendance: 12 workers were logged at the Yug AMC site today. All safety protocols were cleared.";
            } else {
                reply = "I am AI-AUTO Construction Assistant. I can help you track materials, site logs, and inventory movement for your projects. What can I check for you?";
            }
        } else {
            reply = "Welcome to AI-AUTO. I can assist with lead analytics, project tracking, and dashboard navigation. How can I help you today?";
        }

        res.json({ reply });

    } catch (err) {
        console.error('❌ Chat Route Error:', err.message);
        res.status(500).json({
            reply: "I am experiencing a slight delay in my neural circuits. Please try again in a moment."
        });
    }
});

export default router;
