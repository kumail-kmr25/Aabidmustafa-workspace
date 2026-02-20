import express, { Request, Response } from 'express';
import User from '../models/User';
import { generateToken } from '../utils/generateToken';

import { protect, adminOnly } from '../middleware/auth';

import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiter for login attempts
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 10 login requests per window
    message: { message: 'Too many login attempts, please try again after 15 minutes' }
});

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
            role: 'student' // Force role to student
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

// @desc    Login student
// @route   POST /api/auth/login
router.post('/login', loginLimiter, async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Block admin email from public login if it's the hardcoded one
        if (email === process.env.ADMIN_EMAIL) {
            return res.status(401).json({ message: 'Please use the secure admin portal' });
        }

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

// @desc    Secure Admin Login (Hardcoded ENV)
// @route   POST /api/auth/admin-login
router.post('/admin-login', loginLimiter, async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const isMatch = await bcrypt.compare(
            password,
            process.env.ADMIN_PASSWORD_HASH || ''
        );

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token with role but NO id (since it's hardcoded)
        const token = generateToken('', 'admin');

        res.json({
            name: 'Mustafa Admin',
            email: process.env.ADMIN_EMAIL,
            role: 'admin',
            token
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
