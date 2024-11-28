import { BookOpen, Brain, Code } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  features: string[];
  videoId: string;
  duration: string;
  modules: number;
  originalPrice: number;
  discountedPrice: number;
  enrolledStudents: number;
}

export const courses: Course[] = [
  {
    id: 'ai-prompt-engineering',
    title: 'AI & Prompt Engineering Masterclass',
    description: 'Master the art of AI prompt engineering and learn to leverage artificial intelligence effectively.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    icon: Brain,
    features: [
      "Understanding AI fundamentals and applications",
      "Mastering prompt engineering techniques",
      "Building AI-powered solutions",
      "Real-world project implementation",
      "Best practices and ethical considerations",
      "Integration with popular AI platforms"
    ],
    videoId: 'dQw4w9WgXcQ',
    duration: '40 Hours',
    modules: 12,
    originalPrice: 400,
    discountedPrice: 129,
    enrolledStudents: 15234
  },
  {
    id: 'machine-learning-basics',
    title: 'Machine Learning Fundamentals',
    description: 'Learn the core concepts of machine learning and start building intelligent systems.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80',
    icon: Code,
    features: [
      "Introduction to Machine Learning",
      "Supervised Learning Algorithms",
      "Unsupervised Learning Techniques",
      "Neural Networks Basics",
      "Model Training and Evaluation",
      "ML Project Development"
    ],
    videoId: 'dQw4w9WgXcQ',
    duration: '35 Hours',
    modules: 10,
    originalPrice: 400,
    discountedPrice: 129,
    enrolledStudents: 12876
  },
  {
    id: 'nlp-fundamentals',
    title: 'Natural Language Processing',
    description: 'Dive deep into NLP and learn how to process and analyze human language with AI.',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80',
    icon: BookOpen,
    features: [
      "Text Processing and Analysis",
      "Language Models and Transformers",
      "Sentiment Analysis",
      "Named Entity Recognition",
      "Text Classification",
      "Building NLP Applications"
    ],
    videoId: 'dQw4w9WgXcQ',
    duration: '30 Hours',
    modules: 8,
    originalPrice: 400,
    discountedPrice: 129,
    enrolledStudents: 9845
  }
];