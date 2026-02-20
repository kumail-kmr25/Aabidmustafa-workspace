'use client';

import { useAuth } from "@/context/AuthContext";
import { Bell, Menu, User, LogOut, Key, Settings } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminTopbar({ toggleSidebar }: { toggleSidebar: () => void }) {
    const { user, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    const getPageTitle = () => {
        if (pathname === '/admin') return "Dashboard Overview";
        return pathname.split('/').pop()?.replace(/-/g, ' ') || "Admin Portal";
    };

    return (
        <header className="h-[60px] bg-white border-b border-slate-200 sticky top-0 z-40 px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-bold text-slate-800 font-heading capitalize">
                    {getPageTitle()}
                </h2>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
                    <Bell size={22} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-3 p-1 pr-3 hover:bg-slate-50 rounded-full transition-colors border border-transparent hover:border-slate-100"
                    >
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-black">
                            MA
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-xs font-bold text-slate-800 leading-none">Mustafa Aabid</p>
                            <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-tighter">Administrator</p>
                        </div>
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                            <button className="flex items-center gap-3 w-full p-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                                <User size={18} /> View Profile
                            </button>
                            <button className="flex items-center gap-3 w-full p-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                                <Key size={18} /> Change Password
                            </button>
                            <button className="flex items-center gap-3 w-full p-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-colors border-b border-slate-50">
                                <Settings size={18} /> Web Settings
                            </button>
                            <button
                                onClick={logout}
                                className="flex items-center gap-3 w-full p-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors mt-1"
                            >
                                <LogOut size={18} /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
