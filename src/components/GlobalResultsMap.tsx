import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Target, Globe } from 'lucide-react';

const GlobalResultsMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const transformationLocations = [
    { id: 1, city: 'Mumbai', state: 'Maharashtra', clients: 127, avgTransformation: '32 lbs', coordinates: { top: '65%', left: '20%' }, testimonial: 'Mumbai clients achieving incredible results with our elite system.' },
    { id: 2, city: 'Delhi', state: 'Delhi', clients: 89, avgTransformation: '28 lbs', coordinates: { top: '35%', left: '25%' }, testimonial: 'Delhi transformations setting new standards across North India.' },
    { id: 3, city: 'Bangalore', state: 'Karnataka', clients: 156, avgTransformation: '35 lbs', coordinates: { top: '75%', left: '25%' }, testimonial: 'Bangalore tech professionals leading the transformation revolution.' },
    { id: 4, city: 'Chennai', state: 'Tamil Nadu', clients: 94, avgTransformation: '30 lbs', coordinates: { top: '80%', left: '30%' }, testimonial: 'Chennai dedication meets elite coaching excellence.' },
    { id: 5, city: 'Hyderabad', state: 'Telangana', clients: 73, avgTransformation: '26 lbs', coordinates: { top: '70%', left: '28%' }, testimonial: 'Hyderabad professionals achieving premium transformations.' },
    { id: 6, city: 'Pune', state: 'Maharashtra', clients: 112, avgTransformation: '29 lbs', coordinates: { top: '68%', left: '22%' }, testimonial: 'Pune fitness enthusiasts setting new transformation records.' },
    { id: 7, city: 'Kolkata', state: 'West Bengal', clients: 67, avgTransformation: '27 lbs', coordinates: { top: '55%', left: '40%' }, testimonial: 'Kolkata culture meets modern fitness transformation.' },
    { id: 8, city: 'Ahmedabad', state: 'Gujarat', clients: 85, avgTransformation: '31 lbs', coordinates: { top: '55%', left: '18%' }, testimonial: 'Gujarat entrepreneurial spirit driving fitness success.' }
  ];

  const floating3DObjects = [
    { id: 1, type: 'dumbbell', position: { top: '20%', left: '15%' }, delay: 0, duration: 4 },
    { id: 2, type: 'trophy', position: { top: '60%', left: '80%' }, delay: 1, duration: 5 },
    { id: 3, type: 'target', position: { top: '75%', left: '70%' }, delay: 2, duration: 6 },
    { id: 4, type: 'globe', position: { top: '25%', left: '75%' }, delay: 0.5, duration: 4.5 }
  ];

  const renderFloating3DObject = (obj: any) => {
    const IconComponent = {
      dumbbell: () => (
        <div className="relative">
          <div className="w-16 h-8 flex items-center justify-center">
            <div className="w-8 h-2 bg-gradient-to-r from-primary via-white to-primary rounded-full relative">
              <div className="w-4 h-4 bg-gradient-to-br from-charcoal to-primary rounded-full absolute -left-2 top-1/2 transform -translate-y-1/2 shadow-lg" />
              <div className="w-4 h-4 bg-gradient-to-br from-charcoal to-primary rounded-full absolute -right-2 top-1/2 transform -translate-y-1/2 shadow-lg" />
            </div>
          </div>
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        </div>
      ),
      trophy: () => (
        <div className="relative">
          <Trophy className="w-12 h-12 text-yellow-400" />
          <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse" />
        </div>
      ),
      target: () => (
        <div className="relative">
          <Target className="w-12 h-12 text-primary" />
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        </div>
      ),
      globe: () => (
        <div className="relative">
          <Globe className="w-12 h-12 text-blue-400" />
          <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-pulse" />
        </div>
      )
    };

    return (
      <motion.div
        key={obj.id}
        className="absolute pointer-events-none z-10"
        style={obj.position}
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: obj.duration,
          repeat: Infinity,
          delay: obj.delay,
          ease: "easeInOut"
        }}
      >
        {IconComponent[obj.type as keyof typeof IconComponent]()}
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            World-Wide
            <br />
            <span className="text-accent-gold">Transformation Network</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our elite coaching system delivers results across India. 
            See where transformations are happening right now.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="relative bg-bg-panel/50 backdrop-blur-sm rounded-3xl border border-border-secondary overflow-hidden"
            style={{ height: '600px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <img
                src="https://i.imgur.com/UU7sND0.png"
                alt="World Map"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            {transformationLocations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer group"
                style={location.coordinates}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 bg-bg-secondary/95 backdrop-blur-sm rounded-2xl p-4 border border-primary/30 shadow-2xl"
                  style={{ 
                    opacity: activeLocation === location.id ? 1 : 0,
                    pointerEvents: activeLocation === location.id ? 'auto' : 'none'
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {location.city}, {location.state}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">
                          {location.clients}
                        </div>
                        <div className="text-xs text-white/60">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">
                          {location.avgTransformation}
                        </div>
                        <div className="text-xs text-text-muted">Avg Loss</div>
                      </div>
                    </div>
                    <p className="text-sm text-text-body leading-relaxed">
                      {location.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: Globe, label: 'Countries', value: '14+', color: 'text-white' },
              { icon: Target, label: 'Avg Transformation', value: '29 lbs', color: 'text-white' }
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-bg-panel/50 backdrop-blur-sm rounded-2xl border border-border-secondary hover:border-primary/30 transition-colors"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-black text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-bg-panel/30 backdrop-blur-sm rounded-2xl p-8 border border-border-secondary">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Live Transformation Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                location: 'Canada', 
                name: 'Toushaar',
                achievement: '7kg Lost',
                timeframe: '24 weeks',
                description: "Started at 102kg, now 94.5kg",
                flag: '🇨🇦',
                gradient: 'from-red-500/20 via-red-600/10 to-transparent'
              },
              { 
                location: 'Australia', 
                name: 'Prakhar',
                achievement: '5kg Lost',
                timeframe: '16 weeks',
                description: "93.4kg → 88.25kg while balancing work abroad",
                flag: '🇦🇺',
                gradient: 'from-blue-500/20 via-blue-600/10 to-transparent'
              },
              { 
                location: 'Delhi', 
                name: 'Anita M.',
                achievement: '35lb Lost',
                timeframe: '20 weeks',
                description: "Reached goal weight with dedication",
                flag: '🇮🇳',
                gradient: 'from-orange-500/20 via-orange-600/10 to-transparent'
              },
              { 
                location: 'Chennai', 
                name: 'Vikram R.',
                achievement: 'Month 1',
                timeframe: '4 weeks',
                description: "Incredible progress in first month",
                flag: '🇮🇳',
                gradient: 'from-green-500/20 via-green-600/10 to-transparent'
              },
              { 
                location: 'Pune', 
                name: 'Sneha P.',
                achievement: '15lb Lost',
                timeframe: '6 weeks',
                description: "Amazing dedication and consistency",
                flag: '🇮🇳',
                gradient: 'from-purple-500/20 via-purple-600/10 to-transparent'
              },
              { 
                location: 'Hyderabad', 
                name: 'Arjun T.',
                achievement: '8lb Muscle',
                timeframe: '12 weeks',
                description: "Strength goals achieved successfully",
                flag: '🇮🇳',
                gradient: 'from-yellow-500/20 via-yellow-600/10 to-transparent'
              }
            ].map((update, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Card Container */}
                <div className={`
                  relative h-48 w-full rounded-2xl border border-white/10 
                  bg-gradient-to-br ${update.gradient} backdrop-blur-xl
                  shadow-lg group-hover:shadow-2xl group-hover:shadow-accent-gold/20
                  transition-all duration-500 ease-out overflow-hidden
                `}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                    <motion.div
                      className="absolute -inset-10 bg-gradient-conic from-accent-gold/20 via-transparent to-accent-gold/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-gold/0 via-accent-gold/10 to-accent-gold/0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="text-2xl"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {update.flag}
                        </motion.div>
                        <div>
                          <h4 className="text-white font-bold text-lg leading-tight">
                            {update.location}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {update.name}
                          </p>
                        </div>
                      </div>
                      
                      {/* Live Indicator */}
                      <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-accent-gold rounded-full" />
                        <span className="text-accent-gold text-xs font-semibold uppercase tracking-wider">
                          Live
                        </span>
                      </motion.div>
                    </div>

                    {/* Achievement Badge */}
                    <motion.div
                      className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-3 self-start"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-accent-gold font-bold text-lg">
                        {update.achievement}
                      </span>
                      <span className="text-white/60 text-sm ml-2">
                        in {update.timeframe}
                      </span>
                    </motion.div>

                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed flex-1">
                      {update.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-gold via-accent-gold-dark to-accent-gold"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Cinematic Film Grain Overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"
                      animate={{ 
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalResultsMap;
