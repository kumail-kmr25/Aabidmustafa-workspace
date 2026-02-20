'use client';

import { useState } from 'react';
import { Plus, Trash2, Save, Timer, Book, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CreateTestPage() {
    const [questions, setQuestions] = useState([
        { questionText: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 }
    ]);

    const addQuestion = () => {
        setQuestions([...questions, { questionText: '', options: ['', '', '', ''], correctAnswer: '', marks: 1 }]);
    };

    const removeQuestion = (index: number) => {
        setQuestions(questions.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end border-b border-slate-200 pb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 font-heading">Construct Test Series</h1>
                    <p className="text-slate-500 mt-1">Design academic assessments for your students</p>
                </div>
                <div className="text-right">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Status</span>
                    <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">Drafting</span>
                </div>
            </div>

            {/* Main Settings */}
            <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-2 space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Test Title</label>
                    <input className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800" placeholder="e.g. Unit Test 1: Periodic Table" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Class</label>
                    <select className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800">
                        <option>Class 10</option>
                        <option>Class 9</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Time Limit (Min)</label>
                    <div className="relative">
                        <Timer className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="number" className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800" placeholder="30" />
                    </div>
                </div>
            </div>

            {/* Questions Section */}
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                        <FileText className="text-primary" /> Questions Array ({questions.length})
                    </h3>
                    <button onClick={addQuestion} className="flex items-center gap-2 text-primary font-black text-sm uppercase tracking-tight hover:scale-105 transition-transform">
                        <Plus size={18} /> Add Question
                    </button>
                </div>

                {questions.map((q, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 space-y-8 relative group">
                        <button
                            onClick={() => removeQuestion(idx)}
                            className="absolute top-8 right-8 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 size={18} />
                        </button>

                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-300 uppercase tracking-[.2em] px-1">Question {idx + 1}</label>
                            <textarea
                                className="w-full p-6 bg-slate-50 rounded-2xl border-none focus:outline-primary font-bold text-slate-800 text-lg leading-relaxed"
                                placeholder="Type your question here..."
                                rows={2}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {['A', 'B', 'C', 'D'].map((opt, i) => (
                                <div key={i} className="space-y-2 relative">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Option {opt}</label>
                                    <input className="w-full p-4 pr-12 bg-slate-50 rounded-xl border-none focus:outline-primary font-semibold text-slate-700" placeholder={`Option ${opt}`} />
                                    <input
                                        type="radio"
                                        name={`correct-${idx}`}
                                        className="absolute right-4 bottom-4 w-5 h-5 accent-green-500 cursor-pointer"
                                        title="Mark as correct"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="fixed bottom-10 left-[calc(50%+125px)] -translate-x-1/2 flex gap-4 animate-in slide-in-from-bottom-10 duration-1000">
                <button className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-black shadow-2xl border border-slate-100 hover:bg-slate-50 transition-all flex items-center gap-3">
                    <AlertCircle size={20} /> Preview Test
                </button>
                <button className="bg-primary text-secondary px-10 py-4 rounded-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                    <Save size={20} /> Save and Publish
                </button>
            </div>
        </div>
    );
}
