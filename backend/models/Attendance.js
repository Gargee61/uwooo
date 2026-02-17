import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    shift: {
        type: String,
        required: true,
    },
    present: {
        type: Number,
        default: 0,
    },
    absent: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
