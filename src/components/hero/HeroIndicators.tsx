
interface HeroIndicatorsProps {
  contentItems: any[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

const HeroIndicators = ({ contentItems, currentIndex, onSelectIndex }: HeroIndicatorsProps) => {
  return (
    <div className="mt-10 flex justify-center space-x-2">
      {contentItems.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelectIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-primary scale-110' : 'bg-gray-300/50 scale-100'
          }`}
          aria-label={`Switch to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroIndicators;
