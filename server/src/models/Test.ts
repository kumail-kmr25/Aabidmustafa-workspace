import mongoose, { Schema, Document } from 'mongoose';

export interface ITest extends Document {
    title: string;
    class: string;
    subject: string;
    timeLimit: number; // in minutes
    totalMarks: number;
    questions: {
        questionText: string;
        options: string[];
        correctAnswer: string;
        marks: number;
    }[];
    createdAt: Date;
}

const TestSchema: Schema = new Schema({
    title: { type: String, required: true },
    class: { type: String, required: true },
    subject: { type: String, required: true },
    timeLimit: { type: Number, required: true },
    totalMarks: { type: Number, required: true },
    questions: [{
        questionText: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true },
        marks: { type: Number, required: true, default: 1 }
    }],
}, { timestamps: true });

export default mongoose.model<ITest>('Test', TestSchema);
