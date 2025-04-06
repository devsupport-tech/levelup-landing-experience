
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Coffee Shop Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The automated inventory system they built has saved us countless hours every month. We can now focus on making great coffee instead of counting beans!",
      stars: 5
    },
    {
      name: "Sarah Williams",
      role: "Boutique Retailer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Our online store sales increased by 45% after implementing their e-commerce solution. The integration with our in-store POS system works flawlessly.",
      stars: 5
    },
    {
      name: "David Chen",
      role: "Law Firm Partner",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote: "Their document automation system transformed how we handle client intake. What used to take hours now happens in minutes with fewer errors.",
      stars: 5
    }
  ];

  // Handle index change from Carousel
  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black/40 to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary font-medium mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            SUCCESS STORIES
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Local 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 ml-2">
              Business Owners
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Don't just take our word for it. Here's what our clients have to say about our technology solutions.
          </motion.p>
        </div>

        <Carousel 
          className="w-full max-w-5xl mx-auto"
          onSelectNewActiveIndex={handleSelectIndex}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-70"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="relative w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-2 border-white/20"
                        />
                      </div>
                      
                      <div className="text-center mt-4">
                        <div className="flex justify-center gap-1 mb-2">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <Quote className="h-10 w-10 text-primary/40 mb-4" />
                      <p className="text-lg md:text-xl italic leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary scale-110' : 'bg-gray-300/50 scale-100'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-black/30 border-white/10 hover:bg-black/50" />
            <CarouselNext className="relative inset-0 translate-y-0 bg-black/30 border-white/10 hover:bg-black/50" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientTestimonials;
