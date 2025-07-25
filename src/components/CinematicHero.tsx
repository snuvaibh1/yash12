import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoLoaded, setLogoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

        mouseX.set(x * 50);
        mouseY.set(y * 50);
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/JNHqgCV.png"
          alt="Cinematic Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Logo and Centerpiece */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 2.5,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 0 100px rgba(212, 175, 55, 0.3), inset 0 0 50px rgba(212, 175, 55, 0.1)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 150px rgba(212, 175, 55, 0.5), inset 0 0 80px rgba(212, 175, 55, 0.2)'
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src="https://i.imgur.com/RXWtz5S.png"
                alt="Champions Lifestyle Logo"
                className="w-full h-full object-cover"
                onLoad={() => setLogoLoaded(true)}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{
                  opacity: logoLoaded ? 1 : 0,
                  scale: logoLoaded ? 1 : 1.2
                }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 md:px-6">
        <motion.div className="text-center max-w-6xl" style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
          >
            {/* Cinematic Title */}
            <div className="relative flex items-center justify-center py-12 md:py-24">
              <div className="sticky top-[20vh] z-30">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-center"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
                    backgroundSize: '200% auto',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    opacity: { duration: 1.2, delay: 1 },
                    backgroundPosition: {
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity
                    }
                  }}
                >
                  <br />
                  <span className="text-accent-gold"> </span>
                </motion.h1>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
              style={{
                filter: 'blur(0px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
            >
              <br className="hidden sm:block" />
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-80 md:mt-56">
              <motion.div
                className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 5 }}
              >
                <motion.button
                  className="group relative bg-accent-gold text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() =>
                    window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
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
                    window.open('https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU', '_blank')
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
                  <span className="font-semibold text-lg md:text-xl">Watch Transformations</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
