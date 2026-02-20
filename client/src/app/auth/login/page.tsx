'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const { login } = useAuth();
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            setError('');
            await login(data.email, data.password);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary px-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary font-heading">Welcome Back</h1>
                    <p className="text-slate-500 mt-2 text-sm">Login to access your study hub</p>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">{error}</div>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Email Address</label>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            className="w-full p-4 bg-soft-gray border border-slate-100 rounded-xl focus:outline-primary"
                            placeholder="student@example.com"
                        />
                        {errors.email?.message && <span className="text-xs text-red-400">{errors.email.message as string}</span>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Password</label>
                        <input
                            {...register('password', { required: 'Password is required' })}
                            type="password"
                            className="w-full p-4 bg-soft-gray border border-slate-100 rounded-xl focus:outline-primary"
                            placeholder="••••••••"
                        />
                        {errors.password?.message && <span className="text-xs text-red-400">{errors.password.message as string}</span>}
                    </div>

                    <button className="w-full bg-primary text-white p-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg text-lg">
                        Sign In
                    </button>
                </form>

                <p className="text-center text-slate-400 text-xs italic">
                    Note: Registration is restricted to authorized students only.
                </p>
            </div>
        </div>
    );
}
