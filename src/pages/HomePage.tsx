import React from 'react';
import { motion } from 'framer-motion';
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
      <InstagramSection />
      <BodyTypeQuiz />
      <PricingSection />
    </motion.div>
  );
};

export default HomePage;