
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  detailedServices: string[];
  integrations?: string[];
  delay: number;
}

const ServiceCard = ({ icon, title, description, detailedServices, integrations, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-500 transform hover:shadow-lg hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[800px]" : "max-h-0"
      )}>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-medium text-sm mb-2">Detailed Services</h4>
            <ul className="space-y-2 text-left">
              {detailedServices.map((service, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {integrations && integrations.length > 0 && (
            <div>
              <h4 className="font-medium text-sm mb-2 pt-2 border-t border-muted/30">Integrations</h4>
              <ul className="space-y-2 text-left">
                {integrations.map((integration, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-secondary mr-2 mt-1">→</span>
                    <span>{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <Button 
        onClick={() => setIsExpanded(!isExpanded)}
        variant="ghost"
        className="w-full mt-4 text-primary hover:text-primary/80 hover:bg-primary/5"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default ServiceCard;
