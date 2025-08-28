import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fps: 60,
    memoryUsage: 0,
    loadTime: 0
  });

  useEffect(() => {
    const startTime = performance.now();

    // Optimize images with lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Performance monitoring
    const monitorPerformance = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setPerformanceMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1048576), // MB
          loadTime: Math.round(performance.now() - startTime)
        }));
      }
    };

    // FPS monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setPerformanceMetrics(prev => ({
          ...prev,
          fps: Math.round(frameCount * 1000 / (currentTime - lastTime))
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };

    measureFPS();
    
    const performanceTimer = setInterval(monitorPerformance, 2000);

    return () => {
      clearInterval(performanceTimer);
      imageObserver.disconnect();
    };
  }, []);

  // GPU acceleration check
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported - falling back to CPU rendering');
    } else {
      console.log('WebGL supported - GPU acceleration enabled');
    }

    // Preload critical resources
    const criticalImages = [
      'https://i.imgur.com/RXWtz5S.png', // Logo
      'https://i.imgur.com/JNHqgCV.png'  // Hero background
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
      }}
    >
      {children}
    </motion.div>
  );
};

export default PerformanceOptimizer;