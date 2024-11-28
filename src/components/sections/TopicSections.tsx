import React from 'react';
import { Brain, CircuitBoard, MessageSquare } from 'lucide-react';
import TopicSection from './TopicSection';

export default function TopicSections() {
  return (
    <>
      <TopicSection
        title="AI & Prompt Engineering"
        icon={Brain}
        description={[
          "Artificial Intelligence has revolutionized how we interact with technology, making it more intuitive and powerful than ever before. Through prompt engineering, we can effectively communicate with AI systems to achieve remarkable results.",
          "Our comprehensive course teaches you the art and science of crafting perfect prompts. Learn how to leverage AI tools like ChatGPT, DALL-E, and others to enhance your productivity and creativity."
        ]}
        features={[
          "Master the principles of effective prompt writing",
          "Learn advanced techniques for controlling AI outputs",
          "Understand context and token optimization",
          "Create consistent and reliable AI interactions"
        ]}
        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
      />

      <TopicSection
        title="Machine Learning Fundamentals"
        icon={CircuitBoard}
        description={[
          "Machine Learning is the backbone of modern AI systems, enabling computers to learn from data and improve their performance without explicit programming. Understanding these fundamentals is crucial for anyone working in tech.",
          "Our course breaks down complex ML concepts into digestible modules, focusing on practical applications and real-world examples that you can implement immediately."
        ]}
        features={[
          "Understand core ML algorithms and their applications",
          "Learn data preprocessing and feature engineering",
          "Master model training and evaluation techniques",
          "Implement popular ML frameworks and tools"
        ]}
        imageUrl="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80"
        reversed
      />

      <TopicSection
        title="Natural Language Processing"
        icon={MessageSquare}
        description={[
          "Natural Language Processing (NLP) bridges the gap between human communication and computer understanding. It's the technology behind virtual assistants, translation services, and content analysis tools.",
          "Dive deep into the world of NLP and learn how computers process, analyze, and generate human language. Our course covers everything from basic text processing to advanced language models."
        ]}
        features={[
          "Master text preprocessing and tokenization",
          "Understand sentiment analysis and classification",
          "Learn about modern language models and transformers",
          "Build practical NLP applications"
        ]}
        imageUrl="https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80"
      />
    </>
  );
}