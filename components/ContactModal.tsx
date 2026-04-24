"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Mail, MessageSquare, Phone, Briefcase, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "Cyber Security",
  "Digital Marketing",
  "Mobile App Development",
  "Cloud Solutions"
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: SERVICES[0],
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Set a timeout for the fetch request
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(id);

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', service: SERVICES[0], message: '' });
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      } else {
        const data = await response.json();
        setError(data.message || 'The server returned an error. Please try again.');
      }
    } catch (err) {
      clearTimeout(id);
      if ((err as Error).name === 'AbortError') {
        setError('Request timed out. The server might be waking up or slow.');
      } else {
        setError('Could not connect to the server. Please try again later.');
      }
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl glass rounded-[2.5rem] overflow-hidden border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-5 min-h-[500px]">
              {/* Left Side - Info */}
              <motion.div
                className="hidden md:flex md:col-span-2 bg-accent/5 p-10 flex-col justify-between border-r border-white/5"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <h3 className="text-3xl font-display font-bold mb-4">Let's <span className="text-accent">Connect</span></h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </motion.div>

                <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <motion.div
                    className="flex items-center gap-4 text-sm text-gray-400"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <span>itversee1@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4 text-sm text-gray-400"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.div>
                    <span>+880 1624-187679</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 neon-glow"
                      animate={{ scale: [0.8, 1.1, 1], rotate: [0, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div
                        animate={{ scale: [0, 1], rotate: [0, 360] }}
                        transition={{ duration: 0.8 }}
                      >
                        <CheckCircle2 className="text-accent w-10 h-10" />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      className="text-gray-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Thank you for reaching out. We'll be in touch soon.
                    </motion.p>
                  </motion.div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.label
                        className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 block"
                        animate={{ color: focusedField === 'name' ? '#00CCFF' : '#9CA3AF' }}
                      >
                        Full Name
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          animate={{ color: focusedField === 'name' ? '#00CCFF' : '#9CA3AF' }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                        >
                          <User className="w-4 h-4" />
                        </motion.div>
                        <motion.input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Please enter your name"
                          whileFocus={{ scale: 1.02 }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-sm"
                        />
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <motion.label
                        className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 block"
                        animate={{ color: focusedField === 'email' ? '#00CCFF' : '#9CA3AF' }}
                      >
                        Email Address
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          animate={{ color: focusedField === 'email' ? '#00CCFF' : '#9CA3AF' }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                        >
                          <Mail className="w-4 h-4" />
                        </motion.div>
                        <motion.input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Please enter your email"
                          whileFocus={{ scale: 1.02 }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-sm"
                        />
                      </div>
                    </motion.div>

                    {/* Service Field */}
                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.label
                        className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 block"
                        animate={{ color: focusedField === 'service' ? '#00CCFF' : '#9CA3AF' }}
                      >
                        Service Needed
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          animate={{ color: focusedField === 'service' ? '#00CCFF' : '#9CA3AF' }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                        >
                          <Briefcase className="w-4 h-4" />
                        </motion.div>
                        <motion.select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('service')}
                          onBlur={() => setFocusedField(null)}
                          whileFocus={{ scale: 1.02 }}
                          className="w-full bg-primary border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-sm appearance-none cursor-pointer"
                        >
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </motion.select>
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                      className="space-y-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <motion.label
                        className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 block"
                        animate={{ color: focusedField === 'message' ? '#00CCFF' : '#9CA3AF' }}
                      >
                        Message
                      </motion.label>
                      <div className="relative">
                        <motion.div
                          animate={{ color: focusedField === 'message' ? '#00CCFF' : '#9CA3AF' }}
                          className="absolute left-4 top-3 w-4 h-4"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </motion.div>
                        <motion.textarea
                          rows={3}
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Please describe your project"
                          whileFocus={{ scale: 1.02 }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-accent focus:bg-white/10 transition-all resize-none text-sm"
                        />
                      </div>
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-400 text-[10px] ml-1"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-accent text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg neon-glow mt-6 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
