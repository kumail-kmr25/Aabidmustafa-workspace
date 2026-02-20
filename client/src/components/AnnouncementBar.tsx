'use client';

import { motion } from "framer-motion";
import { Phone, MessageCircle, AlertCircle, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
    const announcements = [
        "New 10th Class Math Study Materials Uploaded",
        "CSC Services: PAN Card & Aadhaar Enrollment Open",
        "Latest Exam Strategy Blog Post is Live",
        "Free Career Counseling Sessions on Sundays",
        "Hanjiwera's Most Trusted Digital Education Portal"
    ];

    return (
        <div className="relative overflow-hidden bg-slate-900 h-[50px] flex items-center border-b border-white/5 z-50">
            {/* Background Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/10 to-transparent pointer-events-none" />

            {/* Left Badge: Fixed */}
            <div className="relative z-20 h-full bg-primary px-6 flex items-center gap-2 shadow-[20px_0_40px_rgba(10,46,92,0.5)]">
                <AlertCircle size={16} className="text-secondary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Latest Updates</span>
            </div>

            {/* Marquee Container */}
            <div className="flex-1 relative h-full flex items-center overflow-hidden">
                <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap items-center gap-16 py-2"
                >
                    {/* Double the list for seamless loop */}
                    {[...announcements, ...announcements].map((text, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <span className="text-blue-400">
                                <Sparkles size={14} className="group-hover:scale-125 transition-transform" />
                            </span>
                            <span className="text-sm font-bold text-slate-100 hover:text-secondary transition-colors cursor-default tracking-tight">
                                {text}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Contact Info: Fixed */}
            <div className="hidden lg:flex items-center gap-6 px-8 relative z-20 h-full bg-slate-900 border-l border-white/10">
                <a href="https://wa.me/917006851315" target="_blank" className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-[#25D366] transition-colors">
                    <MessageCircle size={14} /> WhatsApp
                </a>
                <a href="tel:+917006851315" className="flex items-center gap-2 text-xs font-black text-slate-400 hover:text-white transition-colors">
                    <Phone size={14} /> Support
                </a>
            </div>
        </div>
    );
}
