'use client';

import { useAuth } from "@/context/AuthContext";
import { Download, FileCheck, UploadCloud, Activity } from "lucide-react";

export default function DashboardPage() {
    const { user } = useAuth();

    const stats = [
        { label: "Total Downloads", value: user?.downloadsCount || 0, icon: <Download className="text-blue-500" />, color: "bg-blue-50" },
        { label: "Tests Attempted", value: user?.testAttempts || 0, icon: <FileCheck className="text-green-500" />, color: "bg-green-50" },
        { label: "Latest Uploads", value: "12", icon: <UploadCloud className="text-purple-500" />, color: "bg-purple-50" },
        { label: "Performance", value: "85%", icon: <Activity className="text-orange-500" />, color: "bg-orange-50" },
    ];

    return (
        <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4 animate-fade-in">
                        <div className={`${stat.color} p-4 rounded-xl`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-xl font-bold text-primary font-heading">📚 My Class Materials</h3>
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
                            <span className="font-bold text-sm">Recently Added</span>
                            <button className="text-primary text-xs font-bold hover:underline">View All</button>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {[
                                { title: "Mathematics: Quadratic Equations", subject: "Math", date: "2 hours ago" },
                                { title: "Physics: Light Reflection", subject: "Science", date: "Yesterday" },
                                { title: "English: The Merchant of Venice", subject: "English", date: "2 days ago" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary font-bold">
                                            {item.subject[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{item.title}</h4>
                                            <p className="text-xs text-slate-400">{item.subject} • {item.date}</p>
                                        </div>
                                    </div>
                                    <Download size={18} className="text-slate-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-primary font-heading">🔔 Announcements</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Class 10 Unit Test Live!", type: "alert" },
                            { title: "Maths Notes Updated", type: "info" },
                        ].map((ann, i) => (
                            <div key={i} className={`p-4 rounded-xl border-l-4 ${ann.type === 'alert' ? 'bg-red-50 border-red-400 text-red-700' : 'bg-blue-50 border-blue-400 text-blue-700'}`}>
                                <p className="font-bold text-sm">{ann.title}</p>
                                <p className="text-xs opacity-75 mt-1">Check the announcements section for details.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
