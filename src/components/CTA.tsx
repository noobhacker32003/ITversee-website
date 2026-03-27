import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border-white/10"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 relative z-10 leading-tight">
            Let's Build Something <br />
            <span className="text-accent">Amazing Together</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Ready to take your digital presence to the next level? Our team of experts is here to help you innovate and scale.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={onOpenContact}
              className="group px-10 py-5 bg-accent text-primary font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform neon-glow"
            >
              Contact Us
              <Mail className="w-5 h-5" />
            </button>
            <button className="group px-10 py-5 glass border-white/10 text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
              Schedule a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
