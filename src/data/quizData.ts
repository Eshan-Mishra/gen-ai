import { Course } from './courses';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizData {
  courseId: string;
  questions: Question[];
}

export const quizzes: QuizData[] = [
  {
    courseId: 'ai-prompt-engineering',
    questions: [
      {
        "id": 1,
        "question": "What is the core principle behind generative AI?",
        "options": [
          "Analyzing existing data to make predictions.",
          "Creating new content based on learned patterns.",
          "Optimizing algorithms for maximum efficiency.",
          "Simulating human decision-making processes."
        ],
        "correctAnswer": 1,
        "explanation": "Generative AI focuses on creating new content by learning patterns from existing data."
      },
      {
        "id": 2,
        "question": "Which of the following is a key challenge in generative AI?",
        "options": [
          "Data scarcity",
          "Model overfitting",
          "Ethical implications",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Generative AI faces challenges such as limited data availability, overfitting in models, and ethical concerns."
      },
      {
        "id": 3,
        "question": "How do generative models differ from discriminative models?",
        "options": [
          "Generative models classify data, while discriminative models generate data.",
          "Generative models generate data, while discriminative models classify data.",
          "Both types of models generate data.",
          "Both types of models classify data."
        ],
        "correctAnswer": 1,
        "explanation": "Generative models create new data based on learned distributions, while discriminative models classify existing data."
      },
      {
        "id": 4,
        "question": "What is the role of attention mechanisms in generative models?",
        "options": [
          "To focus on specific parts of the input sequence.",
          "To improve the model's memory capacity.",
          "To accelerate training time.",
          "To reduce overfitting."
        ],
        "correctAnswer": 0,
        "explanation": "Attention mechanisms allow models to concentrate on relevant parts of the input when generating outputs."
      },
      {
        "id": 5,
        "question": "Which of the following is a popular generative model architecture?",
        "options": [
          "Convolutional Neural Network (CNN)",
          "Recurrent Neural Network (RNN)",
          "Generative Adversarial Network (GAN)",
          "Support Vector Machine (SVM)"
        ],
        "correctAnswer": 2,
        "explanation": "GANs are widely used for generating realistic data such as images and videos."
      },
      {
        "id": 6,
        "question": "How does a variational autoencoder (VAE) work?",
        "options": [
          "By learning a latent representation of data.",
          "By directly modeling the probability distribution of data.",
          "By competing between a generator and a discriminator.",
          "By using a sequence-to-sequence model."
        ],
        "correctAnswer": 0,
        "explanation": "VAEs learn latent representations to generate data while maintaining probabilistic properties."
      },
      {
        "id": 7,
        "question": "In which industry can generative AI have a significant impact on drug discovery?",
        "options": [
          "Healthcare",
          "Finance",
          "Retail",
          "Automotive"
        ],
        "correctAnswer": 0,
        "explanation": "Generative AI is transforming healthcare by enabling faster drug discovery and development."
      },
      {
        "id": 8,
        "question": "What is a potential ethical concern associated with the use of generative AI?",
        "options": [
          "Job displacement",
          "Privacy violations",
          "Creation of deepfakes",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Generative AI raises ethical concerns such as job displacement, privacy issues, and the misuse of deepfakes."
      },
      {
        "id": 9,
        "question": "How can generative AI be used in the creative industry?",
        "options": [
          "Generating realistic images and videos",
          "Composing music",
          "Writing creative text formats",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Generative AI enhances creativity by creating images, music, and text."
      },
      {
        "id": 10,
        "question": "What is the role of human-in-the-loop in generative AI?",
        "options": [
          "Providing feedback and guidance to the model.",
          "Ensuring ethical and responsible AI practices.",
          "Improving the quality and relevance of generated content.",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Human-in-the-loop processes ensure generative AI systems are ethical, relevant, and of high quality."
      },
      {
        "id": 11,
        "question": "What is a major challenge in training large-scale generative models?",
        "options": [
          "Data quality and quantity",
          "Computational resources",
          "Model interpretability",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Training large generative models requires high-quality data, significant computational power, and improved interpretability."
      },
      {
        "id": 12,
        "question": "How can the bias in generative models be mitigated?",
        "options": [
          "Using diverse and representative training data",
          "Regularizing the model",
          "Using fairness metrics",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Bias in generative models can be reduced by improving data diversity, applying fairness metrics, and model regularization."
      },
      {
        "id": 13,
        "question": "What is the future of generative AI?",
        "options": [
          "Increased integration into various industries",
          "Development of more powerful and sophisticated models",
          "Addressing ethical concerns and responsible AI practices",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Generative AI will see broader adoption, advanced models, and a focus on ethical development."
      },
      {
        "id": 14,
        "question": "Which of the following techniques can be used to improve the quality of generated images?",
        "options": [
          "Data augmentation",
          "Regularization",
          "Adversarial training",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Quality in generative images can be improved through data augmentation, regularization, and adversarial techniques."
      },
      {
        "id": 15,
        "question": "What is the role of a discriminator in a GAN?",
        "options": [
          "To generate realistic images",
          "To distinguish between real and fake images",
          "To optimize the generator",
          "To provide feedback to the user"
        ],
        "correctAnswer": 1,
        "explanation": "In a GAN, the discriminator identifies whether data is real or generated, helping the generator improve."
      },
      {
        "id": 16,
        "question": "How can you evaluate the performance of a generative model?",
        "options": [
          "Using quantitative metrics like FID and KID",
          "Conducting human evaluation studies",
          "Analyzing the model's internal representations",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Evaluating generative models involves using metrics, human feedback, and analysis of representations."
      },
      {
        "id": 17,
        "question": "What are some of the potential applications of text-to-image generation models?",
        "options": [
          "Creating art and design",
          "Developing video games",
          "Designing user interfaces",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Text-to-image models are used for art, game design, and interface creation."
      },
      {
        "id": 18,
        "question": "What is the significance of latent space in generative models?",
        "options": [
          "It represents the underlying structure of the data.",
          "It allows for the generation of diverse and creative outputs.",
          "It can be used to manipulate and control the generated content.",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Latent space encodes data structures, enabling diverse outputs and control over generation."
      },
      {
        "id": 19,
        "question": "How can you ensure the ethical use of generative AI?",
        "options": [
          "By being transparent about the limitations of the technology",
          "By avoiding bias in the training data and model architecture",
          "By considering the potential negative impacts of the technology",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Ethical generative AI involves transparency, reducing bias, and addressing its societal impacts."
      },
      {
        "id": 20,
        "question": "What is the future of generative AI?",
        "options": [
          "Increased integration into various industries",
          "Development of more powerful and sophisticated models",
          "Addressing ethical concerns and responsible AI practices",
          "All of the above"
        ],
        "correctAnswer": 3,
        "explanation": "Generative AI will expand across industries, improve in capability, and prioritize ethics."
      }
    ]
  },
  {
    courseId: 'machine-learning-basics',
    questions: [
      {
        id: 1,
        question: "What is supervised learning?",
        options: [
          "Learning without any data",
          "Learning from labeled data",
          "Learning without supervision",
          "Learning from unlabeled data"
        ],
        correctAnswer: 1,
        explanation: "Supervised learning involves training models using labeled data."
      },
      {
        id: 2,
        question: "What is the purpose of a training dataset?",
        options: [
          "To test the model's performance",
          "To deploy the model",
          "To train the model's parameters",
          "To validate the model"
        ],
        correctAnswer: 2,
        explanation: "Training datasets are used to train and adjust the model's parameters."
      },
      // Add more questions specific to Machine Learning
    ]
  },
  {
    courseId: 'nlp-fundamentals',
    questions: [
      {
        id: 1,
        question: "What is tokenization in NLP?",
        options: [
          "Converting text to numbers",
          "Breaking text into smaller units",
          "Translating text",
          "Compressing text"
        ],
        correctAnswer: 1,
        explanation: "Tokenization is the process of breaking text into smaller units like words or subwords."
      },
      {
        id: 2,
        question: "What is the purpose of stop words in NLP?",
        options: [
          "To end sentences",
          "To remove common words that add little meaning",
          "To start paragraphs",
          "To add punctuation"
        ],
        correctAnswer: 1,
        explanation: "Stop words are common words removed from text as they add little meaningful information."
      },
      // Add more questions specific to NLP
    ]
  }
];