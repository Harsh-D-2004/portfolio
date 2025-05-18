import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { achievements } from "@/helper/achievementInfo";

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

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container max-w-screen-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-flex items-center">
            <Star className="mr-2 h-6 w-6" /> Achievements
          </h2>
          <p className="text-muted-foreground">
            Awards, certifications, and career highlights
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-border/50 bg-secondary/20 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
                <CardHeader>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {achievement.organization} •{" "}
                    <span className="text-primary">{achievement.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
