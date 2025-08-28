import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ShredChallengePage = React.lazy(() => import('./pages/ShredChallengePage'));
const RecipeEbookPage = React.lazy(() => import('./pages/RecipeEbookPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-bg-primary flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-accent-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-text-secondary">Loading...</p>
    </div>
  </div>
);

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
          <React.Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/8w-shred-challenge" element={<ShredChallengePage />} />
                <Route path="/recipe-ebook" element={<RecipeEbookPage />} />
              </Routes>
            </AnimatePresence>
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </PerformanceOptimizer>
  );
}

export default App;