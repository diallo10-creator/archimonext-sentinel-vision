import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { MessageCircle, Send, X, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasShownWelcome) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: 'Bonjour 👋 Bienvenue chez ARCHIMONEXT SARL - "Le Conseil de la Sentinelle" !\n\nJe suis votre assistant virtuel. Posez-moi vos questions sur :\n• Nos services BTP et immobiliers\n• Nos tarifs et devis\n• Notre équipe et expertise\n• Comment nous contacter\n\nQue puis-je vous expliquer ?',
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setHasShownWelcome(true);
    }
  }, [isOpen, hasShownWelcome]);

  const getContextualResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Services généraux (question principale manquante)
    if (lowerQuestion.includes('services') || lowerQuestion.includes('service') || lowerQuestion.includes('que faites-vous') || lowerQuestion.includes('activités')) {
      return '🏢 Services Complets ARCHIMONEXT SARL :\n\n🏗️ BTP :\n• Construction de bâtiments\n• Travaux publics\n• Rénovation complète\n\n🏡 Immobilier :\n• Achat de biens\n• Vente de propriétés\n• Gestion locative et entretien\n\n⚙️ Services techniques divers selon expertise\n\n💡 Votre partenaire de confiance avec 15+ ans d\'expérience en Côte d\'Ivoire !';
    }

    // Présentation entreprise et slogan
    if (lowerQuestion.includes('qui êtes-vous') || lowerQuestion.includes('présentation') || lowerQuestion.includes('archimonext') || lowerQuestion.includes('entreprise') || lowerQuestion.includes('société')) {
      return '🏢 ARCHIMONEXT SARL - "Le Conseil de la Sentinelle"\n\nSociété de droit ivoirien spécialisée dans :\n• BTP (Bâtiment & Travaux Publics)\n• Immobilier (Achat, Vente, Gestion)\n• Services techniques diversifiés\n\n💎 Nos Valeurs : Professionnalisme, Transparence, Engagement, Proximité\n🎯 Notre promesse : "Votre partenaire de confiance en BTP et immobilier"';
    }

    // Services BTP détaillés
    if (lowerQuestion.includes('btp') || lowerQuestion.includes('construction') || lowerQuestion.includes('bâtiment') || lowerQuestion.includes('travaux publics') || lowerQuestion.includes('rénovation') || lowerQuestion.includes('maçonnerie')) {
      return '🏗️ Services BTP ARCHIMONEXT - Excellence Garantie :\n\n🔨 Construction de bâtiments :\n• Maisons individuelles\n• Immeubles commerciaux\n• Structures industrielles\n\n🛣️ Travaux publics :\n• Infrastructure routière\n• Assainissement\n• Aménagements urbains\n\n🔧 Rénovation complète :\n• Remise aux normes\n• Extension de bâtiments\n• Modernisation\n\n✅ Expertise locale reconnue depuis 15+ ans en Côte d\'Ivoire';
    }

    // Services immobiliers détaillés
    if (lowerQuestion.includes('immobilier') || lowerQuestion.includes('achat') || lowerQuestion.includes('vente') || lowerQuestion.includes('location') || lowerQuestion.includes('gestion') || lowerQuestion.includes('propriété')) {
      return '🏡 Services Immobiliers ARCHIMONEXT - Votre Succès Immobilier :\n\n💰 Achat de biens :\n• Recherche personnalisée\n• Négociation optimale\n• Accompagnement juridique complet\n\n📈 Vente de propriétés :\n• Évaluation professionnelle\n• Marketing ciblé\n• Suivi jusqu\'à la signature\n\n🔑 Gestion immobilière :\n• Location et suivi locataires\n• Entretien et maintenance\n• Optimisation rentabilité\n\n👥 Clientèle : Particuliers, Entreprises, Investisseurs, Promoteurs';
    }

    // Contact et localisation précise
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('adresse') || lowerQuestion.includes('téléphone') || lowerQuestion.includes('où') || lowerQuestion.includes('localisation') || lowerQuestion.includes('rendez-vous')) {
      return '📍 Contactez ARCHIMONEXT SARL :\n\n🏢 Siège social :\nAbidjan, Yopougon Maroc – Carrefour Tiken Jah\n\n📱 WhatsApp : +225 08 41 31 00\n📞 Téléphone : +225 07 08 41 31 00\n📧 Email : jbkconsultingsarlu@gmail.com\n\n⏰ Réponse garantie sous 24h\n🚗 Déplacements gratuits pour devis sur Abidjan\n💼 Consultations personnalisées disponibles';
    }

    // Gérant avec détails
    if (lowerQuestion.includes('gérant') || lowerQuestion.includes('directeur') || lowerQuestion.includes('responsable') || lowerQuestion.includes('bohoussou') || lowerQuestion.includes('juste') || lowerQuestion.includes('dirigeant')) {
      return '👤 M. Bohoussou Kouame Juste - Gérant ARCHIMONEXT\n\n🎓 Expert BTP & Immobilier avec 15+ ans d\'expérience\n🏆 Supervision personnelle de tous les projets\n💼 Engagement total vers l\'excellence client\n🤝 Expertise reconnue en Côte d\'Ivoire\n\n"La satisfaction client est notre priorité absolue"\n\n📞 Contact direct disponible pour projets importants';
    }

    // Mission et vision
    if (lowerQuestion.includes('mission') || lowerQuestion.includes('vision') || lowerQuestion.includes('valeurs') || lowerQuestion.includes('pourquoi') || lowerQuestion.includes('objectifs')) {
      return '🎯 ARCHIMONEXT - Notre Philosophie :\n\n🎯 Mission :\nOffrir des services de qualité exceptionnelle en BTP et immobilier\n\n✨ Vision :\nÊtre LE partenaire de confiance pour la construction, l\'investissement et la gestion immobilière en Côte d\'Ivoire\n\n💎 Nos Valeurs Fondamentales :\n• Professionnalisme absolu\n• Transparence totale\n• Engagement sans faille\n• Proximité humaine\n\n🏆 "Le Conseil de la Sentinelle" - Votre gardien de projets réussis';
    }

    // Services divers
    if (lowerQuestion.includes('divers services') || lowerQuestion.includes('autres services') || lowerQuestion.includes('services techniques') || lowerQuestion.includes('expertise')) {
      return '⚙️ Services Techniques Divers ARCHIMONEXT :\n\n🔧 Expertise technique spécialisée\n📋 Conseil en aménagement\n🏗️ Coordination de projets\n📐 Études techniques préliminaires\n🛠️ Solutions logistiques adaptées\n\n💡 Approche sur-mesure selon vos besoins spécifiques\n\n📞 Contactez-nous pour discuter de votre projet unique !';
    }

    // Devis et tarifs
    if (lowerQuestion.includes('devis') || lowerQuestion.includes('prix') || lowerQuestion.includes('tarif') || lowerQuestion.includes('coût') || lowerQuestion.includes('estimation') || lowerQuestion.includes('budget')) {
      return '💰 Devis Gratuits & Transparents ARCHIMONEXT :\n\n✅ Devis détaillés GRATUITS sous 24h\n📋 Évaluation personnalisée de votre projet\n💡 Conseils d\'optimisation budget inclus\n🔒 Tarifs fixes sans surprises\n📊 Rapport qualité-prix exceptionnel\n\n🎯 Financement et échelonnement possibles\n\n📱 WhatsApp +225 08 41 31 00 pour devis express !';
    }

    // Secteurs d'activité
    if (lowerQuestion.includes('secteur') || lowerQuestion.includes('activité') || lowerQuestion.includes('domaine') || lowerQuestion.includes('spécialité')) {
      return '🏢 Domaines d\'Excellence ARCHIMONEXT SARL :\n\n🏗️ BTP (Bâtiment et Travaux Publics) :\n• Construction résidentielle & commerciale\n• Infrastructure et travaux publics\n• Rénovation et réhabilitation\n\n🏡 Immobilier Complet :\n• Transaction (Achat/Vente)\n• Gestion locative professionnelle\n• Conseil en investissement\n\n⚙️ Services Techniques Connexes :\n• Expertise et audit\n• Coordination multi-corps d\'état\n\n🌍 Rayonnement : Côte d\'Ivoire et sous-région';
    }

    // Statut juridique
    if (lowerQuestion.includes('statut') || lowerQuestion.includes('sarl') || lowerQuestion.includes('juridique') || lowerQuestion.includes('société') || lowerQuestion.includes('légal')) {
      return '📋 Statut Juridique ARCHIMONEXT :\n\n🏛️ ARCHIMONEXT SARL\n• Société de droit ivoirien\n• Entreprise privée (SARL)\n• Immatriculation officielle\n• Assurances professionnelles à jour\n\n🛡️ Garanties légales complètes\n📄 Toutes certifications en règle\n🏆 Réputation établie depuis 15+ ans\n\n✅ Partenaire fiable et sécurisé pour vos projets';
    }

    // Cibles clientèle
    if (lowerQuestion.includes('client') || lowerQuestion.includes('cible') || lowerQuestion.includes('pour qui') || lowerQuestion.includes('qui peut') || lowerQuestion.includes('clientèle')) {
      return '👥 Notre Clientèle Diversifiée ARCHIMONEXT :\n\n🏠 Particuliers :\n• Projets de construction personnelle\n• Achat/vente résidence principale\n• Investissement locatif\n\n🏢 Entreprises :\n• Locaux commerciaux et industriels\n• Projets d\'expansion\n• Gestion de patrimoine immobilier\n\n💰 Investisseurs :\n• Placements immobiliers rentables\n• Diversification de portefeuille\n\n🏗️ Promoteurs :\n• Développements résidentiels\n• Projets commerciaux d\'envergure\n\n🤝 Accompagnement personnalisé pour chaque profil !';
    }

    // Délais et planning
    if (lowerQuestion.includes('délai') || lowerQuestion.includes('combien de temps') || lowerQuestion.includes('durée') || lowerQuestion.includes('planning') || lowerQuestion.includes('rapidement')) {
      return '⏰ Délais ARCHIMONEXT - Efficacité Garantie :\n\n📋 Devis : 24h maximum\n🏗️ Petits travaux : 1-2 semaines\n🏠 Construction maison : 3-6 mois\n🏢 Projets commerciaux : 6-12 mois\n🔄 Rénovations : 2-8 semaines\n\n📈 Immobilier :\n• Évaluation : 48h\n• Recherche bien : 2-4 semaines\n• Processus vente : 1-3 mois\n\n⚡ Engagement respect des délais convenus\n📞 Suivi régulier et communication transparente';
    }

    // Horaires et disponibilité
    if (lowerQuestion.includes('horaire') || lowerQuestion.includes('ouvert') || lowerQuestion.includes('disponible') || lowerQuestion.includes('quand') || lowerQuestion.includes('heures')) {
      return '🕐 Disponibilité ARCHIMONEXT :\n\n📅 Lundi à Vendredi : 7h30 - 18h30\n📅 Samedi : 8h00 - 16h00\n📅 Dimanche : Sur rendez-vous urgents\n\n📱 WhatsApp 24h/7j : +225 08 41 31 00\n📧 Email suivi quotidien\n🚨 Urgences : Intervention rapide\n\n🏠 Visites terrain :\n• Abidjan : Tous les jours\n• Hors Abidjan : Sur rendez-vous\n\n💼 Consultations personnalisées sur RDV';
    }

    // Zone d'intervention
    if (lowerQuestion.includes('zone') || lowerQuestion.includes('région') || lowerQuestion.includes('intervenir') || lowerQuestion.includes('déplacement') || lowerQuestion.includes('secteur géographique')) {
      return '🗺️ Zones d\'Intervention ARCHIMONEXT :\n\n🎯 Zone Principale :\n• Grand Abidjan (toutes communes)\n• Déplacements gratuits pour devis\n\n🌍 Côte d\'Ivoire :\n• Bouaké, Yamoussoukro, San Pedro\n• Daloa, Korhogo, Man\n• Autres villes sur demande\n\n🚗 Conditions déplacement :\n• Frais selon distance\n• Projets importantes : gratuit\n• Coordination équipes locales\n\n📞 Contactez-nous pour votre région spécifique !';
    }

    // Réponse par défaut enrichie
    return '🤖 Assistant ARCHIMONEXT SARL - "Le Conseil de la Sentinelle"\n\n📚 Je peux vous renseigner sur :\n• Nos services BTP et immobiliers\n• Devis gratuits et délais\n• Notre équipe et expertise\n• Zones d\'intervention\n• Tarifs et financement\n\nPour des informations détaillées personnalisées :\n📱 WhatsApp : +225 08 41 31 00\n📧 jbkconsultingsarlu@gmail.com\n\n💡 Posez-moi une question précise, je vous aide !';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getContextualResponse(inputValue),
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-primary hover:scale-110"
          size="sm"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-80 h-96 shadow-xl border-corporate-gold/20 bg-white">
          <CardHeader className="bg-gradient-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">Assistant ARCHIMONEXT</CardTitle>
                  <Badge variant="outline" className="text-xs bg-white/20 border-white/30 text-white">
                    En ligne
                  </Badge>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 text-sm ${
                      message.isBot
                        ? 'bg-corporate-light border border-corporate-gold/20 text-corporate-blue'
                        : 'bg-gradient-primary text-white'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      {!message.isBot && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="break-words">{message.text}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-corporate-gold/20">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Posez votre question..."
                  className="border-corporate-gold/30 focus:border-corporate-gold text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  variant="hero"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-corporate-gray mt-2 text-center">
                Assistant basé sur nos services BTP & Immobilier
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;