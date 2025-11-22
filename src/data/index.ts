import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SITE_DATA = {
  profile: {
    name: "Allen Jose",
    role: "Machine Learning Engineer",
    tagline: "Anything that’s Imaginable is Codable.",
    bio: "I am a Machine Learning Engineer focused on building efficient, scalable, and intelligent systems. From model training to real-world deployment, I bring ideas to life through data.",
    socials: [
      { 
        name: "GitHub", 
        url: "https://github.com/allenjose24", 
        icon: Github 
      },
      { 
        name: "LinkedIn", 
        url: "https://linkedin.com/in/allen-jose", 
        icon: Linkedin 
      },
      { 
        name: "X (Twitter)", 
        url: "https://x.com/allenjose24", 
        icon: Twitter 
      },
      { 
        name: "Email", 
        url: "mailto:pottumkalallenjose@gmail.com", 
        icon: Mail 
      },
    ],
  },
  experience: [
    {
      company: "Board Infinity",
      role: "Machine Learning Intern",
      date: "May 2024 - Jul 2024",
      description: "Implemented Decision Tree and Random Forest models on the Wisconsin Breast Cancer Dataset, achieving 97.08% accuracy. Optimized model performance through hyperparameter tuning.",
    },
    {
      company: "J.P. Morgan Chase & Co.",
      role: "SDE Intern (Virtual)",
      date: "Apr 2024",
      description: "Configured local dev environments and integrated the Perspective open-source library to generate live graphs for real-time trader data visualization.",
    },
  ],
  skills: [
    { 
      category: "Languages", 
      items: ["Python", "Java", "C++", "C"] 
    },
    { 
      category: "Frontend", 
      items: ["HTML5", "CSS3", "JavaScript", "React"] 
    },
    { 
      category: "Core AI/ML", 
      items: ["Machine Learning", "DSA", "Vector Space Models", "NLP"] 
    },
    { 
      category: "Tools & Libs", 
      items: ["TensorFlow", "PyTorch", "Pandas", "Matplotlib", "Scikit-learn", "Git"] 
    },
  ],
  projects: [
    {
      title: "Stock Price Prediction (LSTM)",
      description: "A data-driven approach to forecasting Google stock prices using Long Short-Term Memory networks. Features data transformation with MinMaxScaler and interactive Plotly visualizations.",
      tags: ["Python", "TensorFlow", "LSTM", "Plotly"],
      link: "https://github.com/allenjose24/Stock-Price-Prediction-Using-LSTM-A-Data-Driven-Approach-with-Google-Stock-Data",
    },
    {
      title: "Enhanced Machine Translation",
      description: "Fusing Vector Space Models (VSM) with MarianMT and GloVe embeddings to revolutionize document search and cross-lingual information retrieval.",
      tags: ["NLP", "MarianMT", "GloVe", "Cosine Similarity"],
      link: "https://github.com/allenjose24/Harnessing-Vector-Space-Models-for-Enhanced-Machine-Translations-and-Document-Search",
    },
    {
      title: "Cluster Visualization & Dim. Reduction",
      description: "Explored PCA, LDA, and ICA to improve clustering performance on high-dimensional datasets like Iris and Wine, evaluated using Silhouette scores.",
      tags: ["Unsupervised Learning", "PCA", "Scikit-learn", "K-Means"],
      link: "https://github.com/allenjose24/Dimentionality-Reduction-Using-PCA-LDA-and-ICA",
    },
    {
      title: "Fake Profile Detection",
      description: "Leveraging Computer Vision (DeepFace, ORB keypoints) and cosine similarity matrices to unmask fake digital profiles with high precision.",
      tags: ["Computer Vision", "DeepFace", "Python"],
      link: "https://github.com/allenjose24", // Placeholder if specific repo link isn't available
    },
  ],
  certifications: [
    { title: "Cloud Computing", issuer: "NPTEL" },
    { title: "Python (Basic)", issuer: "HackerRank" },
    { title: "Generative AI for Everyone", issuer: "DeepLearning.AI" },
    { title: "Leadership Communication", issuer: "Northwestern University" },
    { title: "Approximation Algorithms", issuer: "Coursera" },
  ]
};