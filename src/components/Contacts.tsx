import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#contacts');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      text: "+7 (999) 123-45-67",
      href: "tel:+79991234567"
    },
    {
      icon: Mail,
      text: "info@pekarnya.ru",
      href: "mailto:info@pekarnya.ru"
    },
    {
      icon: MapPin,
      text: "ул. Пекарская, 15, Москва",
      href: null
    },
    {
      icon: Clock,
      text: "Пн-Вс с 8:00 до 21:00",
      href: null
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-6 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Контакты
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Свяжитесь с нами для заказа или вопросов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-800 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              const content = (
                <div className="flex items-center p-6 card-warm rounded-xl hover-lift group transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mr-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.text}
                    </span>
                  </div>
                </div>
              );

              return contact.href ? (
                <a 
                  key={index} 
                  href={contact.href}
                  className="block transition-transform duration-300 hover:translate-x-2"
                >
                  {content}
                </a>
              ) : (
                <div 
                  key={index}
                  className="transition-transform duration-300 hover:translate-x-2"
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className={`transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-warm bg-muted">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CCU5nEpx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;