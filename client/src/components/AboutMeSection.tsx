'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Award, Quote } from "lucide-react";

export default function AboutMeSection() {
    return (
        <section id="about" className="section-padding bg-white dark:bg-[#0F172A] overflow-hidden relative">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Photo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20 border-8 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/assets/aabid_mustafa.jpg"
                                alt="Mustafa Aabid - Educator"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-700 -rotate-3 hover:rotate-0 transition-all cursor-default">
                            <p className="text-5xl font-black text-primary dark:text-blue-400 leading-none">12+</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Years of Excellence</p>
                        </div>

                        {/* Background elements */}
                        <div className="absolute -z-10 top-20 -left-20 w-64 h-64 bg-secondary/50 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary dark:text-blue-400 font-black text-xs uppercase tracking-[0.2em]">
                                <div className="w-10 h-[2px] bg-primary dark:bg-blue-400" />
                                Founder & Educator
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-100 font-heading tracking-tighter leading-tight">
                                Meet <span className="text-primary dark:text-blue-400">Mustafa Aabid</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                "Education is the most powerful weapon which you can use to change the world."
                                Inspired by this vision, I’ve dedicated my life to shaping the future of students in Jammu & Kashmir.
                            </p>

                            <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] border-l-8 border-primary relative overflow-hidden">
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 -rotate-12" />
                                <p className="text-slate-700 dark:text-slate-200 font-bold text-lg leading-relaxed relative z-10">
                                    As a Government Teacher and JKBOSE Mentor, I focus on bridging the gap between classroom teaching
                                    and digital accessibility for students in Hanjiwera and beyond.
                                </p>
                            </div>

                            <p className="text-slate-500 dark:text-slate-500 leading-relaxed">
                                Beyond traditional teaching, I established the **Mustafa Aabid CSC & Digital Learning Portal** –
                                a community-first initiative providing essential digital services, government scheme enrollment,
                                and structured study material for Classes 6-10. My mission is to ensure no student is left behind
                                in the digital era.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "Role", value: "Govt Teacher", icon: <GraduationCap size={18} /> },
                                { label: "Community", value: "CSC Founder", icon: <Briefcase size={18} /> },
                                { label: "Mission", value: "Digital India", icon: <Globe size={18} /> },
                                { label: "Expertise", value: "JKBOSE & CBSE", icon: <Award size={18} /> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="w-10 h-10 bg-primary/5 dark:bg-blue-400/10 rounded-xl flex items-center justify-center text-primary dark:text-blue-400">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{item.label}</p>
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
