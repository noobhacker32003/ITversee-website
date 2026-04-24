"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    'Innovative Problem Solving',
    'User-Centric Design Philosophy',
    'Scalable Architecture & Clean Code',
    '24/7 Strategic Support',
  ];

  return (
    <section id="about" className="py-24 overflow-hidden relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              style={{ opacity, y }}
              className="relative z-10 rounded-3xl overflow-hidden border border-white/10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/p1.webp"
                  alt="ITversee Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                animate={{ opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-secondary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />

            {/* Stats Card */}
            <motion.div
              className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/10 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0, 245, 160, 0.3)" }}
            >
              <motion.div
                className="text-4xl font-bold text-accent mb-1"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                5+
              </motion.div>
              <div className="text-sm text-gray-400">Years of Innovation</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Building Digital <br />
              <span className="text-accent">Experiences That Scale</span>
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At ITversee, we are more than just a digital agency. We are your strategic partners in innovation. Our mission is to empower businesses with cutting-edge technology and exceptional design that drives real growth.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <CheckCircle2 className="text-accent w-6 h-6" />
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
