import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';

const CoachSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const achievements = [
    {
      icon: Award,
      label: 'Accreditations',
      subItems: [
        'NASM-CPT (Certified Personal Trainer)',
        'NASM-CNC (Certified Nutrition Coach)',
        'Diploma in Body Recomposition',
        'Diploma in Managing Busy Work Life',
        'Men’s Lifestyle Coaching',
        'Hormonal Health Specialisation',
      ],
    },
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
              <img
                src="https://i.imgur.com/g3DrzT5.png"
                alt="Coach Yash"
                className="w-full h-full object-cover rounded-3xl aspect-[4/5]"
                onLoad={() => setImageLoaded(true)}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent rounded-3xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>

            <motion.div
              className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-charcoal/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-white/60 text-xs md:text-sm">CLC Founder</div>
            </motion.div>
          </motion.div>

          {/* Text + Achievements Section */}
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
              <span className="text-accent-gold">Coach Yash</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Coach Yash is a NASM-CPT & CNC certified expert, specializing in men’s lifestyle, hormonal health, and body recomposition. He helps busy professionals build elite physiques without sacrificing work-life balance or energy. With diplomas in body transformation and hormonal mastery, Yash turns average routines into high-performance lifestyles.
            </motion.p>

            {/* Achievements Box */}
            <motion.div
              className="bg-charcoal-light/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 w-full max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-7 h-7 text-accent-gold" />
                <h3 className="text-white/80 text-lg font-semibold">Accreditations</h3>
              </div>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
                {achievements[0].subItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                className="bg-accent-gold text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent-gold-dark transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
                }
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
