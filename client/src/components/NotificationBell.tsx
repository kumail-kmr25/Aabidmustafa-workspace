'use client';

import { Bell, X, CheckSquare, Layers } from "lucide-react";
import { useNotifications } from "@/context/NotificationContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationBell() {
    const { notifications, unreadCount, markAsRead, clearAll } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
            >
                <Bell size={22} />
                {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-800 text-[10px] font-black text-white flex items-center justify-center animate-bounce">
                        {unreadCount}
                    </span>
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-4 w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="p-5 border-b border-slate-50 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
                            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Alerts</h3>
                            <button onClick={clearAll} className="text-[10px] font-bold text-slate-400 hover:text-primary uppercase">Clear All</button>
                        </div>

                        <div className="max-h-96 overflow-y-auto scrollbar-none">
                            {notifications.length === 0 ? (
                                <div className="p-10 text-center space-y-3">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-300 mx-auto">
                                        <Bell size={20} />
                                    </div>
                                    <p className="text-xs font-bold text-slate-400 italic">No new notifications</p>
                                </div>
                            ) : (
                                notifications.map((n) => (
                                    <div
                                        key={n.id}
                                        className={`p-5 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors border-b border-slate-50 dark:border-slate-700 cursor-pointer ${!n.read ? 'bg-blue-50/30' : ''}`}
                                        onClick={() => markAsRead(n.id)}
                                    >
                                        <div className="mt-1">
                                            {n.type === 'material' ? <Layers className="text-blue-500" size={16} /> : <CheckSquare className="text-green-500" size={16} />}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{n.data.title}</h4>
                                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{n.data.body}</p>
                                            <p className="text-[9px] font-black text-slate-300 uppercase mt-2 tracking-tighter">Just now</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <button className="w-full p-4 text-xs font-black text-primary bg-slate-50 dark:bg-slate-900/50 hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
                            See All Archives
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
