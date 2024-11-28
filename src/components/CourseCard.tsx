import { Award, Clock } from 'lucide-react';
import { Course } from '../data/courses';
import { Link } from 'react-router-dom';
import PriceTag from './PriceTag';
import EnrollmentStats from './EnrollmentStats';

interface CourseCardProps {
  course: Course;
  disabled?: boolean;
}

export default function CourseCard({ course, disabled = false }: CourseCardProps) {
  const Icon = course.icon;

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (disabled) {
      return (
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden 
                      opacity-75 cursor-not-allowed group">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-50 
                        transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 
                         transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Coming Soon
            </span>
          </div>
          {children}
        </div>
      );
    }
    return (
      <Link 
        to={`/course/${course.id}`}
        className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer 
                  transform hover:scale-105 transition-transform"
      >
        {children}
      </Link>
    );
  };

  return (
    <CardWrapper>
      <img 
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-4">
          <Icon className="w-6 h-6 text-purple-700" />
          <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{course.description}</p>
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3 text-gray-700">
            <Clock className="w-5 h-5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <Award className="w-5 h-5" />
            <span>{course.modules} Modules</span>
          </div>
          <EnrollmentStats studentCount={course.enrolledStudents} />
        </div>
        <div className="pt-4 border-t">
          <PriceTag 
            originalPrice={course.originalPrice} 
            discountedPrice={course.discountedPrice} 
          />
        </div>
      </div>
    </CardWrapper>
  );
}