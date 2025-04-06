
import { Check, Monitor, Phone, Laptop, Zap, Bot, Code, Database, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeatureShowcase = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: 'AI-Powered Automation',
      description: 'Streamline repetitive tasks and workflows with smart automation tools designed for small businesses.',
      benefits: ['Reduce manual work', 'Eliminate human error', 'Focus on growth']
    },
    {
      icon: <Laptop className="h-10 w-10 text-primary" />,
      title: 'Custom Software Solutions',
      description: 'Tailored applications built specifically for your business needs and processes.',
      benefits: ['Perfect fit solutions', 'Improved efficiency', 'Competitive advantage']
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Integration Services',
      description: 'Connect all your business tools and systems to work seamlessly together.',
      benefits: ['Centralized data', 'Simplified workflows', 'Enhanced productivity']
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: 'Smart Business Analytics',
      description: 'Transform your business data into actionable insights with intelligent reporting.',
      benefits: ['Data-driven decisions', 'Customer insights', 'Performance tracking']
    }
  ];

  return (
    <div ref={sectionRef} className="py-24 relative" data-aos="fade-up">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            TECHNOLOGY SOLUTIONS
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Cutting-Edge Technology<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              For Your Business Growth
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We provide smart, affordable technology solutions that help small businesses thrive in the digital world.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-lg p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                
                <p className="text-muted-foreground mb-5">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate('/tech-solutions')}
            className="bg-black/30 backdrop-blur-sm border-white/10 hover:bg-black/40"
          >
            Explore All Solutions
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
