
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Mock credentials for hardcoded admin/roles if they were to hit the backend
// In a real app, these would be in the DB with hashed passwords.
const HARDCODED_CREDS = {
    'admin@ai-auto.com': 'admin123',
    'builder@ai-auto.com': 'builder123',
    'engineer@ai-auto.com': 'engineer123',
    'manager@ai-auto.com': 'manager123',
    'client@ai-auto.com': 'client123'
};

// @route   POST /api/auth/login
// @desc    Login user & get token
router.post('/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // 1. Check if it's a hardcoded user trying to login via API (fallback)
        if (HARDCODED_CREDS[email]) {
            if (HARDCODED_CREDS[email] === password) {
                return res.json({
                    token: 'mock-jwt-token-hardcoded',
                    user: {
                        name: role.charAt(0).toUpperCase() + role.slice(1),
                        email,
                        role
                    }
                });
            } else {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        }

        // 2. Check Database for user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        // 3. Verify password
        // Since User model HAS NO PASSWORD field (based on current inspection), 
        // we essentially allow login if the user exists.
        // TODO: Add password field to User model and hashing for real security.

        // Return success with dummy token
        res.json({
            token: 'mock-jwt-token-db',
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status
        });

    } catch (err) {
        console.error('❌ Login Error:', err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
