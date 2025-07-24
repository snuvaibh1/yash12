import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Target, Globe } from 'lucide-react';

const GlobalResultsMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scroll-based animation values
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  const transformationLocations = [
    { id: 1, city: 'Mumbai', state: 'Maharashtra', clients: 127, avgTransformation: '32 lbs', coordinates: { top: '65%', left: '20%' }, testimonial: 'Mumbai clients achieving incredible results with our elite system.' },
    { id: 2, city: 'Delhi', state: 'Delhi', clients: 89, avgTransformation: '28 lbs', coordinates: { top: '35%', left: '25%' }, testimonial: 'Delhi transformations setting new standards across North India.' },
    { id: 3, city: 'Bangalore', state: 'Karnataka', clients: 156, avgTransformation: '35 lbs', coordinates: { top: '75%', left: '25%' }, testimonial: 'Bangalore tech professionals leading the transformation revolution.' },
    { id: 4, city: 'Chennai', state: 'Tamil Nadu', clients: 94, avgTransformation: '30 lbs', coordinates: { top: '80%', left: '30%' }, testimonial: 'Chennai dedication meets elite coaching excellence.' },
    { id: 5, city: 'Hyderabad', state: 'Telangana', clients: 73, avgTransformation: '26 lbs', coordinates: { top: '70%', left: '28%' }, testimonial: 'Hyderabad professionals achieving premium transformations.' },
    { id: 6, city: 'Pune', state: 'Maharashtra', clients: 112, avgTransformation: '29 lbs', coordinates: { top: '68%', left: '22%' }, testimonial: 'Pune fitness enthusiasts setting new transformation records.' },
    { id: 7, city: 'Kolkata', state: 'West Bengal', clients: 67, avgTransformation: '27 lbs', coordinates: { top: '55%', left: '40%' }, testimonial: 'Kolkata culture meets modern fitness transformation.' },
    { id: 8, city: 'Ahmedabad', state: 'Gujarat', clients: 85, avgTransformation: '31 lbs', coordinates: { top: '55%', left: '18%' }, testimonial: 'Gujarat entrepreneurial spirit driving fitness success.' },
  ];

  const updates = [
    {
      location: 'Canada', code: 'CA', name: 'Toushaar', achievement: '7kg Lost', timeframe: '24 weeks',
      description: "Started at 102kg, now 94.5kg", gradient: 'from-red-500/20 via-red-600/10 to-transparent'
    },
    {
      location: 'Australia', code: 'AU', name: 'Prakhar', achievement: '5kg Lost', timeframe: '16 weeks',
      description: "93.4kg → 88.25kg while balancing work abroad", gradient: 'from-blue-500/20 via-blue-600/10 to-transparent'
    },
    {
      location: 'Delhi', code: 'IN', name: 'Anita M.', achievement: '35lb Lost', timeframe: '20 weeks',
      description: "Reached goal weight with dedication", gradient: 'from-orange-500/20 via-orange-600/10 to-transparent'
    },
    {
      location: 'Chennai', code: 'IN', name: 'Vikram R.', achievement: 'Month 1', timeframe: '4 weeks',
      description: "Incredible progress in first month", gradient: 'from-green-500/20 via-green-600/10 to-transparent'
    },
    {
      location: 'Pune', code: 'IN', name: 'Sneha P.', achievement: '15lb Lost', timeframe: '6 weeks',
      description: "Amazing dedication and consistency", gradient: 'from-purple-500/20 via-purple-600/10 to-transparent'
    },
    {
      location: 'Hyderabad', code: 'IN', name: 'Arjun T.', achievement: '8lb Muscle', timeframe: '12 weeks',
      description: "Strength goals achieved successfully", gradient: 'from-yellow-500/20 via-yellow-600/10 to-transparent'
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 relative bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            World-Wide<br /><span className="text-accent-gold">Transformation Network</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our elite coaching system delivers results across India. See where transformations are happening right now.
          </p>
        </motion.div>

        {/* Scroll-animated World Map */}
        <motion.div
          style={{ scale, opacity }}
          className="relative bg-bg-panel/50 backdrop-blur-sm rounded-3xl border border-border-secondary overflow-hidden"
        >
          <div className="relative w-full h-0 pb-[56.25%]">
            <img
              src="https://i.imgur.com/B1TA9Fz.png"
              alt="World Map"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
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
                    pointerEvents: activeLocation === location.id ? 'auto' : 'none',
                  }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {location.city}, {location.state}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="text-2xl font-black text-white">{location.clients}</div>
                      <div className="text-xs text-white/60">Clients</div>
                      <div className="text-2xl font-black text-white">{location.avgTransformation}</div>
                      <div className="text-xs text-text-muted">Avg Loss</div>
                    </div>
                    <p className="text-sm text-text-body">{location.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {[
            { icon: Globe, label: 'Countries', value: '14+', color: 'text-white' },
            { icon: Target, label: 'Avg Transformation', value: '29 lbs', color: 'text-white' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-bg-panel/50 backdrop-blur-sm rounded-2xl border border-border-secondary hover:border-primary/30 transition-colors"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-black text-text-primary mb-2">{stat.value}</div>
              <div className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Live Updates */}
        <div className="mt-16 bg-bg-panel/30 backdrop-blur-sm rounded-2xl p-8 border border-border-secondary">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Live Transformation Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-white/10 overflow-hidden shadow-md group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className={`h-full p-6 bg-gradient-to-br ${update.gradient} backdrop-blur-xl flex flex-col justify-between`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-white/60 font-semibold">{update.code}</p>
                      <h4 className="text-white font-bold text-lg">{update.location}</h4>
                      <p className="text-white/50 text-sm">{update.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-gold rounded-full" />
                      <span className="text-xs text-accent-gold font-semibold">LIVE</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-3 self-start">
                    <span className="text-accent-gold font-bold text-lg">{update.achievement}</span>
                    <span className="text-white/60 text-sm ml-2">in {update.timeframe}</span>
                  </div>
                  <p className="text-white/80 text-sm">{update.description}</p>
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
