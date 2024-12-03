import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle, XCircle } from 'lucide-react';
import { courses } from '../data/courses';
import VideoPlayer from '../components/VideoPlayer';
import Quiz from '../components/Quiz';
import PriceTag from '../components/PriceTag';
import EnrollmentStats from '../components/EnrollmentStats';
import CompletionModal from '../components/CompletionModal';
import validCodes from '../data/GDSC.csv?raw';

export default function CoursePage() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
    setShowContent(false);
    setVideoCompleted(false);
    setQuizCompleted(false);
    setShowCompletionModal(false);
  }, [courseId]);

  // Show completion modal if either video is completed or quiz is passed
  useEffect(() => {
    if ((videoCompleted || quizCompleted) && !showCompletionModal) {
      setShowCompletionModal(true);
    }
  }, [videoCompleted, quizCompleted]);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const validateCode = () => {
    if (!name.trim()) {
      setIsValid(false);
      return;
    }

    const validCodesArray = validCodes.split('\n').slice(1).map(line => {
      const [ , csvName, , csvCode, , feesPaid ] = line.split(',').map(field => field.trim());
      return { code: csvCode, name: csvName, feesPaid };
    });

    const validCode = validCodesArray.find(vc => vc.code === code.trim() && vc.name.toLowerCase() === name.trim().toLowerCase());
    if (!validCode) {
      setIsValid(false);
      return;
    }
    if (validCode.feesPaid.toLowerCase() === 'unpaid') {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    localStorage.setItem('student-name', name.trim());
    setTimeout(() => {
      setIsModalOpen(false);
      setShowContent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {showContent ? (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <PriceTag 
                    originalPrice={course.originalPrice} 
                    discountedPrice={course.discountedPrice} 
                  />
                  <EnrollmentStats studentCount={course.enrolledStudents} />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <VideoPlayer 
                  videoId={course.videoId}
                  onComplete={() => setVideoCompleted(true)} 
                />
                <div className="space-y-6">
                  <Quiz 
                    courseId={course.id}
                    onComplete={() => setQuizCompleted(true)} 
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-center space-x-4">
                <PriceTag 
                  originalPrice={course.originalPrice} 
                  discountedPrice={course.discountedPrice} 
                />
                <EnrollmentStats studentCount={course.enrolledStudents} />
              </div>
            </div>
          )}
        </div>

        {/* Registration Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Course Registration</h4>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="code" className="block text-gray-700 mb-2">Registration Code</label>
                  <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter code (e.g., ABC123)"
                    className="w-full px-4 py-2 border rounded-lg"
                    maxLength={6}
                  />
                </div>
              </div>
              {isValid !== null && (
                <div className={`flex items-center space-x-2 my-4 ${
                  isValid ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isValid ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Valid code! Loading your course...</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>{!name.trim() ? "Please enter your name." : "Invalid code. Please try again."}</span>
                    </>
                  )}
                </div>
              )}
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={validateCode}
                  className="flex-1 bg-purple-700 text-white py-2 rounded-lg font-semibold
                           hover:bg-purple-800 transition-colors"
                >
                  Start Course
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold
                           hover:bg-gray-300 transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Completion Modal */}
        {showCompletionModal && courseId && (
          <CompletionModal 
            onClose={() => setShowCompletionModal(false)} 
            courseId={courseId}
          />
        )}
      </div>
    </div>
  );
}