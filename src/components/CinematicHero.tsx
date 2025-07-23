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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          animation: 'grain 0.2s steps(10) infinite'
        }} />
      </div>

      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary/50 to-primary/10" />
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-primary/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-bg-primary/80" />
      </motion.div>

      {/* Logo and Animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div className="relative" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
                filter: 'blur(20px)',
                transform: 'scale(1.5)'
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
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
                src="https://i.imgur.com/ydUt0ia.jpeg"
                alt="Champions Lifestyle Logo"
                className="w-full h-full object-cover"
                onLoad={() => setLogoLoaded(true)}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: logoLoaded ? 1 : 0, scale: logoLoaded ? 1 : 1.2 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
            </motion.div>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{ top: '50%', left: '50%', transformOrigin: `${120 + i * 15}px 0px` }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-primary rounded-full shadow-lg">
                  <div className="absolute inset-0 bg-primary/50 blur-sm scale-150" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white/90 tracking-wider"
              animate={{ textShadow: ['0 0 10px rgba(212, 175, 55, 0.5)', '0 0 20px rgba(212, 175, 55, 0.8)', '0 0 10px rgba(212, 175, 55, 0.5)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              CHAMPIONS LIFESTYLE
            </motion.h3>
          </motion.div>
        </motion.div>
      </div>

      {/* MAIN TEXT FIXED ✅ */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 md:px-6">
        <motion.div className="text-center max-w-6xl" style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-none"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 50px rgba(212, 175, 55, 0.3)'
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 4 }}
            >
              FORGE YOUR
              <br />
              <span className="text-accent-gold">CHAMPION LEGACY</span>
            </motion.h1>

            {/* Keep your subtitle and buttons here */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
