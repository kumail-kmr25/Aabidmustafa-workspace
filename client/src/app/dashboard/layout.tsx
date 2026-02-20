'use client';

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, FileText, User, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user, logout } = useAuth();
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
        { name: "Study Materials", href: "/dashboard/materials", icon: <BookOpen size={20} /> },
        { name: "Test Series", href: "/dashboard/tests", icon: <FileText size={20} /> },
        { name: "Profile", href: "/dashboard/profile", icon: <User size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-soft-gray flex">
            {/* Sidebar */}
            <aside className="w-64 bg-primary text-white flex flex-col fixed h-full">
                <div className="p-8 border-b border-white/10">
                    <h1 className="text-xl font-bold font-heading">Student Portal</h1>
                    <p className="text-xs text-blue-300 mt-1">Class {user?.class} Student</p>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-white/10 text-secondary' : 'hover:bg-white/5'}`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={logout}
                        className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-red-500/10 text-red-300 transition-colors"
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
                        <h2 className="text-2xl font-bold text-primary font-heading uppercase tracking-tight">
                            {pathname === '/dashboard' ? 'Overview' : pathname.split('/').pop()?.replace(/-/g, ' ')}
                        </h2>
                        <p className="text-slate-500 text-sm">Welcome back, {user?.name}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                            <User size={24} />
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
