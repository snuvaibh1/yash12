import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Target, Activity, MessageCircle } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const BodyTypeQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string>('');

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What's your current primary fitness goal?",
      options: [
        "Lose weight and burn fat",
        "Build muscle and strength",
        "Improve overall fitness",
        "Transform my entire physique"
      ]
    },
    {
      id: 2,
      question: "How would you describe your current body type?",
      options: [
        "Naturally thin, hard to gain weight",
        "Average build, can gain/lose weight moderately",
        "Curvy/stocky, tends to store fat easily",
        "Athletic but need refinement"
      ]
    },
    {
      id: 3,
      question: "What's your experience with structured fitness programs?",
      options: [
        "Complete beginner",
        "Some experience, inconsistent results",
        "Experienced but plateau'd",
        "Advanced, need expert guidance"
      ]
    },
    {
      id: 4,
      question: "How much time can you realistically commit to training per week?",
      options: [
        "2-3 hours",
        "4-5 hours",
        "6-8 hours",
        "8+ hours"
      ]
    },
    {
      id: 5,
      question: "What's your biggest challenge with previous fitness attempts?",
      options: [
        "Lack of proper guidance",
        "Inconsistent motivation",
        "Not seeing results fast enough",
        "Balancing with busy lifestyle"
      ]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: number[]) => {
    // Simple algorithm to determine recommended program
    const total = allAnswers.reduce((sum, answer) => sum + answer, 0);
    const average = total / allAnswers.length;

    if (average < 1) {
      setResult('CLC STANDARD');
    } else if (average < 2) {
      setResult('CLC PREMIUM Program');
    } else {
      setResult('Entire Premium Program');
    }
    
    setShowResult(true);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setResult('');
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I just completed the body type assessment and my recommended program is: ${result}. I'd like to learn more about getting started.`;
    const whatsappUrl = `https://wa.me/919168302369?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Find Your Perfect
            <br />
            <span className="text-primary">Training Program</span>
          </h2>
          <p className="text-xl text-white/80">
            Take our 60-second assessment to discover which program will deliver your best results
          </p>
        </motion.div>

        <div className="bg-charcoal-light/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/60 text-sm">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-white/60 text-sm">
                      {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-charcoal h-2 rounded-full">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className="w-full p-4 text-left bg-charcoal/50 hover:bg-charcoal border border-white/10 hover:border-primary/50 rounded-2xl transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/90 group-hover:text-white">
                          {option}
                        </span>
                        <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Back Button */}
                {currentQuestion > 0 && (
                  <motion.button
                    className="mt-8 flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                    onClick={goBack}
                    whileHover={{ x: -5 }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Question</span>
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 text-center"
              >
                {/* Result Header */}
                <motion.div
                  className="mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Your Recommended Program
                  </h3>
                  <div className="text-4xl md:text-5xl font-black text-primary mb-6">
                    {result}
                  </div>
                </motion.div>

                {/* Result Description */}
                <motion.div
                  className="mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                    Based on your responses, this program is specifically designed to address your goals, 
                    experience level, and lifestyle. You'll get the exact support and structure needed 
                    for your successful transformation.
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get Started Now</span>
                  </motion.button>
                  
                  <motion.button
                    className="bg-charcoal text-white px-8 py-4 rounded-full font-semibold hover:bg-charcoal/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetQuiz}
                  >
                    Retake Assessment
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BodyTypeQuiz;