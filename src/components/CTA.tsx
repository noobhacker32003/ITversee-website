import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity, scale }}
          className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border-white/10"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Accent Orbs */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-accent-secondary/20 rounded-full blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-7xl font-display font-bold mb-8 relative z-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Build Something <br />
            <motion.span
              className="text-accent inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Amazing Together
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to take your digital presence to the next level? Our team of experts is here to help you innovate and scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Primary CTA */}
            <motion.button
              onClick={onOpenContact}
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 40px rgba(0, 245, 160, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-accent text-primary font-bold rounded-full flex items-center gap-2 neon-glow transition-all"
            >
              Contact Us
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor: 'rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 glass border-white/10 text-white font-bold rounded-full flex items-center gap-2 transition-all"
            >
              Schedule a Call
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group-hover:translate-x-1"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
