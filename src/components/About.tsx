import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
              <img
                src="/british-merchant.png"
                alt="ITversee Team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-secondary/20 rounded-full blur-3xl" />

            <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/10 z-20">
              <div className="text-4xl font-bold text-accent mb-1">5+</div>
              <div className="text-sm text-gray-400">Years of Innovation</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Building Digital <br />
              <span className="text-accent">Experiences That Scale</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At ITversee, we are more than just a digital agency. We are your strategic partners in innovation. Our mission is to empower businesses with cutting-edge technology and exceptional design that drives real growth.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Innovative Problem Solving',
                'User-Centric Design Philosophy',
                'Scalable Architecture & Clean Code',
                '24/7 Strategic Support',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
