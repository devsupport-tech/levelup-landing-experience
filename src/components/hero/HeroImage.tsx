
import LazyImage from '../LazyImage';

interface HeroImageProps {
  isVisible: boolean;
  imageLoaded: boolean;
  onImageLoad: () => void;
}

const HeroImage = ({ isVisible, imageLoaded, onImageLoad }: HeroImageProps) => {
  return (
    <div className={`lg:w-1/2 relative transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.7s' }}>
      <div className="relative">
        <div className="absolute -z-10 -left-10 -top-10 w-80 h-80 bg-primary/5 rounded-full filter blur-xl animate-pulse-slow"></div>
        
        <LazyImage 
          src="/lovable-uploads/5e1f1df5-44e6-4737-abe1-dc93ed57d389.png" 
          alt="Technology Solutions" 
          className={`rounded-lg shadow-lg border border-white/10 transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          width={600}
          height={400}
          onLoad={onImageLoad}
        />
        
        <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-secondary/10 rounded-full filter blur-xl animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default HeroImage;
