
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ArrowRight, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const handleConsultation = () => {
    window.open('https://calendly.com/your-booking-link', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+13462986933';
  };

  return (
    <div ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          style={{ opacity, scale }}
          className="bg-gradient-to-r from-primary/20 to-purple-900/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Background effect */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
          
          <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 -top-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Business with Technology?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Book a free consultation and discover how our tailored technology solutions can help your business grow, save time, and increase profits.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="group bg-white hover:bg-white/90 text-black font-medium"
                    onClick={handleConsultation}
                  >
                    <CalendarClock className="mr-2 h-5 w-5" />
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleCall}
                    className="border-white/20 hover:border-white/40 font-medium"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (346) 298-6933
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:block w-80 h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
                  alt="Technology solutions" 
                  className="relative rounded-lg border border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
