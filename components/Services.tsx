"use client";

import { motion, AnimatePresence } from 'motion/react';
import { Code, Layout, Shield, Cpu, Share2, Smartphone, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites built with React, Next.js, and modern tech stacks.',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
    details: [
      'Custom Full-Stack Web Applications',
      'E-commerce Platform Development',
      'Performance Optimization & SEO',
      'Progressive Web Apps (PWA)',
      'API Development & Integration'
    ]
  },
  {
    title: 'Cyber Security',
    description: 'Protecting your digital assets with advanced security protocols.',
    icon: Shield,
    color: 'from-red-500 to-orange-400',
    details: [
      'Vulnerability Assessments & Penetration Testing',
      'Web Application Security Audits',
      'Security Operations Center (SOC) as a Service',
      'Incident Response & Recovery',
      'Compliance & Risk Management'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful user experiences that convert and engage.',
    icon: Layout,
    color: 'from-purple-500 to-pink-400',
    details: [
      'User Research & Wireframing',
      'High-Fidelity Interactive Prototypes',
      'Design Systems & UI Kits',
      'Usability Testing & Optimization',
      'Mobile App Interface Design'
    ]
  },
  {
    title: 'Automation',
    description: 'Streamlining your workflows with custom AI and automation solutions.',
    icon: Cpu,
    color: 'from-green-500 to-emerald-400',
    details: [
      'Business Process Automation',
      'Custom CRM & ERP Integrations',
      'AI Chatbot Development',
      'Automated Data Entry & Scraping',
      'Workflow Optimization Strategy'
    ]
  },
  {
    title: 'Social Marketing',
    description: 'Strategic social media management to grow your brand presence.',
    icon: Share2,
    color: 'from-yellow-500 to-amber-400',
    details: [
      'Data-Driven Social Media Strategy',
      'Content Creation & Curation',
      'Community Management & Engagement',
      'Paid Social Media Advertising (Meta, LinkedIn)',
      'Performance Analytics & Reporting'
    ]
  },
  {
    title: 'CMS Solutions',
    description: 'Custom Shopify, WordPress, and headless CMS implementations.',
    icon: Smartphone,
    color: 'from-indigo-500 to-blue-400',
    details: [
      'Headless CMS Architecture (Sanity, Strapi)',
      'Custom WordPress Theme & Plugin Development',
      'Shopify Store Setup & Customization',
      'Content Migration & Updates',
      'CMS Performance Optimization'
    ]
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -8 }}
              className="group relative p-8 glass rounded-3xl glass-hover overflow-hidden transition-all duration-300 cursor-pointer"
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
                animate={{ color: hoveredIndex === index ? '#00CCFF' : '#FFFFFF' }}
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

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl p-8 glass bg-secondary/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${selectedService.color}`}>
                  <selectedService.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-accent text-sm font-medium mt-1">Detailed Services</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="space-y-4">
                {selectedService.details.map((detail, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-200">{detail}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
