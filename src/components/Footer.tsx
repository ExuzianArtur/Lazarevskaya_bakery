import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const navItems = [
    { href: "#hero", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#products", label: "Меню" },
    { href: "#contacts", label: "Контакты" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Phone, href: "tel:+79991234567", label: "Телефон" },
    { icon: Mail, href: "mailto:info@pekarnya.ru", label: "Почта" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Навигация
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-bakery-accent"></span>
            </h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-primary-foreground/80 hover:text-bakery-accent transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bakery-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Контакты
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-bakery-accent"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <a 
                  href="tel:+79991234567"
                  className="text-primary-foreground/80 hover:text-bakery-accent transition-colors duration-300"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href="mailto:info@pekarnya.ru"
                  className="text-primary-foreground/80 hover:text-bakery-accent transition-colors duration-300"
                >
                  info@pekarnya.ru
                </a>
              </div>
              <div className="text-primary-foreground/80">
                ул. Пекарская, 15, Москва
              </div>
              <div className="text-primary-foreground/80">
                Пн-Вс: 8:00 - 21:00
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Социальные сети
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-bakery-accent"></span>
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-bakery-accent hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Семейная Пекарня. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;