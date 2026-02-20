import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'student' | 'admin';
    class?: string;
    downloadsCount: number;
    testAttempts: number;
    createdAt: Date;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    class: { type: String },
    downloadsCount: { type: Number, default: 0 },
    testAttempts: { type: Number, default: 0 },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
    const user = this as any;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
