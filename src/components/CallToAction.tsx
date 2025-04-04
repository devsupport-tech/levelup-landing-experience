
import { ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'phone';
  text?: string;
  href?: string;
}

const CallToAction = ({ 
  className, 
  variant = 'primary', 
  text, 
  href = '#contact'
}: CallToActionProps) => {
  
  if (variant === 'phone') {
    return (
      <a 
        href="tel:+13462986933" 
        className={cn(
          "flex items-center gap-2 bg-black/80 hover:bg-black text-white px-4 py-2 rounded-md font-medium transition-colors",
          className
        )}
      >
        <Phone className="h-4 w-4" />
        (346) 298-6933
      </a>
    );
  }
  
  return (
    <a 
      href={href} 
      className={cn(
        "flex items-center gap-2 font-medium transition-all group rounded-md px-4 py-2",
        variant === 'primary' ? "bg-primary hover:bg-primary/90 text-white" : 
          "bg-black/80 hover:bg-black/90 text-white",
        className
      )}
    >
      {text || (variant === 'primary' ? 'Book a Call' : 'Learn More')}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
};

export default CallToAction;
