import React from 'react';

const TransformationsScroll: React.FC = () => {
  const slides = [
    { url: 'https://i.imgur.com/syOglcV.png'},
    { url: 'https://ik.imagekit.io/wr1enblrm/ipV2FoJ_d.webp?updatedAt=1759757094636'},
    { url: 'https://i.imgur.com/pfOKWSS.png'},
    { url: 'https://i.imgur.com/5qNDU1a.png '},
    { url: 'https://i.imgur.com/dACYwmz.png'},
  ];

  return (
    <section id="results" className="bg-[#0a0a0a] py-20 px-6 md:px-10 text-white">
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
      <div
        className="overflow-x-auto mb-12"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE 10+
        }}
      >
        <div
          className="flex gap-6 px-6 md:px-20 w-max"
          style={{
            overflow: 'hidden',
          }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="flex-shrink-0 w-64">
              <div className="rounded-2xl overflow-hidden bg-[#1c1c22] shadow-xl w-full h-72">
                <img
                  src={slide.url}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Hide scrollbar for Webkit (Chrome, Safari) */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Blue Line Message */}
      <div className="text-center text-gray-300 text-lg font-bold mb-10 px-6">
        Hundreds have already transformed, your journey could be next.
      </div>

      {/* Static Testimonial Grid */}
{/* Static Testimonial Grid */}
<div className="flex justify-center">
  <div className="bg-[#1c1c22] shadow-lg w-[100%] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] rounded-xl">
    <img
      src="https://i.imgur.com/rZXPtlF.jpeg" 
      alt="Testimonial Collage"
      className="w-full h-auto object-cover rounded-lg"
      loading="lazy"
      decoding="async"
    />
  </div>
</div>


    </section>
  );
};

export default TransformationsScroll;