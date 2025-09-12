import React from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-corporate-gray border-b border-secondary">
          <div className="flex items-center gap-6">
            <a href="tel:+22508413100" className="flex items-center gap-2 hover:text-corporate-gold transition-colors">
              <Phone className="h-4 w-4" />
              +225 08 41 31 00
            </a>
            <a href="mailto:jbkconsultingsarlu@gmail.com" className="flex items-center gap-2 hover:text-corporate-gold transition-colors">
              <Mail className="h-4 w-4" />
              jbkconsultingsarlu@gmail.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-corporate-blue">
              ARCHIMONEXT <span className="text-corporate-gold">SARL</span>
            </h1>
            <div className="hidden md:block ml-2 text-sm text-corporate-gray">
              Le Conseil de la Sentinelle
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="text-foreground hover:text-corporate-gold transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')} 
              className="text-foreground hover:text-corporate-gold transition-colors font-medium"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-foreground hover:text-corporate-gold transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-corporate-gold transition-colors font-medium"
            >
              Contact
            </button>
            <Button variant="hero" onClick={() => scrollToSection('contact')}>
              Demander un devis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-corporate-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-left text-foreground hover:text-corporate-gold transition-colors font-medium py-2"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')} 
                className="text-left text-foreground hover:text-corporate-gold transition-colors font-medium py-2"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left text-foreground hover:text-corporate-gold transition-colors font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-corporate-gold transition-colors font-medium py-2"
              >
                Contact
              </button>
              <div className="pt-2">
                <Button variant="hero" onClick={() => scrollToSection('contact')} className="w-full">
                  Demander un devis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;