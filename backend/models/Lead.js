import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Make optional for external leads
    },
    name: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    source: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['New', 'Hot', 'Warm', 'Cold', 'Converted'],
        default: 'New'
    },
    projectInterest: String,
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
}, { timestamps: true });

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
