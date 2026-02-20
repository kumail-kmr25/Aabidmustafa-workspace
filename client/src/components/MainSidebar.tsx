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
    ChevronLeft,
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
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Initialize from localStorage for persistence
    useEffect(() => {
        const saved = localStorage.getItem('sidebar-collapsed');
        if (saved) setIsCollapsed(JSON.parse(saved));
    }, []);

    const toggleCollapse = () => {
        const nextState = !isCollapsed;
        setIsCollapsed(nextState);
        localStorage.setItem('sidebar-collapsed', JSON.stringify(nextState));
    };

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
        fixed inset-y-0 left-0 z-[70] bg-white dark:bg-[#0F172A] border-r border-slate-100 dark:border-slate-800 flex flex-col transition-all duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'lg:w-[100px]' : 'lg:w-[280px]'}
        w-[280px]
      `}>
                {/* Collapse Toggle Button (Desktop Only) */}
                <button
                    onClick={toggleCollapse}
                    className="hidden lg:flex absolute -right-4 top-24 z-[80] w-8 h-8 bg-primary text-white rounded-full items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all outline-none border-4 border-white dark:border-slate-800"
                >
                    {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                </button>

                {/* Logo Section */}
                <div className={`p-8 border-b border-slate-50 dark:border-slate-800/50 flex items-center gap-3 overflow-hidden ${isCollapsed ? 'justify-center p-6' : ''}`}>
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className={`shrink-0 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-12 transition-all ${isCollapsed ? 'w-10 h-10 text-xl' : 'w-12 h-12 text-2xl'}`}>
                            📘
                        </div>
                        <div className={`transition-all duration-500 origin-left ${isCollapsed ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100'}`}>
                            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 font-heading tracking-tight leading-none">Aabid Mustafa</h1>
                            <p className="text-[10px] font-black text-primary dark:text-blue-400 uppercase tracking-widest mt-1">Education Portal</p>
                        </div>
                    </Link>
                </div>

                {/* Menu Items */}
                <nav className={`flex-1 space-y-2 overflow-y-auto scrollbar-none py-6 ${isCollapsed ? 'px-4' : 'px-6'}`}>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                title={isCollapsed ? item.label : ""}
                                onClick={() => setIsOpen(false)}
                                className={`
                  flex items-center rounded-2xl transition-all duration-300 group
                  ${isActive
                                        ? 'bg-primary text-white shadow-xl shadow-primary/20'
                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-blue-400'}
                  ${isCollapsed ? 'justify-center p-4' : 'justify-between p-4'}
                `}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors'}`}>
                                        {item.icon}
                                    </span>
                                    <span className={`font-bold text-sm tracking-tight transition-all duration-300 origin-left ${isCollapsed ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {!isCollapsed && isActive && <ChevronRight size={16} />}
                            </Link>
                        );
                    })}

                    {/* Admin Specific Gateway */}
                    {user?.role === 'admin' && (
                        <Link
                            href="/admin"
                            title={isCollapsed ? "Admin Workspace" : ""}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center rounded-2xl text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-300 group border border-dashed border-amber-200 dark:border-amber-800/50 ${isCollapsed ? 'justify-center p-4 mt-8' : 'justify-between p-4 mt-8'}`}
                        >
                            <div className="flex items-center gap-4">
                                <ShieldAlert size={20} className="group-hover:rotate-12 transition-transform" />
                                <span className={`font-black text-xs uppercase tracking-widest transition-all duration-300 origin-left ${isCollapsed ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100'}`}>
                                    Admin Workspace
                                </span>
                            </div>
                            {!isCollapsed && <ChevronRight size={16} />}
                        </Link>
                    )}
                </nav>

                {/* User Card / Auth Section */}
                <div className={`p-6 transition-all duration-500 ${isCollapsed ? 'p-4' : ''}`}>
                    {user ? (
                        <Link
                            href="/dashboard"
                            title={isCollapsed ? user.name : ""}
                            className={`bg-slate-50 dark:bg-slate-800/50 rounded-3xl flex items-center group hover:ring-2 ring-primary transition-all ${isCollapsed ? 'justify-center p-3' : 'gap-4 p-4'}`}
                        >
                            <div className="shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary font-black uppercase shadow-inner">
                                {user.name?.[0] || 'S'}
                            </div>
                            <div className={`flex-1 transition-all duration-300 origin-left ${isCollapsed ? 'opacity-0 scale-0 w-0' : 'opacity-100 scale-100'}`}>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logged In</p>
                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{user.name}</p>
                            </div>
                            {!isCollapsed && <LayoutDashboard size={18} className="text-slate-300 group-hover:text-primary transition-colors" />}
                        </Link>
                    ) : (
                        <Link
                            href="/auth/login"
                            title={isCollapsed ? "Sign In" : ""}
                            className={`w-full bg-primary text-secondary rounded-3xl font-black text-center shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center ${isCollapsed ? 'p-4' : 'gap-3 py-5'}`}
                        >
                            {isCollapsed ? <LogOut size={20} className="rotate-180" /> : <>Sign In <ChevronRight size={20} /></>}
                        </Link>
                    )}
                </div>
            </aside>

            {/* Adjusting main content padding for sidebar on desktop */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          main {
            padding-left: ${isCollapsed ? '100px' : '280px'};
            transition: padding-left 0.5s ease-in-out;
          }
        }
      `}</style>
        </>
    );
}
