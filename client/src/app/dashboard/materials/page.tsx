'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Download, BookOpen, Clock, FileText } from "lucide-react";
import axios from 'axios';

export default function MaterialsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [materials, setMaterials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/materials', {
                    params: { class: selectedClass, subject: selectedSubject }
                });
                setMaterials(data);
            } catch (error) {
                console.error("Error fetching materials:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMaterials();
    }, [selectedClass, selectedSubject]);

    const handleDownload = async (id: string, title: string) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/materials/download/${id}`, {
                responseType: 'blob',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${title}_MustafaAabid.pdf`);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            alert("Download failed. Please ensure you are logged in.");
        }
    };

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
                {materials.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                    <div key={item._id} className="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700 card-hover flex justify-between items-start transition-colors duration-300">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <span className="bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider transition-colors">Class {item.class}</span>
                                <span className="bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider transition-colors">{item.subject}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 line-clamp-1 font-heading">{item.title}</h3>
                            <div className="flex items-center text-slate-400 dark:text-slate-500 text-xs space-x-4 font-medium">
                                <span className="flex items-center gap-1.5"><FileText size={14} /> {item.chapter || 'All Chapters'}</span>
                                <span className="flex items-center gap-1.5"><Clock size={14} /> {new Date(item.uploadedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDownload(item._id, item.title)}
                            className="bg-primary/5 dark:bg-primary/20 text-primary dark:text-blue-400 p-4 rounded-2xl hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-all active:scale-90"
                        >
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
