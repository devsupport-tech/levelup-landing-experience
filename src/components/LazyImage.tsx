
import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onLoad?: () => void; // Added an optional onLoad callback
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  onLoad
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={`${className} lazy-load ${isLoaded ? 'lazy-loaded' : ''}`}
        onLoad={handleLoad}
        loading="lazy"
        width={width}
        height={height}
      />
    </div>
  );
}
