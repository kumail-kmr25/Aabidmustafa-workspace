'use client';

import { useState } from 'react';
import { Search, Filter, MoreVertical, UserX, Trash2, Eye, UserCircle, ShieldAlert } from "lucide-react";

export default function ManageStudentsPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const students = [
        { name: "Abrar Ahmed", class: "10", email: "abrar@example.com", downloads: 24, tests: 12, status: "Active" },
        { name: "Sadiya Gul", class: "10", email: "sadiya@example.com", downloads: 18, tests: 15, status: "Active" },
        { name: "Zaid Bin Haris", class: "9", email: "zaid@example.com", downloads: 8, tests: 0, status: "Active" },
        { name: "Irfan Malik", class: "8", email: "irfan@example.com", downloads: 42, tests: 20, status: "Blocked" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">Student Management</h1>
                    <p className="text-slate-500 mt-1">Review student activity and manage access</p>
                </div>
                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                    <UserCircle size={20} /> Register New Student
                </button>
            </div>

            <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Name, Email or Class..."
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl focus:outline-primary border-none text-sm font-semibold"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <select className="p-4 bg-slate-50 rounded-2xl text-sm font-bold border-none focus:outline-primary">
                        <option value="">All Classes</option>
                        <option value="6">Class 6</option>
                        <option value="10">Class 10</option>
                    </select>
                    <button className="flex items-center gap-2 px-6 py-4 bg-slate-50 rounded-2xl text-slate-500 font-bold hover:bg-slate-100 transition-colors">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Student Identity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Contact</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Class</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Activity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Status</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {students.map((student, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <UserCircle size={24} />
                                            </div>
                                            <span className="font-bold text-slate-800">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-slate-500 font-medium">{student.email}</td>
                                    <td className="px-8 py-6">
                                        <span className="bg-secondary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black">CLASS {student.class}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                                            <span>{student.downloads} Dn.</span>
                                            <span>{student.tests} Tests</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${student.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-primary border border-transparent hover:border-slate-200" title="View Profile">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-amber-600 border border-transparent hover:border-slate-200" title="Block Student">
                                                <UserX size={16} />
                                            </button>
                                            <button className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-red-500 border border-transparent hover:border-slate-200" title="Delete Account">
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
