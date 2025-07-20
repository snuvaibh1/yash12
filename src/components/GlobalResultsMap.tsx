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
      className="py-24 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary relative overflow-hidden"
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
                src="https://i.imgur.com/Wi2JVQK.jpeg"
                alt="World Map"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {transformationLocations.map((location, index) => (
              <div
                key={location.id}
                className="absolute cursor-pointer group"
                style={location.coordinates}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Marker removed */}

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

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {transformationLocations.map((location, index) => {
                if (index === transformationLocations.length - 1) return null;
                const nextLocation = transformationLocations[index + 1];
                return (
                  <line
                    key={`line-${index}`}
                    x1={`${parseFloat(location.coordinates.left)}%`}
                    y1={`${parseFloat(location.coordinates.top)}%`}
                    x2={`${parseFloat(nextLocation.coordinates.left)}%`}
                    y2={`${parseFloat(nextLocation.coordinates.top)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: Globe, label: 'Countries', value: '14+', color: 'text-white' },
              { icon: Target, label: 'Avg Transformation', value: '29 lbs', color: 'text-white' }
            ].map((stat, index) => (
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
          <div className="space-y-4">
            {[
              {location: 'Canada', update: "Toushaar, lost 7kgs from the start. He started at 102, now he's 94.5 total time 24 weeks" },
              {location: 'Australia', update: "Prakhar, 93.4 kg → 88.25 kg Balancing work and life in a new country wasn't easy, but staying consistent with my training and nutrition helped me drop over 5 kg." },
              {location: 'Delhi', update: 'Anita M. reached goal weight - 35 lb transformation!' },
              {location: 'Chennai', update: 'Vikram R. completed first month - incredible progress!' },
              {location: 'Pune', update: 'Sneha P. lost 15 lbs in 6 weeks - amazing dedication!' },
              {location: 'Hyderabad', update: 'Arjun T. gained 8 lbs of muscle - strength goals achieved!' }
            ].map((update, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-bg-primary/50 rounded-xl"
              >
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white font-semibold text-sm">
                      {update.location}
                    </span>
                    <span className="text-text-footnote text-xs">
                      {update.time}
                    </span>
                  </div>
                  <p className="text-text-body text-sm">
                    {update.update}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalResultsMap;
