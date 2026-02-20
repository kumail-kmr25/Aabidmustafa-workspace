'use client';

import { useState } from 'react';
import { FileText, Clock, Play, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TestsPage() {
    // Dummy data
    const tests = [
        { id: "1", title: "Mathematics Unit Test 1", subject: "Math", questions: 20, time: "30", class: "10" },
        { id: "2", title: "Physics: Light & Reflection", subject: "Science", questions: 15, time: "20", class: "10" },
        { id: "3", title: "English Grammar Quiz", subject: "English", questions: 25, time: "15", class: "10" },
    ];

    return (
        <div className="space-y-8">
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-2xl font-bold text-primary font-heading">Online Test Series</h3>
                    <p className="text-slate-500 mt-2">Attempt mock tests to track your exam preparation progress.</p>
                </div>
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm text-primary font-black text-sm">
                    AVAILABLE TESTS: {tests.length}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tests.map((test) => (
                    <div key={test.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 bg-secondary/10 text-secondary font-black text-[10px] rounded-bl-2xl">
                            CLASS {test.class}
                        </div>

                        <div className="bg-soft-gray w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <FileText size={28} />
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-slate-800 line-clamp-1">{test.title}</h4>
                            <p className="text-slate-400 text-sm font-medium mt-1">{test.subject}</p>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                <CheckCircle size={14} className="text-green-500" /> {test.questions} Qs
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                                <Clock size={14} className="text-blue-500" /> {test.time} Mins
                            </div>
                        </div>

                        <Link
                            href={`/dashboard/tests/${test.id}`}
                            className="flex items-center justify-center gap-3 w-full bg-slate-900 text-white p-4 rounded-xl font-bold hover:bg-primary transition-all shadow-lg"
                        >
                            <Play size={18} fill="currentColor" />
                            Start Test
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
