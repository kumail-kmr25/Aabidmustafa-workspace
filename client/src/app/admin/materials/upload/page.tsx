'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function UploadMaterialPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
            await axios.post('http://localhost:5000/api/materials', data, {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            });
            setStatus({ type: 'success', msg: 'Material uploaded successfully!' });
            reset();
        } catch (err: any) {
            setStatus({ type: 'error', msg: err.response?.data?.message || 'Upload failed' });
        }
        setLoading(false);
    };

    return (
        <div className="max-w-3xl bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="mb-10 text-center lg:text-left">
                <h3 className="text-xl font-bold text-slate-800">Add New Study Material</h3>
                <p className="text-slate-500 text-sm mt-1">Fill in the details to publish a new PDF for students.</p>
            </div>

            {status && (
                <div className={`mb-8 p-4 rounded-xl flex items-center space-x-3 text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                    <span>{status.msg}</span>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Material Title</label>
                        <input
                            {...register('title', { required: true })}
                            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-primary"
                            placeholder="e.g. Class 10 Math Ch-1 Notes"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Class</label>
                        <select
                            {...register('studentClass', { required: true })}
                            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-primary"
                        >
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                            <option value="10">Class 10</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Subject</label>
                        <input
                            {...register('subject', { required: true })}
                            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-primary"
                            placeholder="e.g. Mathematics"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Chapter</label>
                        <input
                            {...register('chapter', { required: true })}
                            className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-primary"
                            placeholder="e.g. Chapter 4"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">PDF File URL</label>
                    <input
                        {...register('fileUrl', { required: true })}
                        className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-primary font-mono text-xs"
                        placeholder="https://storage.com/file.pdf"
                    />
                    <p className="text-[10px] text-slate-400">Note: Integrated file upload (Cloudinary) will be added in further updates.</p>
                </div>

                <button
                    disabled={loading}
                    className="w-full bg-primary text-white py-5 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 shadow-xl"
                >
                    <Upload size={20} />
                    <span>{loading ? 'Publishing...' : 'Publish Material'}</span>
                </button>
            </form>
        </div>
    );
}
