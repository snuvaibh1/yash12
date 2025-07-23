import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const section = sectionRef.current;
      if (section) {
        section.classList.add('animate-backgroundFade');
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gold Cinematic Overlay with Scroll Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-yellow-900/10 via-yellow-800/20 to-yellow-900/10 z-10"
        style={{ y: backgroundY }}
      />

      {/* Main Content with Cinematic Typography */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 md:px-6">
        <motion.div className="text-center max-w-6xl" style={{ y: textY }}>
          {/* Cinematic Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-none"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          >
            FORGE YOUR
            <br />
            <span className="text-accent-gold">CHAMPION LEGACY</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3 }}
            style={{
              filter: 'blur(0px)',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            Want to be a part of TeamCLC? Watch this...
            <br className="hidden sm:block" />
            Your transformation begins with a single decision.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            <motion.button
              className="group relative bg-accent-gold text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow:
                  '0 0 50px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
              onClick={() =>
                window.open(
                  'https://calendly.com/championlifestyle-yash/30min?month=2025-07',
                  '_blank'
                )
              }
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
                <span>Begin Transformation</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              className="group flex items-center space-x-3 md:space-x-4 text-white/90 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  'https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU',
                  '_blank'
                )
              }
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent-gold/50"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="font-semibold text-lg md:text-xl">
                Watch Transformations
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
