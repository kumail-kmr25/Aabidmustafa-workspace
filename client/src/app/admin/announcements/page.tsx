'use client';

import { useState } from 'react';
import { Plus, Search, Filter, Megaphone, Trash2, Edit, CheckCircle, Clock } from "lucide-react";

export default function ManageAnnouncementsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const announcements = [
        { title: "Class 10 Unit Test Live!", status: "Active", expiry: "2026-03-01", views: 245 },
        { title: "Math Notes Updated", status: "Active", expiry: "2026-03-15", views: 120 },
        { title: "Holiday Notice: Shab-e-Barat", status: "Expired", expiry: "2026-02-15", views: 890 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">Announcements</h1>
                    <p className="text-slate-500 mt-1">Manage pop-up notices and alerts for students</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-secondary px-6 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    <Plus size={20} />
                    Create Announcement
                </button>
            </div>

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Notice Content</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Visibility</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Expiry Date</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Engagement</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {announcements.map((ann, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl ${ann.status === 'Active' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-400'}`}>
                                                <Megaphone size={20} />
                                            </div>
                                            <span className="font-bold text-slate-800">{ann.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${ann.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
                                            <span className={`text-[10px] font-black uppercase ${ann.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>
                                                {ann.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-slate-500 font-semibold">{ann.expiry}</td>
                                    <td className="px-8 py-6 text-xs text-slate-400 font-black uppercase">{ann.views} Views</td>
                                    <td className="px-8 py-6 text-right space-x-2">
                                        <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary border border-transparent hover:border-slate-200">
                                            <Edit size={16} />
                                        </button>
                                        <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-red-500 border border-transparent hover:border-slate-200">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
