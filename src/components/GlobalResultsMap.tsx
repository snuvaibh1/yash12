import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Globe, Target } from 'lucide-react';

const testimonials = [
  {
    name: 'Akhil Jamwal',
    image: 'https://i.imgur.com/3YhHECe.png',
  },
  {
    name: 'Jeetu Naik',
    image: 'https://i.imgur.com/g7n7IJi.jpeg',
  },
  {
    name: 'Joel',
    image: 'https://i.imgur.com/gye7S1r.png',
  },
  {
    name: 'Akarsh',
    image: 'https://i.imgur.com/miPEVL9.jpeg',
  },
];

const StatsAndTransformations = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      gsap.to(marquee, {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        World Stats
      </motion.h2>
      <motion.p
        className="text-white/70 text-center max-w-2xl mx-auto mb-10 text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Empowering Transformations Around the Globe. From different countries to massive physical results,
        we bring change that speaks for itself.
      </motion.p>

      {/* World Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          { icon: Globe, label: 'Countries', value: '14+', color: 'text-green-400' },
          { icon: Target, label: 'Avg Transformation', value: '29 lbs', color: 'text-primary' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 bg-charcoal-light/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
            <div className="text-3xl font-black text-white mb-2">
              {stat.value}
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Live Transformation Updates */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-white text-center mt-20 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Live Transformation Updates
      </motion.h2>
      <motion.p
        className="text-white/70 text-center max-w-2xl mx-auto mb-10 text-sm md:text-base"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Real people. Real results. Watch our community achieve the impossible—one transformation at a time.
      </motion.p>

      <div className="relative overflow-hidden w-full">
        <div
          ref={marqueeRef}
          className="flex w-[200%] space-x-6 py-8"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-48 rounded-xl bg-white/10 border border-white/10 overflow-hidden"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsAndTransformations;
