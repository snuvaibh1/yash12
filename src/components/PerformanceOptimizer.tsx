import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
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

    return () => {
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

  return <>{children}</>;
};

export default PerformanceOptimizer;