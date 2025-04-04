
import { useRef } from 'react';
import HeroBackground from './hero/HeroBackground';
import { HeroContentDisplay, heroContent } from './hero/HeroContent';
import HeroFeatures from './hero/HeroFeatures';
import HeroIndicators from './hero/HeroIndicators';
import HeroActions from './hero/HeroActions';
import HeroImage from './hero/HeroImage';
import { useHeroAnimation } from './hero/useHeroAnimation';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleOneRef = useRef<HTMLDivElement>(null);
  const circleTwoRef = useRef<HTMLDivElement>(null);
  
  const {
    isVisible,
    contentIndex,
    transitioning,
    imageLoaded,
    getStaggeredDelay,
    handleSelectIndex,
    handleImageLoad
  } = useHeroAnimation({
    containerRef,
    circleOneRef,
    circleTwoRef,
    contentItems: heroContent
  });

  const currentContent = heroContent[contentIndex];

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-background to-background/95"
    >
      <HeroBackground 
        circleOneRef={circleOneRef}
        circleTwoRef={circleTwoRef}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroContentDisplay
              tag={currentContent.tag}
              title={currentContent.title}
              description={currentContent.description}
              icon={currentContent.icon}
              isVisible={isVisible}
              transitioning={transitioning}
            />
            
            <HeroActions isVisible={isVisible} />
          </div>
          
          <HeroImage 
            isVisible={isVisible} 
            imageLoaded={imageLoaded} 
            onImageLoad={handleImageLoad} 
          />
        </div>
        
        <HeroIndicators 
          contentItems={heroContent}
          currentIndex={contentIndex}
          onSelectIndex={handleSelectIndex}
        />
        
        <HeroFeatures 
          isVisible={isVisible} 
          getStaggeredDelay={getStaggeredDelay} 
        />
      </div>
    </div>
  );
};

export default Hero;
