import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from './ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce qu'ARCHIMONEXT SARL ?",
      answer: "ARCHIMONEXT SARL - Le Conseil de la Sentinelle est une société de droit ivoirien spécialisée dans le BTP, l'achat, la vente et la gestion immobilière, ainsi que divers services. Nous sommes basés à Abidjan, Yopougon Maroc – Carrefour Tiken Jah."
    },
    {
      question: "Qui dirige ARCHIMONEXT SARL ?",
      answer: "Notre entreprise est dirigée par M. Bohoussou Kouame Juste, gérant expérimenté qui supervise l'ensemble de nos activités avec professionnalisme et engagement."
    },
    {
      question: "Quels sont vos services BTP ?",
      answer: "Nos services BTP incluent la construction de bâtiments, les travaux publics et la rénovation. Nous offrons des services de qualité pour tous vos projets de construction et d'infrastructure."
    },
    {
      question: "Proposez-vous des services immobiliers ?",
      answer: "Oui, nous proposons une gamme complète de services immobiliers : achat de biens, vente de biens, et gestion immobilière (location, suivi, entretien). Nous vous accompagnons dans tous vos projets immobiliers."
    },
    {
      question: "Comment vous contacter ?",
      answer: "Vous pouvez nous contacter via WhatsApp au +225 08 41 31 00 ou par email à jbkconsultingsarlu@gmail.com. Notre siège social est situé à Abidjan, Yopougon Maroc – Carrefour Tiken Jah."
    },
    {
      question: "Quelles sont vos valeurs d'entreprise ?",
      answer: "Nos valeurs fondamentales sont le professionnalisme, la transparence, l'engagement et la proximité avec nos clients. Nous nous engageons à être votre partenaire de confiance en BTP et immobilier."
    },
    {
      question: "Quelle est votre mission ?",
      answer: "Notre mission est d'offrir des services de qualité en BTP et immobilier, en étant un partenaire de confiance pour la construction, l'investissement et la gestion immobilière."
    },
    {
      question: "Travaillez-vous avec quels types de clients ?",
      answer: "Nous travaillons avec particuliers, entreprises, investisseurs et promoteurs. Notre expertise nous permet de nous adapter aux besoins spécifiques de chaque type de client, qu'il s'agisse de projets résidentiels, commerciaux ou industriels."
    },
    {
      question: "Où intervenez-vous géographiquement ?",
      answer: "Bien que notre siège soit basé à Abidjan (Yopougon Maroc), nous intervenons sur l'ensemble de la Côte d'Ivoire selon la nature et l'ampleur de vos projets."
    }
  ];

  const testimonials = [
    {
      name: "Mme Kouassi Marie",
      role: "Propriétaire",
      content: "ARCHIMONEXT SARL a rénové ma maison avec un professionnalisme exemplaire. Délais respectés, qualité au rendez-vous et prix juste. Je recommande vivement !",
      rating: 5
    },
    {
      name: "M. Diabaté Moussa",
      role: "Chef d'entreprise",
      content: "Excellente collaboration pour la construction de nos bureaux. L'équipe de M. Bohoussou est compétente et à l'écoute. Résultat parfait !",
      rating: 5
    },
    {
      name: "Mme Traoré Fatou",
      role: "Investisseur immobilier",
      content: "Grâce à ARCHIMONEXT, j'ai trouvé et acheté plusieurs biens rentables. Leur expertise du marché immobilier abidjanais est précieuse.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 text-corporate-blue border-corporate-gold">
            FAQ & Témoignages
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-4 sm:mb-6">
            Questions fréquentes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed px-4">
            Retrouvez les réponses aux questions les plus posées par nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* FAQ Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-blue mb-4 sm:mb-6">
              Questions & Réponses
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-corporate-gold/20 rounded-lg px-4 shadow-sm"
                >
                  <AccordionTrigger className="text-left text-corporate-blue hover:text-corporate-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-corporate-gray leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="text-2xl font-bold text-corporate-blue mb-6">
              Ce que disent nos clients
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-corporate border-corporate-gold/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-corporate-gold flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-corporate-gray leading-relaxed mb-4">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-corporate-gold text-corporate-gold" />
                          ))}
                        </div>
                        <div>
                          <p className="font-semibold text-corporate-blue">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-corporate-gray">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Indicators */}
            <Card className="mt-6 bg-gradient-to-r from-corporate-blue to-corporate-gold text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">Pourquoi nous choisir ?</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ +15 ans d'expérience</div>
                  <div>✓ Devis gratuits</div>
                  <div>✓ Garanties complètes</div>
                  <div>✓ Suivi personnalisé</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;