import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Facebook,
  Linkedin,
  Clock,
  Building
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-corporate-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              ARCHIMONEXT <span className="text-corporate-gold">SARL</span>
            </h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Le Conseil de la Sentinelle - Votre partenaire de confiance pour tous vos projets 
              BTP et immobiliers en Côte d'Ivoire. Nous mettons notre expertise au service de 
              votre réussite depuis plus de 15 ans.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-corporate-gold" />
                <span className="text-white/80">
                  Abidjan, Yopougon Maroc - Carrefour Tiken Jah
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-corporate-gold" />
                <a href="tel:+22508413100" className="text-white/80 hover:text-corporate-gold transition-colors">
                  +225 08 41 31 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-corporate-gold" />
                <a href="mailto:jbkconsultingsarlu@gmail.com" className="text-white/80 hover:text-corporate-gold transition-colors">
                  jbkconsultingsarlu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-corporate-gold">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-white/80 hover:text-corporate-gold transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('apropos')}
                  className="text-white/80 hover:text-corporate-gold transition-colors"
                >
                  À propos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-corporate-gold transition-colors"
                >
                  Nos Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-corporate-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-corporate-gold">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Construction</li>
              <li className="text-white/80">Rénovation</li>
              <li className="text-white/80">BTP Infrastructures</li>
              <li className="text-white/80">Achat Immobilier</li>
              <li className="text-white/80">Vente Immobilier</li>
              <li className="text-white/80">Gestion Immobilière</li>
              <li className="text-white/80">Conseil & Expertise</li>
            </ul>
          </div>
        </div>

        {/* Business Hours & Social */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Business Hours */}
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-corporate-gold" />
              <div className="text-sm text-white/80">
                <span className="font-medium">Lun-Ven:</span> 8h00-18h00 | 
                <span className="font-medium"> Sam:</span> 8h00-14h00
              </div>
            </div>

            {/* Social Links & WhatsApp */}
            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/22508413100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              
              {/* Placeholder for social media links - can be updated when available */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-not-allowed opacity-50">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-not-allowed opacity-50">
                  <Linkedin className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manager Info */}
        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Building className="h-5 w-5 text-corporate-gold" />
              <span className="font-semibold">Gérant : M. Bohoussou Kouame Juste</span>
            </div>
            <p className="text-sm text-white/70">
              Société de droit ivoirien - Expert en BTP et Immobilier
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © {currentYear} ARCHIMONEXT SARL. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <span className="hover:text-corporate-gold transition-colors cursor-pointer">
                Mentions légales
              </span>
              <span className="hover:text-corporate-gold transition-colors cursor-pointer">
                Politique de confidentialité
              </span>
              <span className="hover:text-corporate-gold transition-colors cursor-pointer">
                CGV
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;