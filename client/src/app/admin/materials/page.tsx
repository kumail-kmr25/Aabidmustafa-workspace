'use client';

import { useState } from 'react';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye, FileText, BookOpen, Download } from "lucide-react";
import Link from 'next/link';

export default function ManageMaterialsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const materials = [
        { title: "Class 10 Physics Ch1", class: "10", subject: "Science", downloads: 452, date: "Feb 20, 2026" },
        { title: "Algebra Basics Part 2", class: "8", subject: "Math", downloads: 89, date: "Feb 19, 2026" },
        { title: "Civics: Our Constitution", class: "9", subject: "SST", downloads: 124, date: "Feb 18, 2026" },
        { title: "Tenses English Grammar", class: "7", subject: "English", downloads: 210, date: "Feb 17, 2026" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">Manage Study Materials</h1>
                    <p className="text-slate-500 mt-1">Total {materials.length} resources published</p>
                </div>
                <Link href="/admin/materials/upload" className="flex items-center gap-2 bg-primary text-secondary px-6 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                    <Plus size={20} />
                    Create New Material
                </Link>
            </div>

            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Title, Class or Subject..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl focus:outline-primary border-none text-sm font-semibold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">
                    <Filter size={20} /> Filter
                </button>
            </div>

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Resource Details</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Level</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Subject</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Usage</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Date</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {materials.map((item, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                                <FileText size={20} />
                                            </div>
                                            <span className="font-bold text-slate-800">{item.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-[10px] font-black">CLASS {item.class}</span>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-slate-500 font-semibold">{item.subject}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <Download size={14} className="text-slate-300" />
                                            <span className="text-sm font-bold text-slate-700">{item.downloads}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-xs text-slate-400 font-black uppercase">{item.date}</td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary border border-transparent hover:border-slate-200">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-red-500 border border-transparent hover:border-slate-200">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
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
