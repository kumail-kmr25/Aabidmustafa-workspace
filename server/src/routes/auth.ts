import express, { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/generateToken';

import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// @desc    Register a new student (Admin Only)
// @route   POST /api/auth/register
router.post('/register', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const { name, email, password, studentClass } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            class: studentClass,
            role: 'student'
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                class: user.class,
                token: generateToken(user._id.toString(), user.role),
            });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Login student/admin
// @route   POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user: any = await User.findOne({ email });

        if (user && (await user.comparePassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                class: user.class,
                token: generateToken(user._id.toString(), user.role),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
