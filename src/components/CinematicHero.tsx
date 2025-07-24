import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top center',
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        buttonGroupRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      );
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: 'url(https://i.imgur.com/xnNusu7.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl font-extrabold text-yellow-400 leading-tight"
        >
          CHAMPION <br /> LIFESTYLE
        </h1>

        <p
          ref={subtextRef}
          className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto"
        >
          Want to be a part of TeamCLC? Watch this... <br />
          Your transformation begins with a single decision.
        </p>

        <div
          ref={buttonGroupRef}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {/* Calendly Link */}
          <a
            href="https://calendly.com/championlifestyle-yash/30min?month=2025-07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Begin Transformation →
          </a>

          {/* YouTube Video Link */}
          <a
            href="https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-full font-semibold text-white hover:bg-white hover:text-black transition"
          >
            ▶ Watch Transformations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
