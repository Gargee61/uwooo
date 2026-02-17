import express from 'express';
import Attendance from '../models/Attendance.js';

const router = express.Router();

// @route   GET /api/attendance
router.get('/', async (req, res) => {
    try {
        const attendance = await Attendance.find().sort({ createdAt: -1 });
        res.json(attendance);
    } catch (err) {
        console.error('❌ Error fetching attendance:', err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/attendance
router.post('/', async (req, res) => {
    try {
        const newAttendance = new Attendance(req.body);
        const saved = await newAttendance.save();

        const io = req.app.get('io');
        if (io) io.emit('attendance-added', saved);

        res.status(201).json(saved);
    } catch (err) {
        console.error('❌ Error saving attendance:', err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
