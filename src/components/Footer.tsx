
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import CallToAction from './CallToAction';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-12 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
                alt="Level Up Business Logo" 
                className="h-24 w-auto mr-3" 
              />
              <div>
                <div className="text-2xl font-bold">Level<span className="text-primary">Up</span></div>
                <div className="text-sm uppercase tracking-wider">BUSINESS</div>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 max-w-xs">
              Helping small businesses grow with smart tools and technology that save time and increase profits.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="tel:+13462986933" 
                  className="hover:text-primary transition-colors"
                >
                  (346) 298-6933
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:info@levelupbusiness.com" 
                  className="hover:text-primary transition-colors"
                >
                  info@levelupbusiness.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <a 
                  href="https://maps.google.com/?q=1300+W+Sam+Houston+Pkwy+S,+Houston,+TX+77042" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  1300 W Sam Houston Pkwy S, Houston, TX 77042
                </a>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <CallToAction text="Book a Call" variant="primary" className="text-sm" />
              <CallToAction variant="phone" className="text-sm" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 xl:gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Friendly Support</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Quick Results</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No Tech Jargon</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Ongoing Help</span>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Level Up Business. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
