import express, { Request, Response } from 'express';
import Contact from '../models/Contact.ts';
import { protect } from '../middleware/authMiddleware.ts';

const router = express.Router();

// @route   GET api/contact
// @desc    Get all contact submissions
// @access  Private
router.get('/', protect, async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        console.error(`Fetch error: ${(error as Error).message}`);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST api/contact
// @desc    Submit a contact form
// @access  Public
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email, phone, service, message } = req.body;

        // Basic validation
        if (!name || !email || !service || !message) {
            return res.status(400).json({ message: 'Please provide all required fields (name, email, service, message).' });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            service,
            message
        });

        const contact = await newContact.save();
        res.status(201).json({ 
            success: true, 
            message: 'Your message has been sent successfully!',
            data: contact 
        });
    } catch (error) {
        console.error(`Submission error: ${(error as Error).message}`);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

export default router;
