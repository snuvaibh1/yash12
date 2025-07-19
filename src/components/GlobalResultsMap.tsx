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
    { id: 1, city: 'Mumbai', state: 'Maharashtra', clients: 127, avgTransformation: '32 lbs', coordinates: { top: '65%', left: '20%' }, testimonial: 'Mumbai clients achieving incredible results with our elite system.' },
    { id: 2, city: 'Delhi', state: 'Delhi', clients: 89, avgTransformation: '28 lbs', coordinates: { top: '35%', left: '25%' }, testimonial: 'Delhi transformations setting new standards across North India.' },
    { id: 3, city: 'Bangalore', state: 'Karnataka', clients: 156, avgTransformation: '35 lbs', coordinates: { top: '75%', left: '25%' }, testimonial: 'Bangalore tech professionals leading the transformation revolution.' },
    { id: 4, city: 'Chennai', state: 'Tamil Nadu', clients: 94, avgTransformation: '30 lbs', coordinates: { top: '80%', left: '30%' }, testimonial: 'Chennai dedication meets elite coaching excellence.' },
    { id: 5, city: 'Hyderabad', state: 'Telangana', clients: 73, avgTransformation: '26 lbs', coordinates: { top: '70%', left: '28%' }, testimonial: 'Hyderabad professionals achieving premium transformations.' },
    { id: 6, city: 'Pune', state: 'Maharashtra', clients: 112, avgTransformation: '29 lbs', coordinates: { top: '68%', left: '22%' }, testimonial: 'Pune fitness enthusiasts setting new transformation records.' },
    { id: 7, city: 'Kolkata', state: 'West Bengal', clients: 67, avgTransformation: '27 lbs', coordinates: { top: '55%', left: '40%' }, testimonial: 'Kolkata culture meets modern fitness transformation.' },
    { id: 8, city: 'Ahmedabad', state: 'Gujarat', clients: 85, avgTransformation: '31 lbs', coordinates: { top: '55%', left: '18%' }, testimonial: 'Gujarat entrepreneurial spirit driving fitness success.' }
  ];

  const statBoxes = [
    { icon: Users, label: 'World-wide Clients', value: '803+', color: 'text-blue-400' },
    { icon: Trophy, label: 'Success Rate', value: '98%', color: 'text-yellow-400' }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-charcoal via-dark to-charcoal relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* World Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {statBoxes.map((stat) => (
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
    </section>
  );
};

export default GlobalResultsMap;
