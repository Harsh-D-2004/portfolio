
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container max-w-screen-md mx-auto">
        
        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Harsh Doshi. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0">
            <Link to="/" className="hover:text-foreground mr-4">Home</Link>
            <Link to="/work" className="hover:text-foreground mr-4">Work</Link>
            <Link to="/projects" className="hover:text-foreground mr-4">Projects</Link>
            {isHomePage ? (
              <a href="#achievements" onClick={(e) => handleScrollTo(e, 'achievements')} className="hover:text-foreground mr-4">Achievements</a>
            ) : (
              <Link to="/#achievements" className="hover:text-foreground mr-4">Achievements</Link>
            )}
            {isHomePage ? (
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-foreground">Contact</a>
            ) : (
              <Link to="/#contact" className="hover:text-foreground">Contact</Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
