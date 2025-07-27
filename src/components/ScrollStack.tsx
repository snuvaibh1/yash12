import React, { useRef, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

interface ScrollStackItemProps {
  name: string;
  location: string;
  achievement: string;
  index: number;
  style: React.CSSProperties;
}

const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ 
  name, 
  location, 
  achievement, 
  index,
  style
}) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: `${20 + index * 10}px`,
        zIndex: 100 - index,
        marginBottom: index === 6 ? '0' : '-120px',
        willChange: 'transform, filter',
        transform: 'translateZ(0)',
        ...style
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '24px',
          padding: '32px',
          maxWidth: '400px',
          margin: '0 auto',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${50 + Math.sin(Date.now() * 0.001) * 20}% ${50 + Math.cos(Date.now() * 0.001) * 20}%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)`,
            borderRadius: '24px',
            pointerEvents: 'none',
          }}
        />
        
        {/* Live indicator */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#D4AF37',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#D4AF37',
              letterSpacing: '0.5px',
            }}
          >
            LIVE
          </span>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3
            style={{
              fontSize: '28px',
              fontWeight: '900',
              color: '#FFFFFF',
              marginBottom: '8px',
              letterSpacing: '-0.5px',
            }}
          >
            {name}
          </h3>
          
          <p
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#D4AF37',
              marginBottom: '16px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {location}
          </p>
          
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            {achievement}
          </p>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            width: '40px',
            height: '2px',
            background: 'linear-gradient(90deg, #D4AF37, transparent)',
            borderRadius: '1px',
          }}
        />
      </div>
    </div>
  );
};

interface ScrollStackProps {
  cards: Array<{
    name: string;
    location: string;
    achievement: string;
  }>;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const isUpdatingRef = useRef(false);
  const [cardStyles, setCardStyles] = useState<React.CSSProperties[]>(
    cards.map(() => ({}))
  );

  const updateCardTransforms = () => {
    if (isUpdatingRef.current || !containerRef.current) return;
    isUpdatingRef.current = true;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = container.offsetHeight;
    
    // Calculate progress based on container position
    const progress = Math.max(0, Math.min(1, 
      (windowHeight - rect.top) / (windowHeight + containerHeight)
    ));

    const newStyles = cards.map((_, index) => {
      // Calculate animation values based on scroll progress and card index
      const cardProgress = Math.max(0, Math.min(1, (progress - index * 0.1) * 2));
      const scale = 1 - cardProgress * 0.1;
      const blur = cardProgress * 8;
      const opacity = 1 - cardProgress * 0.3;
      const translateY = cardProgress * -50;
      
      return {
        transform: `translateY(${translateY}px) scale(${scale}) translateZ(0)`,
        filter: `blur(${blur}px)`,
        opacity,
        transition: 'none',
        willChange: 'transform, filter',
      };
    });

    setCardStyles(newStyles);
    isUpdatingRef.current = false;
  };

  useEffect(() => {
    // Ensure body doesn't scroll
    const originalBodyStyle = document.body.style.overflow;
    const originalHtmlStyle = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Initialize Lenis on the container
    if (containerRef.current) {
      lenisRef.current = new Lenis({
        wrapper: containerRef.current,
        content: containerRef.current.firstElementChild as HTMLElement,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      // Add passive scroll fallback
      containerRef.current.addEventListener('scroll', updateCardTransforms, { passive: true });
    }

    // Unified RAF loop
    const animate = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      updateCardTransforms();
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    // Initial update after mount
    setTimeout(updateCardTransforms, 100);

    // Resize handler
    const handleResize = () => {
      updateCardTransforms();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', updateCardTransforms);
      }
      window.removeEventListener('resize', handleResize);
      
      // Restore body scroll
      document.body.style.overflow = originalBodyStyle;
      document.documentElement.style.overflow = originalHtmlStyle;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(10, 10, 10, 1) 100%)',
      }}
    >
      <div
        style={{
          minHeight: '200vh',
          padding: '100px 20px',
          position: 'relative',
        }}
      >
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '100px',
            position: 'sticky',
            top: '0',
            zIndex: 200,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)',
            paddingBottom: '50px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: '900',
              color: '#FFFFFF',
              marginBottom: '16px',
              letterSpacing: '-1px',
            }}
          >
            Live Transformation
            <br />
            <span style={{ color: '#D4AF37' }}>Updates</span>
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Real-time success stories from our global community of champions
          </p>
        </div>

        {/* Card stack */}
        <div
          style={{
            position: 'relative',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          {cards.map((card, index) => (
            <ScrollStackItem
              key={index}
              name={card.name}
              location={card.location}
              achievement={card.achievement}
              index={index}
              style={cardStyles[index] || {}}
            />
          ))}
        </div>

        {/* Add keyframes for pulse animation */}
        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default ScrollStack;