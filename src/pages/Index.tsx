
import Navbar from '@/components/Navbar';
import ModernHero from '@/components/home/ModernHero';
import FeatureShowcase from '@/components/home/FeatureShowcase';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/98 to-background/95">
      <Navbar />
      <ModernHero />
      <FeatureShowcase />
      <ProcessSection />
      <ClientTestimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
