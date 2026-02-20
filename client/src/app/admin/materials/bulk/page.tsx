'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, Trash2, CheckCircle2, AlertCircle, X, Layers, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

interface PreUploadFile {
    file: File;
    class: string;
    subject: string;
    id: string;
}

export default function BulkUploadPage() {
    const [files, setFiles] = useState<PreUploadFile[]>([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => ({
            file,
            class: '10', // default
            subject: 'Science', // default
            id: Math.random().toString(36).substr(2, 9)
        }));
        setFiles(prev => [...prev, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] }
    });

    const removeFile = (id: string) => {
        setFiles(files.filter(f => f.id !== id));
    };

    const updateFileData = (id: string, field: 'class' | 'subject', value: string) => {
        setFiles(files.map(f => f.id === id ? { ...f, [field]: value } : f));
    };

    const handleUpload = async () => {
        if (files.length === 0) return;
        setUploading(true);
        setProgress(0);

        const formData = new FormData();
        files.forEach(f => formData.append('files', f.file));
        formData.append('data', JSON.stringify(files.map(f => ({
            title: f.file.name.replace('.pdf', ''),
            class: f.class,
            subject: f.subject
        }))));

        try {
            await axios.post('http://localhost:5000/api/materials/bulk', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
                    setProgress(percentCompleted);
                }
            });
            setFiles([]);
            alert("All files published successfully!");
        } catch (error) {
            console.error(error);
            alert("Bulk upload failed. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-slate-100 font-heading">Bulk PDF Upload</h1>
                    <p className="text-slate-500 mt-1">Efficiently publish multiple resources at once</p>
                </div>
            </div>

            {/* Dropzone */}
            <div
                {...getRootProps()}
                className={`border-4 border-dashed rounded-[40px] p-20 text-center transition-all cursor-pointer bg-white dark:bg-slate-800/50 ${isDragActive ? 'border-primary bg-primary/5 scale-105' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-6">
                    <div className={`p-6 rounded-full ${isDragActive ? 'bg-primary text-white animate-bounce' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <Upload size={48} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Drag & Drop Study Materials</h3>
                        <p className="text-slate-400 mt-2 font-medium">Select multiple PDF files to begin bulk processing</p>
                    </div>
                </div>
            </div>

            {files.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-800 rounded-[40px] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden"
                >
                    <div className="p-8 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                            <Layers className="text-primary" /> Multi-File Queue ({files.length})
                        </h3>
                        <button onClick={() => setFiles([])} className="text-red-500 text-xs font-black uppercase hover:underline">Clear Queue</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">
                                    <th className="px-8 py-5 text-left">File Name</th>
                                    <th className="px-8 py-5 text-left">Assign Class</th>
                                    <th className="px-8 py-5 text-left">Subject</th>
                                    <th className="px-8 py-5 text-right">Remove</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                                <AnimatePresence>
                                    {files.map((f) => (
                                        <motion.tr
                                            key={f.id}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <FileText className="text-blue-500" size={20} />
                                                    <span className="font-bold text-slate-700 dark:text-slate-200 line-clamp-1 max-w-[200px]">{f.file.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <select
                                                    value={f.class}
                                                    onChange={(e) => updateFileData(f.id, 'class', e.target.value)}
                                                    className="bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-xl text-xs font-bold border-none focus:outline-primary"
                                                >
                                                    {['6', '7', '8', '9', '10'].map(c => <option key={c} value={c}>Class {c}</option>)}
                                                </select>
                                            </td>
                                            <td className="px-8 py-6">
                                                <select
                                                    value={f.subject}
                                                    onChange={(e) => updateFileData(f.id, 'subject', e.target.value)}
                                                    className="bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-xl text-xs font-bold border-none focus:outline-primary"
                                                >
                                                    {['Science', 'Math', 'SST', 'English', 'Urdu'].map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button onClick={() => removeFile(f.id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                                    <X size={18} />
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>

                    <div className="p-10 flex flex-col items-center gap-6">
                        {uploading && (
                            <div className="w-full bg-slate-100 dark:bg-slate-900 h-3 rounded-full overflow-hidden">
                                <motion.div
                                    className="bg-primary h-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        )}
                        <button
                            onClick={handleUpload}
                            disabled={uploading}
                            className="bg-primary text-secondary px-12 py-5 rounded-[24px] font-black shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50"
                        >
                            {uploading ? <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin" /> : <CheckCircle2 size={24} />}
                            {uploading ? 'Processing Files...' : 'Publish Bulk Materials'}
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
