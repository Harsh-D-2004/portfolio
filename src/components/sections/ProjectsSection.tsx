import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, Github, Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { projects } from "@/helper/projectInfo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="container max-w-screen-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-3 inline-flex items-center">
            <Code className="mr-2 h-5 w-5" /> Featured Projects
          </h2>
          <p className="text-muted-foreground text-sm">
            Some of my notable works and contributions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.slice(0, 4).map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col border border-border/50 bg-secondary/20 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors">
                <div className="p-2 pt-3">
                  <div className="p-3 pt-4">
                    <div className="aspect-video overflow-hidden rounded-xl shadow-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-2">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0 pb-3 px-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button asChild size="sm">
            <RouterLink to="/projects" className="inline-flex items-center">
              View All Projects
              <Link className="ml-2 h-4 w-4" />
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
