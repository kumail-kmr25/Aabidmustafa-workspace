import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';

import authRoutes from './routes/auth';
import materialRoutes from './routes/materials';
import testRoutes from './routes/tests';
import blogRoutes from './routes/blogs';
import serviceRoutes from './routes/services';

dotenv.config();

import http from 'http';
import { initSocket } from './utils/socket';

const app: Express = express();
const server = http.createServer(app);
initSocket(server);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/services', serviceRoutes);

// Database connection
connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
