'use client';

import Link from 'next/link';
import { ShieldAlert, ArrowLeft, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterRestrictedPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] dark:bg-[#0F172A] px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-[40px] shadow-2xl w-full max-w-lg text-center space-y-8 border border-slate-100 dark:border-slate-700"
            >
                <div className="w-20 h-20 bg-amber-50 dark:bg-amber-900/30 text-amber-500 rounded-3xl flex items-center justify-center mx-auto rotate-12">
                    <ShieldAlert size={40} />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white font-heading tracking-tight">Registration Restricted</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Public registration is currently disabled to maintain platform integrity.
                        Accounts are strictly managed by the platform administrator.
                    </p>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-l-4 border-amber-500 text-left">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">How to join?</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        Please contact <span className="text-primary dark:text-blue-400">Mustafa Aabid</span> directly or your school coordinator to get your login credentials.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <Link
                        href="/contact"
                        className="w-full bg-primary text-white py-5 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                    >
                        <MessageSquare size={20} /> Contact for Access
                    </Link>
                    <Link
                        href="/auth/login"
                        className="w-full text-slate-400 hover:text-primary dark:hover:text-blue-400 font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Sign In
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
