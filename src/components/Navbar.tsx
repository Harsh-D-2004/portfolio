import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Work', to: '/work' },
  { name: 'Projects', to: '/projects' },
  { name: 'Achievements', to: '/#achievements' },
  { name: 'Contact', to: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && isHomePage) {
      e.preventDefault();
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const resumeDownload = () => {
    window.open('https://drive.google.com/file/d/1R5caalZ9Th_k14urhWSaufHoQ9cfa0L9/view?usp=drive_link', '_blank');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container max-w-screen-lg mx-auto flex items-center justify-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={(e) => handleNavigation(e, item.to)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" className="ml-2" onClick={resumeDownload}>
            Resume
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={(e) => handleNavigation(e, item.to)}
                  className="px-4 py-2 text-lg hover:text-primary cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4">
                Resume
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
