'use client';

import { BarChart3, Download, FileSpreadsheet, PieChart, ArrowDownToLine, Calendar, Filter } from "lucide-react";

export default function ReportsPage() {
    const reports = [
        { title: "Student Roster (Class 6-10)", type: "CSV", size: "45 KB", icon: <FileSpreadsheet className="text-green-600" /> },
        { title: "Material Download Analytics", type: "PDF", size: "1.2 MB", icon: <PieChart className="text-indigo-600" /> },
        { title: "Test Performance Summary", type: "XLSX", size: "890 KB", icon: <BarChart3 className="text-orange-600" /> },
        { title: "Announcement Engagement", type: "CSV", size: "12 KB", icon: <ArrowDownToLine className="text-blue-600" /> },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">Institutional Reports</h1>
                <p className="text-slate-500 mt-1">Export platform data for offline review and archiving</p>
            </div>

            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Date Range</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800">
                            <option>Last 30 Days</option>
                            <option>Academic Session 2025-26</option>
                            <option>Custom Range</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-64 space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Level / Class</label>
                    <div className="relative">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800">
                            <option>All Classes</option>
                            <option>Class 10</option>
                            <option>Class 9</option>
                        </select>
                    </div>
                </div>
                <button className="bg-primary text-secondary px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all w-full md:w-auto">
                    Run Analytics
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                {report.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 line-clamp-1">{report.title}</h3>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Format: {report.type}</span>
                                    <span className="text-[10px] font-black text-slate-300 uppercase">•</span>
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Size: {report.size}</span>
                                </div>
                            </div>
                        </div>
                        <button className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                            <Download size={24} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-indigo-900 rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <div className="space-y-4 relative z-10">
                    <h3 className="text-3xl font-black font-heading leading-tight">Most Downloaded Subject <br /> This Month</h3>
                    <p className="text-blue-200 font-medium">Mathematics notes are trending with 1.2k downloads.</p>
                </div>
                <div className="text-center md:text-right relative z-10">
                    <span className="text-6xl font-black text-secondary">85%</span>
                    <p className="text-blue-200 text-xs font-black uppercase tracking-widest mt-2">Retention Rate</p>
                </div>
            </div>
        </div>
    );
}
