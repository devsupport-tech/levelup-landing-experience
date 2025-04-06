
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Lightbulb, ClipboardCheck, Wrench, BarChart } from 'lucide-react';

const ProcessSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
      title: 'Discovery',
      description: 'We learn about your business challenges and goals to identify the right technology approach.'
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-green-400" />,
      title: 'Planning',
      description: 'Our experts design a custom solution that addresses your specific needs and integrates with your existing systems.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-400" />,
      title: 'Implementation',
      description: 'We develop and implement your solution with minimal disruption to your business operations.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-purple-400" />,
      title: 'Support & Growth',
      description: 'Ongoing support ensures your technology continues to evolve with your business needs.'
    }
  ];

  return (
    <div ref={ref} className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            OUR APPROACH
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A Simple Process for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 ml-2">
              Powerful Results
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We make implementing technology solutions straightforward and stress-free for small business owners.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 transform -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 last:mb-0 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Step number bubble */}
              <div className="absolute left-1/2 md:left-auto md:top-0 transform -translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-black flex items-center justify-center border-2 border-primary z-10 hidden md:flex">
                <span className="font-bold text-white">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className={`md:w-5/12 text-center md:text-${index % 2 === 1 ? 'left' : 'right'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/50 mb-4 backdrop-blur-sm border border-white/10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="md:w-2/12 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/50 border-2 border-primary flex items-center justify-center md:hidden">
                  <span className="font-bold text-white">{index + 1}</span>
                </div>
              </div>
              
              <div className="md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
