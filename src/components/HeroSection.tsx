import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transformedCount, setTransformedCount] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 20, y: y * 20 });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    // Animate counter
    const timer = setInterval(() => {
      setTransformedCount(prev => {
        if (prev < 847) return prev + Math.floor(Math.random() * 5) + 1;
        return 847;
      });
    }, 100);

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(timer);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/70 z-10" />
        <img
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Training Background"
          className="w-full h-full object-cover"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            style={{
              transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
            }}
          >
            TRANSFORM
            <br />
            <span className="text-primary">YOUR BODY</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Elite coaching for serious transformations. No shortcuts, no excuses.
          Just proven methods that deliver real results.
        </motion.p>

        {/* Live Counter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="inline-block bg-charcoal/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-primary/20">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
              {transformedCount.toLocaleString()}+
            </div>
            <div className="text-white/60 text-sm uppercase tracking-wider">
              Bodies Transformed
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="group bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 hover:bg-primary/90 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(255, 0, 64, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="group flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU', '_blank')}
          >
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-5 h-5 ml-0.5" />
            </div>
            <span className="font-semibold">Watch Success Stories</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;