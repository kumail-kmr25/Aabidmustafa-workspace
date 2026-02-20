'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ShieldAlert, Mail, Lock, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/admin-login', { email, password });

            // Context login to store user and token
            login(data, data.token);

            router.push('/admin');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Unauthorized access attempt');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] -ml-64 -mb-64" />

            <div className="w-full max-w-lg relative z-10">
                <div className="bg-white dark:bg-slate-800 p-10 md:p-12 rounded-[48px] shadow-2xl shadow-primary/10 border border-slate-100 dark:border-slate-700">
                    <div className="flex flex-col items-center text-center mb-10">
                        <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 mb-6 ring-8 ring-amber-500/5">
                            <ShieldAlert size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white font-heading tracking-tight">Admin Gateway</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Authorized Personnel Only</p>
                    </div>

                    {error && (
                        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 rounded-2xl flex items-center gap-3 text-sm font-bold animate-shake">
                            <AlertCircle size={20} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Admin Email</label>
                            <div className="relative">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    required
                                    placeholder="admin@mustafaaabid.com"
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-3xl focus:ring-2 focus:ring-primary dark:text-white font-semibold outline-none transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Access Secret</label>
                            <div className="relative">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="password"
                                    required
                                    placeholder="••••••••••••"
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 dark:bg-slate-900 border-none rounded-3xl focus:ring-2 focus:ring-primary dark:text-white font-semibold outline-none transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 dark:bg-primary text-white py-6 rounded-[32px] font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={24} />
                            ) : (
                                <>Verify & Enter <ChevronRight size={24} /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest leading-loose">
                            Unidentified access attempts are logged.<br />
                            Session security is active.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
