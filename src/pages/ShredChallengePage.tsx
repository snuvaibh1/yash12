import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Dumbbell, Target, Brain, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShredChallengePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const roadmapImages = [
    'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const features = [
    {
      icon: Dumbbell,
      title: 'DIY Workouts',
      description: 'Complete workout plans designed for maximum fat burn and muscle definition'
    },
    {
      icon: Target,
      title: 'Nutrition Systems',
      description: 'Precision nutrition protocols to fuel your transformation and accelerate results'
    },
    {
      icon: Brain,
      title: 'Mindset & Coaching Frameworks',
      description: 'Mental strategies and coaching techniques used by elite athletes'
    },
    {
      icon: MapPin,
      title: 'Prize: Goa Beach Party Access',
      description: 'Win an all-expenses-paid trip to Goa with exclusive beach party access'
    }
  ];

  const faqs = [
    {
      question: 'How do I access the app?',
      answer: 'Once you join, you\'ll receive immediate access to our exclusive CLC app with all workout plans, nutrition guides, and tracking tools.'
    },
    {
      question: 'What if I miss a workout?',
      answer: 'No worries! The program is flexible. You can catch up on missed workouts, and our coaches provide alternative schedules to keep you on track.'
    },
    {
      question: 'How is the Goa winner selected?',
      answer: 'Winners are selected based on overall transformation progress, consistency, and community engagement throughout the 8-week challenge.'
    }
  ];

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in joining the 8W Shreds For Shores Challenge. Can you tell me more?";
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
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Beach Transformation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/80" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            8W SHREDS
            <br />
           <span className="text-accent-gold">FOR SHORES</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            High-impact 8-week shred program by Cult Lifestyle Coaching
            <br />
           🏖️ <span className="text-accent-gold font-bold">Win an all-expenses-paid trip to Goa</span>
          </motion.p>

          <motion.button
           className="bg-accent-gold text-black px-12 py-6 rounded-full font-bold text-xl flex items-center space-x-3 mx-auto hover:bg-accent-gold-dark transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
           whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://rzp.io/rzp/iyo0cIL0', '_blank')}
          >
            <span>Join Now – ₹6,969</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* What You Get Section */}
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
              What You
              <br />
              <span className="text-primary">Get</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 bg-charcoal-light/50 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 relative">
                  <feature.icon className="w-full h-full text-primary" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8W Roadmap Section */}

      {/* Why It Works Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              Why It
              <br />
              <span className="text-primary">Works</span>
            </h2>
            
            <motion.blockquote
              className="text-2xl md:text-4xl font-bold text-white/90 leading-relaxed mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              "It's more than a shred. It's a full-body and mindset transformation."
            </motion.blockquote>
            
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Join the Challenge Section */}
      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Join The
              <br />
              <span className="text-primary">Challenge</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Train smart. Get shredded. Earn your spot on the beach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <motion.button
                className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl flex items-center space-x-3 hover:bg-primary/90 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 64, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://rzp.io/rzp/iyo0cIL0', '_blank')}
              >
                <span>Secure My Spot – ₹6,969</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                className="bg-charcoal-light text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-charcoal transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://rzp.io/rzp/iyo0cIL0', '_blank')}
              >
                <span>Join now</span>
              </motion.button>
            </div>
            
            <motion.button
              className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl flex items-center space-x-3 mx-auto hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 64, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.championlifestylecoaching.com/_files/ugd/5d66bb_ea9c9f665b994a40a18fdfd7c563f7f1.pdf', '_blank')}
            >
              <span>Roadmap</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              FAQ &
              <br />
              <span className="text-primary">Support</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-white/80 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Coaching CTA */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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

export default ShredChallengePage;