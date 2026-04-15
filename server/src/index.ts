import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import contactRoutes from './routes/contactRoutes';
import authRoutes from './routes/authRoutes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'ITversee Server is running' });
});

const PORT = process.env.PORT || 5000;

// Only start the server locally, Vercel will export the app
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`\n🚀 Server running in local dev mode on port ${PORT}`);
    });
}

// Export for Vercel serverless
export default app;
