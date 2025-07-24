import React from 'react';
import { motion } from 'framer-motion';

const transformationImages = [
  'https://i.imgur.com/xdDHr1d.png',
  'https://i.imgur.com/fZybstc.png',
  'https://i.imgur.com/Z9BGSDc.png',
  'https://i.imgur.com/4gsMTWZ.png',
  'https://i.imgur.com/fcFnYkT.png',
  'https://i.imgur.com/rPY5R0t.png',
  'https://i.imgur.com/5UHjNx6.png',
  'https://i.imgur.com/PzriAqH.png',
  'https://i.imgur.com/vAoSDI1.png',
  'https://i.imgur.com/m9THm2A.png',
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
          {transformationImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateY: 10, rotateX: -5 }}
              transition={tiltTransition}
              className="bg-[#1c1c22] rounded-xl p-4 w-[260px] min-w-[260px] shadow-lg transform-style-preserve-3d"
            >
              <img
                src={img}
                alt={`Transformation ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;
