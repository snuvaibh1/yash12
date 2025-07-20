import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ShredChallengePage from './pages/ShredChallengePage';
import RecipeEbookPage from './pages/RecipeEbookPage';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Performance optimizations
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enable GPU acceleration for the entire app
    document.body.style.transform = 'translateZ(0)';
    document.body.style.backfaceVisibility = 'hidden';
    document.body.style.perspective = '1000px';
  }, []);

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-bg-primary text-text-primary dark-theme">
        <Navigation />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/8w-shred-challenge" element={<ShredChallengePage />} />
              <Route path="/recipe-ebook" element={<RecipeEbookPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </PerformanceOptimizer>
  );
}

export default App;