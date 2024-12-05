import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
import { authenticate } from './middlewares/authMiddleware';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api', authenticate); 
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error', error: err });
});

export default app;
