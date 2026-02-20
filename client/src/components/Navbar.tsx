'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass border-b shadow-sm' : 'bg-white'}`}>
            <div className="container mx-auto px-6 h-[70px] flex justify-between items-center">
                <Link href="/" className="text-xl font-bold flex items-center space-x-2">
                    <span className="text-2xl">📘</span>
                    <span className="font-heading tracking-tighter">Mustafa Aabid</span>
                </Link>

                <div className="hidden lg:flex space-x-8 items-center font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <div className="relative group">
                        <button className="flex items-center hover:text-primary transition-colors">
                            Study Hub <span className="ml-1 text-[10px]">▼</span>
                        </button>
                        {/* Dropdown would go here */}
                    </div>
                    <Link href="#blog" className="hover:text-primary transition-colors">Blog</Link>
                    <Link href="#csc" className="hover:text-primary transition-colors">CSC Services</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <Link href="#study-hub" className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-md font-bold hover:bg-opacity-90 transition-all shadow-md text-sm">
                    Explore Study Material
                </Link>

                <button className="lg:hidden text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
