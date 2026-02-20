import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
    name: string;
    description: string;
    category: string; // e.g., 'CSC', 'Education', 'Scholarship'
    icon: string; // Lucide icon name or emoji
    link?: string;
    status: 'active' | 'inactive';
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ServiceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    icon: { type: String, default: '🏢' },
    link: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    isFeatured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model<IService>('Service', ServiceSchema);
