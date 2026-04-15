import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400"
            >
              A glimpse into the digital solutions we've crafted for our global clients. Each project is a testament to our commitment to excellence.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-8 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            Explore All Work
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-primary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-30 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-accent text-primary rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
