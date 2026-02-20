import express, { Request, Response } from 'express';
import Material from '../models/Material';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// @desc    Get all materials with filters
// @route   GET /api/materials
router.get('/', async (req: Request, res: Response) => {
    try {
        const { studentClass, subject, search } = req.query;
        let query: any = {};

        if (studentClass) query.class = studentClass;
        if (subject) query.subject = subject;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { chapter: { $regex: search, $options: 'i' } }
            ];
        }

        const materials = await Material.find(query).sort({ createdAt: -1 });
        res.json(materials);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Upload new material
// @route   POST /api/materials
router.post('/', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const { title, studentClass, subject, chapter, fileUrl, description } = req.body;
        const material = await Material.create({
            title,
            class: studentClass,
            subject,
            chapter,
            fileUrl,
            description
        });
        res.status(201).json(material);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Download material and track log
// @route   POST /api/materials/download/:id
router.post('/download/:id', protect, async (req: any, res: Response) => {
    try {
        const material = await Material.findById(req.params.id);
        if (material) {
            material.downloadCount += 1;
            await material.save();

            // Update user count
            req.user.downloadsCount += 1;
            await req.user.save();

            res.json({ message: 'Download tracked', material });
        } else {
            res.status(404).json({ message: 'Material not found' });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
