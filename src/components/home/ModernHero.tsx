
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Zap, Bot, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterComponent from 'typewriter-effect';
import LazyImage from '@/components/LazyImage';

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    navigate('/tech-solutions');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+13462986933';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Animated background elements with blueish-purple colors */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(124, 58, 237, 0.2), transparent 50%)`,
          transition: 'background 0.3s ease'
        }}
      />

      <div className="absolute top-1/4 -right-20 w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -left-20 w-[30vw] h-[30vw] bg-indigo-600/20 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 z-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block bg-primary/10 text-primary font-medium px-6 py-3 rounded-full text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Smart Business Technology Solutions
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Transforming Small Businesses
              </span>{" "}
              With{" "}
              <div className="inline-block text-high-contrast">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Smart AI",
                      "Automation",
                      "Custom Software",
                      "Digital Tools"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 40,
                  }}
                />
              </div>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We help small businesses grow faster and work smarter with tailored technology solutions that save time, reduce costs, and increase efficiency.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                onClick={handleGetStarted}
                className="group bg-primary hover:bg-primary/90 text-lg font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleCallNow}
                className="border-primary/20 hover:border-primary/50 text-lg font-medium flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                (346) 298-6933
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-indigo-500/10 overflow-hidden shadow-xl">
                <LazyImage 
                  src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
                  alt="Business Technology Solutions" 
                  className={`w-full h-full object-cover rounded-2xl transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  onLoad={handleImageLoad}
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-black/30 backdrop-blur-lg border border-indigo-500/10 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Bot className="h-8 w-8 text-purple-400" />
                  <div>
                    <p className="text-sm text-high-contrast">AI-Powered Solutions</p>
                    <p className="text-xs text-medium-contrast">Smart automation for your business</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-black/30 backdrop-blur-lg border border-indigo-500/10 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Monitor className="h-8 w-8 text-indigo-400" />
                  <div>
                    <p className="text-sm text-high-contrast">Custom Software</p>
                    <p className="text-xs text-medium-contrast">Tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by local businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {['Houston', 'Sugar Land', 'Katy', 'Cypress', 'The Woodlands'].map((location, index) => (
              <div key={index} className="flex items-center">
                <span className="text-lg font-semibold">{location}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C149.93,118.92,281.09,78.93,321.39,56.44Z" 
            className="fill-background/90"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ModernHero;
