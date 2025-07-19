import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import InteractiveWorldMap from './InteractiveWorldMap';

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
    <div>
      {/* Interactive World Map */}
      <InteractiveWorldMap />
      
      {/* Live Transformation Updates */}
      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white text-center mb-4"
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
      </section>
    </div>
  );
};

export default StatsAndTransformations;
