
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Lightbulb, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import LazyImage from './LazyImage';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovative Solutions",
      description: "We bring fresh ideas and cutting-edge technologies to help your business stand out in today's competitive market."
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Results-Driven Approach",
      description: "Our strategies are designed with clear goals in mind, focusing on delivering measurable outcomes for your business."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Growth-Focused",
      description: "Every service we offer aims to accelerate your business growth and create new opportunities for expansion."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Reliable Partnership",
      description: "We become an extension of your team, committed to your success through consistent support and expertise."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-secondary/50"
      ref={containerRef}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span 
            className={cn(
              "bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            About Us
          </span>
          <h2 
            className={cn(
              "heading-lg mt-4 mb-6 max-w-2xl mx-auto text-balance transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Why Choose Level Up Business
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-3xl mx-auto mb-12 text-balance transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            As a business committed to excellence, we bring together expertise, innovation, and dedication 
            to help your business thrive in an increasingly digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
          <div className="md:col-span-5 relative">
            <div className="absolute -z-10 -left-10 -top-10 w-64 h-64 bg-primary/5 rounded-full filter blur-xl"></div>
            <div 
              className={cn(
                "rounded-xl overflow-hidden shadow-lg transition-all duration-1000 transform relative",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              <LazyImage 
                src="/lovable-uploads/d85248f2-37fe-4406-b31a-5fd2656f746e.png" 
                alt="About Level Up Business" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -z-10 -right-5 -bottom-5 w-48 h-48 bg-secondary/10 rounded-full filter blur-xl animate-pulse-slow"></div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "glass-card p-6 rounded-xl flex flex-col items-start gap-4 transition-all duration-700 transform hover:shadow-lg hover:-translate-y-1",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "mt-16 text-center max-w-2xl mx-auto transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to transform your business?</h3>
          <p className="text-muted-foreground mb-8">
            Let's work together to elevate your business to new heights. Our team is ready to help you implement 
            the strategies and technologies that will make a real difference.
          </p>
          <a 
            href="/ai-technology" 
            className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md inline-flex items-center gap-2"
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
