"use client";

import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  workType: 'Web' | 'Cybersecurity' | 'UI/UX' | 'Other';
  image: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  // Web Projects
  {
    title: 'British Merchants',
    category: 'Corporate Trading',
    workType: 'Web',
    image: '/british-merchant.webp',
    tags: ['React', 'Next.js', 'Tailwind'],
    link: 'https://britishmerchants.com/'
  },
  {
    title: 'EezzyMart',
    category: 'E-Commerce Marketplace',
    workType: 'Web',
    image: '/Eezzymart.webp',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://eezzymart.com/'
  },
  {
    title: 'Pristine Security',
    category: 'Security Services',
    workType: 'Web',
    image: '/Pristine.webp',
    tags: ['React', 'Frontend', 'Framer Motion'],
    link: 'https://pristine-security-service-limited.vercel.app/'
  },
  {
    title: 'Book a Bunk',
    category: 'Hospitality Booking',
    workType: 'Web',
    image: '/BookABunk.webp',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: 'https://book-a-bunk-client.web.app/'
  },
  // UI/UX Design Projects
  {
    title: 'SaaS Dashboard Design',
    category: 'Product Design',
    workType: 'UI/UX',
    image: '/saas.jpg',
    tags: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    title: 'Mobile App Interface',
    category: 'Mobile Design',
    workType: 'UI/UX',
    image: '/mobile-app.jpg',
    tags: ['UI Design', 'Animation', 'Accessibility'],
  },
  {
    title: 'E-Commerce Website Redesign',
    category: 'Web Design',
    workType: 'UI/UX',
    image: '/landing.jpg',
    tags: ['Web Design', 'UX Research', 'Conversion'],
  },
  // Cybersecurity Projects
  {
    title: 'Security Audit Platform',
    category: 'Security Tools',
    workType: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1563986768609-322d6a6d4e25?w=800&h=600&fit=crop',
    tags: ['Penetration Testing', 'Network Security', 'DevOps'],
  },
  {
    title: 'Threat Detection System',
    category: 'Monitoring & Analytics',
    workType: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1551434786-5b89fbc2ead6?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'Data Security', 'Real-time Alerts'],
  },
  {
    title: 'Enterprise VPN Solution',
    category: 'Infrastructure Security',
    workType: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tags: ['Network', 'Encryption', 'Zero Trust'],
  },
  // Other Services Projects
  {
    title: 'AI Chatbot Development',
    category: 'AI Services',
    workType: 'Other',
    image: '/ai-bot.jpg',
    tags: ['GPT', 'NLP', 'Python'],
  },
  {
    title: 'Cloud Migration Consulting',
    category: 'Infrastructure',
    workType: 'Other',
    image: '/cloud.jpg',
    tags: ['AWS', 'Azure', 'DevOps'],
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'Business Intelligence',
    workType: 'Other',
    image: '/data-analytics.jpg',
    tags: ['Data Science', 'Visualization', 'Python'],
  },
];

const WORK_TYPES = ['Web', 'Cybersecurity', 'UI/UX', 'Other'] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, rgba(0, 245, 160, 0.1), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden border border-white/10"
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="aspect-[4/3] overflow-hidden bg-primary relative">
        <motion.div
          animate={{ scale: isHovered ? 1.12 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            loading="lazy"
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black"
        />
      </div>

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          pointerEvents: isHovered ? 'auto' : 'none',
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20 flex flex-col justify-end p-8"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            {project.title}
          </motion.h3>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + i * 0.05 }}
                className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-accent text-primary rounded-full flex items-center justify-center"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-3xl"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<typeof WORK_TYPES[number]>('Web');

  const filteredProjects = projects.filter(project => project.workType === selectedType);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-gray-400">
              A glimpse into the digital solutions we&apos;ve crafted for our global clients. Each project is a testament to our commitment to excellence.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full transition-all whitespace-nowrap"
          >
            Explore All Work
          </motion.button>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {WORK_TYPES.map((type, index) => (
            <motion.button
              key={type}
              onClick={() => setSelectedType(type)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${selectedType === type
                ? 'bg-accent text-primary shadow-lg shadow-accent/50'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                }`}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <motion.div
            key={selectedType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="contents"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects available in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
