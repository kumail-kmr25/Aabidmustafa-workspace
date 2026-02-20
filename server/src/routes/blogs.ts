import express, { Request, Response } from 'express';
import Blog from '../models/Blog';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

// @desc    Get all published blogs
// @route   GET /api/blogs
router.get('/', async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get all blogs (Admin Only)
// @route   GET /api/blogs/admin
router.get('/admin', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a blog
// @route   POST /api/blogs
router.post('/', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(blog);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
router.put('/:id', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(blog);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
router.delete('/:id', protect, adminOnly, async (req: Request, res: Response) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blog removed' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
