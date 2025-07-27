import React from 'react';
import { motion } from 'framer-motion';

const transformationImages = [
  { src: 'https://i.imgur.com/ejGkRPD.png', alt: 'Transformation 1' },
  { src: 'https://i.imgur.com/YqEw9Ly.png', alt: 'Transformation 2' },
  { src: 'https://i.imgur.com/Fco7af5.png', alt: 'Transformation 3' },
  { src: 'https://i.imgur.com/z6wu93c.png', alt: 'Transformation 4' },
  { src: 'https://i.imgur.com/WfdjwtB.png', alt: 'Transformation 5' },
  { src: 'https://i.imgur.com/ImXGds7.png', alt: 'Transformation 6' },
];

const TransformationsScroll: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-10 text-white">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Real Results.</h2>
        <p className="text-gray-400 text-base md:text-lg mt-3">
          These transformations speak louder than any promise.
          <br className="hidden md:block" />
          See what's possible when elite coaching meets commitment.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-2 md:px-8">
          {transformationImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-60 md:w-72"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="my-14" />

      {/* Testimonial Collage */}
      <div className="flex justify-center">
        <div className="bg-[#1c1c22] rounded-xl p-4 shadow-lg max-w-3xl w-full">
          <img
            src="https://i.imgur.com/PG8o7AP.jpeg"
            alt="Transformation Collage"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;

