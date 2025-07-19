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
        {/* Text Left */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4">Certified Trainers</h2>
          <p className="text-lg mb-6">Our top coaches are internationally certified with years of experience delivering results.</p>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-300">
            <li>ACE & ISSA Certified</li>
            <li>Transformation Experts</li>
            <li>Personalised Coaching Plans</li>
            <li>Strength & Conditioning Specialists</li>
          </ul>
        </div>

        {/* Card Stack */}
        <div className="relative w-[350px] h-[500px]" ref={containerRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-stack-item absolute top-0 left-0 w-full h-full bg-[#1a1a2e] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-end pb-6"
              style={{ zIndex: testimonials.length - index }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
              />
              <div className="z-10 text-white text-lg md:text-xl font-bold bg-black/60 px-4 py-2 rounded-full">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStackShowcase;
