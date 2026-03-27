import { Rocket, Twitter, Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center neon-glow">
                <Rocket className="text-primary w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter">
                IT<span className="text-accent">versee</span>
              </span>
            </a>
            <p className="text-gray-500 leading-relaxed">
              Building digital experiences that scale. We are a team of passionate innovators dedicated to your success.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-accent hover:border-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About', 'Portfolio', 'Process', 'Careers'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-500 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'UI/UX Design', 'Cyber Security', 'Automation', 'Social Marketing'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <Mail className="w-5 h-5 text-accent" />
                <span>hello@itversee.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-accent" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 ITversee Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
