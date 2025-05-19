
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
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="break-all">doshiharsh2004@gmail.com</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('mailto:doshiharsh2004@gmail.com' , '_blank')}>
                  Email
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <MessageCircleIcon className="h-5 w-5 text-primary" />
                  <span className="break-all">+91 7038000319</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('https://wa.me/+917038000319' , '_blank')}>
                  Whatsapp
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <GitBranchIcon className="h-5 w-5 text-primary" />
                  <span className="break-all">github.com/Harsh-D-2004</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('https://github.com/Harsh-D-2004', '_blank')}>
                  GitHub
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="break-all">linkedin.com/in/harsh-doshi-86a457294/</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('https://www.linkedin.com/in/harsh-doshi-86a457294/', '_blank')}>
                  LinkedIn
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <X className="h-5 w-5 text-primary" />
                  <span className="break-all">x.com/emo_dev_</span>
                </div>
                <Button variant="outline" size="sm" onClick={() => window.open('https://x.com/emo_dev_?t=jVzDpCUOneXxKQQvr2108Q&s=09', '_blank')}>
                  X
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
