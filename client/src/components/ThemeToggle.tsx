'use client';

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <div className="w-10 h-10 rounded-xl bg-slate-100 animate-pulse"></div>
    );

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-amber-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            aria-label="Toggle Theme"
        >
            {resolvedTheme === "dark" ? (
                <Sun size={20} className="animate-in zoom-in duration-300" />
            ) : (
                <Moon size={20} className="animate-in zoom-in duration-300" />
            )}
        </button>
    );
}
