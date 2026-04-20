import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at FinTechly',
    content: 'ITversee transformed our outdated platform into a modern, high-performance application. Their attention to detail and technical expertise is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'Michael Chen',
    role: 'Founder of HealthAI',
    content: 'Working with ITversee was a game-changer for our startup. They didn\'t just build an app; they helped us define our digital strategy.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director at Global Brands',
    content: 'The UI/UX design provided by ITversee is world-class. Our user engagement has increased by 40% since the relaunch.',
    avatar: 'https://i.pravatar.cc/150?u=elena',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client <span className="text-accent">Success Stories</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonials Slider */}
          <div className="relative h-[400px] md:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="glass p-8 md:p-12 rounded-3xl relative border border-white/10 w-full">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-8"
                  >
                    <Quote className="text-accent/20 w-12 h-12" />
                  </motion.div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300 italic mb-8 relative z-10 text-lg leading-relaxed"
                  >
                    "{testimonials[activeIndex].content}"
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <motion.img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-12 h-12 rounded-full border border-white/10"
                      referrerPolicy="no-referrer"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <motion.div className="font-bold">
                        {testimonials[activeIndex].name}
                      </motion.div>
                      <motion.div className="text-sm text-gray-500">
                        {testimonials[activeIndex].role}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-12">
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 160, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-white/20 hover:border-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-accent w-8' : 'bg-white/20 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 160, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-white/20 hover:border-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Thumbnail Grid for Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.name}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-2xl transition-all ${
                  index === activeIndex
                    ? 'glass border-accent bg-accent/10'
                    : 'glass border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3 text-left">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
