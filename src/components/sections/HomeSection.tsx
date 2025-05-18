import React from "react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4"
    >
      <div className="container max-w-screen-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="w-52 h-52 mx-auto mb-8 border-2 border-primary">
            <AvatarImage
              className="object-cover object-top scale-100 "
              alt="Profile"
              src="/pic3.jpg"
            />
            <AvatarFallback>HD</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Harsh Doshi
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl mb-6 text-muted-foreground">
            Software Developer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I build scalable backend systems and high-performance APIs,
            leveraging distributed architectures, optimized databases, and
            Generative AI/ML to solve real-world problems efficiently and
            intelligently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <ScrollLink to="projects" smooth duration={500} offset={-80}>
            <Button size="lg" className="min-w-[140px]">
              View Work
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} offset={-80}>
            <Button size="lg" variant="secondary" className="min-w-[140px]">
              Contact Me
            </Button>
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
