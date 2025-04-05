
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ServicesHeaderProps {
  isHeadingVisible: boolean;
}

const ServicesHeader = ({ isHeadingVisible }: ServicesHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <div 
        className={cn(
          "transition-all duration-700 transform",
          isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
          Our Services
        </span>
      </div>
      <h2 
        className={cn(
          "heading-lg mt-4 mb-6 max-w-3xl mx-auto text-balance transition-all duration-700 transform",
          isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        Technology solutions that seamlessly integrate with your existing tools
      </h2>
      <p 
        className={cn(
          "text-muted-foreground max-w-2xl mx-auto text-balance transition-all duration-700 transform",
          isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        We specialize in connecting your business systems together, eliminating data silos and creating smooth workflows between all your tools and platforms.
      </p>
    </div>
  );
};

export default ServicesHeader;
