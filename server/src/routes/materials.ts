import express, { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import Material from '../models/Material';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// Multer Config
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

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
            material.downloads += 1;
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

import { sendNotification } from '../utils/socket';

// @desc    Bulk Upload materials
// @route   POST /api/materials/bulk
router.post('/bulk', protect, adminOnly, upload.array('files', 10), async (req: any, res: Response) => {
    try {
        const files = req.files as Express.Multer.File[];
        const materialData = JSON.parse(req.body.data); // [{name, class, subject}]

        const createdMaterials = await Promise.all(files.map(async (file, index) => {
            const data = materialData[index];
            const material = await Material.create({
                title: data.title || file.originalname,
                class: data.class,
                subject: data.subject,
                fileUrl: `/uploads/${file.filename}`,
                description: data.description || 'Uploaded via bulk system'
            });

            // Notify students of this class
            sendNotification(`class_${data.class}`, 'material', {
                title: `New Material: ${material.title}`,
                body: `New ${data.subject} resources have been uploaded for Class ${data.class}. Check them out in your Study Hub!`,
                id: material._id
            });

            return material;
        }));

        res.status(201).json(createdMaterials);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

import { watermarkPDF } from '../utils/pdfService';
import fs from 'fs';

// @desc    Download material with watermark
// @route   GET /api/materials/download/:id
router.get('/download/:id', protect, async (req: any, res: Response) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }

        const filePath = path.join(__dirname, '../../', material.fileUrl);

        // Increment download count
        material.downloads += 1;
        await material.save();

        // Apply watermark logic
        const userName = req.user.name || 'Student';
        const userEmail = req.user.email || 'jkbose-portal';

        const watermarkedPdfBytes = await watermarkPDF(filePath, userName, userEmail);

        res.contentType("application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename=${material.title.replace(/\s+/g, '_')}_Watermarked.pdf`);
        res.send(Buffer.from(watermarkedPdfBytes));

    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: 'Error processing download' });
    }
});

export default router;
