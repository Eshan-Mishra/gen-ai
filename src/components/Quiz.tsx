import React, { useState } from 'react';
import { quizzes, Question } from '../data/quizData';
import QuizNavigation from './quiz/QuizNavigation';
import QuizOption from './quiz/QuizOption';
import QuizResults from './quiz/QuizResults';

interface QuizProps {
  courseId: string;
  onComplete: () => void;
}

export default function Quiz({ courseId, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const quizData = quizzes.find(q => q.courseId === courseId);
  const questions = quizData?.questions || [];
  const currentQuestionData = questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      if (score >= questions.length * 0.7) {
        onComplete();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  if (!quizData) {
    return <div>Quiz not found for this course.</div>;
  }

  if (showResults) {
    return (
      <QuizResults
        score={calculateScore()}
        totalQuestions={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h3>
        <p className="text-lg mb-6">{currentQuestionData.question}</p>
        <div className="space-y-3">
          {currentQuestionData.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              index={index}
              selected={userAnswers[currentQuestion] === index}
              onClick={() => handleAnswer(index)}
            />
          ))}
        </div>
      </div>
      <QuizNavigation
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isLastQuestion={currentQuestion === questions.length - 1}
      />
    </div>
  );
}