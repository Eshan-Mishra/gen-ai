import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TopicSectionProps {
  title: string;
  icon: LucideIcon;
  description: string[];
  features: string[];
  imageUrl: string;
  reversed?: boolean;
}

export default function TopicSection({ 
  title, 
  icon: Icon, 
  description, 
  features, 
  imageUrl, 
  reversed = false 
}: TopicSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${
          reversed ? 'lg:flex-row-reverse' : ''
        }`}>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Icon className="w-8 h-8 text-purple-700" />
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            {description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
            <motion.ul 
              className="space-y-3 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <span className="w-2 h-2 bg-purple-700 rounded-full" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}