import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users } from 'lucide-react';

const CoachSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const achievements = [
    { icon: Award, label: 'Certified Trainer' },
    { icon: Users, label: 'Clients Transformed' }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-dark to-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              {/* Actual Coach Image (Improved Quality) */}
              <img
                src="https://i.imgur.com/fV2Crpn.jpeg"
                alt="Coach Yash"
                className="w-full h-full object-cover rounded-3xl aspect-[4/5]"
                onLoad={() => setImageLoaded(true)}
              />

              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-charcoal/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >

              <div className="text-white/60 text-xs md:text-sm">Success Rate</div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Meet Your
              <br />
              <span className="text-primary">Coach Yash</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              With over years of experience transforming bodies and minds, 
              I've developed a proven system that cuts through the noise and 
              delivers real, lasting results. No gimmicks, no shortcuts—just 
              elite-level coaching for serious individuals.
            </motion.p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="text-center p-3 md:p-4 rounded-2xl bg-charcoal-light/50 backdrop-blur-sm border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255, 0, 64, 0.3)' }}
                >
                  <achievement.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/60">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
              >
                Work With Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
