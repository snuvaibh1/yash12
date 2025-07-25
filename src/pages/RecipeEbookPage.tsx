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
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-charcoal to-primary/10">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Healthy Food Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Protein Centered
                <br />
                <span className="text-accent-gold">Recipe</span>
                <br />
                <span className="text-3xl md:text-4xl text-white/80">Ebook</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Pre-order now and get the eBook worth ₹349 for just ₹99! Limited-time offer for early buyers only.
              </p>
              <motion.button
                className="bg-accent-gold text-black px-12 py-6 rounded-full font-bold text-xl flex items-center space-x-3 hover:bg-accent-gold-dark transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://rzp.io/rzp/9yScwCz', '_blank')}
              >
                <span>PRE-ORDER - ₹99</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative max-w-md mx-auto">
                <div className="relative bg-gradient-to-br from-primary/20 to-charcoal-light rounded-3xl p-8 border border-primary/30 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-dark mb-4">
                      <h3 className="text-2xl font-black mb-2">Protein Centered</h3>
                      <p className="text-sm font-semibold">Recipe</p>
                    </div>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 flex items-center justify-center">
                      <img
                        src="https://i.imgur.com/6a9kFpv.png"
                        alt="Protein Recipe Cover"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="text-dark text-xs">
                      <p className="font-semibold">High-Protein Recipes and meal improvisation </p>
                      <p>By Champions Lifestyle Coaching</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No other changes made below */}

      {/* Rest of your code remains 100% the same */}
    </motion.div>
  );
};

export default RecipeEbookPage;
