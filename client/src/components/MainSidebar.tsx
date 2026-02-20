'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    User as UserIcon,
    BookOpen,
    FileText,
    MessageSquare,
    Briefcase,
    PhoneCall,
    ChevronRight,
    Menu,
    X,
    LogOut,
    LayoutDashboard,
    ShieldAlert
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function MainSidebar() {
    const pathname = usePathname();
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    // Hidden on Admin routes as they have their own sidebar
    if (pathname.startsWith('/admin')) return null;

    const menuItems = [
        { label: "Home", icon: <Home size={20} />, href: "/" },
        { label: "About Mustafa", icon: <UserIcon size={20} />, href: "/#about" },
        { label: "Study Hub", icon: <BookOpen size={20} />, href: "/dashboard/materials" },
        { label: "Test Series", icon: <FileText size={20} />, href: "/dashboard/tests" },
        { label: "CSC Services", icon: <Briefcase size={20} />, href: "/#csc" },
        { label: "Latest News", icon: <MessageSquare size={20} />, href: "/#blog" },
        { label: "Contact", icon: <PhoneCall size={20} />, href: "/contact" },
    ];

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 left-6 z-50 p-3 bg-white dark:bg-slate-800 text-primary dark:text-blue-400 rounded-2xl shadow-xl lg:hidden ring-1 ring-slate-100 dark:ring-slate-700"
            >
                <Menu size={24} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-[70] w-[280px] bg-white dark:bg-[#0F172A] border-r border-slate-100 dark:border-slate-800 flex flex-col transition-transform duration-500 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                {/* Logo Section */}
                <div className="p-8 border-b border-slate-50 dark:border-slate-800/50">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                            📘
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 font-heading tracking-tight leading-none">Aabid Mustafa</h1>
                            <p className="text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-widest mt-1">Education Portal</p>
                        </div>
                    </Link>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6 space-y-2 overflow-y-auto scrollbar-none">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`
                  flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group
                  ${isActive
                                        ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-blue-400'}
                `}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                                </div>
                                {isActive && <ChevronRight size={16} />}
                            </Link>
                        );
                    })}

                    {/* Admin Specific Gateway */}
                    {user?.role === 'admin' && (
                        <Link
                            href="/admin"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-2xl text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 group mt-8 border border-dashed border-amber-200 dark:border-amber-800/50"
                        >
                            <div className="flex items-center gap-4">
                                <ShieldAlert size={20} className="group-hover:rotate-12 transition-transform" />
                                <span className="font-black text-xs uppercase tracking-widest">Admin Workspace</span>
                            </div>
                            <ChevronRight size={16} />
                        </Link>
                    )}
                </nav>

                {/* User Card / Auth Section */}
                <div className="p-6">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-3xl flex items-center gap-4 group hover:ring-2 ring-primary transition-all"
                        >
                            <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary font-black uppercase shadow-inner">
                                {user.name?.[0] || 'S'}
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logged In</p>
                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{user.name}</p>
                            </div>
                            <LayoutDashboard size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                        </Link>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="w-full bg-primary text-secondary py-5 rounded-3xl font-black text-center shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                        >
                            Sign In <ChevronRight size={20} />
                        </Link>
                    )}
                </div>
            </aside>

            {/* Adjusting main content padding for sidebar on desktop */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          main {
            padding-left: 280px;
          }
        }
      `}</style>
        </>
    );
}
