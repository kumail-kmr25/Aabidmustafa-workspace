import express, { Request, Response } from 'express';
import Test from '../models/Test';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// @desc    Get tests for student's class
// @route   GET /api/tests
router.get('/', protect, async (req: any, res: Response) => {
    try {
        const studentClass = req.user.class;
        const tests = await Test.find({ class: studentClass }).select('-questions.correctAnswer');
        res.json(tests);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get single test details
// @route   GET /api/tests/:id
router.get('/:id', protect, async (req: Request, res: Response) => {
    try {
        const test = await Test.findById(req.params.id);
        res.json(test);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create new test
// @route   POST /api/tests
router.post('/', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const test = await Test.create(req.body);
        res.status(201).json(test);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
