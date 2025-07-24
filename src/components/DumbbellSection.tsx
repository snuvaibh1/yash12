import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DumbbellSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const features = [
    {
      title: 'Personalized Programs',
      description:
        'gym workouts, home workouts, Travel/hotel room exercises, 20 minute work day circuits, everything!',
      position: 'top-left',
    },
    {
      title: 'Nutrition Mastery',
      description:
        'Designed as per your eating habits, ethnicity, availability of ingredients, in-tolerances, cravings patterns, etc.',
      position: 'top-right',
    },
    {
      title: '24/7 Support',
      description:
        'If you are a premium member, feel free to call anytime. If you are a standard member than 24/7 whatsApp support. I am always one message away.',
      position: 'bottom-left',
    },
    {
      title: 'Progress tracking',
      description:
        'Progress pictures, weight trackers, check-in sheets, weekly goal setting and multiple other approaches to keep you accountable and on-track.',
      position: 'bottom-right',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CHAMPIONS LIFESTYLE
            <br />
            <span className="text-primary">Coaching system</span>
          </motion.h2>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[600px] w-full">
          {/* Dumbbell */}
          <motion.div
            className="relative flex items-center justify-center gap-2 md:gap-6"
            style={{ rotateY, scale }}
          >
            {/* Left Weight */}
            <div className="w-10 h-10 md:w-20 md:h-20 bg-gradient-to-br from-charcoal via-gray-700 to-charcoal-light rounded-full shadow-2xl border-2 md:border-4 border-primary/20" />

            {/* Handle */}
            <div className="w-16 h-2.5 md:w-32 md:h-6 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 rounded-full relative z-10 shadow-lg">
              <div className="absolute inset-y-0 left-0 w-1 bg-gray-600 rounded-l-full" />
              <div className="absolute inset-y-0 right-0 w-1 bg-gray-600 rounded-r-full" />
            </div>

            {/* Right Weight */}
            <div className="w-10 h-10 md:w-20 md:h-20 bg-gradient-to-br from-charcoal via-gray-700 to-charcoal-light rounded-full shadow-2xl border-2 md:border-4 border-primary/20" />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-150 animate-pulse pointer-events-none -z-10" />
          </motion.div>

          {/* Feature Cards Around Dumbbell (Desktop only) */}
          {features.map((feature, index) => {
            const positions = {
              'top-left': 'top-4 left-4 md:top-16 md:left-16',
              'top-right': 'top-4 right-4 md:top-16 md:right-16',
              'bottom-left': 'bottom-4 left-4 md:bottom-16 md:left-16',
              'bottom-right': 'bottom-4 right-4 md:bottom-16 md:right-16',
            };

            return (
              <motion.div
                key={feature.title}
                className={`absolute ${positions[feature.position as keyof typeof positions]} max-w-xs hidden md:block`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-charcoal-light/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Feature Cards */}
        <div className="grid grid-cols-1 gap-6 mt-12 md:hidden">
          {features.map((feature, index) => (
            <motion.div
              key={`mobile-${feature.title}`}
              className="bg-charcoal-light/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: '847+', label: 'Transformations' },
            { number: '92%', label: 'Success Rate' },
            { number: '14+', label: 'Countries' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DumbbellSection;
