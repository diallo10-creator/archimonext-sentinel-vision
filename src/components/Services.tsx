import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Hammer, 
  Home, 
  Building, 
  Wrench, 
  Key, 
  Settings,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import btpServicesImage from '@/assets/btp-services.jpg';
import realEstateHero from '@/assets/real-estate-hero.jpg';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const btpServicesList = [
    "Construction de bâtiments résidentiels et commerciaux",
    "Rénovation et réhabilitation",
    "Infrastructures routières et urbaines", 
    "Travaux de terrassement et fondations",
    "Installation électrique et plomberie",
    "Finitions et aménagements intérieurs"
  ];

  const immobilierServices = [
    "Achat et vente de propriétés",
    "Évaluation immobilière professionnelle",
    "Gestion locative complète",
    "Conseil en investissement immobilier",
    "Accompagnement juridique",
    "Recherche et prospection immobilière"
  ];

  const diversServices = [
    "Études de faisabilité",
    "Maîtrise d'œuvre",
    "Consulting en développement urbain",
    "Formation technique BTP",
    "Audit et expertise bâtiment",
    "Services de maintenance"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-corporate-blue border-corporate-gold">
            Nos Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
            Des solutions complètes pour vos projets
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            ARCHIMONEXT SARL vous accompagne dans tous vos projets BTP et immobiliers 
            avec expertise et professionnalisme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* BTP Services */}
          <Card className="group hover:shadow-corporate transition-all duration-300 border-corporate-gold/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Hammer className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-corporate-blue">Services BTP</CardTitle>
              <p className="text-corporate-gray">Construction, rénovation et infrastructures</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {btpServicesList.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-corporate-gold mt-0.5 flex-shrink-0" />
                  <span className="text-corporate-gray text-sm">{service}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button 
                  variant="corporate" 
                  className="w-full group" 
                  onClick={scrollToContact}
                >
                  Demander un devis BTP
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Real Estate Services */}
          <Card className="group hover:shadow-corporate transition-all duration-300 border-corporate-gold/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Home className="h-10 w-10 text-corporate-blue" />
              </div>
              <CardTitle className="text-2xl text-corporate-blue">Immobilier</CardTitle>
              <p className="text-corporate-gray">Achat, vente et gestion de biens</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {immobilierServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-corporate-gold mt-0.5 flex-shrink-0" />
                  <span className="text-corporate-gray text-sm">{service}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button 
                  variant="gold" 
                  className="w-full group" 
                  onClick={scrollToContact}
                >
                  Consulter nos biens
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Diverse Services */}  
          <Card className="group hover:shadow-corporate transition-all duration-300 border-corporate-gold/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-corporate-blue">Services Divers</CardTitle>
              <p className="text-corporate-gray">Conseil et expertise technique</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {diversServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-corporate-gold mt-0.5 flex-shrink-0" />
                  <span className="text-corporate-gray text-sm">{service}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button 
                  variant="corporate" 
                  className="w-full group" 
                  onClick={scrollToContact}
                >
                  Nous consulter
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-2xl shadow-corporate">
            <img 
              src={btpServicesImage} 
              alt="Services BTP ARCHIMONEXT"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-primary/70 flex items-center justify-center">
              <div className="text-center text-white">
                <Building className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Expertise BTP</h3>
                <p className="text-white/90">Construction et rénovation</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-corporate">
            <img 
              src={realEstateHero} 
              alt="Services Immobilier ARCHIMONEXT" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-gold/70 flex items-center justify-center">
              <div className="text-center text-corporate-blue">
                <Key className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Solutions Immobilières</h3>
                <p className="text-corporate-blue/90">Achat, vente et gestion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;