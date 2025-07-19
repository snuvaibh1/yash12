import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    name: 'Akhil Jamwal',
    image: 'https://i.imgur.com/3YhHECe.png',
  },
  {
    name: 'Jeetu Naik',
    image: 'https://i.imgur.com/g7n7IJi.jpeg',
  },
  {
    name: 'Joel',
    image: 'https://i.imgur.com/gye7S1r.png',
  },
  {
    name: 'Romell',
    image: 'https://i.imgur.com/miPEVL9.jpeg',
  },
];

const CardStackShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll('.card-stack-item')) as HTMLElement[];
    let cardOrder = [...cards];

    const animate = () => {
      const first = cardOrder[0];

      gsap.to(first, {
        y: 700,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          container.appendChild(first);
          gsap.set(first, { y: -700, opacity: 0 });
          gsap.to(first, { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' });

          cardOrder.push(cardOrder.shift()!);

          cardOrder.forEach((card, i) => {
            gsap.set(card, { zIndex: cards.length - i });
          });
        },
      });
    };

    const interval = setInterval(animate, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0C0C15] py-24 px-6 text-white overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Real Transformations.
            <br />
            <span className="text-red-500">Real Results.</span>
          </h2>
          <p className="text-lg text-white/70">
            These transformations speak louder than any promise. See what's possible
            when elite coaching meets unwavering commitment.
          </p>
        </div>

        {/* Card Stack */}
        <div
          className="relative w-[400px] h-[520px] md:w-[400px] md:h-[520px]"
          ref={containerRef}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-stack-item absolute top-0 left-0 w-full h-full bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              style={{ zIndex: testimonials.length - i }}
            >
              {/* Browser Bar */}
              <div className="bg-[#1f2937] px-4 py-2 border-b border-white/10">
                <span className="text-white/70 text-xl font-semibold">{t.name}</span>
              </div>

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full rounded-b-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStackShowcase;
