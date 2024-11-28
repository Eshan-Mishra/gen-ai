import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TopicSections from './components/sections/TopicSections';
import CourseSection from './components/CourseSection';
import CoursePage from './pages/CoursePage';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <TopicSections />
      <CourseSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}