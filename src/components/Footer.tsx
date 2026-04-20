import { motion } from 'motion/react';
import { Rocket, Twitter, Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Github, label: 'GitHub' },
    { Icon: Linkedin, label: 'LinkedIn' },
    { Icon: Instagram, label: 'Instagram' }
  ];

  const quickLinks = ['Services', 'About', 'Portfolio', 'Process', 'Careers'];
  const services = ['Web Development', 'UI/UX Design', 'Cyber Security', 'Automation', 'Social Marketing'];
  const contactInfo = [
    { Icon: Mail, text: 'hello@itversee.com' },
    { Icon: Phone, text: '+1 (555) 000-0000' },
    { Icon: MapPin, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradients */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="/"
              className="flex items-center gap-2 group w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center neon-glow"
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <Rocket className="text-primary w-6 h-6" />
              </motion.div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                IT<span className="text-accent">versee</span>
              </span>
            </motion.a>
            <motion.p
              className="text-gray-500 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building digital experiences that scale. We are a team of passionate innovators dedicated to your success.
            </motion.p>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map(({ Icon, label }, i) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-accent hover:border-accent transition-all"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-500 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ Icon, text }, i) => (
                <motion.li
                  key={text}
                  className="flex items-center gap-3 text-gray-500"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ x: 5, color: '#00F5A0' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="pt-8 border-t border-white/5"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Footer Bottom */}
        <motion.div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.p whileHover={{ color: '#00F5A0' }}>
            © 2026 ITversee Agency. All rights reserved.
          </motion.p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
