
import { Server, Code, LineChart, Shield, Zap, Smartphone, ClipboardCheck, Brain } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
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
        "glass-card p-6 rounded-xl transition-all duration-500 transform",
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

const Services = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  const services = [
    {
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      title: "Business Tech Checkup & Planning",
      description: "We'll look at what you're doing by hand and find the right tech tools to make life easier.",
      detailedServices: [
        "Technology Assessment with on-site evaluation",
        "Digital Opportunity Mapping with personalized reports",
        "Budget-Friendly Tech Plans (3-12 month roadmaps)",
        "Tool Selection Guidance with handpicked recommendations",
        "Tech Transition Timeline for smooth implementation"
      ],
      integrations: [
        "Connect with existing business software",
        "Compatibility assessment with industry-standard tools",
        "Integration roadmap planning",
        "API connectivity evaluation"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Smart Automation for Everyday Tasks",
      description: "Turn your paper forms and processes into smooth digital workflows that save time.",
      detailedServices: [
        "Form Digitization to convert paper processes",
        "Appointment Scheduler Setup linked to your calendar",
        "Email Response Templates for common questions",
        "Customer Follow-up Sequences for leads and check-ins",
        "Data Collection Systems for automatic info gathering",
        "Basic AI Assistants for routine tasks"
      ],
      integrations: [
        "Zapier workflow integration",
        "Google Workspace connectivity",
        "Microsoft 365 integration",
        "CRM system connections",
        "Calendar synchronization"
      ]
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Websites That Work For You 24/7",
      description: "Create always-open storefronts that take orders and bookings while you sleep.",
      detailedServices: [
        "Small Business Website Design focused on leads/sales",
        "Online Scheduling Integration for 24/7 booking",
        "Simple E-commerce Setup for product businesses",
        "Mobile Optimization for all device types",
        "Content Management Training to update your site",
        "Local SEO Setup to improve local search visibility",
        "Online Menu/Service Listings with easy updates"
      ],
      integrations: [
        "Payment gateway connectivity (Square, Stripe, PayPal)",
        "Social media platform integration",
        "Email marketing tool connections",
        "Google Business Profile synchronization",
        "Analytics integration (Google, Meta)"
      ]
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Simple Business Systems That Connect",
      description: "Keep all customer details in one place and connect your tools so information flows automatically.",
      detailedServices: [
        "Customer Database Setup for organized information",
        "Inventory Management Tools for digital tracking",
        "Payment Processing Integration for faster payments",
        "Digital Invoice Creation with automated billing",
        "Quote and Estimate Tools with professional templates",
        "Basic Accounting Software Setup to reduce tax stress",
        "App Connection Services to link your business tools"
      ],
      integrations: [
        "QuickBooks/Xero integration",
        "Point-of-sale system connections",
        "Inventory management synchronization",
        "E-commerce platform connections",
        "Custom API integrations",
        "Database migration and connectivity"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "From Manual to Modern Processes",
      description: "Eliminate paperwork with digital solutions for quotes, invoices, and receipts.",
      detailedServices: [
        "Paperless Office Setup for digital document storage",
        "Process Digitization for step-by-step workflows",
        "Team Communication Tools to reduce emails",
        "Digital Checklist Creation for consistent quality",
        "Remote Access Solutions to work from anywhere",
        "Document Signing Tools without printing or scanning",
        "Job/Project Management Systems for work tracking"
      ],
      integrations: [
        "Document management system connections",
        "Cloud storage integration (Google Drive, Dropbox, OneDrive)",
        "E-signature platform integration",
        "Project management tool connectivity",
        "Team collaboration platform connections"
      ]
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Business Insights Made Simple",
      description: "Get easy-to-understand information about your business performance with visual dashboards.",
      detailedServices: [
        "Basic Analytics Dashboard for key business metrics",
        "Customer Buying Pattern Reports of sales trends",
        "Inventory Level Monitoring with automatic alerts",
        "Revenue Visualization through graphs and charts",
        "Customer Segmentation Tools to identify VIP clients",
        "Performance Tracking for products and services",
        "Competitor Price Monitoring for market awareness"
      ],
      integrations: [
        "Data visualization tool connections",
        "Business intelligence platform integration",
        "Point-of-sale data synchronization",
        "E-commerce analytics integration",
        "Marketing platform data connections",
        "Custom reporting API integrations"
      ]
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Growth Tools & Marketing Helpers",
      description: "Set up systems that attract new customers and keep your existing ones coming back.",
      detailedServices: [
        "Email Newsletter Setup for regular communication",
        "Social Media Management Tools for scheduling",
        "Online Review Collection to showcase positive feedback",
        "Loyalty Program Digitization with rewards systems",
        "Basic Digital Ad Setup on Google or Facebook",
        "Lead Capture Forms to collect prospect information",
        "Customer Reactivation Campaigns for previous clients",
        "SMS Marketing Setup for text promotions"
      ],
      integrations: [
        "Social media platform connectivity",
        "Email marketing service integration",
        "Customer review platform connections",
        "Digital advertising account linking",
        "CRM data synchronization",
        "SMS gateway integration"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Friendly Tech Training & Support",
      description: "Get plain English instructions and always-available help when you need it.",
      detailedServices: [
        "Personalized User Guides for your specific business",
        "Video Training Library of recorded tutorials",
        "Staff Onboarding Materials for new employees",
        "Monthly Check-in Calls for regular support",
        "Remote Troubleshooting when issues arise",
        "Update Management to keep tools secure",
        "Digital Skills Workshops for your team"
      ],
      integrations: [
        "Learning management system integration",
        "Knowledge base connectivity",
        "Help desk system integration",
        "Remote support tool connections",
        "Staff training platform integration"
      ]
    },
  ];

  return (
    <section id="services" className="section-container">
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
          ref={headingRef}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
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
    </section>
  );
};

export default Services;
