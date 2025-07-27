import React from 'react';

const TransformationsScroll: React.FC = () => {
  const images = [
    'https://i.imgur.com/ejGkRPD.png',
    'https://i.imgur.com/YqEw9Ly.png',
    'https://i.imgur.com/Fco7af5.png',
    'https://i.imgur.com/z6wu93c.png',
    'https://i.imgur.com/WfdjwtB.png',
    'https://i.imgur.com/ImXGds7.png',
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 px-6 md:px-10 text-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">Real Results.</h2>
        <p className="text-gray-400 text-base md:text-lg mt-3">
          These transformations speak louder than any promise.
          <br className="hidden md:block" />
          See what's possible when elite coaching meets commitment.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-2 md:px-6">
          {images.map((src, index) => (
            <div key={index} className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px] flex-shrink-0">
              <img
                src={src}
                alt={`Transformation ${index + 1}`}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;
