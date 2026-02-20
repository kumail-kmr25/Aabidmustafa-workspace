import { Users, Download, BookOpen, FileText, TrendingUp, Clock, FilePlus } from "lucide-react";
import { DownloadTrendChart, SubjectPopularityChart } from "@/components/admin/AnalyticsCharts";

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
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-700 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`${stat.bg} ${stat.color} dark:bg-slate-900 dark:text-primary p-4 rounded-2xl`}>
                                {stat.icon}
                            </div>
                            <div className="flex items-center gap-1 text-green-500 dark:text-green-400 text-xs font-bold bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                <TrendingUp size={12} /> {stat.trend}
                            </div>
                        </div>
                        <div>
                            <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100 mt-1">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recently Uploaded (Large Panel) */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div className="p-8 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/5 dark:bg-primary/20 p-2 rounded-xl text-primary dark:text-primary">
                                <FilePlus size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-heading">Recently Uploaded Materials</h3>
                        </div>
                        <button className="text-primary text-sm font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">Title</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">Class</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">Subject</th>
                                    <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">Date</th>
                                    <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-50 dark:border-slate-700">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-700">
                                {[
                                    { title: "Class 10 Physics Ch1", class: "10", subject: "Science", date: "Feb 20, 2026" },
                                    { title: "Algebra Basics Part 2", class: "8", subject: "Math", date: "Feb 19, 2026" },
                                    { title: "Civics: Our Constitution", class: "9", subject: "SST", date: "Feb 18, 2026" },
                                    { title: "Tenses English Grammar", class: "7", subject: "English", date: "Feb 17, 2026" },
                                ].map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                                        <td className="px-8 py-5 text-sm font-bold text-slate-700 dark:text-slate-200">{item.title}</td>
                                        <td className="px-8 py-5"><span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-black">CLASS {item.class}</span></td>
                                        <td className="px-8 py-5 text-sm text-slate-500 dark:text-slate-400 font-medium">{item.subject}</td>
                                        <td className="px-8 py-5 text-xs text-slate-400 dark:text-slate-500 font-bold">{item.date}</td>
                                        <td className="px-8 py-5 text-right">
                                            <button className="text-primary hover:text-slate-900 dark:hover:text-white font-bold text-xs transition-colors">Quick Edit</button>
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
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold font-heading">Download Analytics</h3>
                            <TrendingUp className="text-secondary" />
                        </div>
                        <DownloadTrendChart />
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                            <p className="text-xs text-slate-400 font-medium">Total Downloads this week</p>
                            <h4 className="text-2xl font-black">2,481 <span className="text-green-400 text-xs font-black">+14%</span></h4>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 font-heading">Subject Popularity</h3>
                        <SubjectPopularityChart />
                    </div>
                </div>
            </div>
        </div>
    );
}
