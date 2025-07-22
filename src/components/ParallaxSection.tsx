import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Target, Trophy, Star } from 'lucide-react';

const ParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Multiple parallax layers
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const midgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const foregroundY = useTransform(smoothProgress, [0, 1], ['0%', '25%']);
  
  // 3D rotation effects
  const rotateX = useTransform(smoothProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(smoothProgress, [0, 1], [0, 180]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const features = [
    {
      icon: Zap,
      title: 'Rapid Results',
      description: "within just 2 weeks, you'll start to look and feel better which will get you hooked to the process",
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Every workout, every meal, every decision optimized for your goals and lifestyle',
      color: 'from-primary to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Elite Standards',
      description: 'Training protocols used by entrepreneurs, business owners and high stake working professionals',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'White-glove service with 24/7 support and personalized attention.',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-dark to-charcoal"
    >
      {/* Background Layer with Depth */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,64,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,64,0.05),transparent_50%)]" />
      </motion.div>

      {/* Floating 3D Elements - Midground */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: midgroundY }}
      >
        {/* Large Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64"
          style={{
            rotateX,
            rotateY,
            scale
          }}
        >
          <div className="relative w-full h-full transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl backdrop-blur-sm border border-primary/10 shadow-2xl">
              <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
            </div>
            <div className="absolute inset-0 bg-primary/10 blur-3xl scale-150 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 md:w-48 md:h-48"
          style={{
            rotateX: useTransform(rotateX, [0, 360], [0, -360]),
            rotateY: useTransform(rotateY, [0, 180], [0, -180]),
            scale: useTransform(scale, [0.8, 1.2, 0.8], [1.2, 0.8, 1.2])
          }}
        >
          <div className="relative w-full h-full transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/5 rounded-full backdrop-blur-sm border border-blue-500/10 shadow-2xl">
              <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-full" />
            </div>
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-150 animate-pulse" />
          </div>
        </motion.div>

        {/* Orbiting Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 md:w-4 md:h-4 bg-primary/60 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: `${100 + i * 20}px 0px`
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full bg-primary rounded-full shadow-lg">
              <div className="absolute inset-0 bg-primary/50 blur-lg scale-200" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content - Foreground */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6"
        style={{ y: foregroundY }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-none tracking-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-white">BEYOND</span>
              <br />
              <span className="text-accent-gold">ORDINARY</span>
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Experience transformation through cutting-edge science, 
              personalized precision, and unwavering dedication to excellence. Both physical and mental
            </motion.p>
          </motion.div>

          {/* Feature Grid with 3D Effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  z: 50
                }}
              >
                <div className="relative h-full p-6 md:p-8 bg-charcoal-light/30 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 transform-gpu">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                  
                  {/* Icon with 3D Effect */}
                  <motion.div
                    className="relative mb-4 md:mb-6"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto relative">
                      <feature.icon className="w-full h-full text-primary relative z-10" />
                      <div className="absolute inset-0 bg-primary/20 blur-xl scale-150 animate-pulse" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: '0 0 50px rgba(255, 0, 64, 0.2)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Atmospheric Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ParallaxSection;