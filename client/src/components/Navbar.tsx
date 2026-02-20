'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass border-b py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
                    Mustafa Aabid
                </Link>

                <div className="hidden md:flex space-x-8 items-center font-medium">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#study-hub" className="hover:text-primary transition-colors">Study Hub</Link>
                    <Link href="#csc" className="hover:text-primary transition-colors">CSC Services</Link>
                    <Link href="#contact" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md">
                        Contact Now
                    </Link>
                </div>

                <button className="md:hidden text-primary dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
