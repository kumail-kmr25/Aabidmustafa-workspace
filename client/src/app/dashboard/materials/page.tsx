'use client';

import { useState } from 'react';
import { Search, Filter, Download, BookOpen } from "lucide-react";

export default function MaterialsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    // Dummy data
    const materials = [
        { id: 1, title: "Quadratic Equations Notes", class: "10", subject: "Math", chapter: "Chapter 4", date: "2026-02-15" },
        { id: 2, title: "Periodic Classification of Elements", class: "10", subject: "Science", date: "2026-02-14" },
        { id: 3, title: "The Rise of Nationalism in Europe", class: "10", subject: "History", date: "2026-02-12" },
        { id: 4, title: "Number Systems", class: "9", subject: "Math", date: "2026-02-10" },
    ];

    const filteredMaterials = materials.filter(m => {
        return (
            (searchTerm === '' || m.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedClass === '' || m.class === selectedClass) &&
            (selectedSubject === '' || m.subject === selectedSubject)
        );
    });

    return (
        <div className="space-y-8">
            {/* Search & Filter Bar */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by Class, Subject or Chapter..."
                        className="w-full pl-12 pr-4 py-4 bg-soft-gray rounded-xl focus:outline-primary border-none text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <select
                        className="p-4 bg-soft-gray rounded-xl text-sm font-medium focus:outline-primary border-none"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                    >
                        <option value="">All Classes</option>
                        <option value="6">Class 6</option>
                        <option value="7">Class 7</option>
                        <option value="8">Class 8</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                    </select>

                    <select
                        className="p-4 bg-soft-gray rounded-xl text-sm font-medium focus:outline-primary border-none"
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                        <option value="">All Subjects</option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="Social Science">Social Science</option>
                    </select>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMaterials.map((item) => (
                    <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover flex justify-between items-start">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="bg-blue-50 text-primary text-[10px] font-black px-2 py-1 rounded uppercase">Class {item.class}</span>
                                <span className="bg-orange-50 text-orange-600 text-[10px] font-black px-2 py-1 rounded uppercase">{item.subject}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 line-clamp-1">{item.title}</h3>
                            <div className="flex items-center text-slate-400 text-xs space-x-4">
                                <span className="flex items-center gap-1"><BookOpen size={14} /> {item.chapter || 'All Chapters'}</span>
                                <span>📅 {item.date}</span>
                            </div>
                        </div>
                        <button className="bg-primary/5 text-primary p-4 rounded-xl hover:bg-primary hover:text-white transition-all">
                            <Download size={24} />
                        </button>
                    </div>
                ))}
            </div>

            {filteredMaterials.length === 0 && (
                <div className="text-center py-20 italic text-slate-400">
                    No materials found matching your criteria.
                </div>
            )}
        </div>
    );
}
