import React from "react";
import { motion } from "framer-motion";

const skillsLogos = [
  [ // Row 1
    { name: "C", src: "c.svg" },
    { name: "C++", src: "c++.svg" },
    { name: "Java", src: "java.svg" },
    { name: "Python", src: "python.svg" },
    { name: "JavaScript", src: "javascript.svg" },
    { name: "Kotlin", src: "kotlin.svg" },
  ],
  [ // Row 2
    { name: "React", src: "react.svg" },
    { name: "NodeJS", src: "nodejs.svg" },
    { name: "Spring Boot", src: "spring-boot.svg" },
    { name: "Django", src: "django.svg" },
    { name: "Flask", src: "flask.svg" },
    { name: "FastAPI", src: "FastAPI.svg" },
  ],
  [ // Row 3
    { name: "MongoDB", src: "mongodb.svg" },
    { name: "MySQL", src: "mysql.svg" },
    { name: "Firebase", src: "firebase.svg" },
    { name: "Neo4j", src: "neo4j.png" },
    { name: "Git", src: "git.svg" },
    { name: "GitHub", src: "github.svg" },
  ],
  [ // Row 4
    { name: "TensorFlow", src: "tensorflow.svg" },
    { name: "Keras", src: "keras.svg" },
    { name: "Pandas", src: "pandas.svg" },
    { name: "Docker", src: "docker.svg" },
    { name: "AWS", src: "aws.svg" },
    { name: "GCP", src: "gcp.svg" },
  ],
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4"
    >
      <div className="container max-w-screen-md mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-6">
          {skillsLogos.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: rowIndex * 0.1 }}
            >
              {row.map((skill) => (
                <img
                  key={skill.name}
                  src={skill.src}
                  alt={skill.name}
                  title={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
