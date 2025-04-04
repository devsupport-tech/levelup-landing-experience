
import { ReactNode } from 'react';
import { Zap, Cpu, Code } from 'lucide-react';

// Define different hero content options
export const heroContent = [
  {
    tag: "Smart Tools & Technology for Your Business",
    title: "AI & Technology Solutions to Transform Your Business",
    description: "We help small businesses and entrepreneurs save time and grow faster with smart automation and the right digital tools designed specifically for your needs.",
    icon: <Zap className="h-4 w-4 animate-pulse" />
  },
  {
    tag: "Streamline Your Workflow & Save Time",
    title: "Custom Automation Solutions for Business Growth",
    description: "Eliminate repetitive tasks and focus on what matters most. Our custom automation tools help you work smarter, not harder.",
    icon: <Cpu className="h-4 w-4 animate-pulse" />
  },
  {
    tag: "Expert Digital Solutions",
    title: "Modern Technology for Traditional Businesses",
    description: "Bridge the gap between your traditional business and the digital world with custom solutions that respect your expertise while expanding your reach.",
    icon: <Code className="h-4 w-4 animate-pulse" />
  }
];

export interface ContentProps {
  tag: string;
  title: string;
  description: string;
  icon: ReactNode;
  isVisible: boolean;
  transitioning: boolean;
}

export const HeroContentDisplay = ({ tag, title, description, icon, isVisible, transitioning }: ContentProps) => (
  <>
    <div 
      className={`mb-6 inline-block transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${transitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`} 
      style={{ transitionDelay: '0.2s' }}
    >
      <span className="bg-primary/10 text-primary font-medium px-6 py-2 rounded-full text-sm flex items-center justify-center gap-2">
        {icon}
        {tag}
      </span>
    </div>
    
    <h1 
      className={`heading-xl max-w-4xl lg:max-w-none mx-auto mb-6 text-balance transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${transitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`} 
      style={{ transitionDelay: '0.4s' }}
    >
      <span className="text-gradient font-bold">{title.split(' to ')[0]}</span> to 
      <span className="font-bold relative ml-2">
        {title.split(' to ')[1] || 'Transform Your Business'}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full transform scale-x-0 transition-transform duration-1000 origin-left" style={{ transitionDelay: '1s', transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
      </span>
    </h1>
    
    <p 
      className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 text-balance transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${transitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`} 
      style={{ transitionDelay: '0.6s' }}
    >
      {description}
    </p>
  </>
);
