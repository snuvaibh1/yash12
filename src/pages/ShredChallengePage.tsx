import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Dumbbell, Target, Brain, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShredChallengePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

      {/* 8W Roadmap Section with VIDEO */}
      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              The 8W
              <br />
              <span className="text-primary">Roadmap</span>
            </h2>
            <p className="text-xl text-white/80">Your Path to the Shores</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://streamable.com/e/6kq255"
                className="w-full h-full object-cover"
                frameBorder="0"
                allowFullScreen
                title="Transformation Roadmap Video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Week 1</h3>
                <p className="text-white/80">Transformation Phase 1</p>
              </div>
            </motion.div>

            <div className="flex justify-center space-x-3 mt-8">
              <button className="w-3 h-3 rounded-full bg-primary scale-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections (Why It Works, Join, FAQ, CTA) */}
      {/* You can keep these unchanged from your current implementation */}
    </motion.div>
  );
};

export default ShredChallengePage;
