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
      question: "Quels sont vos délais moyens pour les projets BTP ?",
      answer: "Les délais varient selon la complexité du projet. Pour une construction résidentielle standard, comptez 6-12 mois. Pour des rénovations, 2-6 mois selon l'ampleur. Nous établissons un planning détaillé lors du devis gratuit."
    },
    {
      question: "Comment se déroule le processus de gestion immobilière ?",
      answer: "Notre service de gestion complète inclut : recherche de locataires, vérification des dossiers, rédaction des baux, encaissement des loyers, gestion des réparations et suivi administratif. Nous vous rendons compte mensuellement."
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons sur site pour évaluer précisément vos besoins et vous proposer la solution la mieux adaptée à votre budget."
    },
    {
      question: "Quelles garanties offrez-vous sur vos travaux ?",
      answer: "Nous offrons une garantie décennale sur tous nos travaux de construction, une garantie biennale sur les équipements et une garantie de parfait achèvement d'un an. Toutes nos interventions sont assurées."
    },
    {
      question: "Travaillez-vous avec des particuliers et des entreprises ?",
      answer: "Absolument ! Nous accompagnons aussi bien les particuliers pour leurs projets résidentiels que les entreprises pour leurs besoins commerciaux et industriels. Notre expertise s'adapte à tous types de clients."
    },
    {
      question: "Comment évaluez-vous la valeur d'un bien immobilier ?",
      answer: "Notre évaluation se base sur l'analyse du marché local, l'état du bien, sa localisation, les équipements et les prix de vente récents dans le quartier. Nous utilisons des méthodes professionnelles reconnues."
    },
    {
      question: "Acceptez-vous les paiements échelonnés ?",
      answer: "Oui, nous proposons des solutions de paiement flexibles adaptées à votre situation. Les modalités sont définies dans le contrat après étude de votre dossier."
    },
    {
      question: "Intervenez-vous uniquement sur Abidjan ?",
      answer: "Bien que basés à Abidjan (Yopougon), nous intervenons sur toute la Côte d'Ivoire selon la nature et l'importance du projet. N'hésitez pas à nous consulter pour vos projets en régions."
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