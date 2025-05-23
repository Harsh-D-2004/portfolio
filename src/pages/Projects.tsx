import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import {
  Code,
  Github,
  Link,
  Filter,
  ArrowDownAZ,
  ArrowUpZA,
  Grid2X2,
  List,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/helper/projectInfo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getAllTags = () => {
  const allTags = projects.flatMap((project) => project.stack);
  return ["All", ...new Set(allTags)].sort();
};

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  const allTags = getAllTags();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = [...projects];

    if (activeFilter !== "All") {
      result = result.filter((project) => project.stack.includes(activeFilter));
    }

    result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    setFilteredProjects(result);
  }, [activeFilter, sortOrder]);

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="container max-w-screen-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl font-bold mb-2 inline-flex items-center">
              <Code className="mr-2 h-6 w-6" /> All Projects
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Browse through my complete portfolio of work, filter by
              technology, or sort to find what interests you.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select onValueChange={handleFilterChange} defaultValue="All">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by tech" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Technologies</SelectLabel>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleSortOrder}
                className="flex items-center gap-2"
              >
                {sortOrder === "asc" ? (
                  <>
                    <ArrowDownAZ className="h-4 w-4" /> A to Z
                  </>
                ) : (
                  <>
                    <ArrowUpZA className="h-4 w-4" /> Z to A
                  </>
                )}
              </Button>
            </div>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">
                No projects matching the selected filter.
              </p>
              <Button
                variant="link"
                onClick={() => setActiveFilter("All")}
                className="mt-2 text-sm"
              >
                Clear filter
              </Button>
            </div>
          )}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full flex flex-col border border-border/30 bg-secondary/10 hover:shadow-md transition-shadow">
                  <div className="p-3 pt-4">
                    <div className="aspect-video overflow-hidden rounded-xl shadow-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <CardTitle className="text-lg font-semibold mb-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </CardDescription>
                    </div>

                    <div className="flex flex-wrap gap-1 text-xs mb-3">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          className={cn(
                            "bg-secondary/40 px-2 py-0.5 rounded-sm",
                            activeFilter === tech &&
                              "bg-primary/20 border border-primary/50"
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto">
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
                      {/* Uncomment if demo links are needed
                    <Button size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Link className="mr-1 h-4 w-4" />
                        Demo
                      </a>
                    </Button> */}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
