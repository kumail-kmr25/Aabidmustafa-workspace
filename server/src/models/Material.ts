import mongoose, { Schema, Document } from 'mongoose';

export interface IMaterial extends Document {
    title: string;
    class: string;
    subject: string;
    chapter: string;
    fileUrl: string;
    description?: string;
    downloads: number;
    uploadedAt: Date;
    createdAt: Date;
}

const MaterialSchema: Schema = new Schema({
    title: { type: String, required: true },
    class: { type: String, required: true },
    subject: { type: String, required: true },
    chapter: { type: String, required: true },
    fileUrl: { type: String, required: true },
    description: { type: String },
    downloadCount: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model<IMaterial>('Material', MaterialSchema);
