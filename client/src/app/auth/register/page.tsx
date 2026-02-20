'use client';

import { useForm } from 'react-hook-form';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
    const { register: signup } = useAuth();
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
        try {
            setError('');
            await signup(data.name, data.email, data.password, data.studentClass);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary px-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary font-heading">Create Account</h1>
                    <p className="text-slate-500 mt-2 text-sm">Join the JKBOSE digital learning platform</p>
                </div>

                {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center">{error}</div>}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Full Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="w-full p-3 bg-soft-gray border border-slate-100 rounded-lg focus:outline-primary"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Email Address</label>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            type="email"
                            className="w-full p-3 bg-soft-gray border border-slate-100 rounded-lg focus:outline-primary"
                            placeholder="student@example.com"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-700">Your Class</label>
                            <select
                                {...register('studentClass', { required: 'Class is required' })}
                                className="w-full p-3 bg-soft-gray border border-slate-100 rounded-lg focus:outline-primary"
                            >
                                <option value="">Select Class</option>
                                <option value="6">Class 6</option>
                                <option value="7">Class 7</option>
                                <option value="8">Class 8</option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-700">Password</label>
                        <input
                            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
                            type="password"
                            className="w-full p-3 bg-soft-gray border border-slate-100 rounded-lg focus:outline-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full bg-primary text-white p-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg mt-6">
                        Register Now
                    </button>
                </form>

                <p className="text-center text-slate-500 text-sm">
                    Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
}
