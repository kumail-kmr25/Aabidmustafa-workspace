import express, { Request, Response } from 'express';
import Service from '../models/Service';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// @desc    Get all active services
// @route   GET /api/services
router.get('/', async (req: Request, res: Response) => {
    try {
        const services = await Service.find({ status: 'active' }).sort({ createdAt: -1 });
        res.json(services);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get all services (Admin Only)
// @route   GET /api/services/admin
router.get('/admin', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 });
        res.json(services);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a service
// @route   POST /api/services
router.post('/', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const service = await Service.create(req.body);
        res.status(201).json(service);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Update a service
// @route   PUT /api/services/:id
router.put('/:id', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(service);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Delete a service
// @route   DELETE /api/services/:id
router.delete('/:id', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: 'Service removed' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
