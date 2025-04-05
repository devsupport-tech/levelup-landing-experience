
import { Sparkles } from 'lucide-react';

const NavLogo = () => {
  return (
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
  );
};

export default NavLogo;
