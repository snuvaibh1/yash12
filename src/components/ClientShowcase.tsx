import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    week: 'Week 1',
    image: 'https://i.imgur.com/uDHKp5Q.jpg',
    quote:
      '"I struggled staying consistent and lacked discipline. A few good days were always followed by a bad weekend of letting go of everything".',
  },
  {
    week: 'Week 1',
    image: 'https://i.imgur.com/W4Avvpp.jpg',
    quote:
      '"My eating habits are not very healthy. I am not always motivated for workouts, my eating habits and overall lifestyle is not very sorted."',
  },
  {
    week: 'Week 12',
    image: 'https://i.imgur.com/qH2syg4.jpg',
    quote:
      '"I lost only 7 kgs in 3 months, but gained muscle as well during the process."',
  },
];

const stackVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 50 * (index + 1),
    scale: 0.95,
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: index * -50,
    scale: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const TransformationStack: React.FC = () => {
  return (
    <section className="bg-[#070711] text-white py-20 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 leading-tight">
          Real Transformations.<br />Real Results.
        </h2>
        <p className="text-gray-400 mt-4 text-base md:text-lg">
          These transformations speak louder than any promise.
          <br className="hidden md:block" />
          See what's possible when elite coaching meets unwavering commitment.
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="relative w-[300px] md:w-[400px] h-[600px] md:h-[700px]">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full p-4 bg-[#1b1b1f] text-white rounded-xl shadow-lg"
              custom={index}
              variants={stackVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={`Transformation ${index + 1}`}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <div className="bg-red-600 text-white px-3 py-1 rounded-full inline-block text-sm font-semibold mb-2">
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

export default TransformationStack;
