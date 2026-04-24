"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <motion.div
        animate={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderColor: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
        className="border-b border-transparent"
      >
        <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
          }`}>
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/logo.png" alt="ITversee Logo" width={40} height={40} className="h-10 w-auto" priority />
            <span className="text-2xl font-display font-bold tracking-tighter">
              IT<span className="text-accent">versee</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 relative group"
                whileHover={{ color: '#00CCFF' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent-secondary"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
            <motion.button
              onClick={onOpenContact}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 245, 160, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full neon-glow transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full glass md:hidden border-b border-white/10 overflow-hidden"
          >
            <div className="py-6 px-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-400 hover:text-accent transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 10, color: '#00CCFF' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  onOpenContact();
                  setIsMobileMenuOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full py-4 bg-accent text-primary font-bold rounded-xl neon-glow mt-4 transition-all"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
