import React, { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is your primary fitness goal?",
    options: ["Lose weight", "Build muscle", "Improve endurance", "General fitness"]
  },
  {
    id: 2,
    question: "How would you describe your current activity level?",
    options: ["Sedentary", "Lightly active", "Moderately active", "Very active"]
  },
  {
    id: 3,
    question: "What is your preferred workout style?",
    options: ["Strength training", "Cardio", "Mixed training", "Flexibility/Yoga"]
  }
];

// Logic to determine recommendation based on answers
const getRecommendedProgram = (answers: string[]) => {
  const [goal, activityLevel, style] = answers;

  if (goal === "Lose weight" && activityLevel === "Sedentary") {
    return "CLC STANDARD – Perfect for beginners ready to start their transformation journey.";
  }

  if (goal === "Build muscle" && style === "Strength training") {
    return "CLC PREMIUM – Our most popular program for serious transformations.";
  }

  if (
    goal === "Improve endurance" ||
    activityLevel === "Very active" ||
    style === "Mixed training"
  ) {
    return "Entire Premium Program – Premium 1-on-1 coaching for ultimate results.";
  }

  return "CLC STANDARD – A great place to begin your fitness journey.";
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
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto">
        {showResults ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-gold">Your Results</h2>
            <div className="bg-gray-900 p-8 rounded-lg border border-gold/20">
              <p className="text-xl mb-6">
                Based on your answers, we recommend:
                <span className="block mt-2 text-gold font-semibold text-2xl">
                  {getRecommendedProgram(answers)}
                </span>
              </p>
              <div className="space-y-4 mb-8 text-left">
                {answers.map((answer, index) => (
                  <div key={index}>
                    <span className="text-gold font-semibold">Q{index + 1}:</span> {answer}
                  </div>
                ))}
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gold">Body Type Quiz</h1>
              <p className="text-gray-300">Discover your personalized fitness approach</p>
              <div className="mt-4">
                <div className="bg-gray-800 rounded-full h-2 w-full">
                  <div
                    className="bg-gold h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gold/20">
              <h2 className="text-2xl font-semibold mb-6">
                {quizQuestions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gold/50 rounded-lg transition-all duration-200"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyTypeQuiz;
