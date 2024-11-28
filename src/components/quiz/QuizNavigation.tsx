import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuizNavigation({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  isLastQuestion
}: QuizNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 
                 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Previous</span>
      </button>
      <span className="text-gray-600">
        Question {currentQuestion + 1} of {totalQuestions}
      </span>
      <button
        onClick={onNext}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-700 
                 text-white hover:bg-purple-800 transition-colors"
      >
        <span>{isLastQuestion ? 'Submit' : 'Next'}</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}