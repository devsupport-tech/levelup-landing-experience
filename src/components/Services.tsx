
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './services/ServiceCard';
import ServicesHeader from './services/ServicesHeader';
import useVisibilityDetection from '@/hooks/useVisibilityDetection';
import { services } from '@/data/ServiceData';

const Services = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingVisible = useVisibilityDetection(headingRef);
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate('/tech-solutions');
  };

  return (
    <section id="services" className="section-container">
      <div ref={headingRef}>
        <ServicesHeader isHeadingVisible={isHeadingVisible} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            detailedServices={service.detailedServices}
            integrations={service.integrations}
            delay={100 * index}
          />
        ))}
      </div>

      <div className={cn(
        "mt-12 text-center transition-all duration-700 transform",
        isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )} style={{ transitionDelay: "600ms" }}>
        <Button 
          onClick={handleViewAllServices}
          size="lg" 
          className="bg-primary hover:bg-primary/90"
        >
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default Services;
