import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.ts';
import contactRoutes from './routes/contactRoutes.ts';
import authRoutes from './routes/authRoutes.ts';

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

// Serve Static Assets in Production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    const distPath = path.join(__dirname, '../../dist');
    app.use(express.static(distPath));

    // Any route that is not an API route, serve the index.html
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
    });
} else {
    // Health check endpoint for dev
    app.get('/health', (req, res) => {
        res.json({ status: 'ok', message: 'ITversee Server is running in DEV mode' });
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`\n🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
