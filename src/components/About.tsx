import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Target, Eye, Award, CheckCircle } from 'lucide-react';
import managerPhoto from '@/assets/manager-photo.jpg';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-corporate-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-corporate-blue border-corporate-gold">
            À propos de nous
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-blue mb-6">
            ARCHIMONEXT SARL
          </h2>
          <p className="text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed">
            Le Conseil de la Sentinelle - Votre partenaire de confiance pour tous vos projets 
            BTP et immobiliers en Côte d'Ivoire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Manager Photo & Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <img 
                src={managerPhoto} 
                alt="M. Bohoussou Kouame Juste - Gérant ARCHIMONEXT SARL"
                className="w-80 h-80 object-cover rounded-2xl shadow-corporate mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -right-4 bg-corporate-gold text-corporate-blue p-3 rounded-full shadow-gold">
                <Award className="h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-corporate-blue mb-2">
              M. Bohoussou Kouame Juste
            </h3>
            <p className="text-lg text-corporate-gold font-semibold mb-4">
              Gérant & Fondateur
            </p>
            <p className="text-corporate-gray leading-relaxed">
              Avec plus de 15 années d'expérience dans le secteur du BTP et de l'immobilier, 
              M. Bohoussou dirige ARCHIMONEXT SARL avec une vision claire : offrir des services 
              de qualité supérieure à nos clients ivoiriens et internationaux.
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-6">
            <Card className="border-corporate-gold/20 shadow-corporate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-corporate-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Société ivoirienne</h4>
                    <p className="text-corporate-gray">
                      ARCHIMONEXT SARL est une société de droit ivoirien basée à Abidjan, 
                      au cœur du développement économique de la Côte d'Ivoire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-corporate-gold/20 shadow-corporate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-corporate-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Notre Mission</h4>
                    <p className="text-corporate-gray">
                      Accompagner nos clients dans la réalisation de leurs projets BTP et immobiliers 
                      avec professionnalisme, transparence et engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-corporate-gold/20 shadow-corporate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-corporate-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Notre Vision</h4>
                    <p className="text-corporate-gray">
                      Devenir la référence en matière de services BTP et immobilier en Côte d'Ivoire, 
                      reconnus pour notre expertise et notre intégrité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-corporate-blue mb-8">Nos Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-corporate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-corporate-gold" />
              </div>
              <h4 className="text-xl font-semibold text-corporate-blue mb-3">Professionnalisme</h4>
              <p className="text-corporate-gray">
                Excellence dans chaque projet, respect des délais et des standards de qualité les plus élevés.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-corporate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-corporate-gold" />
              </div>
              <h4 className="text-xl font-semibold text-corporate-blue mb-3">Transparence</h4>
              <p className="text-corporate-gray">
                Communication claire, devis détaillés et suivi transparent de tous nos projets.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-corporate-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-corporate-gold" />
              </div>
              <h4 className="text-xl font-semibold text-corporate-blue mb-3">Engagement</h4>
              <p className="text-corporate-gray">
                Dévouement total à la satisfaction client et à la réussite de chaque projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;