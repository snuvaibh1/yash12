import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    week: 'Week 1',
    image: '/images/transform-1.png', // replace with actual image path
    quote: '“I struggled staying consistent and lacked discipline. A few good days were always followed by a bad weekend of letting go of everything.”',
  },
  {
    week: 'Week 4',
    image: '/images/transform-2.png',
    quote: '“My eating habits are not very healthy. I am not always motivated for workouts, my eating habits and overall lifestyle is not very sorted.”',
  },
  {
    week: 'Week 12',
    image: '/images/transform-3.png',
    quote: '“I lost only 7 kgs in 3 months, but gained muscle as well during the process.”',
  },
];

const tiltTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const TransformationsScroll: React.FC = () => {
  return (
    <section className="bg-[#070711] py-20 px-6 md:px-10 text-white">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Real Results.</h2>
        <p className="text-gray-400 text-base md:text-lg mt-3">
          These transformations speak louder than any promise.
          <br className="hidden md:block" />
          See what's possible when elite coaching meets commitment.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-4 md:px-0 w-max">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 10, rotateX: -5 }}
              transition={tiltTransition}
              className="bg-[#1c1c22] rounded-xl p-4 w-[260px] min-w-[260px] shadow-lg transform-style-preserve-3d"
            >
              <img
                src={item.image}
                alt={`Transformation ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-red-600 inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {item.week}
              </div>
              <p className="text-sm text-gray-300">{item.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;
