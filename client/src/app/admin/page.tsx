'use client';

import { Users, Download, BookOpen, FileText, TrendingUp, Clock, FilePlus } from "lucide-react";

export default function AdminPage() {
    const stats = [
        { label: "Total Students", value: "1,248", trend: "+12%", icon: <Users size={24} />, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Total Downloads", value: "8,945", trend: "+24%", icon: <Download size={24} />, color: "text-green-600", bg: "bg-green-50" },
        { label: "Study Materials", value: "156", trend: "+5", icon: <BookOpen size={24} />, color: "text-indigo-600", bg: "bg-indigo-50" },
        { label: "Tests Created", value: "42", trend: "+2", icon: <FileText size={24} />, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 4 Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                                {stat.icon}
                            </div>
                            <div className="flex items-center gap-1 text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp size={12} /> {stat.trend}
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-800 mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recently Uploaded (Large Panel) */}
                <div className="lg:col-span-2 bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/5 p-2 rounded-xl text-primary">
                                <FilePlus size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 font-heading">Recently Uploaded Materials</h3>
                        </div>
                        <button className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">Title</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">Class</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">Subject</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">Date</th>
                                    <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { title: "Class 10 Physics Ch1", class: "10", subject: "Science", date: "Feb 20, 2026" },
                                    { title: "Algebra Basics Part 2", class: "8", subject: "Math", date: "Feb 19, 2026" },
                                    { title: "Civics: Our Constitution", class: "9", subject: "SST", date: "Feb 18, 2026" },
                                    { title: "Tenses English Grammar", class: "7", subject: "English", date: "Feb 17, 2026" },
                                ].map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-8 py-5 text-sm font-bold text-slate-700">{item.title}</td>
                                        <td className="px-8 py-5"><span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black">CLASS {item.class}</span></td>
                                        <td className="px-8 py-5 text-sm text-slate-500 font-medium">{item.subject}</td>
                                        <td className="px-8 py-5 text-xs text-slate-400 font-bold">{item.date}</td>
                                        <td className="px-8 py-5 text-right">
                                            <button className="text-primary hover:text-slate-900 font-bold text-xs">Quick Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Analytics (Mini Panel) */}
                <div className="space-y-8">
                    <div className="bg-slate-900 rounded-[32px] p-8 shadow-xl text-white">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg font-bold font-heading">Download Analytics</h3>
                            <TrendingUp className="text-secondary" />
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end h-32 gap-2">
                                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                    <div key={i} className="flex-1 bg-white/10 hover:bg-secondary rounded-t-lg transition-all duration-300 relative group cursor-help" style={{ height: `${h}%` }}>
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary text-[10px] font-black px-2 py-1 rounded">
                                            {h * 12}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            <p className="text-xs text-slate-400 font-medium">Total Downloads this week</p>
                            <h4 className="text-2xl font-black">2,481 <span className="text-green-400 text-xs font-black">+14%</span></h4>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 font-heading">Recent System Logs</h3>
                        <div className="space-y-5">
                            {[
                                { msg: "New student registration (Abrar Ahmed)", time: "2m ago" },
                                { msg: "Physics Notes Ch-2 PDF uploaded", time: "15m ago" },
                                { msg: "Admin password changed successfully", time: "1h ago" },
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-600 leading-tight">{log.msg}</p>
                                        <p className="text-[10px] text-slate-400 font-black mt-1 uppercase tracking-widest">{log.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
