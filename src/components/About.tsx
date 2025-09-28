import { useEffect, useState } from "react";
import bakerImage from "@/assets/baker-working.jpg";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    const element = document.querySelector('#about');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            О нашей пекарне
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Узнайте больше о нашей истории и традициях
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-lg leading-relaxed text-foreground">
              Мы – семейная пекарня, которая каждый день готовит для вас свежий хлеб, 
              ароматные булочки и изысканные сладости. Наша цель – дарить тепло и радость 
              через вкусную и качественную выпечку.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              С 2010 года мы сохраняем традиции домашней выпечки, используя только 
              натуральные ингредиенты и проверенные рецепты, передаваемые из поколения 
              в поколение.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
              <p className="text-primary font-semibold italic">
                "Каждый день мы встаем до рассвета, чтобы испечь для вас самый свежий 
                и вкусный хлеб. Это наша страсть и наша семейная традиция."
              </p>
              
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img src={bakerImage} alt="Пекарь за работой" className="w-full rounded-2xl shadow-warm object-cover h-96" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;