import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Award, Users, Building } from 'lucide-react';
import constructionHero from '@/assets/construction-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={constructionHero} 
          alt="Construction moderne à Abidjan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Votre partenaire de confiance en{' '}
            <span className="text-corporate-gold">BTP & Immobilier</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            ARCHIMONEXT SARL accompagne vos projets de construction, rénovation et gestion immobilière 
            à Abidjan avec expertise et professionnalisme.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="group"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-corporate-gold" />
              </div>
              <div className="text-3xl font-bold text-corporate-gold mb-2">+15</div>
              <div className="text-white/80">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Building className="h-8 w-8 text-corporate-gold" />
              </div>
              <div className="text-3xl font-bold text-corporate-gold mb-2">100+</div>
              <div className="text-white/80">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-corporate-gold" />
              </div>
              <div className="text-3xl font-bold text-corporate-gold mb-2">98%</div>
              <div className="text-white/80">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;