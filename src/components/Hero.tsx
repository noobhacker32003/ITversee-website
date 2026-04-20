import { motion, useMotionValue, useTransform, animate, useScroll, useVelocity } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
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
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const controls = animate(count, highlightText.length, {
      type: "tween",
      duration: 2.5,
      ease: "easeInOut",
      delay: 0.5,
    });
    return controls.stop;
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div style={{ y }} className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent text-sm font-medium mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <span>The Future of Digital Innovation</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {displayText}
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="inline-block w-1 h-12 md:h-20 bg-accent ml-2 align-middle"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Web Development, UI/UX, Cyber Security & Marketing. We transform your ideas into high-performance digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            onClick={onOpenContact}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 160, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-accent text-primary font-bold rounded-full flex items-center gap-2 neon-glow transition-all"
          >
            Get Started
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full transition-all"
          >
            View Portfolio
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-10 md:left-20 opacity-20 md:opacity-100"
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-12 h-12 glass rounded-lg" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 md:right-20 opacity-20 md:opacity-100"
        animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <div className="w-16 h-16 glass rounded-full" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
