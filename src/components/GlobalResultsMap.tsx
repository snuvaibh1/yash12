import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Users, Trophy, Target, Globe } from 'lucide-react';

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
    {
      id: 1,
      city: 'Mumbai',
      state: 'Maharashtra',
      clients: 127,
      avgTransformation: '32 lbs',
      coordinates: { top: '65%', left: '20%' },
      testimonial: 'Mumbai clients achieving incredible results with our elite system.'
    },
    {
      id: 2,
      city: 'Delhi',
      state: 'Delhi',
      clients: 89,
      avgTransformation: '28 lbs',
      coordinates: { top: '35%', left: '25%' },
      testimonial: 'Delhi transformations setting new standards across North India.'
    },
    {
      id: 3,
      city: 'Bangalore',
      state: 'Karnataka',
      clients: 156,
      avgTransformation: '35 lbs',
      coordinates: { top: '75%', left: '25%' },
      testimonial: 'Bangalore tech professionals leading the transformation revolution.'
    },
    {
      id: 4,
      city: 'Chennai',
      state: 'Tamil Nadu',
      clients: 94,
      avgTransformation: '30 lbs',
      coordinates: { top: '80%', left: '30%' },
      testimonial: 'Chennai dedication meets elite coaching excellence.'
    },
    {
      id: 5,
      city: 'Hyderabad',
      state: 'Telangana',
      clients: 73,
      avgTransformation: '26 lbs',
      coordinates: { top: '70%', left: '28%' },
      testimonial: 'Hyderabad professionals achieving premium transformations.'
    },
    {
      id: 6,
      city: 'Pune',
      state: 'Maharashtra',
      clients: 112,
      avgTransformation: '29 lbs',
      coordinates: { top: '68%', left: '22%' },
      testimonial: 'Pune fitness enthusiasts setting new transformation records.'
    },
    {
      id: 7,
      city: 'Kolkata',
      state: 'West Bengal',
      clients: 67,
      avgTransformation: '27 lbs',
      coordinates: { top: '55%', left: '40%' },
      testimonial: 'Kolkata culture meets modern fitness transformation.'
    },
    {
      id: 8,
      city: 'Ahmedabad',
      state: 'Gujarat',
      clients: 85,
      avgTransformation: '31 lbs',
      coordinates: { top: '55%', left: '18%' },
      testimonial: 'Gujarat entrepreneurial spirit driving fitness success.'
    }
  ];

  const floating3DObjects = [
    {
      id: 1,
      type: 'dumbbell',
      position: { top: '20%', left: '15%' },
      delay: 0,
      duration: 4
    },
    {
      id: 2,
      type: 'trophy',
      position: { top: '60%', left: '80%' },
      delay: 1,
      duration: 5
    },
    {
      id: 3,
      type: 'target',
      position: { top: '75%', left: '70%' },
      delay: 2,
      duration: 6
    },
    {
      id: 4,
      type: 'globe',
      position: { top: '25%', left: '75%' },
      delay: 0.5,
      duration: 4.5
    }
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
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-charcoal via-dark to-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            World-Wide
            <br />
            <span className="text-primary">Transformation Network</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our elite coaching system delivers results across India. 
            See where transformations are happening right now.
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <div className="relative">
          <motion.div
            className="relative bg-charcoal-light/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
            style={{ height: '600px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* India Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/50 to-dark/50">
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full opacity-30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified India map outline */}
                <path
                  d="M200 150 L250 120 L300 130 L350 110 L400 120 L450 140 L500 130 L550 150 L580 180 L600 220 L620 260 L630 300 L640 340 L650 380 L660 420 L650 460 L630 490 L600 510 L560 520 L520 530 L480 540 L440 530 L400 520 L360 510 L320 500 L280 490 L240 480 L200 460 L180 420 L170 380 L160 340 L150 300 L140 260 L150 220 L170 180 Z"
                  fill="currentColor"
                  className="text-primary/20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                {/* Additional details for major states */}
                <path
                  d="M200 200 L280 190 L320 210 L350 230 L380 250 L350 280 L320 270 L280 260 L240 250 L200 240 Z"
                  fill="currentColor"
                  className="text-primary/15"
                />
                <path
                  d="M400 200 L480 190 L520 210 L550 230 L580 250 L550 280 L520 270 L480 260 L440 250 L400 240 Z"
                  fill="currentColor"
                  className="text-primary/15"
                />
                <path
                  d="M300 350 L380 340 L420 360 L450 380 L480 400 L450 430 L420 420 L380 410 L340 400 L300 390 Z"
                  fill="currentColor"
                  className="text-primary/15"
                />
              </svg>
            </div>

            {/* Floating 3D Objects */}
            {floating3DObjects.map(renderFloating3DObject)}

            {/* Location Markers */}
            {transformationLocations.map((location, index) => (
              <motion.div
                key={location.id}
                className="absolute cursor-pointer group"
                style={location.coordinates}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveLocation(location.id)}
                onHoverEnd={() => setActiveLocation(null)}
                whileHover={{ scale: 1.2 }}
              >
                {/* Pulsing Marker */}
                <div className="relative">
                  <motion.div
                    className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full opacity-30"
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Hover Card */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 bg-charcoal/95 backdrop-blur-sm rounded-2xl p-4 border border-primary/30 shadow-2xl"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{
                    opacity: activeLocation === location.id ? 1 : 0,
                    y: activeLocation === location.id ? 0 : 10,
                    scale: activeLocation === location.id ? 1 : 0.9
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: activeLocation === location.id ? 'auto' : 'none' }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {location.city}, {location.state}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary">
                          {location.clients}
                        </div>
                        <div className="text-xs text-white/60">Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-primary">
                          {location.avgTransformation}
                        </div>
                        <div className="text-xs text-white/60">Avg Loss</div>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {location.testimonial}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {transformationLocations.map((location, index) => {
                if (index === transformationLocations.length - 1) return null;
                const nextLocation = transformationLocations[index + 1];
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={`${parseFloat(location.coordinates.left)}%`}
                    y1={`${parseFloat(location.coordinates.top)}%`}
                    x2={`${parseFloat(nextLocation.coordinates.left)}%`}
                    y2={`${parseFloat(nextLocation.coordinates.top)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 2, delay: index * 0.5 }}
                    viewport={{ once: true }}
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF0040" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FF0040" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF0040" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* World Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {
              { icon: Globe, label: 'Countries', value: '14+', color: 'text-green-400' },
              { icon: Target, label: 'Avg Transformation', value: '29 lbs', color: 'text-primary' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-charcoal-light/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-colors"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Live Updates Feed */}
        <motion.div
          className="mt-16 bg-charcoal-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Live Transformation Updates
          </h3>
          <div className="space-y-4">
            {[
              { time: '2 min ago', location: 'Mumbai', update: 'Priya S. completed week 8 - down 22 lbs!' },
              { time: '7 min ago', location: 'Bangalore', update: 'Rahul K. hit new deadlift PR - 180 kg!' },
              { time: '12 min ago', location: 'Delhi', update: 'Anita M. reached goal weight - 35 lb transformation!' },
              { time: '18 min ago', location: 'Chennai', update: 'Vikram R. completed first month - incredible progress!' },
              { time: '25 min ago', location: 'Pune', update: 'Sneha P. lost 15 lbs in 6 weeks - amazing dedication!' },
              { time: '32 min ago', location: 'Hyderabad', update: 'Arjun T. gained 8 lbs of muscle - strength goals achieved!' }
            ].map((update, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 bg-dark/50 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-primary font-semibold text-sm">
                      {update.location}
                    </span>
                    <span className="text-white/40 text-xs">
                      {update.time}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm">
                    {update.update}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalResultsMap;