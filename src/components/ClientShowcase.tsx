import React from 'react';

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

      <div className="flex justify-center">
        <div className="bg-[#1c1c22] rounded-xl p-4 shadow-lg max-w-3xl w-full">
          <img
            src="https://i.imgur.com/PG8o7AP.jpeg"
            alt="Transformation"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TransformationsScroll;
