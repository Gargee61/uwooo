import nodemailer from 'nodemailer';

/**
 * Production-ready email service using Nodemailer
 */
class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_PORT === '465',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    /**
     * Send an email
     * @param {string} to - Recipient email
     * @param {string} subject - Email subject
     * @param {string} text - Plain text body
     * @param {string} html - HTML body (optional)
     */
    async sendEmail(to, subject, text, html) {
        try {
            const info = await this.transporter.sendMail({
                from: `"AI-AUTO Alerts" <${process.env.EMAIL_USER}>`,
                to,
                subject,
                text,
                html
            });
            console.log(`[EMAIL] Message sent to ${to}: ${info.messageId}`);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            console.error(`[EMAIL] Failed to send to ${to}:`, error.message);
            return { success: false, error: error.message };
        }
    }
}

export default new EmailService();