import React, { useState, useEffect } from 'react';

const TransformationsScroll: React.FC = () => {
  const images = [
    'https://i.imgur.com/Hs5pe8f.jpeg',
    'https://i.imgur.com/2z3NjwB.jpeg',
    'https://i.imgur.com/tVPLnb3.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

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

      {/* ⬇️ Slideshow */}
      <div className="w-full max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* ⬇️ Transformation Grid */}
      <div className="flex justify-center">
        <div className="bg-[#1c1c22] rounded-xl p-4 shadow-lg max-w-3xl w-full">
          <img
            src="https://i.imgur.com/PG8o7AP.jpeg"
            alt="Transformation Grid"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;
