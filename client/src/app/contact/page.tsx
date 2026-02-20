'use client';

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Instagram,
    MessageCircle, // Using MessageCircle for WhatsApp
    CheckCircle2
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // In a real app, you'd send data to an API here
    };

    const socials = [
        {
            name: "Facebook",
            icon: <Facebook size={24} />,
            link: "https://facebook.com/mustafaaabid",
            color: "bg-[#1877F2]",
            label: "/mustafaaabid"
        },
        {
            name: "Instagram",
            icon: <Instagram size={24} />,
            link: "https://instagram.com/mustafa_aabid",
            color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
            label: "@mustafa_aabid"
        },
        {
            name: "WhatsApp",
            icon: <MessageCircle size={24} />,
            link: "https://wa.me/919419000000", // Placeholder
            color: "bg-[#25D366]",
            label: "+91 94190 00000"
        }
    ];

    return (
        <main className="min-h-screen pt-20 pb-16 bg-white dark:bg-[#0F172A]">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="max-w-3xl mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-primary dark:text-blue-400 font-black text-xs uppercase tracking-[0.2em]"
                    >
                        <div className="w-10 h-[2px] bg-primary dark:bg-blue-400" />
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white font-heading tracking-tighter leading-tight"
                    >
                        Let's Start a <span className="text-primary dark:text-blue-400">Conversation</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-400 font-medium"
                    >
                        Whether you have a question about JKBOSE study material, CSC services, or just want to say hello, my door is always open.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Contact Info & Socials */}
                    <div className="lg:col-span-5 space-y-12">
                        <section className="space-y-8">
                            {[
                                { icon: <Phone className="text-primary dark:text-blue-400" />, title: "Call Me", detail: "+91 70068 51315", sub: "Available Mon-Sat, 10AM - 5PM" },
                                { icon: <Mail className="text-primary dark:text-blue-400" />, title: "Email Address", detail: "contact@mustafaaabid.com", sub: "Expect a reply within 24 hours" },
                                { icon: <MapPin className="text-primary dark:text-blue-400" />, title: "Office Location", detail: "Main Road Hanjiwera, Pattan", sub: "Jammu & Kashmir, 193121" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110 duration-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.title}</p>
                                        <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{item.detail}</p>
                                        <p className="text-sm text-slate-500">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </section>

                        {/* Social Media Grid */}
                        <section className="space-y-6">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white">Connect on Social Media</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {socials.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + (i * 0.1) }}
                                        className={`${social.color} p-6 rounded-[32px] text-white flex flex-col items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-200 dark:shadow-none`}
                                    >
                                        {social.icon}
                                        <span className="text-[10px] font-black uppercase tracking-tight">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden"
                    >
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full p-5 bg-white dark:bg-slate-900 rounded-3xl border-none focus:ring-4 ring-primary/10 transition-all font-bold text-slate-700 dark:text-slate-200"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full p-5 bg-white dark:bg-slate-900 rounded-3xl border-none focus:ring-4 ring-primary/10 transition-all font-bold text-slate-700 dark:text-slate-200"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                    <select className="w-full p-5 bg-white dark:bg-slate-900 rounded-3xl border-none focus:ring-4 ring-primary/10 transition-all font-bold text-slate-700 dark:text-slate-200 appearance-none">
                                        <option>JKBOSE Study Material Query</option>
                                        <option>CSC Services Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="How can I help you today?"
                                        className="w-full p-5 bg-white dark:bg-slate-900 rounded-3xl border-none focus:ring-4 ring-primary/10 transition-all font-bold text-slate-700 dark:text-slate-200 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-6 rounded-3xl font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                            >
                                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white font-heading">Thank You!</h2>
                                <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                                    Your message has been received. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-primary dark:text-blue-400 font-black hover:underline underline-offset-8"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        )}

                        {/* Decorative Shape */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
