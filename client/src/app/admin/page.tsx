'use client';

import { Users, Download, FilePlus, Eye } from "lucide-react";

export default function AdminPage() {
    const stats = [
        { label: "Total Students", value: "124", icon: <Users className="text-blue-500" />, color: "bg-blue-50" },
        { label: "Total Downloads", value: "1,452", icon: <Download className="text-green-500" />, color: "bg-green-50" },
        { label: "Study Materials", value: "48", icon: <FilePlus className="text-orange-500" />, color: "bg-orange-50" },
        { label: "Platform Views", value: "24k", icon: <Eye className="text-purple-500" />, color: "bg-purple-50" },
    ];

    return (
        <div className="space-y-12">
            {/* Admin Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-6">
                        <div className={`${stat.color} p-5 rounded-2xl`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Download className="text-primary" size={20} /> Latest Download Activity
                    </h3>
                    <div className="space-y-4">
                        {[
                            { student: "Abrar Ahmed", file: "Physics Notes Ch-2", date: "5 mins ago" },
                            { student: "Sadiya Gul", file: "Math PYQs 2023", date: "12 mins ago" },
                            { student: "Zaid Bin Haris", file: "English Grammar PDF", date: "45 mins ago" },
                        ].map((log, i) => (
                            <div key={i} className="flex justify-between items-center p-4 hover:bg-slate-50 rounded-xl transition-colors">
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">{log.student}</p>
                                    <p className="text-xs text-slate-400">{log.file}</p>
                                </div>
                                <span className="text-[10px] font-bold text-slate-300 uppercase">{log.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
                    <h3 className="text-xl font-bold mb-6">📢 Platform Alerts</h3>
                    <div className="space-y-4">
                        {[
                            { msg: "Server maintenance scheduled for Sunday.", type: "warning" },
                            { msg: "12 new students registered today.", type: "info" },
                        ].map((alert, i) => (
                            <div key={i} className={`p-4 rounded-xl text-sm ${alert.type === 'warning' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                                {alert.msg}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
