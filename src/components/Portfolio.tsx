import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'British Merchants',
    category: 'Corporate Trading',
    image: '/british-merchant.png',
    tags: ['React', 'Next.js', 'Tailwind'],
    link: 'https://britishmerchants.com/'
  },
  {
    title: 'EezzyMart',
    category: 'E-Commerce Marketplace',
    image: '/Eezzymart.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://eezzymart.com/'
  },
  {
    title: 'Pristine Security',
    category: 'Security Services',
    image: '/Pristine.png',
    tags: ['React', 'Frontend', 'Framer Motion'],
    link: 'https://pristine-security-service-limited.vercel.app/'
  },
  {
    title: 'Book a Bunk',
    category: 'Hospitality Booking',
    image: '/BookABunk.png',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: 'https://book-a-bunk-client.web.app/'
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: isHovered ? 1.12 : 1 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
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
  return (
    <section id="portfolio" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
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
              A glimpse into the digital solutions we've crafted for our global clients. Each project is a testament to our commitment to excellence.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
