'use client';

import { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Edit,
    Trash2,
    CheckCircle,
    XCircle,
    FileText,
    Calendar,
    Tag,
    Eye
} from "lucide-react";
import axios from 'axios';

export default function AdminBlogManagement() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('http://localhost:5000/api/blogs/admin', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBlogs(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setLoading(false);
        }
    };

    const togglePublish = async (id: string, currentStatus: boolean) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/blogs/${id}`, { published: !currentStatus }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error toggling publish status:', error);
        }
    };

    const deleteBlog = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this blog post?')) return;
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white font-heading tracking-tight capitalize">Blog Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage articles, news, and exam guidance</p>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                    <Plus size={20} /> Create New Post
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Title or Category..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl focus:outline-primary border-none text-sm font-semibold dark:text-slate-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Blog List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    Array(6).fill(0).map((_, i) => (
                        <div key={i} className="h-64 bg-slate-100 dark:bg-slate-800 rounded-[32px] animate-pulse" />
                    ))
                ) : filteredBlogs.map((blog) => (
                    <div key={blog._id} className="bg-white dark:bg-slate-800 rounded-[40px] border border-slate-100 dark:border-slate-700 overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col">
                        <div className="aspect-video bg-slate-50 dark:bg-slate-900 flex items-center justify-center relative">
                            {blog.coverImage ? (
                                <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
                            ) : (
                                <FileText size={48} className="text-slate-200 dark:text-slate-700" />
                            )}
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                                {blog.category}
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col gap-4">
                            <h3 className="text-xl font-bold dark:text-white line-clamp-2 leading-tight tracking-tight">{blog.title}</h3>

                            <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                                <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                                <span className="flex items-center gap-1.5"><Tag size={14} /> {blog.tags?.length || 0} Tags</span>
                            </div>

                            <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-700">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => togglePublish(blog._id, blog.published)}
                                        className={`transition-colors ${blog.published ? 'text-green-500' : 'text-slate-300'}`}
                                        title={blog.published ? "Unpublish" : "Publish"}
                                    >
                                        {blog.published ? <CheckCircle size={20} /> : <XCircle size={20} />}
                                    </button>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {blog.published ? 'Published' : 'Draft'}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <button className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-400 hover:text-primary transition-colors">
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => deleteBlog(blog._id)}
                                        className="p-2 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {!loading && filteredBlogs.length === 0 && (
                <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-[48px] border-2 border-dashed border-slate-200 dark:border-slate-700">
                    <p className="text-slate-400 font-bold">No blog posts found matching your search.</p>
                </div>
            )}
        </div>
    );
}
