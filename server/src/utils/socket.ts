import { Server } from 'socket.io';

let io: Server;

export const initSocket = (server: any) => {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        socket.on('join_class', (className) => {
            socket.join(className);
            console.log(`Socket ${socket.id} joined class ${className}`);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error("Socket.io not initialized!");
    }
    return io;
};

export const sendNotification = (target: string, type: string, data: any) => {
    if (io) {
        io.to(target).emit('notification', { type, data, timestamp: new Date() });
        // Also emit globally for certain events
        if (target === 'all') io.emit('notification', { type, data, timestamp: new Date() });
    }
};
