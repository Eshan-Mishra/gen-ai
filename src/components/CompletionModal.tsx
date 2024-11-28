import React, { useEffect } from 'react';
import { PartyPopper, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getRandomCompletionCode } from '../utils/completionCodes';

interface CompletionModalProps {
  onClose: () => void;
  courseId: string;
}

export default function CompletionModal({ onClose, courseId }: CompletionModalProps) {
  const completionCode = React.useMemo(() => getRandomCompletionCode(), []);
  const studentName = localStorage.getItem('student-name') || 'Student';

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(completionCode);
      alert('Completion code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <PartyPopper className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Congratulations, {studentName}!
        </h2>
        <p className="text-gray-600 mb-6">
          You've successfully completed the course!
        </p>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-800 font-bold mb-2">⚠️ IMPORTANT - SAVE YOUR CODE NOW</p>
          <p className="text-red-700 text-sm">
            This code will only be shown ONCE and cannot be retrieved later.
            Please copy and save it somewhere safe immediately!
          </p>
        </div>

        <div className="relative bg-purple-100 text-purple-700 font-mono text-2xl py-3 px-4 rounded-lg mb-6">
          <div className="flex items-center justify-center space-x-3">
            <span>{completionCode}</span>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-purple-200 rounded transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-2 text-left mb-6">
          <p className="font-semibold text-gray-900">Remember to:</p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Take a screenshot of this code</li>
            <li>Write it down in a secure place</li>
            <li>Copy it to your clipboard using the copy button</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={copyToClipboard}
            className="flex-1 bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold
                     hover:bg-purple-800 transition-colors"
          >
            Copy Code
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold
                     hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}