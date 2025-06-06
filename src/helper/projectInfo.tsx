export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Alumnet",
    description:
      "An AI-powered alumni-company networking platform for Training & Placement, featuring natural language query handling, semantic search, and automated outreach.",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/Alumnet/refs/heads/main/SS/logo.png",
    stack: ["FastAPI", "Neo4j", "Pinecone", "LangChain", "LLM Integration", "Embeddings" , "Hugging Face", "Python"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/Alumnet",
  },
  {
    title: "BudgetGPT",
    description:
      "BudgetGPT is a chatbot application designed to handle queries related to the Budget of India passed in 2024 using a Retrieval Augmented Generation (RAG) approach.",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/BudgetGPT/refs/heads/main/screenshots/logo.png",
    stack: ["Python", "Flask", "Javascript" , "HTML" , "CSS" , "React" , "ShadCn" , "FAISS" , "LLM Integration" , "Embeddings" , "Hugging Face"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/BudgetGPT",
  },
    {
    title: "Amazon Fine Foods Reviews Sentiment Analysis",
    description:
      "This project aims to automatically classify review sentiments and offer insights that help businesses better understand customer feedback and improve their offerings.",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/Amazon-fine-foods-reviews-sentiment-analysis/refs/heads/main/ss/aff_logo.png",
    stack: ["Python", "Jupyter Notebook", "Streamlit" , "Sckit-Learn" , "Embeddings" , "Machine Learning" , "Classification"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/Amazon-fine-foods-reviews-sentiment-analysis",
  },
  {
    title: "Market Analysis Agent",
    description:
      "A voice-activated AI agent that processes market-related queries such as current stock updates using audio input",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/market-analysis-agent/refs/heads/main/content/logo.png",
    stack: ["Flask", "Pinecone", "LangChain", "LLM Integration", "Embeddings" , "Hugging Face", "Python" , "OpenAIWhisper" , "Streamlit"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/market-analysis-agent",
  },
  {
    title: "Neural Mix",
    description:
      "A desktop application that enables programmatic control of VST plugins. It leverages user-generated queries to map and control various knobs and parameters in the VSTs dynamically.",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/Neural-Mix/refs/heads/main/SS/logo_nm.jpg",
    stack: ["Python", "Flask", "Electron", "Javascript" , "HTML" , "CSS" , "Material UI" , "VST SDK"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/Neural-Mix",
  },
  {
    title: "Research Agent (Scraper)",
    description:
      "This project extracts subcontractor information, evaluates each candidate based on key criteria, and returns a list of structured results with an overall score out of 100.",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/Research-agent/refs/heads/main/ss/logo.png",
    stack: ["FastAPI", "Pinecone", "LangChain", "LLM Integration", "Python" , "REST APIs" , "SerpAPI" , "Beautiful Soup" , "Scraper"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/Research-agent",
  },
  {
    title: "DyslexiLearn",
    description:
      "DyslexiLearn is a web-based platform that provides personalized learning experiences for students with dyslexia. The application is developed using various services from IBM Cloud",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/DyslexiLearn/refs/heads/main/Screenshots/logo.png",
    stack: ["Python", "Flask", "React", "Javascript" , "HTML" , "CSS" , "Material UI" , "Deep Learning" , "Tensorflow" , "OCR"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/DyslexiLearn",
  },
  {
    title: "Medicine Management System",
    description:
      "A Medicine management System which allows users to manage medicine records and provide dashboard for tracking them as one in pharmacies ",
    image:
      "https://raw.githubusercontent.com/Harsh-D-2004/Medicine_Management_System/refs/heads/main/images/logo_mm.png",
    stack: ["Java", "React", "MySQL", "Springboot", "Javascript" , "HTML" , "CSS"],
    demoUrl: "https://alumnet.vercel.app",
    githubUrl: "https://github.com/Harsh-D-2004/Medicine_Management_System",
  },
];
