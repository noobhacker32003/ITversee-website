"use client";

import { motion } from 'motion/react';
import { Code, Layout, Shield, Cpu, Share2, Smartphone } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites built with React, Next.js, and modern tech stacks.',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Cyber Security',
    description: 'Protecting your digital assets with advanced security protocols.',
    icon: Shield,
    color: 'from-red-500 to-orange-400',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful user experiences that convert and engage.',
    icon: Layout,
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Automation',
    description: 'Streamlining your workflows with custom AI and automation solutions.',
    icon: Cpu,
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Social Marketing',
    description: 'Strategic social media management to grow your brand presence.',
    icon: Share2,
    color: 'from-yellow-500 to-amber-400',
  },
  {
    title: 'CMS Solutions',
    description: 'Custom Shopify, WordPress, and headless CMS implementations.',
    icon: Smartphone,
    color: 'from-indigo-500 to-blue-400',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Our <span className="text-accent">Services</span>
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of digital services designed to help your business scale and thrive in the modern world.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              className="group relative p-8 glass rounded-3xl glass-hover overflow-hidden transition-all duration-300"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} blur-3xl`}
                animate={{ opacity: hoveredIndex === index ? 0.15 : 0.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Top Accent Line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
                animate={{ opacity: hoveredIndex === index ? 0.8 : 0.2 }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon Container */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.15 : 1,
                  rotate: hoveredIndex === index ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 relative z-10"
              >
                <motion.div
                  animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-accent" />
                </motion.div>
              </motion.div>

              <motion.h3
                animate={{ color: hoveredIndex === index ? '#00F5A0' : '#FFFFFF' }}
                className="text-2xl font-bold mb-4 relative z-10 transition-colors"
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Hover Indicator Dot */}
              <motion.div
                className="absolute bottom-4 right-4 w-2 h-2 bg-accent rounded-full"
                animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
