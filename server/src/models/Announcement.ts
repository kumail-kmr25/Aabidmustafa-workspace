import mongoose, { Schema, Document } from 'mongoose';

export interface IAnnouncement extends Document {
    title: string;
    description: string;
    expiryDate?: Date;
    isActive: boolean;
    createdAt: Date;
}

const AnnouncementSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    expiryDate: { type: Date },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model<IAnnouncement>('Announcement', AnnouncementSchema);
