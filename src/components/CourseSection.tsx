import { courses } from '../data/courses';
import CourseCard from './CourseCard';

export default function CourseSection() {
  return (
    <section id="course" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Courses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive training designed by industry experts from Google Developer Group 
            and AWS Community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              disabled={course.id !== 'ai-prompt-engineering'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}