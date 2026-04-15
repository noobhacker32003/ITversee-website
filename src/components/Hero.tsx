import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const baseText = "We Build Scalable ";
  const highlightText = "Digital Solutions";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText + highlightText.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, highlightText.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      delay: 1,
    });
    return controls.stop;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>The Future of Digital Innovation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-tight"
        >
          <motion.span>{displayText}</motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-1 h-12 md:h-20 bg-accent ml-2 align-middle"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Web Development, UI/UX, Cyber Security & Marketing. We transform your ideas into high-performance digital products.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onOpenContact}
            className="group px-8 py-4 bg-accent text-primary font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform neon-glow"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
            View Portfolio
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 left-10 md:left-20 animate-float opacity-20 md:opacity-100">
        <div className="w-12 h-12 glass rounded-lg rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 animate-float delay-1000 opacity-20 md:opacity-100">
        <div className="w-16 h-16 glass rounded-full" />
      </div>
    </section>
  );
}