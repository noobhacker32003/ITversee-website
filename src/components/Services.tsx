import { motion } from 'motion/react';
import { Code, Layout, Shield, Cpu, Share2, Smartphone } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites built with React, Next.js, and modern tech stacks.',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful user experiences that convert and engage.',
    icon: Layout,
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Cyber Security',
    description: 'Protecting your digital assets with advanced security protocols.',
    icon: Shield,
    color: 'from-red-500 to-orange-400',
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
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our <span className="text-accent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We offer a comprehensive suite of digital services designed to help your business scale and thrive in the modern world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 glass rounded-3xl glass-hover relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
