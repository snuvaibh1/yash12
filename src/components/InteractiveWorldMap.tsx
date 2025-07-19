import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Users } from 'lucide-react';

interface ClientLocation {
  country: string;
  lat: number;
  lng: number;
  clients: number;
  flag: string;
}

const InteractiveWorldMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [hoveredCountry, setHoveredCountry] = useState<ClientLocation | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Client locations across 14+ countries
  const clientLocations: ClientLocation[] = [
    { country: 'India', lat: 20, lng: 77, clients: 247, flag: '🇮🇳' },
    { country: 'United States', lat: 39, lng: -98, clients: 156, flag: '🇺🇸' },
    { country: 'United Kingdom', lat: 54, lng: -2, clients: 89, flag: '🇬🇧' },
    { country: 'Canada', lat: 60, lng: -95, clients: 67, flag: '🇨🇦' },
    { country: 'Australia', lat: -25, lng: 133, clients: 54, flag: '🇦🇺' },
    { country: 'Germany', lat: 51, lng: 9, clients: 43, flag: '🇩🇪' },
    { country: 'UAE', lat: 24, lng: 54, clients: 38, flag: '🇦🇪' },
    { country: 'Singapore', lat: 1, lng: 103, clients: 32, flag: '🇸🇬' },
    { country: 'Netherlands', lat: 52, lng: 5, clients: 28, flag: '🇳🇱' },
    { country: 'France', lat: 46, lng: 2, clients: 25, flag: '🇫🇷' },
    { country: 'Japan', lat: 36, lng: 138, clients: 22, flag: '🇯🇵' },
    { country: 'Brazil', lat: -14, lng: -51, clients: 19, flag: '🇧🇷' },
    { country: 'South Africa', lat: -30, lng: 22, clients: 16, flag: '🇿🇦' },
    { country: 'Sweden', lat: 60, lng: 18, clients: 14, flag: '🇸🇪' },
    { country: 'New Zealand', lat: -40, lng: 174, clients: 12, flag: '🇳🇿' }
  ];

  // Convert lat/lng to SVG coordinates
  const latLngToSVG = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 800;
    const y = ((90 - lat) / 180) * 400;
    return { x, y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const totalClients = clientLocations.reduce((sum, location) => sum + location.clients, 0);

  return (
    <section className="py-24 bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Global
            <br />
            <span 
              className="text-primary"
              style={{
                background: 'linear-gradient(135deg, #ff0040 0%, #ff1493 50%, #dc143c 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              CHAMPIONS
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering transformations across {clientLocations.length}+ countries. 
            From different continents to massive physical results, we bring change that speaks for itself.
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div
          ref={mapRef}
          className="relative bg-charcoal-light/30 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredCountry(null)}
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,0,64,0.1)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* World Map SVG */}
          <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255,0,64,0.3))' }}
            >
              {/* Simplified World Map Outline */}
              <g fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                {/* Continents - Simplified geometric shapes */}
                {/* North America */}
                <path d="M 50 80 L 200 60 L 220 120 L 180 180 L 80 160 Z" className="continent" />
                {/* South America */}
                <path d="M 150 200 L 200 190 L 220 280 L 180 320 L 160 300 Z" className="continent" />
                {/* Europe */}
                <path d="M 350 60 L 420 50 L 440 100 L 400 120 L 340 110 Z" className="continent" />
                {/* Africa */}
                <path d="M 380 120 L 450 110 L 470 220 L 440 280 L 400 270 L 370 200 Z" className="continent" />
                {/* Asia */}
                <path d="M 450 50 L 650 40 L 680 150 L 620 180 L 440 160 L 430 80 Z" className="continent" />
                {/* Australia */}
                <path d="M 580 250 L 650 240 L 670 280 L 640 300 L 570 290 Z" className="continent" />
              </g>

              {/* Client Location Markers */}
              {clientLocations.map((location, index) => {
                const { x, y } = latLngToSVG(location.lat, location.lng);
                return (
                  <g key={location.country}>
                    {/* Pulsing Ring */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="15"
                      fill="none"
                      stroke="rgba(255,0,64,0.4)"
                      strokeWidth="2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    
                    {/* Main Marker */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="url(#markerGradient)"
                      className="cursor-pointer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 500 }}
                      whileHover={{ scale: 1.5 }}
                      onMouseEnter={() => setHoveredCountry(location)}
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(255,0,64,0.8))'
                      }}
                    />
                    
                    {/* Glow Effect */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="3"
                      fill="rgba(255,255,255,0.9)"
                      animate={{
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1
                      }}
                    />
                  </g>
                );
              })}

              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="markerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff1493" />
                  <stop offset="50%" stopColor="#ff0040" />
                  <stop offset="100%" stopColor="#dc143c" />
                </radialGradient>
              </defs>
            </svg>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {clientLocations.map((location, index) => {
                if (index === 0) return null;
                const current = latLngToSVG(location.lat, location.lng);
                const previous = latLngToSVG(clientLocations[index - 1].lat, clientLocations[index - 1].lng);
                
                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={previous.x}
                    y1={previous.y}
                    x2={current.x}
                    y2={current.y}
                    stroke="rgba(255,0,64,0.2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: index * 0.3 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Hover Tooltip */}
          {hoveredCountry && (
            <motion.div
              className="absolute pointer-events-none z-20 bg-charcoal/95 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 shadow-2xl"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 60,
                boxShadow: '0 0 30px rgba(255,0,64,0.3)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{hoveredCountry.flag}</span>
                <h3 className="text-white font-bold text-lg">{hoveredCountry.country}</h3>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Users className="w-4 h-4" />
                <span className="font-semibold">{hoveredCountry.clients} Champions</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { 
              icon: Globe, 
              label: 'Countries', 
              value: `${clientLocations.length}+`, 
              color: 'text-green-400',
              description: 'Global Presence'
            },
            { 
              icon: Users, 
              label: 'Total Champions', 
              value: `${totalClients.toLocaleString()}+`, 
              color: 'text-primary',
              description: 'Transformed Lives'
            },
            { 
              icon: MapPin, 
              label: 'Avg Transformation', 
              value: '29 lbs', 
              color: 'text-yellow-400',
              description: 'Average Results'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-charcoal-light/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative mb-6">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto relative z-10`} />
                <div className={`absolute inset-0 ${stat.color.replace('text-', 'bg-').replace('-400', '-400/20')} blur-xl scale-150 animate-pulse`} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <div className="text-white/40 text-xs">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-primary/90 transition-all duration-300 flex items-center space-x-3 mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px rgba(255,0,64,0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
          >
            <Globe className="w-6 h-6" />
            <span>Join Our Global Community</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveWorldMap;