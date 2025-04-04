
import { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import LazyImage from '@/components/LazyImage';
import { cn } from '@/lib/utils';
import { 
  BrainCircuit, 
  Bot, 
  BarChart3, 
  Database, 
  Code, 
  Cpu, 
  Zap, 
  Shield, 
  Rocket, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const SectionHeading = ({ 
  label, 
  title, 
  description, 
  isVisible 
}: { 
  label: string; 
  title: string; 
  description: string; 
  isVisible: boolean;
}) => {
  return (
    <div className="text-center mb-16">
      <div 
        className={cn(
          "transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block">
          {label}
        </span>
      </div>
      <h2 
        className={cn(
          "heading-lg mt-4 mb-6 max-w-3xl mx-auto text-balance transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: "100ms" }}
      >
        {title}
      </h2>
      <p 
        className={cn(
          "text-muted-foreground max-w-2xl mx-auto text-balance transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        {description}
      </p>
    </div>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  isVisible 
}: { 
  icon: JSX.Element; 
  title: string; 
  description: string; 
  delay?: number;
  isVisible: boolean;
}) => {
  return (
    <div 
      className={cn(
        "bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${300 + delay * 50}ms` }}
    >
      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const AiTechnology = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aiSolutionsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  const [heroVisible, setHeroVisible] = useState(false);
  const [aiSolutionsVisible, setAiSolutionsVisible] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeroVisible(true);
        heroObserver.disconnect();
      }
    }, observerOptions);
    
    const aiSolutionsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAiSolutionsVisible(true);
        aiSolutionsObserver.disconnect();
      }
    }, observerOptions);
    
    const techStackObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTechStackVisible(true);
        techStackObserver.disconnect();
      }
    }, observerOptions);
    
    const processObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProcessVisible(true);
        processObserver.disconnect();
      }
    }, observerOptions);
    
    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (aiSolutionsRef.current) aiSolutionsObserver.observe(aiSolutionsRef.current);
    if (techStackRef.current) techStackObserver.observe(techStackRef.current);
    if (processRef.current) processObserver.observe(processRef.current);
    
    return () => {
      heroObserver.disconnect();
      aiSolutionsObserver.disconnect();
      techStackObserver.disconnect();
      processObserver.disconnect();
    };
  }, []);

  const aiSolutions = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "AI-Powered Automation",
      description: "Eliminate repetitive tasks with intelligent systems that learn and adapt to your business processes."
    },
    {
      icon: <Bot className="h-6 w-6 text-primary" />,
      title: "Intelligent Assistants",
      description: "Custom AI assistants that handle customer inquiries, appointment scheduling, and routine follow-ups."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Predictive Analytics",
      description: "Transform your raw data into valuable insights that help you make smarter business decisions."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Document Processing",
      description: "Extract, categorize, and analyze information from documents using advanced AI technologies."
    }
  ];

  const techStacks = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Custom Software",
      description: "Tailor-made applications built specifically for your business needs using modern technologies."
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Cloud Infrastructure",
      description: "Reliable, scalable, and secure cloud solutions that grow with your business demands."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Integration Services",
      description: "Connect your existing tools and systems to create streamlined workflows and eliminate data silos."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your business with robust security solutions designed for small and medium businesses."
    }
  ];

  const processList = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We start by understanding your business goals, existing processes, and pain points to identify the best solutions."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our team creates a detailed implementation plan tailored to your specific needs and budget constraints."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "We build and integrate the solutions using best practices, ensuring compatibility with your existing systems."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "Thorough testing ensures everything works flawlessly before going live, with optimization for peak performance."
    },
    {
      number: "05",
      title: "Training & Support",
      description: "We provide comprehensive training for your team and ongoing support to maximize your technology investment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div 
                className={cn(
                  "mb-4 transition-all duration-700 transform",
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm flex items-center w-fit">
                  <Sparkles className="w-4 h-4 mr-2" /> AI & Technology Solutions
                </span>
              </div>
              
              <h1 
                className={cn(
                  "text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 transform",
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: "100ms" }}
              >
                Transform Your Business With <span className="text-gradient">Modern Technology</span>
              </h1>
              
              <p 
                className={cn(
                  "text-xl text-muted-foreground mb-8 transition-all duration-700 transform",
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: "200ms" }}
              >
                Leverage the power of AI automation and custom technology solutions to solve complex problems, reduce costs, and drive growth.
              </p>
              
              <div 
                className={cn(
                  "flex flex-col sm:flex-row gap-4 transition-all duration-700 transform",
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <CallToAction text="Schedule a Consultation" variant="primary" />
                <CallToAction text="Learn More" variant="secondary" href="#ai-solutions" />
              </div>
            </div>
            
            <div 
              className={cn(
                "md:w-1/2 transition-all duration-1000 transform",
                heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              )}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-72 h-72 bg-primary/5 rounded-full filter blur-xl"></div>
                <LazyImage 
                  src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
                  alt="AI and Technology Solutions" 
                  className="rounded-lg shadow-lg relative z-10 w-full object-cover"
                />
                <div className="absolute -z-10 top-10 -right-10 w-48 h-48 bg-secondary/10 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Solutions Section */}
      <section id="ai-solutions" ref={aiSolutionsRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            label="AI Solutions"
            title="Intelligent Automation for Modern Businesses"
            description="Harness the power of artificial intelligence to streamline operations, gain competitive insights, and enhance customer experiences."
            isVisible={aiSolutionsVisible}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSolutions.map((solution, index) => (
              <FeatureCard 
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                delay={index}
                isVisible={aiSolutionsVisible}
              />
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 bg-card border border-border rounded-xl p-8 transition-all duration-700 transform",
              aiSolutionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">How AI Can Transform Your Business</h3>
                <p className="text-muted-foreground mb-6">
                  AI technology doesn't just automate tasks—it fundamentally changes how businesses operate, make decisions, and interact with customers.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Reduce operational costs by up to 40%",
                    "Process information 5x faster than manual methods",
                    "Make data-driven decisions with predictive insights",
                    "Deliver personalized customer experiences at scale",
                    "Identify and capitalize on new opportunities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 -left-5 -bottom-5 w-60 h-60 bg-primary/5 rounded-full filter blur-xl"></div>
                <LazyImage 
                  src="/lovable-uploads/d85248f2-37fe-4406-b31a-5fd2656f746e.png" 
                  alt="AI Business Transformation" 
                  className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Stack Section */}
      <section id="tech-stack" ref={techStackRef} className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            label="Technology Stack"
            title="Modern Technology Solutions for Growth"
            description="Build your digital foundation with scalable, secure, and flexible technology stacks designed for your specific business needs."
            isVisible={techStackVisible}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((tech, index) => (
              <FeatureCard 
                key={index}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
                delay={index}
                isVisible={techStackVisible}
              />
            ))}
          </div>
          
          <div 
            className={cn(
              "mt-16 text-center transition-all duration-700 transform",
              techStackVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Ready to modernize your technology?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts will help you identify the right technologies for your business and implement them with minimal disruption.
            </p>
            <CallToAction text="Get Started Today" variant="primary" />
          </div>
        </div>
      </section>
      
      {/* Implementation Process Section */}
      <section id="process" ref={processRef} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            label="Our Process"
            title="How We Implement Technology Solutions"
            description="Our structured approach ensures seamless integration of new technologies with minimal disruption to your business operations."
            isVisible={processVisible}
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-[40px] top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-10">
              {processList.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex gap-6 transition-all duration-700 transform",
                    processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 border border-primary flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-primary">{item.number}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className={cn(
                "mt-16 text-center transition-all duration-700 transform",
                processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: "800ms" }}
            >
              <CallToAction text="Start Your Technology Journey" variant="primary" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Take the first step toward leveraging AI and modern technology to grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CallToAction text="Book a Free Consultation" variant="primary" />
              <CallToAction text="Learn More" variant="secondary" href="/tech-solutions" />
              <a 
                href="tel:+13462986933" 
                className="flex items-center gap-2 bg-card hover:bg-card/80 border border-border px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Phone className="h-5 w-5" />
                (346) 298-6933
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AiTechnology;
