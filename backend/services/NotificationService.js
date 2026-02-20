import Notification from '../models/Notification.js';
import NotificationSetting from '../models/NotificationSettings.js';
import User from '../models/User.js';
import emailService from '../utils/emailService.js';

class NotificationService {
    constructor() {
        this.io = null;
    }

    setIo(io) {
        this.io = io;
    }

    EVENT_ROLE_MAP = {
        'hazard': ['Admin', 'Civil Engineer', 'Safety Officer', 'Builder'],
        'task_assigned': ['Site Manager', 'Civil Engineer', 'Builder'],
        'task_updated': ['Site Manager', 'Admin', 'Builder', 'Civil Engineer'],
        'site_log': ['Admin', 'Civil Engineer', 'Builder'],
        'attendance': ['Site Manager', 'Admin', 'Builder'],
        'design_approval': ['Admin', 'Client', 'Civil Engineer', 'Builder'],
        'design_rejected': ['Admin', 'Client', 'Civil Engineer', 'Builder'],
        'budget_exceeded': ['Client', 'Admin', 'Builder'],
        'milestone': ['Client', 'Admin', 'Site Manager', 'Civil Engineer', 'Builder'],
        'schedule_delay': ['Client', 'Admin', 'Civil Engineer', 'Builder'],
        'system': ['Admin', 'Builder', 'Civil Engineer', 'Client']
    };

    async triggerNotification(eventType, data) {
        try {
            const rolesToNotify = this.EVENT_ROLE_MAP[eventType] || [];
            if (rolesToNotify.length === 0) return;

            const users = await User.find({ role: { $in: rolesToNotify }, status: 'Active' });

            for (const user of users) {
                let setting = await NotificationSetting.findOne({ user: user._id });

                if (!setting) {
                    setting = await NotificationSetting.create({
                        user: user._id,
                        preferences: Object.keys(this.EVENT_ROLE_MAP).map(type => ({
                            eventType: type,
                            inApp: true,
                            email: true
                        }))
                    });
                }

                const pref = setting.preferences.find(p => p.eventType === eventType);
                if (pref && !pref.inApp && !pref.email) continue;

                const notificationPayload = {
                    title: data.title || this._formatTitle(eventType),
                    message: data.message || `An alert of type ${eventType} has occurred.`,
                    priority: data.priority || this._getPriority(eventType),
                    metadata: data.metadata || {}
                };

                await Promise.allSettled([
                    this._dispatchInApp(user, eventType, notificationPayload, pref),
                    this._dispatchEmail(user, eventType, notificationPayload, pref)
                ]);
            }
        } catch (err) {
            console.error('❌ Notification Service Error:', err);
        }
    }

    async _dispatchInApp(user, eventType, payload, pref) {
        if (pref && !pref.inApp) return null;
        const notification = new Notification({
            recipient: user._id,
            ...payload,
            type: eventType,
            channelsSent: ['inApp']
        });
        await notification.save();
        if (this.io) {
            this.io.to(user._id.toString()).emit('notification', notification);
        }
        return 'inApp';
    }

    async _dispatchEmail(user, eventType, payload, pref) {
        if (!pref || !pref.email || !user.email) return null;
        const result = await emailService.sendEmail(
            user.email,
            `AI_AUTO ALERT: ${payload.title}`,
            payload.message,
            `<div style="font-family: sans-serif; padding: 20px;">
                <h2 style="color: #0047AB;">${payload.title}</h2>
                <p>${payload.message}</p>
                <hr /><small>Priority: ${payload.priority.toUpperCase()}</small>
            </div>`
        );
        if (result.success) {
            await Notification.findOneAndUpdate(
                { recipient: user._id, type: eventType },
                { $addToSet: { channelsSent: 'email' } },
                { sort: { createdAt: -1 } }
            );
        }
        return 'email';
    }

    _formatTitle(eventType) {
        return eventType.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    _getPriority(eventType) {
        const urgentEvents = ['hazard', 'budget_exceeded', 'schedule_delay'];
        return urgentEvents.includes(eventType) ? 'high' : 'medium';
    }
}

export default new NotificationService();