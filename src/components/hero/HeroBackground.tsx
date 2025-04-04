
import { RefObject } from 'react';

interface HeroBackgroundProps {
  circleOneRef: RefObject<HTMLDivElement>;
  circleTwoRef: RefObject<HTMLDivElement>;
}

const HeroBackground = ({ circleOneRef, circleTwoRef }: HeroBackgroundProps) => {
  return (
    <>
      {/* Background blur circles with enhanced animations */}
      <div 
        ref={circleOneRef}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] transition-transform duration-[600ms] ease-out animate-pulse-slow"
      ></div>
      <div 
        ref={circleTwoRef}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-700/15 rounded-full blur-[120px] transition-transform duration-[600ms] ease-out animate-pulse-slow"
      ></div>
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      
      {/* Bottom decorative wave with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C149.93,118.92,281.09,78.93,321.39,56.44Z" 
            className="fill-background/90 animate-float"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default HeroBackground;
