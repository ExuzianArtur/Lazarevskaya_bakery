import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bakery-hero.jpg";
import breadImage from "@/assets/bread-selection.jpg";
import pastriesImage from "@/assets/pastries.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMenuClick = () => {
    const element = document.querySelector("#products");
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Тепло и вкус в каждой
              <span className="block text-bakery-accent">булочке</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              Свежая выпечка каждый день, приготовленная с любовью и по традиционным рецептам
            </p>
            <Button 
              onClick={handleMenuClick}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-8 py-4 text-lg rounded-full shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              Смотреть меню
            </Button>
          </div>

          {/* Images */}
          <div className={`hidden lg:flex justify-center items-center relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative w-full max-w-lg">
              {/* Back image */}
              <div className={`absolute top-20 left-8 w-80 h-80 rounded-[3rem] overflow-hidden shadow-warm transition-all duration-800 delay-500 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <img 
                  src={breadImage} 
                  alt="Свежий хлеб" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Front image */}
              <div className={`relative z-10 w-80 h-80 rounded-[2rem] overflow-hidden shadow-warm border-4 border-primary-foreground transition-all duration-800 delay-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <img 
                  src={pastriesImage} 
                  alt="Выпечка" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;