
import { ReactNode, useRef, useState, useEffect } from 'react';

interface OptimizedSectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function OptimizedSection({ 
  id, 
  className = '', 
  children 
}: OptimizedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${className} ${isVisible ? '' : 'content-visibility-auto'}`}
    >
      {children}
    </section>
  );
}
