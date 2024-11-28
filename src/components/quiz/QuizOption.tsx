import React from 'react';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  option: string;
  index: number;
  selected: boolean;
  correct?: boolean;
  showResult?: boolean;
  onClick: () => void;
}

export default function QuizOption({
  option,
  index,
  selected,
  correct,
  showResult,
  onClick
}: QuizOptionProps) {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                ${selected 
                  ? 'border-purple-700 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-300'}
                ${showResult && selected && correct ? 'border-green-500 bg-green-50' : ''}
                ${showResult && selected && !correct ? 'border-red-500 bg-red-50' : ''}`}
    >
      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full 
                     bg-gray-100 text-gray-700 font-medium">
        {letters[index]}
      </span>
      <span className="flex-grow">{option}</span>
      {showResult && selected && (
        correct ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <X className="w-5 h-5 text-red-500" />
        )
      )}
    </div>
  );
}