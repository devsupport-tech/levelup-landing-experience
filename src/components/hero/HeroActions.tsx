
import CallToAction from '../CallToAction';
import { Phone } from 'lucide-react';

interface HeroActionsProps {
  isVisible: boolean;
}

const HeroActions = ({ isVisible }: HeroActionsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
      <CallToAction text="Book a Free Consultation" variant="primary" />
      <CallToAction text="See How We Can Help" variant="secondary" href="/ai-technology" />
      <a 
        href="tel:+13462986933" 
        className="flex items-center gap-2 bg-black/80 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <Phone className="h-5 w-5" />
        (346) 298-6933
      </a>
    </div>
  );
};

export default HeroActions;
