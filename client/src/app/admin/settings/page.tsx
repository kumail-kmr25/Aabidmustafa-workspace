'use client';

import { useState } from 'react';
import { User, Shield, Globe, Bell, Save, CheckCircle2, AlertCircle, Camera, Lock } from "lucide-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="max-w-4xl space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-slate-900 font-heading tracking-tight capitalize">Account & System Settings</h1>
                <p className="text-slate-500 mt-1">Configure your profile and global website behavior</p>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {[
                    { id: 'profile', label: 'Admin Profile', icon: <User size={18} /> },
                    { id: 'security', label: 'Security & Password', icon: <Shield size={18} /> },
                    { id: 'website', label: 'Web Configuration', icon: <Globe size={18} /> },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-sm whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'bg-white text-slate-400 hover:text-slate-600'}`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                {activeTab === 'profile' && (
                    <div className="space-y-10">
                        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-slate-50 pb-10">
                            <div className="relative group cursor-pointer">
                                <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-200 transition-colors border-4 border-white shadow-xl">
                                    <User size={64} />
                                </div>
                                <div className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full border-2 border-white shadow-lg">
                                    <Camera size={16} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">Mustafa Aabid</h3>
                                <p className="text-slate-400 text-sm font-medium">Head Administrator • Hanjiwera, Pattan</p>
                                <button className="text-primary text-xs font-black uppercase mt-4 hover:underline">Change Profile Picture</button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                                <input className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800" defaultValue="Mustafa Aabid" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                                <input className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800" defaultValue="mustafaaabid@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                                <input className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800" defaultValue="+91 91234 56789" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Timezone</label>
                                <select className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800">
                                    <option>(GMT+05:30) India Standard Time</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'security' && (
                    <div className="space-y-8">
                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl flex gap-4 text-amber-700">
                            <Shield className="shrink-0" />
                            <div className="text-sm">
                                <p className="font-bold">Protect your account</p>
                                <p className="opacity-80">We recommend changing your password every 3 months for maximum safety.</p>
                            </div>
                        </div>

                        <div className="space-y-6 max-w-md">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Current Password</label>
                                <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">New Password</label>
                                <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Confirm New Password</label>
                                <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'website' && (
                    <div className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="bg-slate-50 p-8 rounded-[32px] flex items-center justify-between group">
                                <div>
                                    <h4 className="font-bold text-slate-800">Student Registration</h4>
                                    <p className="text-xs text-slate-400 mt-1">Allow new students to join</p>
                                </div>
                                <div className="w-14 h-8 bg-primary rounded-full relative p-1 cursor-pointer">
                                    <div className="w-6 h-6 bg-white rounded-full absolute right-1" />
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-[32px] flex items-center justify-between group">
                                <div>
                                    <h4 className="font-bold text-slate-800">Maintenance Mode</h4>
                                    <p className="text-xs text-slate-400 mt-1">Lock website for updates</p>
                                </div>
                                <div className="w-14 h-8 bg-slate-200 rounded-full relative p-1 cursor-pointer">
                                    <div className="w-6 h-6 bg-white rounded-full absolute left-1" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                <Bell size={18} className="text-primary" /> Global Alert System
                            </h4>
                            <p className="text-sm text-slate-500">This message will appear on the top of every page for all users.</p>
                            <input className="w-full p-6 bg-slate-50 rounded-3xl border-none focus:outline-primary font-bold text-primary" defaultValue="Welcome to the New JKBOSE Learning Portal! 🎓" />
                        </div>
                    </div>
                )}

                <div className="mt-12 pt-10 border-t border-slate-50 flex justify-end">
                    <button className="bg-primary text-secondary px-12 py-5 rounded-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                        <Save size={20} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
