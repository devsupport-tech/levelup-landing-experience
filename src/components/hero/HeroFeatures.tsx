
import { ArrowRight, Zap, Cpu, Code } from 'lucide-react';

interface HeroFeaturesProps {
  isVisible: boolean;
  getStaggeredDelay: (index: number) => string;
}

const HeroFeatures = ({ isVisible, getStaggeredDelay }: HeroFeaturesProps) => {
  const features = [
    { icon: <Zap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Smart Automation", delay: 0 },
    { icon: <Cpu className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Simple Digital Tools", delay: 1 },
    { icon: <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />, title: "Custom Solutions", delay: 2 }
  ];

  return (
    <div className={`mt-24 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
      <p className="text-sm text-muted-foreground mb-8 text-center">Why Small Businesses Choose Us</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center items-center">
        {features.map((item, index) => (
          <div key={index} className={`flex flex-col items-center gap-3 p-5 rounded-xl hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:scale-105 group transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: getStaggeredDelay(item.delay) }}>
            <div className="rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-all duration-300">
              {item.icon}
            </div>
            <p className="font-medium">{item.title}</p>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatures;
