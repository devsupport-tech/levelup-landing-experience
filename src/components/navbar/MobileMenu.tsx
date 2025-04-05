
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, Zap } from 'lucide-react';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) => {
  return (
    <>
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

      {/* Mobile Menu Panel */}
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
    </>
  );
};

export default MobileMenu;
