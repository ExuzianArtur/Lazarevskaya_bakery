import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#products", label: "Меню" },
    { href: "#contacts", label: "Контакты" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/95 backdrop-blur-sm shadow-lg' 
        : 'bg-primary'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-bakery-cream rounded-full flex items-center justify-center shadow-md">
              <svg 
                viewBox="0 0 24 24" 
                className="w-7 h-7 text-primary" 
                fill="currentColor"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H9V3H7V1H5V5H3V7H5V9C5 10.1 5.9 11 7 11V13H5V15H7V17H5V19H7V21H9V19H11V21H13V19H15V21H17V19H19V17H17V15H19V13H17V11C18.1 11 19 10.1 19 9V7H21V9C21 10.7 19.7 12 18 12V14C19.7 14 21 15.3 21 17V19C21 20.7 19.7 22 18 22H6C4.3 22 3 20.7 3 19V17C3 15.3 4.3 14 6 14V12C4.3 12 3 10.7 3 9V7H5V9H7V7H9V9H11V7H13V9H15V7H17V9H19V7H21Z"/>
              </svg>
            </div>
            <span className="text-primary-foreground font-bold text-xl tracking-wide">
              Семейная Пекарня
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-primary-foreground hover:text-bakery-accent transition-colors duration-300 font-medium uppercase tracking-wide relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bakery-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden bg-primary absolute top-full left-0 w-full shadow-xl border-t border-primary-foreground/20 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-primary-foreground hover:text-bakery-accent transition-all duration-300 font-medium text-left py-2 uppercase tracking-wide transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' 
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;