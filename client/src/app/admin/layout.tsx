'use client';

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, redirect } from "next/navigation";
import { LayoutDashboard, UploadCloud, Users, MessageSquare, FileText, LogOut, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { user, logout, loading } = useAuth();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && (!user || user.role !== 'admin')) {
            redirect('/auth/login');
        }
    }, [user, loading]);

    if (loading) return null;

    const menuItems = [
        { name: "Overview", href: "/admin", icon: <LayoutDashboard size={20} /> },
        { name: "Upload Material", href: "/admin/materials/upload", icon: <UploadCloud size={20} /> },
        { name: "Manage Students", href: "/admin/students", icon: <Users size={20} /> },
        { name: "Test Series", href: "/admin/tests", icon: <FileText size={20} /> },
        { name: "Announcements", href: "/admin/announcements", icon: <MessageSquare size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full shadow-2xl">
                <div className="p-8 border-b border-white/5 flex items-center space-x-3">
                    <ShieldCheck className="text-secondary" />
                    <div>
                        <h1 className="text-lg font-bold font-heading">Admin Panel</h1>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Mustafa Aabid</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-primary text-white' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={logout}
                        className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-red-500/10 text-red-400 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-10">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">
                            {pathname === '/admin' ? 'Dashboard Summary' : pathname.split('/').pop()?.replace(/-/g, ' ')}
                        </h2>
                        <p className="text-slate-500 text-sm">Managing the Digital Learning Platform</p>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
