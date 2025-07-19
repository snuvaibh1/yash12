import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningAnimationProps {
  onComplete: () => void;
}

const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const texts = [
    "Real Results.",
    "Elite Mindset.",
    "One Coach.",
    "One Mission."
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentPhase(1), 800),
      setTimeout(() => setCurrentPhase(2), 1600),
      setTimeout(() => setCurrentPhase(3), 2400),
      setTimeout(() => setCurrentPhase(4), 3200),
      setTimeout(() => onComplete(), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-dark flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Smoky Red Glow Background */}
      <div className="absolute inset-0 bg-gradient-radial from-red-glow via-transparent to-transparent opacity-30" />
      
      {/* Animated Coach Silhouette */}
      <motion.div
        className="absolute right-1/4 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: currentPhase >= 3 ? 1 : 0, scale: currentPhase >= 3 ? 1 : 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-64 h-80 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-sm" />
      </motion.div>

      {/* Text Reveals */}
      <div className="text-center max-w-2xl">
        <AnimatePresence mode="wait">
          {texts.map((text, index) => (
            currentPhase > index && (
              <motion.h1
                key={index}
                className="text-4xl md:text-6xl font-black mb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {text}
              </motion.h1>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OpeningAnimation;