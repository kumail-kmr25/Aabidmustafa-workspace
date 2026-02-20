'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './AuthContext';

interface Notification {
    type: string;
    data: any;
    timestamp: Date;
    read: boolean;
    id: string;
}

interface NotificationContextType {
    notifications: Notification[];
    unreadCount: number;
    markAsRead: (id: string) => void;
    clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        if (user) {
            const newSocket = io('http://localhost:5000');
            setSocket(newSocket);

            if (user.class) {
                newSocket.emit('join_class', user.class);
            }

            newSocket.on('notification', (notif: Notification) => {
                setNotifications(prev => [{ ...notif, read: false, id: Math.random().toString() }, ...prev]);
            });

            return () => {
                newSocket.disconnect();
            };
        }
    }, [user]);

    const markAsRead = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const clearAll = () => setNotifications([]);

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <NotificationContext.Provider value={{ notifications, unreadCount, markAsRead, clearAll }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotifications = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error("useNotifications must be used within NotificationProvider");
    return context;
};
