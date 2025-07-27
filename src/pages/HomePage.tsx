import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import CinematicHero from '../components/CinematicHero';
import ParallaxSection from '../components/ParallaxSection';
import CoachSection from '../components/CoachSection';
import DumbbellSection from '../components/DumbbellSection';
import ClientShowcase from '../components/ClientShowcase';
import GlobalResultsMap from '../components/GlobalResultsMap';
import InstagramSection from '../components/InstagramSection';
import BodyTypeQuiz from '../components/BodyTypeQuiz';
import PricingSection from '../components/PricingSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove '#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CinematicHero />
      <ParallaxSection />
      <CoachSection />
      <DumbbellSection />
      <ClientShowcase />
      <GlobalResultsMap />
      <BodyTypeQuiz />
      <PricingSection />
      <InstagramSection />
    </motion.div>
  );
};

export default HomePage;