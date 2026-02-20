'use client';

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import {
    LayoutDashboard, BookOpen, FileText, Users,
    MessageSquare, BarChart3, Settings, LogOut,
    ShieldCheck, Globe, ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, logout, loading } = useAuth();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        if (!loading && (!user || user.role !== 'admin')) {
            redirect('/auth/login');
        }
    }, [user, loading]);

    if (loading) return null;

    const menuItems = [
        { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
        { name: "Study Materials", href: "/admin/materials", icon: <BookOpen size={20} /> },
        { name: "Test Series", href: "/admin/tests", icon: <FileText size={20} /> },
        { name: "Blog Posts", href: "/admin/blog", icon: <MessageSquare size={20} /> },
        { name: "CSC Services", href: "/admin/services", icon: <Globe size={20} /> },
        { name: "Students", href: "/admin/students", icon: <Users size={20} /> },
        { name: "Announcements", href: "/admin/announcements", icon: <Settings size={20} /> },
        { name: "Reports", href: "/admin/reports", icon: <BarChart3 size={20} /> },
    ];

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="min-h-screen bg-[#F5F7FA] dark:bg-[#0F172A] flex font-body transition-colors duration-300">
            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-[250px] bg-[#0A2E5C] dark:bg-[#09152b] text-white flex flex-col transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="p-6 border-b border-white/5 flex items-center space-x-3 bg-[#082245]">
                    <div className="p-2 bg-secondary/20 rounded-xl">
                        <ShieldCheck className="text-secondary" size={24} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold font-heading">Mustafa Admin</h1>
                        <p className="text-[10px] text-blue-300/60 uppercase tracking-widest font-black">Education Portal</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 mt-4 overflow-y-auto">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                flex items-center justify-between group p-3 rounded-xl transition-all
                ${pathname === item.href ? 'bg-secondary text-primary shadow-lg shadow-secondary/10' : 'text-slate-400 hover:bg-white/5 hover:text-white'}
              `}
                        >
                            <div className="flex items-center space-x-3 text-sm font-semibold">
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                            {pathname === item.href && <ChevronRight size={14} />}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 space-y-4">
                    <Link href="/" target="_blank" className="flex items-center gap-3 p-3 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-white/5 rounded-xl">
                        <Globe size={16} /> View Website
                    </Link>
                    <button
                        onClick={logout}
                        className="flex items-center space-x-3 p-3 w-full rounded-xl hover:bg-red-500/10 text-red-400 transition-colors"
                    >
                        <LogOut size={18} />
                        <span className="text-sm font-bold">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Wrapper */}
            <div className="flex-1 lg:ml-[250px] flex flex-col min-w-0">
                <AdminTopbar toggleSidebar={toggleSidebar} />

                <main className="flex-1 p-6 md:p-8 animate-in fade-in duration-500">
                    {children}
                </main>
            </div>
        </div>
    );
}
