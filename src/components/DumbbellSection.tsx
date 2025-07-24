import React from 'react';

const features = [
  {
    title: 'Personalized Programs',
    description: 'gym workouts, home workouts, Travel/hotel room exercises, 20 minute work day circuits, everything!',
  },
  {
    title: 'Nutrition Mastery',
    description: 'Designed as per your eating habits, ethnicity, availability of ingredients, intolerances, cravings patterns, etc.',
  },
  {
    title: '24/7 Support',
    description: 'If you are a premium member, feel free to call anytime. If you are a standard member then 24/7 WhatsApp support. I am always one message away.',
  },
  {
    title: 'Progress tracking',
    description: 'Progress pictures, weight trackers, check-in sheets, weekly goal setting and multiple other approaches to keep you accountable and on-track.',
  },
];

const mobileOnlyCard = {
  title: 'Proven Results',
  description: 'The results speak for the program. You too will be an inspiration for someone else.',
};

const TrainingSystemSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase">
          CHAMPIONS LIFESTYLE
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-yellow-500 -mt-2">
          Training System
        </h3>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] p-6 rounded-xl border border-yellow-600"
          >
            <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Center graphics */}
      <div className="my-10 hidden md:flex justify-center items-center gap-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border-4 border-yellow-600" />
        <div className="w-20 h-6 bg-gradient-to-r from-gray-500 to-white rounded-md" />
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border-4 border-yellow-600" />
      </div>

      {/* Mobile only card */}
      <div className="md:hidden mt-6">
        <div className="bg-[#1c1c1c] p-6 rounded-xl border border-yellow-600">
          <h4 className="text-lg font-bold mb-2">{mobileOnlyCard.title}</h4>
          <p className="text-sm text-gray-300">{mobileOnlyCard.description}</p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSystemSection;
