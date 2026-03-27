import { motion } from 'motion/react';

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
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our <span className="text-accent">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A systematic approach to turning your vision into a digital reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="w-16 h-16 bg-primary border border-white/10 rounded-2xl flex items-center justify-center text-2xl font-bold text-accent mb-8 group-hover:neon-glow group-hover:border-accent transition-all duration-500 relative z-10 mx-auto lg:mx-0">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
