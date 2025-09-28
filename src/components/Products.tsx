import { useEffect, useState } from "react";
import breadImage from "@/assets/bread-selection.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import cakeImage from "@/assets/chocolate-cake.jpg";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#products');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      image: breadImage,
      title: "Домашний хлеб",
      description: "Свежий, румяный и ароматный хлеб, испеченный по традиционному рецепту.",
      price: "250 ₽"
    },
    {
      id: 2,
      image: pastriesImage,
      title: "Булочки с корицей",
      description: "Мягкие, сладкие булочки с ароматом корицы и ванили.",
      price: "180 ₽"
    },
    {
      id: 3,
      image: croissantsImage,
      title: "Круассаны",
      description: "Хрустящие и нежные французские круассаны с маслом.",
      price: "220 ₽"
    },
    {
      id: 4,
      image: cakeImage,
      title: "Шоколадный торт",
      description: "Насыщенный вкус шоколада и нежный крем из натуральных ингредиентов.",
      price: "550 ₽"
    }
  ];

  return (
    <section id="products" className="py-20 bg-bakery-soft/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Наше меню
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Свежая выпечка ежедневно, приготовленная с любовью
          </p>
        </div>

        {/* Products Grid */}
        <div className="relative">
          {/* Decorative line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`card-warm p-6 rounded-2xl transition-all duration-800 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  index % 2 === 0 ? 'lg:justify-self-end lg:mr-12' : 'lg:justify-self-start lg:ml-12'
                } ${
                  activeCard === product.id ? 'scale-105 shadow-warm' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveCard(product.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="text-3xl font-bold text-bakery-accent">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;