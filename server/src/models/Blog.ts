import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    author: string;
    category: string;
    tags: string[];
    coverImage?: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String, required: true },
    author: { type: String, default: 'Mustafa Aabid' },
    category: { type: String, required: true },
    tags: [{ type: String }],
    coverImage: { type: String },
    published: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model<IBlog>('Blog', BlogSchema);
