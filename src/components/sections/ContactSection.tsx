
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Mail, GitBranchIcon, Linkedin,  X , PhoneCallIcon , MessageCircleIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-screen-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 inline-flex items-center">
            <Mail className="mr-2 h-6 w-6" /> Get In Touch
          </h2>
          <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="w-full max-w-xl border border-border/50 bg-secondary/20 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-xl font-bold text-center">Connect With Me</h3>
            </CardHeader>

            <CardContent className="space-y-4">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  label: "doshiharsh2004@gmail.com",
                  button: "Email",
                  link: "mailto:doshiharsh2004@gmail.com"
                },
                {
                  icon: <MessageCircleIcon className="h-5 w-5 text-primary" />,
                  label: "+91 7038000319",
                  button: "Whatsapp",
                  link: "https://wa.me/+917038000319"
                },
                {
                  icon: <GitBranchIcon className="h-5 w-5 text-primary" />,
                  label: "github.com/Harsh-D-2004",
                  button: "GitHub",
                  link: "https://github.com/Harsh-D-2004"
                },
                {
                  icon: <Linkedin className="h-5 w-5 text-primary" />,
                  label: "linkedin.com/in/harsh-doshi-86a457294/",
                  button: "LinkedIn",
                  link: "https://www.linkedin.com/in/harsh-doshi-86a457294/"
                },
                {
                  icon: <X className="h-5 w-5 text-primary" />,
                  label: "x.com/emo_dev_",
                  button: "X",
                  link: "https://x.com/emo_dev_?t=jVzDpCUOneXxKQQvr2108Q&s=09"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="break-all text-sm sm:text-base">{item.label}</span>
                  </div>
                  <div className="sm:ml-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-pink-500 transition-colors"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      {item.button}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
