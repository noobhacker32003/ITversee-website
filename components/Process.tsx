"use client";

import { motion } from 'motion/react';
import { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Research',
    description: 'We dive deep into your business, market, and user needs to build a solid foundation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crafting intuitive user interfaces and experiences that align with your brand identity.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Bringing designs to life with clean, scalable code and cutting-edge technology.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Rigorous testing and deployment followed by continuous support and optimization.',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-accent">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic approach to turning your vision into a digital reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(-1)}
                className="relative group cursor-pointer"
              >
                {/* Step Number Circle */}
                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.2 : 1,
                    boxShadow: activeStep === index 
                      ? '0 0 30px rgba(0, 245, 160, 0.5)'
                      : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-primary border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold text-accent mb-8 relative z-10 mx-auto lg:mx-0 group-hover:border-accent group-hover:neon-glow transition-all duration-500"
                >
                  {step.number}
                </motion.div>

                {/* Step Title */}
                <motion.h3
                  animate={{ color: activeStep === index ? '#00CCFF' : '#FFFFFF' }}
                  className="text-2xl font-bold mb-4 text-center lg:text-left transition-colors"
                >
                  {step.title}
                </motion.h3>

                {/* Step Description */}
                <motion.p
                  animate={{
                    opacity: activeStep === index ? 1 : 0.7,
                    color: activeStep === index ? '#FFFFFF' : '#9CA3AF'
                  }}
                  className="text-gray-400 leading-relaxed text-center lg:text-left transition-all"
                >
                  {step.description}
                </motion.p>

                {/* Animated Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-secondary rounded-full"
                  animate={{
                    scaleX: activeStep === index ? 1 : 0,
                    opacity: activeStep === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 rounded-3xl"
                  animate={{
                    opacity: activeStep === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Progress Bar (Mobile) */}
          <motion.div
            className="mt-12 h-2 bg-white/5 rounded-full overflow-hidden lg:hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent-secondary"
              animate={{ scaleX: activeStep === -1 ? 0.25 : (activeStep + 1) / steps.length }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
