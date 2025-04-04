
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Level Up Business transformed our outdated systems into a streamlined digital ecosystem. Their expertise in cloud infrastructure and data analytics helped us increase operational efficiency by 40%.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "GrowthMetrics",
  },
  {
    quote: "The custom software solution delivered by Level Up Business has been a game-changer for our customer engagement. They truly understood our unique challenges and delivered a solution that exceeded our expectations.",
    author: "Michael Chen",
    role: "CEO",
    company: "Innovate Retail",
  },
  {
    quote: "Working with Level Up Business on our digital transformation initiative was seamless. Their team's strategic approach and technical expertise helped us navigate complex challenges with confidence.",
    author: "Emily Rodriguez",
    role: "Director of Operations",
    company: "Global Finance Partners",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section 
      id="testimonials" 
      className="bg-secondary py-20"
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
            Testimonials
          </span>
          <h2 
            className={cn(
              "heading-lg mt-4 mb-6 max-w-2xl mx-auto text-balance transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            What our clients say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote className="h-24 w-24 text-primary" />
          </div>
          
          <div className="relative overflow-hidden p-6 md:p-10">
            <div 
              className={cn(
                "transition-all duration-300 transform",
                isAnimating && direction === 'right' ? "-translate-x-10 opacity-0" : "",
                isAnimating && direction === 'left' ? "translate-x-10 opacity-0" : "",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              <p className="text-xl md:text-2xl mb-8 font-medium text-balance">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-lg">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === currentIndex ? "bg-primary w-6" : "bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
