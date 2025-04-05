
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useNavbarScroll from '@/hooks/useNavbarScroll';
import NavLogo from './navbar/NavLogo';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const isScrolled = useNavbarScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <NavLogo />
          <DesktopMenu />
          <MobileMenu 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
