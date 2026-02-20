'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Timer, Send, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export default function TestAttemptPage({ params }: { params: { id: string } }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
    const [submitted, setSubmitted] = useState(false);

    // Dummy questions
    const questions = [
        { text: "What is the powerhouse of the cell?", options: ["Ribosome", "Mitochondria", "Nucleus", "Golgi Body"], correct: "Mitochondria" },
        { text: "Which acid is present in Tamarind?", options: ["Citric Acid", "Acetic Acid", "Tartaric Acid", "Oxalic Acid"], correct: "Tartaric Acid" },
        { text: "Who is known as the Father of Indian Constitution?", options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], correct: "Dr. B.R. Ambedkar" },
    ];

    useEffect(() => {
        if (timeLeft > 0 && !submitted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setSubmitted(true);
        }
    }, [timeLeft, submitted]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleSelect = (option: string) => {
        setAnswers({ ...answers, [currentQuestion]: option });
    };

    const submitTest = () => {
        setSubmitted(true);
    };

    if (submitted) {
        const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0);
        return (
            <div className="max-w-xl mx-auto py-20 text-center space-y-10">
                <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-500 animate-bounce">
                    <CheckCircle size={48} />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-black text-slate-900 font-heading">Test Submitted!</h2>
                    <p className="text-slate-500 font-medium">Your result has been recorded successfully.</p>
                </div>
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Your Score</p>
                    <h3 className="text-6xl font-black text-primary">{score} / {questions.length}</h3>
                    <div className="mt-8 flex justify-center gap-4">
                        <div className="bg-green-50 text-green-600 px-4 py-2 rounded-lg font-black text-xs uppercase">Accuracy: {Math.round((score / questions.length) * 100)}%</div>
                    </div>
                </div>
                <button onClick={() => window.location.href = '/dashboard'} className="text-primary font-bold hover:underline">Back to Dashboard</button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-10 pb-20">
            <header className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center sticky top-0 z-50">
                <h3 className="font-bold text-slate-800">Mathematics Unit Test 1</h3>
                <div className="flex items-center gap-3 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-black text-lg">
                    <Timer size={24} />
                    {formatTime(timeLeft)}
                </div>
            </header>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-10 animate-fade-in">
                <div className="flex justify-between items-center">
                    <span className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-black uppercase">Question {currentQuestion + 1} of {questions.length}</span>
                    <div className="flex gap-2">
                        {questions.map((_, i) => (
                            <div key={i} className={`h-1 w-8 rounded-full ${i === currentQuestion ? 'bg-primary' : answers[i] ? 'bg-green-200' : 'bg-slate-100'}`} />
                        ))}
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 leading-tight">
                    {questions[currentQuestion].text}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            className={`p-6 text-left rounded-2xl border-2 transition-all font-bold text-lg ${answers[currentQuestion] === opt ? 'border-primary bg-primary/5 text-primary shadow-inner' : 'border-slate-100 hover:border-slate-300 text-slate-600'}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <div className="flex justify-between pt-10 border-t border-slate-50">
                    <button
                        disabled={currentQuestion === 0}
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                        className="flex items-center gap-2 font-bold text-slate-400 hover:text-primary transition-colors disabled:opacity-30"
                    >
                        <ChevronLeft /> Previous
                    </button>

                    {currentQuestion === questions.length - 1 ? (
                        <button
                            onClick={submitTest}
                            className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl"
                        >
                            <Send size={20} /> Finish Test
                        </button>
                    ) : (
                        <button
                            onClick={() => setCurrentQuestion(currentQuestion + 1)}
                            className="flex items-center gap-2 font-bold text-primary hover:text-slate-800 transition-colors"
                        >
                            Next <ChevronRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
