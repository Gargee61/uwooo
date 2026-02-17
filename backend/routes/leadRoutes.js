import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// @route   GET /api/lead
// @desc    Get all leads with populated user data
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find()
            .populate('user', 'name email')
            .populate('assignedTo', 'name email')
            .sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        console.error('❌ Error fetching leads:', err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/lead
// @desc    Create a new lead with user reference and emit socket event
router.post('/', async (req, res) => {
    try {
        const { user, name, email, phone, source, status, projectInterest } = req.body;

        if (!name || !source) {
            return res.status(400).json({ message: 'Please provide lead name and source' });
        }

        const newLead = new Lead({
            user,
            name,
            email,
            phone,
            source,
            status: status || 'New',
            projectInterest
        });

        const savedLead = await newLead.save();

        // Populate potential user data before emitting
        const populatedLead = await Lead.findById(savedLead._id)
            .populate('user', 'name email')
            .populate('assignedTo', 'name email');

        // Emit socket event with populated data
        const io = req.app.get('io');
        if (io) {
            io.emit('lead-added', populatedLead);
            console.log('📢 Real-time event emitted: lead-added', populatedLead.name);
        }

        res.status(201).json(populatedLead);
    } catch (err) {
        console.error('❌ Error saving lead:', err.message);
        res.status(500).json({ error: 'Server Error', details: err.message });
    }
});

// @route   PATCH /api/lead/:id
// @desc    Update lead status
router.patch('/:id', async (req, res) => {
    try {
        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
            .populate('user', 'name email')
            .populate('assignedTo', 'name email');

        if (!lead) return res.status(404).json({ message: 'Lead not found' });

        // Emit socket event
        const io = req.app.get('io');
        if (io) {
            io.emit('lead-updated', lead);
        }

        res.json(lead);
    } catch (err) {
        console.error('❌ Error updating lead:', err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
