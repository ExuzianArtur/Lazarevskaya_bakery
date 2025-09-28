import { useEffect, useState } from "react";
import { Leaf, Heart, Flame } from "lucide-react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Leaf,
      title: "Натуральные ингредиенты",
      description: "Только свежие и качественные продукты"
    },
    {
      icon: Heart,
      title: "Семейные традиции",
      description: "Рецепты передаются из поколения в поколение"
    },
    {
      icon: Flame,
      title: "Свежая выпечка",
      description: "Готовим ежедневно утром и вечером"
    }
  ];

  return (
    <section id="features" className="relative -mt-20 z-20 px-4">
      <div className="container mx-auto">
        {/* Desktop version */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`card-warm p-8 text-center rounded-xl hover-lift transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile version - single card with rotation */}
        <div className="md:hidden relative h-48">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isActive = index === currentFeature;
            return (
              <div
                key={index}
                className={`card-warm p-8 text-center rounded-xl absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;