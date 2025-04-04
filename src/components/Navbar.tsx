
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Sparkles, Zap, Cpu } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3 border-b border-border' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
                alt="Level Up Business Logo" 
                className="h-20 w-auto mr-2 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-2xl font-bold ml-2 transition-all duration-300 group-hover:tracking-wide">
                Level<span className="text-gradient">Up</span> 
                <span className="text-sm font-light hidden sm:inline-block">BUSINESS</span>
                <Sparkles className="h-4 w-4 text-primary inline-block ml-1 animate-pulse-slow" />
              </span>
            </a>
          </div>

          {/* Desktop Menu - Using NavigationMenu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu className="animate-fade-in">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="/tech-solutions" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50 transition-all"
                    )}
                  >
                    <Zap className="h-4 w-4 mr-1" /> AI & Tech
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#services" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50 transition-all"
                    )}
                  >
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#about" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50 transition-all"
                    )}
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#contact" 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50 transition-all"
                    )}
                  >
                    Contact Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a 
              href="tel:+13462986933" 
              className="ml-6 flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors gap-1 hover:scale-105 transition-transform duration-200"
            >
              <Phone className="h-4 w-4" /> (346) 298-6933
            </a>
            
            <a 
              href="#contact" 
              className="ml-6 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a 
              href="tel:+13462986933" 
              className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-200"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-20 p-4 transform transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <a
            href="/tech-solutions"
            className="text-lg font-medium py-2 hover:text-primary transition-colors transform transition-transform hover:translate-x-2 flex items-center justify-center gap-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Zap className="h-5 w-5 text-primary" /> AI & Tech Solutions
          </a>
          <a
            href="#services"
            className="text-lg font-medium py-2 hover:text-primary transition-colors transform transition-transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="text-lg font-medium py-2 hover:text-primary transition-colors transform transition-transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-lg font-medium py-2 hover:text-primary transition-colors transform transition-transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="tel:+13462986933"
            className="flex items-center justify-center text-lg font-medium py-2 hover:text-primary transition-colors gap-2 transform transition-transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Phone className="h-5 w-5" /> (346) 298-6933
          </a>
          <a
            href="#contact"
            className="bg-primary text-white mx-auto px-6 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
