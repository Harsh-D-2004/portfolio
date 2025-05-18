
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Briefcase, Filter, ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { experiences , WorkExperience } from '@/helper/workInfo';

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
  const allTags = experiences.flatMap(experience => experience.techStack);
  return ['All', ...new Set(allTags)].sort();
};

const WorkPage = () => {
  const [filteredExperiences, setFilteredExperiences] = useState<WorkExperience[]>(experiences);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  const allTags = getAllTags();
  
  useEffect(() => {
    let result = [...experiences];
    
    // Apply filtering
    if (activeFilter !== 'All') {
      result = result.filter(experience => 
        experience.techStack.includes(activeFilter)
      );
    }

    result.sort((a, b) => {
      if (sortOrder === 'asc') {
        return new Date(a.duration.split(' - ')[0]).getTime() - new Date(b.duration.split(' - ')[0]).getTime();
      } else {
        return new Date(b.duration.split(' - ')[0]).getTime() - new Date(a.duration.split(' - ')[0]).getTime();
      }
    });
    
    setFilteredExperiences(result);
  }, [activeFilter, sortOrder]);
  
  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };
  
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container max-w-screen-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 inline-flex items-center">
              <Briefcase className="mr-2 h-7 w-7" /> Work Experience
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              My professional journey and career growth across various companies and roles.
            </p>
          </motion.div>
          
          {/* Filters and controls */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select onValueChange={handleFilterChange} defaultValue="All">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by tech" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Technologies</SelectLabel>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleSortOrder} 
              className="flex items-center gap-2"
            >
              {sortOrder === 'asc' ? (
                <>
                  <ArrowDownAZ className="h-4 w-4" />
                  Oldest First
                </>
              ) : (
                <>
                  <ArrowUpZA className="h-4 w-4" />
                  Newest First
                </>
              )}
            </Button>
          </div>
          
          {/* Display message if no experiences match filter */}
          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No work experiences matching the selected filter.</p>
              <Button 
                variant="link" 
                onClick={() => setActiveFilter('All')}
                className="mt-2"
              >
                Clear filter
              </Button>
            </div>
          )}
          
          {/* Experiences list */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {filteredExperiences.map((experience, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-border/50 bg-secondary/20 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{experience.role}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">
                          {experience.company} • <span className="text-primary">{experience.duration}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-secondary/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
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

export default WorkPage;
