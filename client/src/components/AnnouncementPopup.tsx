'use client';

import { useState, useEffect } from 'react';
import { X, Bell } from 'lucide-react';

export default function AnnouncementPopup() {
    const [show, setShow] = useState(false);
    const [announcement, setAnnouncement] = useState<any>(null);

    useEffect(() => {
        // Check if seen in session
        const seen = localStorage.getItem('announcementSeen');
        if (!seen) {
            setAnnouncement({
                title: "Phase 1 - Study Hub Now Live! 🚀",
                msg: "Download Class 10 JKBOSE Math Notes for free. Track your progress in the dashboard."
            });
            setShow(true);
        }
    }, []);

    const close = () => {
        setShow(false);
        localStorage.setItem('announcementSeen', 'true');
    };

    if (!show || !announcement) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden relative">
                <button onClick={close} className="absolute top-4 right-4 text-slate-300 hover:text-slate-600 transition-colors">
                    <X size={24} />
                </button>
                <div className="bg-primary p-8 text-white text-center">
                    <div className="bg-white/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Bell size={32} />
                    </div>
                    <h3 className="text-xl font-bold font-heading">{announcement.title}</h3>
                </div>
                <div className="p-8 text-center space-y-6">
                    <p className="text-slate-600 leading-relaxed font-medium">
                        {announcement.msg}
                    </p>
                    <button
                        onClick={close}
                        className="w-full bg-primary text-white p-4 rounded-xl font-bold tracking-tight hover:bg-slate-800 transition-all shadow-lg"
                    >
                        Acknowledge & Close
                    </button>
                </div>
            </div>
        </div>
    );
}
