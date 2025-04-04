
import { useState, useEffect, RefObject } from 'react';

interface UseHeroAnimationProps {
  containerRef: RefObject<HTMLDivElement>;
  circleOneRef: RefObject<HTMLDivElement>;
  circleTwoRef: RefObject<HTMLDivElement>;
  contentItems: any[];
}

export const useHeroAnimation = ({ 
  containerRef, 
  circleOneRef, 
  circleTwoRef,
  contentItems
}: UseHeroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Content rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setContentIndex((prev) => (prev + 1) % contentItems.length);
        setTransitioning(false);
      }, 500);
    }, 8000); // Change content every 8 seconds

    return () => clearInterval(interval);
  }, [contentItems.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !circleOneRef.current || !circleTwoRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      // Calculate the percentage across the container (0 to 1)
      const xPercent = mouseX / width;
      const yPercent = mouseY / height;
      
      // Use this to move the circles in parallax effect
      const circleOneX = xPercent * 60 - 30; // -30px to +30px
      const circleOneY = yPercent * 60 - 30;
      
      const circleTwoX = xPercent * -50 + 25; // +25px to -25px (inverse)
      const circleTwoY = yPercent * -50 + 25;
      
      // Apply transformations with smooth transition
      circleOneRef.current.style.transform = `translate(${circleOneX}px, ${circleOneY}px)`;
      circleTwoRef.current.style.transform = `translate(${circleTwoX}px, ${circleTwoY}px)`;
    };

    // Set visibility after a small delay to trigger animations
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [containerRef, circleOneRef, circleTwoRef]);

  const getStaggeredDelay = (index: number) => {
    return `${0.4 + (index * 0.2)}s`;
  };

  const handleSelectIndex = (index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setContentIndex(index);
      setTransitioning(false);
    }, 500);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return {
    isVisible,
    contentIndex,
    transitioning,
    imageLoaded,
    getStaggeredDelay,
    handleSelectIndex,
    handleImageLoad
  };
};
