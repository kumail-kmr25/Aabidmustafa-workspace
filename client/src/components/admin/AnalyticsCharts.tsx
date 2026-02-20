'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const data = [
    { name: 'Mon', downloads: 400 },
    { name: 'Tue', downloads: 300 },
    { name: 'Wed', downloads: 600 },
    { name: 'Thu', downloads: 800 },
    { name: 'Fri', downloads: 500 },
    { name: 'Sat', downloads: 900 },
    { name: 'Sun', downloads: 700 },
];

const subjectData = [
    { name: 'Math', value: 450 },
    { name: 'Science', value: 380 },
    { name: 'SST', value: 300 },
    { name: 'English', value: 280 },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'];

export function DownloadTrendChart() {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1E293B', border: 'none', borderRadius: '12px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Line type="monotone" dataKey="downloads" stroke="#3B82F6" strokeWidth={4} dot={{ r: 6, fill: '#3B82F6' }} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export function SubjectPopularityChart() {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectData}>
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                        {subjectData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
