import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy } from 'lucide-react';
import gsap from 'gsap';

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
    name: 'Amaan',
    image: 'https://i.imgur.com/miPEVL9.jpeg',
  },
];

const LiveTransformations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.transform-card',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power4.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-black" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Live Transformation Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="transform-card bg-charcoal-light/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-md hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
              />
              <h3 className="text-white text-xl font-semibold">
                {testimonial.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* World Stats - Only 2 Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Users,
              label: 'World-wide Clients',
              value: '803+',
              color: 'text-blue-400',
            },
            {
              icon: Trophy,
              label: 'Success Rate',
              value: '98%',
              color: 'text-yellow-400',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-charcoal-light/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <stat.icon
                className={`w-8 h-8 ${stat.color} mx-auto mb-4`}
              />
              <div className="text-3xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveTransformations;
