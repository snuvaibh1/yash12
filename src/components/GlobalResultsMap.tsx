import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Target, Globe } from 'lucide-react';

const GlobalResultsMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

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

  const liveUpdates = [
    { flag: '🇲🇹', countryCode: ' ', city: 'Malta', name: 'Satheesh', result: 'Disciplined', timeframe: ' ', summary: 'Managed work & life while staying consistent.' },
    { flag: '🇩🇪', countryCode: ' ', city: 'Germany', name: 'Vikram', result: 'In Control', timeframe: ' ', summary: 'Now balanced & thriving after inconsistency.' },
    { flag: '🇫🇷', countryCode: ' ', city: 'France', name: 'Shridhar', result: 'Pain-Free', timeframe: ' ', summary: 'Now pain-free and stronger than ever.' },
    { flag: '🏴', countryCode: ' ', city: 'Scotland', name: 'Pravin', result: 'More Confident', timeframe: ' ', summary: 'Feels more confident inside and out.' },
    { flag: '🇨🇦', countryCode: ' ', city: 'Canada', name: 'Toushaar', result: '7kg Lost', timeframe: ' ', summary: '102kg → 94.5kg with steady progress.' },
    { flag: '🇦🇺', countryCode: ' ', city: 'Australia', name: 'Prakhar', result: '5kg Lost', timeframe: ' ', summary: 'Balanced job & lost 5kg abroad.' },
    { flag: '🇺🇸', countryCode: ' ', city: 'USA', name: 'Yash Patel', result: '8.4kg Lost', timeframe: ' ', summary: '99.1kg → 90.7kg in 3 months..' },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.gstatic.com/external_hosted/leaflet/leaflet.js";
    script.onload = () => {
      const L = (window as any).L;
      const map = L.map('map').setView([20.5937, 78.9629], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      transformationLocations.forEach((location) => {
        const marker = L.marker([
          parseFloat(location.coordinates.top),
          parseFloat(location.coordinates.left)
        ]).addTo(map);
        marker.bindPopup(`<b>${location.city}</b><br>${location.testimonial}`);
      });
    };
    document.head.appendChild(script);
  }, []);

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

        {/* Custom Map Section */}
        <motion.div
          style={{ scale, opacity }}
          className="relative bg-bg-panel/50 backdrop-blur-sm rounded-3xl border border-border-secondary overflow-hidden mb-8"
        >
          <div className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src="https://i.imgur.com/DaOn27P.png"
              alt="Global Transformation Network Map"
              className="w-full h-auto object-contain rounded-2xl max-w-full"
              style={{
                maxHeight: 'none',
                minHeight: 'auto'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Live Updates */}
        <div className="mt-16 bg-black rounded-2xl p-4 md:p-8 border border-accent-gold/20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center sticky top-0 bg-black/90 backdrop-blur-sm py-2 rounded-lg">
            Live Transformation Updates
          </h3>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4 snap-x snap-mandatory" style={{ width: 'max-content' }}>
              {liveUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  className="relative w-[280px] flex-shrink-0 snap-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="h-full p-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-accent-gold/30 shadow-2xl relative overflow-hidden group hover:border-accent-gold/50 transition-all duration-300">
                    <div className="absolute top-3 right-3 flex items-center space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-accent-gold rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-accent-gold font-bold">LIVE</span>
                    </div>

                    <div className="mb-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{update.flag}</span>
                        <span className="text-xs text-white/60 font-semibold">{update.countryCode}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg leading-tight">{update.city}</h4>
                      <p className="text-white/60 text-sm">{update.name}</p>
                    </div>

                    <div className="mb-3">
                      <div className="inline-flex items-center px-3 py-1.5 bg-accent-gold/20 backdrop-blur-sm rounded-full border border-accent-gold/40">
                        <span className="text-accent-gold font-bold text-sm">{update.result}</span>
                        <span className="text-white/60 text-xs ml-2">in {update.timeframe}</span>
                      </div>
                    </div>

                    <p className="text-white/80 text-xs leading-relaxed">{update.summary}</p>

                    <div className="absolute inset-0 bg-accent-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalResultsMap;
