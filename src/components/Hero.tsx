
import { useEffect, useRef, useState } from 'react';
import CallToAction from './CallToAction';
import { Phone, CheckCircle, Sparkles, ArrowRight, Zap, Cpu, Code } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleOneRef = useRef<HTMLDivElement>(null);
  const circleTwoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !circleOneRef.current || !circleTwoRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      // Calculate the percentage across the container (0 to 1)
      const xPercent = mouseX / width;
      const yPercent = mouseY / height;
      
      // Use this to move the circles in parallax effect
      const circleOneX = xPercent * 60 - 30; // -30px to +30px
      const circleOneY = yPercent * 60 - 30;
      
      const circleTwoX = xPercent * -50 + 25; // +25px to -25px (inverse)
      const circleTwoY = yPercent * -50 + 25;
      
      // Apply transformations with smooth transition
      circleOneRef.current.style.transform = `translate(${circleOneX}px, ${circleOneY}px)`;
      circleTwoRef.current.style.transform = `translate(${circleTwoX}px, ${circleTwoY}px)`;
    };

    // Set visibility after a small delay to trigger animations
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  const getStaggeredDelay = (index: number) => {
    return `${0.4 + (index * 0.2)}s`;
  };

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background to-background/95"
    >
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
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`mb-6 inline-block transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          <span className="bg-primary/10 text-primary font-medium px-6 py-2 rounded-full text-sm flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 animate-pulse" />
            Smart Tools & Technology for Your Business
          </span>
        </div>
        
        <h1 className={`heading-xl max-w-4xl mx-auto mb-6 text-balance transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
          <span className="text-gradient font-bold">AI & Technology Solutions</span> to 
          <span className="font-bold relative ml-2">
            Transform Your Business
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full transform scale-x-0 transition-transform duration-1000 origin-left" style={{ transitionDelay: '1s', transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          We help small businesses and entrepreneurs save time and grow faster with <span className="text-primary font-medium">smart automation</span> and <span className="text-primary font-medium">the right digital tools</span> designed specifically for your needs.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
          <CallToAction text="Book a Free Consultation" variant="primary" />
          <CallToAction text="See How We Can Help" variant="secondary" href="/tech-solutions" />
          <a 
            href="tel:+13462986933" 
            className="flex items-center gap-2 bg-black/80 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="h-5 w-5" />
            (346) 298-6933
          </a>
        </div>
        
        <div className={`mt-24 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
          <p className="text-sm text-muted-foreground mb-8">Why Small Businesses Choose Us</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center items-center">
            {[
              { icon: <Zap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Smart Automation", delay: 0 },
              { icon: <Cpu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Simple Digital Tools", delay: 1 },
              { icon: <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Custom Solutions", delay: 2 }
            ].map((item, index) => (
              <div key={index} className={`flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: getStaggeredDelay(item.delay) }}>
                <div className="rounded-full bg-primary/10 p-4 group hover:bg-primary/20 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="font-medium">{item.title}</p>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom decorative wave with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C149.93,118.92,281.09,78.93,321.39,56.44Z" 
            className="fill-background/90 animate-float"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
