import React, { useState } from "react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What’s your main fitness goal?",
    options: ["Lose weight", "Build muscle", "Improve endurance", "General fitness"],
  },
  {
    id: 2,
    question: "How active are you right now?",
    options: ["Sedentary", "Lightly active", "Moderately active", "Very active"],
  },
  {
    id: 3,
    question: "Your favorite training style?",
    options: ["Strength training", "Cardio", "Mixed", "Yoga / Flexibility"],
  },
];

// Recommendation logic
const getRecommendedProgram = (answers: string[]) => {
  const [goal, activityLevel, style] = answers;

  if (goal === "Lose weight" && activityLevel === "Sedentary") {
    return "✨ CLC STANDARD – Perfect for beginners starting strong.";
  }
  if (goal === "Build muscle" && style === "Strength training") {
    return "🔥 CLC PREMIUM – Our most popular serious transformation plan.";
  }
  if (goal === "Improve endurance" || activityLevel === "Very active" || style === "Mixed") {
    return "🏆 ENTIRE PREMIUM – 1-on-1 elite coaching for ultimate results.";
  }
  return "⭐ CLC STANDARD – A great start to your journey.";
};

const BodyTypeQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full relative">
        {/* Animated golden border wrapper */}
        <div className="absolute inset-0 rounded-3xl p-[3px] animate-border-move bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"></div>

        {/* Quiz box (slightly different black) */}
        <div className="relative bg-neutral-900 rounded-3xl p-8">
          {showResults ? (
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-extrabold leading-tight">
                <span className="block text-white">Your</span>
                <span className="block text-yellow-400">Plan</span>
              </h2>
              <p className="text-xl font-medium text-yellow-200">{getRecommendedProgram(answers)}</p>

              <button
                onClick={resetQuiz}
                className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold py-3 rounded-2xl shadow-lg hover:scale-105 transition-all"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                  <span className="block text-white">Body Type</span>
                  <span className="block text-yellow-400">Quiz</span>
                </h1>
                <p className="text-gray-400 text-sm">Quick 3-step guide</p>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="bg-gray-800 rounded-full h-2 w-full">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-300 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-xl font-semibold text-center text-yellow-200">
                {quizQuestions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="grid gap-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 rounded-2xl bg-gray-800 border border-yellow-500/20 text-left font-medium hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:scale-[1.02] transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rolling golden border animation */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-border-move {
          background-size: 200% 200%;
          animation: borderMove 5s linear infinite;
          border-radius: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default BodyTypeQuiz;
