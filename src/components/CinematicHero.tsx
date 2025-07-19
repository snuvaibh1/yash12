import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Smooth spring animations for mouse tracking
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const objectsY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

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
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-dark"
    >
      {/* Film Grain Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            animation: 'grain 0.2s steps(10) infinite'
          }}
        />
      </div>

      {/* Dynamic Background with Depth of Field */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-charcoal/50 to-primary/10" />
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-primary/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark/80" />
      </motion.div>

      {/* Large-Scale 3D Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Dumbbell - Large Scale */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          style={{
            x: mouseX,
            y: mouseY,
            rotateY: useTransform(scrollYProgress, [0, 1], [0, 360]),
            rotateX: useTransform(scrollYProgress, [0, 1], [0, 180])
          }}
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-32 h-16 md:w-48 md:h-24 transform-gpu">
            {/* Dumbbell Handle with Metallic Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-3 md:w-24 md:h-4 bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full" />
            </div>
            
            {/* Left Weight */}
            <motion.div 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-charcoal via-gray-600 to-charcoal rounded-full shadow-2xl border-2 border-primary/30"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            </motion.div>
            
            {/* Right Weight */}
            <motion.div 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-charcoal via-gray-600 to-charcoal rounded-full shadow-2xl border-2 border-primary/30"
              animate={{ rotateY: [0, -360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
            </motion.div>

            {/* Dynamic Lighting */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl scale-150 animate-pulse" />
            <div className="absolute inset-0 bg-white/5 blur-2xl scale-125" />
          </div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/3 left-1/4"
          style={{
            x: useTransform(mouseX, [0, 50], [0, -25]),
            y: useTransform(mouseY, [0, 50], [0, -25])
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            z: [0, 100, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-20 h-20 md:w-32 md:h-32 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 transform rotate-45 rounded-lg shadow-2xl backdrop-blur-sm border border-primary/20">
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded" />
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 animate-pulse" />
          </div>
        </motion.div>

        {/* Orbiting Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `${60 + i * 15}px 0px`
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-primary rounded-full shadow-lg">
              <div className="absolute inset-0 bg-primary/50 blur-sm scale-150" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content with Cinematic Typography */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6">
        <motion.div
          className="text-center max-w-6xl"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Cinematic Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-none"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #ff0040 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 50px rgba(255, 0, 64, 0.3)'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              CHAMPIONS LIFESTYLE
              <br />
              <span className="text-primary"></span>
            </motion.h1>

            {/* Subtitle with Motion Blur Effect */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                filter: 'blur(0px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
            >
              Want to be a part of TeamCLC? Watch this...
              <br className="hidden sm:block" />
              Your transformation begins with a single decision.
            </motion.p>

            {/* Cinematic CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className="group relative bg-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: '0 0 50px rgba(255, 0, 64, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
                onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
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
                onClick={() => window.open('https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU', '_blank')}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </div>
                <span className="font-semibold text-lg md:text-xl">Watch Transformations</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator with Cinematic Style */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
      >
        <div className="w-6 h-10 md:w-8 md:h-14 border-2 border-white/40 rounded-full flex justify-center relative">
          <motion.div
            className="w-1.5 h-4 md:w-2 md:h-6 bg-primary rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;