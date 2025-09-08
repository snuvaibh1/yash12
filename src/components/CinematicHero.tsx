import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 50);
        mouseY.set(y * 50);
      }
    };

    const container = containerRef.current;
    if (container) container.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Faster Animated Background */}
      <motion.img
        src="https://i.imgur.com/JNHqgCV.png"
        alt="Cinematic Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        loading="eager"
        decoding="async"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.7, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="https://i.imgur.com/RXWtz5S.png"
            alt="Champions Lifestyle Logo"
            className="w-[28rem] sm:w-[36rem] md:w-[40rem] lg:w-[48rem] object-contain"
            onLoad={() => setLogoLoaded(true)}
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            animate={{
              opacity: logoLoaded ? 1 : 0,
              scale: logoLoaded ? 1 : 1.1,
              filter: logoLoaded ? 'blur(0px)' : 'blur(10px)'
            }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4">
        <motion.div className="text-center max-w-5xl" style={{ y: textY }}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            Champions Lifestyle
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/90 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            Unlock your potential with elite transformation coaching.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <button
              className="group relative bg-[#C8A766] text-black px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
              onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min', '_blank')}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Begin Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button
              className="group flex items-center space-x-3 text-white/90 hover:text-white"
              onClick={() => window.open('https://youtu.be/zoLP2Q0k6dE', '_blank')}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="font-semibold text-lg">Watch Transformations</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
