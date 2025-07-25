import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star } from 'lucide-react';

const RecipeEbookPage: React.FC = () => {
  const features = [
    'India-Friendly Eating-Out Choices',
    'Calorie & Protein Breakdown',
    'Tips to Eat Out Without Falling Off Track',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ebook
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Pre-order now and get the eBook worth ₹349 for just ₹99! Limited-time offer for early buyers only.
            </p>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-yellow-400 w-5 h-5 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full flex items-center">
              PRE-ORDER - ₹99 <ArrowRight className="ml-2" />
            </button>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/mnt/data/d9d662ee-7f23-4ef0-b1af-332dc8af2be5.png"
              alt="Ebook Cover"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="text-center py-20">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 w-6 h-6 mx-1" />
          ))}
        </div>
        <hr className="w-24 border-yellow-400 mx-auto" />
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold mb-2">Champions Lifestyle</h3>
            <p>
              Empowering transformations around the globe. From different countries to massive physical results,
              we bring change that speaks for itself.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Programs</li>
              <li>Results</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>championlifestyle.yash@gmail.com</p>
            <p>+91 91683 02369</p>
          </div>
        </div>
        <div className="text-center mt-10 text-gray-500">
          © 2024 Champions Lifestyle. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
};

export default RecipeEbookPage;

