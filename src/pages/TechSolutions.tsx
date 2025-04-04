
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Zap, Cpu, Code, Rocket, CheckCircle, ArrowRight, BrainCircuit, Settings, Cloud, Database, Bot, Shield } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const TechSolutions = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("ai");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const solutionItems = {
    ai: [
      {
        icon: <BrainCircuit className="h-12 w-12 text-primary" />,
        title: "AI-Powered Document Processing",
        description: "Automate the extraction, categorization, and analysis of data from documents, reducing manual work by up to 90%.",
        benefits: ["Reduce processing time", "Minimize human errors", "Scale with growing document volumes"]
      },
      {
        icon: <Bot className="h-12 w-12 text-primary" />,
        title: "Intelligent Chatbots & Virtual Assistants",
        description: "Implement 24/7 customer support and internal process automation with custom AI assistants tailored to your business needs.",
        benefits: ["24/7 availability", "Consistent customer experience", "Reduced support costs"]
      },
      {
        icon: <Zap className="h-12 w-12 text-primary" />,
        title: "Predictive Analytics Solutions",
        description: "Leverage your business data to forecast trends, customer behavior, and market changes to make informed decisions.",
        benefits: ["Anticipate market changes", "Optimize inventory", "Identify new opportunities"]
      }
    ],
    tech: [
      {
        icon: <Cloud className="h-12 w-12 text-primary" />,
        title: "Cloud Infrastructure & Migration",
        description: "Modern, scalable, and secure cloud architecture designed for your specific business requirements.",
        benefits: ["Reduced IT costs", "Improved scalability", "Enhanced security"]
      },
      {
        icon: <Code className="h-12 w-12 text-primary" />,
        title: "Custom Software Development",
        description: "Tailor-made applications built with cutting-edge technologies to solve your unique business challenges.",
        benefits: ["Perfectly aligned with your needs", "Competitive advantage", "Improved efficiency"]
      },
      {
        icon: <Database className="h-12 w-12 text-primary" />,
        title: "Database Optimization & Management",
        description: "Expert design, implementation, and optimization of your data storage solutions for maximum performance.",
        benefits: ["Faster data access", "Reliable backups", "Scalable architecture"]
      }
    ],
    security: [
      {
        icon: <Shield className="h-12 w-12 text-primary" />,
        title: "Cybersecurity Solutions",
        description: "Comprehensive security assessments and implementations to protect your business from evolving threats.",
        benefits: ["Threat prevention", "Compliance assurance", "Peace of mind"]
      },
      {
        icon: <Settings className="h-12 w-12 text-primary" />,
        title: "Process Automation",
        description: "Streamline business operations through automated workflows, reducing costs and enhancing productivity.",
        benefits: ["Reduced operational costs", "Faster processes", "Error elimination"]
      },
      {
        icon: <Rocket className="h-12 w-12 text-primary" />,
        title: "Tech Stack Consultancy",
        description: "Expert guidance on selecting and implementing the right technologies for your business goals.",
        benefits: ["Future-proof architecture", "Best-in-class tools", "Integration expertise"]
      }
    ]
  };

  const faqItems = [
    {
      question: "What is AI automation and how can it benefit my business?",
      answer: "AI automation uses smart technology to handle tasks that normally require your time and attention. It can benefit your business by saving you money, reducing mistakes, speeding up work, running 24/7, and growing with your business without adding staff."
    },
    {
      question: "What is a technology stack and why is it important?",
      answer: "A technology stack is simply the collection of tools and systems that power your business online. Having the right tech tools is crucial because they determine how well your website or app performs, how easily it can grow, how secure it is, and how quickly you can adapt to changing business needs."
    },
    {
      question: "How do I know if my business needs AI solutions?",
      answer: "Your business could benefit from AI if you: have repetitive tasks that take up your time, need to organize lots of information, want better insights from your customer data, seek to provide 24/7 service, or want to make smarter business decisions based on trends and patterns."
    },
    {
      question: "How long does it take to implement these new tools?",
      answer: "For small businesses and solo entrepreneurs, many solutions can be up and running in just 2-3 weeks. More comprehensive systems might take 4-8 weeks. For larger businesses with complex needs, timelines can extend further, but we always work at your pace and provide clear timelines during our initial conversation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-4 inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm">
              <Zap className="w-4 h-4 mr-2" /> AI & Technology Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              Transform Your Business With <span className="text-gradient">Modern Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Leverage the power of AI automation and custom technology stacks to solve complex problems, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallToAction text="Schedule a Consultation" variant="primary" />
              <CallToAction text="See Our Solutions" variant="secondary" href="#solutions" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Automation</h3>
              <p className="text-muted-foreground mb-4">
                Streamline operations, reduce costs, and enhance decision-making with custom AI solutions tailored to your business needs.
              </p>
              <a href="#ai-section" className="inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
              <p className="text-muted-foreground mb-4">
                Build a solid technological foundation with modern, scalable, and secure tech stacks designed for your specific requirements.
              </p>
              <a href="#tech-section" className="inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation Process</h3>
              <p className="text-muted-foreground mb-4">
                Our streamlined approach ensures smooth integration of new technologies with minimal disruption to your business operations.
              </p>
              <a href="#process-section" className="inline-flex items-center text-primary">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Tabs Section */}
      <section id="solutions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of AI and technology solutions designed to address your business challenges.
            </p>
          </div>
          
          <Tabs defaultValue="ai" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> AI Solutions
              </TabsTrigger>
              <TabsTrigger value="tech" className="flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Tech Stack
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Security & Automation
              </TabsTrigger>
            </TabsList>
            
            {["ai", "tech", "security"].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solutionItems[tab as keyof typeof solutionItems].map((item, index) => (
                    <Card key={index} className="border border-border hover:shadow-md transition-all">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          {item.icon}
                        </div>
                        <CardTitle className="text-center">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Learn More</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Why You Need Technology Section */}
      <section id="why-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs Modern Technology</h2>
            <p className="text-lg text-muted-foreground">
              In today's competitive landscape, embracing the right technology is not just an advantage—it's a necessity for survival and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-semibold mb-4">AI Automation: The Competitive Edge</h3>
              <p className="text-muted-foreground mb-6">
                AI automation transforms how businesses operate by handling repetitive tasks, analyzing data at scale, and enabling smarter decision-making. This allows your team to focus on strategic activities that drive growth.
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
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="default" className="mt-6">
                Explore AI Solutions
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Real Business Impact</h3>
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="font-medium mb-2">Document Processing</h4>
                  <div className="flex justify-between mb-1">
                    <span>Manual Process</span>
                    <span>4 hours</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-muted-foreground h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-4">
                    <span>With AI Automation</span>
                    <span>15 minutes</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '6%' }}></div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="font-medium mb-2">Customer Response Time</h4>
                  <div className="flex justify-between mb-1">
                    <span>Without AI Chatbot</span>
                    <span>24+ hours</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-muted-foreground h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between mb-1 mt-4">
                    <span>With AI Chatbot</span>
                    <span>Instant</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '1%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-muted/30 rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Technology Stack Components</h3>
              <div className="space-y-4">
                {[
                  { title: "Front-End Technologies", desc: "User interfaces that are responsive, intuitive, and engaging." },
                  { title: "Back-End Systems", desc: "Robust servers and APIs that power your business logic." },
                  { title: "Database Solutions", desc: "Secure and efficient data storage optimized for your needs." },
                  { title: "Cloud Infrastructure", desc: "Scalable and flexible hosting with built-in redundancy." },
                  { title: "DevOps Pipeline", desc: "Automated deployment and testing for reliable updates." },
                  { title: "Security Protocols", desc: "Comprehensive protection against modern threats." }
                ].map((item, i) => (
                  <div key={i} className="bg-background p-4 rounded-lg border border-border">
                    <div className="flex items-start">
                      <Cpu className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Modern Tech Stack: Building for Growth</h3>
              <p className="text-muted-foreground mb-6">
                Your technology stack is the foundation of your digital presence. A well-designed tech stack ensures your applications are fast, secure, scalable, and adaptable to changing business needs.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Ensures your systems can scale with your business growth",
                  "Provides reliability and uptime for critical applications",
                  "Enables faster development of new features",
                  "Improves security and compliance with regulations",
                  "Reduces long-term maintenance costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="default" className="mt-6">
                Explore Tech Stack Options
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section id="process-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Implement Technology Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach ensures seamless integration of new technologies with minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: "Discovery & Assessment",
                  description: "We start by understanding your business goals, challenges, and current technology landscape to identify the most impactful solutions.",
                  icon: <Rocket className="w-6 h-6 text-primary" />
                },
                {
                  step: 2,
                  title: "Solution Design",
                  description: "Our experts design a tailored technology solution that addresses your specific needs, considering scalability, security, and future growth.",
                  icon: <Settings className="w-6 h-6 text-primary" />
                },
                {
                  step: 3,
                  title: "Development & Implementation",
                  description: "We build and implement the solution using industry best practices, with regular checkpoints to ensure alignment with your expectations.",
                  icon: <Code className="w-6 h-6 text-primary" />
                },
                {
                  step: 4,
                  title: "Testing & Optimization",
                  description: "Rigorous testing ensures your solution works flawlessly, followed by optimization for maximum performance and efficiency.",
                  icon: <Cpu className="w-6 h-6 text-primary" />
                },
                {
                  step: 5,
                  title: "Training & Deployment",
                  description: "We train your team on the new systems and deploy the solution with minimal disruption to your business operations.",
                  icon: <Zap className="w-6 h-6 text-primary" />
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10 border border-primary">
                      {item.icon}
                    </div>
                    <div className={`bg-card rounded-xl p-6 border border-border shadow-sm flex-1 ${index % 2 === 1 ? 'md:mr-14' : 'md:ml-14'}`}>
                      <div className="flex items-center mb-4">
                        <span className="bg-primary/10 text-primary text-sm font-medium rounded-full px-2.5 py-0.5 mr-2">
                          Step {item.step}
                        </span>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Technology Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq-section" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about AI automation and technology stacks.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Have more questions? We're here to help you understand how technology can transform your business.
              </p>
              <Button size="lg">Contact Our Experts</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-primary/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Take the first step toward leveraging AI and modern technology to grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CallToAction text="Book a Free Consultation" variant="primary" />
              <CallToAction text="Explore Case Studies" variant="secondary" />
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 max-w-lg mx-auto">
              <h3 className="text-xl font-semibold mb-4">Stay Updated with Technology Trends</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest insights on AI, technology stacks, and digital transformation.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                  required 
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TechSolutions;
