
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/sections/HomeSection';
import WorkSection from '@/components/sections/WorkSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import SkillsSection from '@/components/sections/SkillsSection';
import axios from 'axios';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {

  const fetchData = async () => {
    try {
      if(!sessionStorage.getItem('hasVisited')) {
        sessionStorage.setItem('hasVisited', 'true');
        const res = await axios.get('https://portfolio-backend-vc3f.onrender.com/visitor-info');
      }
    } catch (err) {
      console.error('Request failed:', err);
    }
  };

  fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomeSection />
      <SkillsSection />
      <WorkSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
