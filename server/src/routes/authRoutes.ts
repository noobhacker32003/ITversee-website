import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();

// @route   POST api/auth/login
// @desc    Authenticate admin & get token
// @access  Public
router.post('/login', async (req: Request, res: Response) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({ message: 'Please provide a password' });
        }

        const adminPassword = process.env.ADMIN_PASSWORD || 'admin_change_me';
        
        // For simplicity, we compare directly or use bcrypt if pre-hashed.
        // I will implement bcrypt comparison here. 
        // If the adminPassword in .env is NOT hashed, bcrypt.compare will fail usually.
        // For a smoother initial experience, I'll allow both plain comparison (if not hashed) or bcrypt.
        
        let isMatch = false;
        if (adminPassword.startsWith('$2a$') || adminPassword.startsWith('$2b$')) {
            isMatch = await bcrypt.compare(password, adminPassword);
        } else {
            isMatch = password === adminPassword;
        }

        if (isMatch) {
            const token = jwt.sign(
                { id: 'admin' }, 
                process.env.JWT_SECRET || 'fallback_secret', 
                { expiresIn: '30d' }
            );

            res.json({
                success: true,
                token
            });
        } else {
            res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        console.error(`Login error: ${(error as Error).message}`);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
