import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CacheManager } from '../utils/cacheManager';

interface CacheManagerProps {
  children: React.ReactNode;
}

const CacheManagerComponent: React.FC<CacheManagerProps> = ({ children }) => {
  const [isClearing, setIsClearing] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const cacheManager = CacheManager.getInstance();

  useEffect(() => {
    // Check if cache should be cleared on app start
    if (cacheManager.shouldClearCache()) {
      handleCacheClear();
    }

    // Show clear cache button in development or if performance issues detected
    const isDevelopment = process.env.NODE_ENV === 'development';
    const hasPerformanceIssues = checkPerformanceIssues();
    
    if (isDevelopment || hasPerformanceIssues) {
      setShowClearButton(true);
    }

    // Register service worker
    registerServiceWorker();
  }, []);

  const checkPerformanceIssues = (): boolean => {
    // Simple performance check
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationTiming) {
      const loadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
      return loadTime > 5000; // If load time > 5 seconds
    }
    return false;
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registered:', registration);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  };

  const handleCacheClear = async () => {
    setIsClearing(true);
    
    try {
      // Clear all types of cache
      await cacheManager.clearBrowserCache();
      await cacheManager.clearServiceWorkerCache();
      cacheManager.clearImageCache();
      
      // Show success message
      console.log('Cache cleared successfully');
      
      // Optional: Reload page after clearing
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (error) {
      console.error('Error clearing cache:', error);
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <>
      {children}
      
      {/* Cache Clear Button - Only show when needed */}
      {showClearButton && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={handleCacheClear}
            disabled={isClearing}
            className={`
              px-4 py-2 rounded-full font-semibold text-sm shadow-lg
              ${isClearing 
                ? 'bg-gray-500 text-white cursor-not-allowed' 
                : 'bg-red-600 text-white hover:bg-red-700'
              }
              transition-colors duration-200
            `}
            whileHover={!isClearing ? { scale: 1.05 } : {}}
            whileTap={!isClearing ? { scale: 0.95 } : {}}
          >
            {isClearing ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Clearing...</span>
              </div>
            ) : (
              'Clear Cache'
            )}
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default CacheManagerComponent;