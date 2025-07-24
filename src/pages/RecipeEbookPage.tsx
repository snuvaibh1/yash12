import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecipeEbookPage: React.FC = () => {
  const features = [
    'Easy-to-cook Meals',
    'Nutrition Breakdown for each recipe',
    'Designed for muscle gain & fat loss'
  ];

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in purchasing the Champions Fuel Recipe Ebook. Can you tell me more?";
    const whatsappUrl = `https://wa.me/919168302369?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
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
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                CHAMPIONS
                <br />
                <span className="text-accent-gold">FUEL</span>
                <br />
                <span className="text-3xl md:text-4xl text-white/80">Recipe Ebook</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Pre-order now and get the eBook worth ₹149 for just ₹99! Limited-time offer for early buyers only.
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

            {/* Ebook Cover */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative max-w-md mx-auto">
                {/* Ebook Cover Image */}
                <div className="relative bg-gradient-to-br from-primary/20 to-charcoal-light rounded-3xl p-8 border border-primary/30 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <div className="text-dark mb-4">
                      <h3 className="text-2xl font-black mb-2">CHAMPIONS FUEL</h3>
                      <p className="text-sm font-semibold">Recipe Ebook</p>
                    </div>
                    
                    {/* Food Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 flex items-center justify-center">
                      <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Healthy Meal"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="text-dark text-xs">
                      <p className="font-semibold">25+ High-Protein Recipes</p>
                      <p>By Champions Lifestyle Coaching</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
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

      {/* What's Inside Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              What's
              <br />
              <span className="text-primary">Inside</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                className="text-center p-8 bg-charcoal-light/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  ✅ {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-b from-dark to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <motion.blockquote
              className="text-2xl md:text-4xl font-bold text-white/90 leading-relaxed mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
               
            </motion.blockquote>
            
            <div className="text-white/60 text-lg">
               
            </div>
            
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Start Eating Like A
              <br />
              <span className="text-primary">Champion</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Transform your nutrition, transform your results.
            </p>
            
            <motion.button
              className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl flex items-center space-x-3 mx-auto hover:bg-primary/90 transition-all duration-300 mb-8"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 64, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://rzp.io/rzp/9yScwCz', '_blank')}
            >
              <span>PRE-ORDER NOW – ₹99</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            {/* Back to Home Link */}
            <Link
              to="/"
              className="inline-flex items-center space-x-3 bg-charcoal-light text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-charcoal transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Champion Coaching</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default RecipeEbookPage;