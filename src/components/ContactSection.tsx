
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  // Handle click on phone number
  const handlePhoneClick = () => {
    window.location.href = 'tel:+13462986933';
  };

  // Handle click on address for Google Maps
  const handleAddressClick = () => {
    window.open('https://maps.google.com/?q=1300+W+Sam+Houston+Pkwy+S,+Houston,+TX+77042', '_blank');
  };

  return (
    <section id="contact" className="section-container" ref={containerRef}>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div 
            className={cn(
              "transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium">
              Contact Us
            </span>
          </div>
          <h2 
            className={cn(
              "heading-lg mt-4 mb-6 text-balance transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Ready to level up your business?
          </h2>
          <p 
            className={cn(
              "text-muted-foreground mb-10 text-balance transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Get in touch with our team to discuss how we can help transform your business with innovative technology solutions.
          </p>

          <div 
            className={cn(
              "space-y-6 transition-all duration-700 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a 
                  href="mailto:info@levelupbusiness.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@levelupbusiness.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 cursor-pointer group" onClick={handlePhoneClick}>
              <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  (346) 298-6933
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 cursor-pointer group" onClick={handleAddressClick}>
              <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  1300 W Sam Houston Pkwy S, Houston, TX 77042
                </span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={cn(
            "glass-card rounded-xl p-6 md:p-8 transition-all duration-700 transform hover:shadow-lg",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <h3 className="heading-sm mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-colors"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full bg-primary text-primary-foreground flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-all hover:shadow-md",
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
