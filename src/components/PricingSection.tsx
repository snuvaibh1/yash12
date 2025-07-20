import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'CLC STANDARD',
      price: '₹18,000–₹21,000',
      duration: '3 months',
      popular: false,
      description: 'Perfect for beginners ready to start their transformation journey',
      features: [
        'Access to exclusive CLC app',
        'Goal oriented training regime',
        'Tailored Nutrition Plan',
        '24x7 WhatsApp support',
        'DIY Lifestyle Guides'
      ],
      buttonText: 'CLC STANDARD',
      color: 'from-charcoal to-charcoal-light'
    },
    {
      name: 'CLC PREMIUM',
      price: '₹37,500–₹48,000',
      duration: '3 months',
      popular: true,
      description: 'Our most popular program for serious transformations',
      features: [
        'Entire Standard Program',
        'Customised Recipe Book',
        'Customised Lifestyle Guides (8)',
        'Goal Setting',
        'Daily Check-ins',
        'Weekly Check-in calls',
        'In-depth analysis and live discussion'
      ],
      buttonText: 'Go CLC PREMIUM',
      color: 'from-primary/20 to-primary/5'
    },
    {
      name: 'Entire Premium Program',
      price: '₹36,500',
      duration: 'month',
      popular: false,
      description: 'Premium 1-on-1 coaching for ultimate results',
      features: [
        'Personal Offline Meeting​',
        'Entire Lifestyle revamp',
        'Calls without appointment',
        'Personalisation on a daily basis',
        'Communication skills',
        'Confidence building',
        'Grooming',
        'Shopping'
      ],
      buttonText: 'Premium Program',
      color: 'from-yellow-600/20 to-yellow-600/5'
    }
  ];

  const handleWhatsAppContact = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} coaching program. Can you tell me more?`;
    const whatsappUrl = `https://wa.me/919168302369?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-dark via-charcoal to-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Choose Your
            <br />
           <span className="text-accent-gold">Transformation Path</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Three proven pathways to your best self. Each program is designed to 
            deliver results, with the level of support that matches your commitment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-accent-gold text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <motion.div
                className={`
                  relative h-full rounded-3xl p-8 border transition-all duration-500
                  ${plan.popular 
                    ? 'border-accent-gold/50 bg-gradient-to-b from-accent-gold/10 to-charcoal-light/50' 
                    : 'border-white/10 bg-charcoal-light/50'
                  }
                  ${hoveredPlan === index ? 'transform scale-105 border-accent-gold/50' : ''}
                `}
                style={{ backdropFilter: 'blur(10px)' }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-white">
                        {plan.price}
                      </span>
                      {plan.duration && (
                        <span className="text-white/60 ml-2">
                          /{plan.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent-gold" />
                        </div>
                        <span className="text-white/80 text-sm">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`
                      w-full py-4 rounded-full font-bold text-lg transition-all duration-300
                      ${plan.popular 
                        ? 'bg-accent-gold text-black hover:bg-accent-gold-dark hover:shadow-lg hover:shadow-accent-gold/25' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>{plan.buttonText}</span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-white/70 mb-6">
              Let's have a quick chat to determine the best path for your goals.
            </p>
            <motion.button
              className="bg-accent-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-accent-gold-dark transition-colors flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
