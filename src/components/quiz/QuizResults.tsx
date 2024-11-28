import React from 'react';
import { PartyPopper, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question } from '../../data/quizData';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  userAnswers: number[];
  questions: Question[];
  onRetake: () => void;
}

export default function QuizResults({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRetake
}: QuizResultsProps) {
  const percentage = (score / totalQuestions) * 100;
  const passed = percentage >= 70;

  React.useEffect(() => {
    if (passed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [passed]);

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        {passed ? (
          <div className="flex flex-col items-center space-y-4">
            <PartyPopper className="w-16 h-16 text-yellow-500" />
            <h3 className="text-2xl font-bold text-green-600">Congratulations!</h3>
            <p className="text-gray-600">
              You passed with {percentage.toFixed(0)}% correct answers!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Quiz Results</h3>
            <p className="text-gray-600">
              You scored {percentage.toFixed(0)}%. You need 70% to pass.
            </p>
          </div>
        )}
      </div>

      <div className="space-y-6 mb-8">
        <h4 className="text-xl font-semibold text-gray-900">Review Your Answers</h4>
        {questions.map((question, index) => (
          <div key={question.id} className="border rounded-lg p-4">
            <p className="font-medium mb-2">Question {index + 1}: {question.question}</p>
            <p className="text-gray-600 mb-2">Your answer: {question.options[userAnswers[index]]}</p>
            <p className="text-gray-600">Correct answer: {question.options[question.correctAnswer]}</p>
            {userAnswers[index] !== question.correctAnswer && (
              <p className="text-gray-600 mt-2 italic">{question.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!passed && (
        <button
          onClick={onRetake}
          className="w-full flex items-center justify-center space-x-2 bg-purple-700 
                   text-white py-3 rounded-lg font-semibold hover:bg-purple-800 
                   transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
          <span>Retake Quiz</span>
        </button>
      )}
    </div>
  );
}