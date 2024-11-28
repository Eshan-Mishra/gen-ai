import { Bot, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Master AI & Prompt Engineering
          </motion.h1>
          <motion.p 
            className="text-xl mb-12 text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join forces with Google Developer Group and AWS Community to unlock the power of AI. 
            Learn how to leverage artificial intelligence in your daily tasks and future career.
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                icon: <Bot className="w-8 h-8" />,
                title: "AI Fundamentals",
                description: "Learn the core concepts of artificial intelligence and machine learning"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Practical Skills",
                description: "Hands-on experience with real-world AI applications"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Join a thriving community of AI enthusiasts and professionals"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.a 
            href="#course" 
            className="inline-block bg-white text-purple-700 px-8 py-4 rounded-lg font-bold 
                     hover:bg-purple-100 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Explore Course
          </motion.a>
        </div>
      </div>
    </section>
  );
}