import React from 'react';

const TransformationsScroll: React.FC = () => {
  const slides = [
    { url: 'https://i.imgur.com/Hs5pe8f.jpeg', label: 'New York' },
    { url: 'https://i.imgur.com/2z3NjwB.jpeg', label: 'Good Boy' },
    { url: 'https://i.imgur.com/tVPLnb3.jpeg', label: 'Coastline' },
    { url: 'https://i.imgur.com/WMPbmml.jpeg', label: 'Palm Trees' },
    { url: 'https://i.imgur.com/PG8o7AP.jpeg', label: 'City Lights' },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 md:px-10 text-white">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Real Results.</h2>
        <p className="text-gray-400 text-base md:text-lg mt-3">
          These transformations speak louder than any promise.
          <br className="hidden md:block" />
          See what's possible when elite coaching meets commitment.
        </p>
      </div>

      {/* Scrollable Slider */}
      <div className="overflow-x-auto scrollbar-hide mb-12">
        <div className="flex gap-6 px-6 md:px-20 w-max">
          {slides.map((slide, idx) => (
            <div key={idx} className="flex-shrink-0 w-64">
              <div className="rounded-2xl overflow-hidden bg-[#1c1c22] shadow-xl w-full h-48">
                <img
                  src={slide.url}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm mt-2 text-white">{slide.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid */}
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
