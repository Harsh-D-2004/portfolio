export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
  techStack: string[];
}

export const experiences: WorkExperience[] = [
  {
    company: "Open HealthCare Network",
    role: "Open Source Contributor",
    duration: "Nov 2024 - Mar 2025",
    description:
      "Improved frontend reliability with Zod-based validation and centralized error handling in React, while enhancing Django backend internationalization by resolving localization and lazy string evaluation issues.",
    techStack: [
      "React",
      "JavaScript",
      "Shadcn UI",
      "Django",
      "Python",
      "Zod",
      "Tailwind CSS",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    company: "Invenco Ai",
    role: "Software Developer Intern",
    duration: "Oct 2024 – Jan 2025",
    description:
      "Built a drone control system using Kotlin, Android Studio, and the DJI SDK, with a companion Electron-Kotlin desktop app, and developed a deep learning-based crack detection system using TensorFlow with advanced preprocessing and model tuning.",
    techStack: [
      "Kotlin",
      "Java",
      "Android",
      "MVVC",
      "DJI SDK",
      "TensorFlow",
      "Electron",
      "Python",
      "Javascript",
    ],
  },
  {
    company: "Argyle Enigma Techlabs",
    role: "Backend Developer Intern",
    duration: "Oct 2023 - Feb 2024",
    description:
      "Developed FILI, a fintech app using Spring Boot and Java, featuring secure JWT-based authentication, RESTful APIs, Redis caching, CI/CD Pipelines, ORM with Hibernate, and thorough testing with JUnit and Mockito.",
    techStack: [
      "Java",
      "SpringBoot",
      "Spring",
      "MongoDB",
      "Junit",
      "Docker",
      "Mockito",
      "Gradle",
      "MVC Architecture",
    ],
  },
];
