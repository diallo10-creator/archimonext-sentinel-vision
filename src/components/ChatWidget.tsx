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
        text: 'Bonjour 👋 Bienvenue sur notre site ! N\'hésitez pas à poser vos questions sur nos services BTP et immobiliers.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      setHasShownWelcome(true);
    }
  }, [isOpen, hasShownWelcome]);

  const getContextualResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Présentation entreprise et slogan
    if (lowerQuestion.includes('qui êtes-vous') || lowerQuestion.includes('présentation') || lowerQuestion.includes('archimonext') || lowerQuestion.includes('entreprise')) {
      return 'ARCHIMONEXT SARL - "Le Conseil de la Sentinelle" 🏢 Nous sommes une société de droit ivoirien spécialisée dans le BTP, l\'achat, vente et gestion immobilière. Votre partenaire de confiance en BTP et immobilier avec nos valeurs : Professionnalisme, Transparence, Engagement et Proximité.';
    }

    // Services BTP détaillés
    if (lowerQuestion.includes('btp') || lowerQuestion.includes('construction') || lowerQuestion.includes('bâtiment') || lowerQuestion.includes('travaux publics') || lowerQuestion.includes('rénovation')) {
      return '🏗️ Services BTP ARCHIMONEXT :\n• Construction de bâtiments\n• Travaux publics\n• Rénovation\nNous offrons des services de qualité avec une expertise locale reconnue en Côte d\'Ivoire.';
    }

    // Services immobiliers détaillés
    if (lowerQuestion.includes('immobilier') || lowerQuestion.includes('achat') || lowerQuestion.includes('vente') || lowerQuestion.includes('location') || lowerQuestion.includes('gestion')) {
      return '🏡 Services Immobiliers ARCHIMONEXT :\n• Achat de biens immobiliers\n• Vente de propriétés\n• Gestion immobilière (location, suivi, entretien)\nNous accompagnons particuliers, entreprises et investisseurs dans tous leurs projets immobiliers.';
    }

    // Contact et localisation précise
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('adresse') || lowerQuestion.includes('téléphone') || lowerQuestion.includes('où') || lowerQuestion.includes('localisation')) {
      return '📍 ARCHIMONEXT SARL\nAdresse : Abidjan, Yopougon Maroc – Carrefour Tiken Jah\n📱 WhatsApp : +225 08 41 31 00\n📧 Email : jbkconsultingsarlu@gmail.com\nContactez-nous pour tous vos besoins BTP et immobiliers !';
    }

    // Gérant avec détails
    if (lowerQuestion.includes('gérant') || lowerQuestion.includes('directeur') || lowerQuestion.includes('responsable') || lowerQuestion.includes('bohoussou') || lowerQuestion.includes('juste')) {
      return '👤 Notre Gérant : M. Bohoussou Kouame Juste\nIl supervise personnellement tous nos projets avec un engagement total vers l\'excellence et la satisfaction client. Une expertise reconnue dans le secteur BTP et immobilier ivoirien.';
    }

    // Mission et vision
    if (lowerQuestion.includes('mission') || lowerQuestion.includes('vision') || lowerQuestion.includes('valeurs') || lowerQuestion.includes('pourquoi')) {
      return '🎯 Notre Mission : Offrir des services de qualité en BTP et immobilier\n✨ Notre Vision : Être un partenaire de confiance pour la construction, l\'investissement et la gestion immobilière\n💎 Nos Valeurs : Professionnalisme, Transparence, Engagement, Proximité avec les clients.';
    }

    // Services divers
    if (lowerQuestion.includes('divers services') || lowerQuestion.includes('autres services') || lowerQuestion.includes('services techniques')) {
      return '⚙️ Services Divers ARCHIMONEXT :\nNous proposons également d\'autres services techniques et logistiques selon notre expertise. Contactez-nous pour discuter de vos besoins spécifiques !';
    }

    // Devis et tarifs
    if (lowerQuestion.includes('devis') || lowerQuestion.includes('prix') || lowerQuestion.includes('tarif') || lowerQuestion.includes('coût') || lowerQuestion.includes('estimation')) {
      return '💰 Devis Gratuits ARCHIMONEXT !\nNous offrons des devis gratuits et personnalisés pour tous nos services BTP et immobiliers. Contactez-nous avec les détails de votre projet pour une estimation précise sous 24h.';
    }

    // Secteurs d'activité
    if (lowerQuestion.includes('secteur') || lowerQuestion.includes('activité') || lowerQuestion.includes('domaine')) {
      return '🏢 Secteurs d\'activité ARCHIMONEXT SARL :\n• BTP (Bâtiment et Travaux Publics)\n• Immobilier (Achat, Vente, Gestion)\n• Services techniques divers\nUne expertise complète au service de vos projets !';
    }

    // Statut juridique
    if (lowerQuestion.includes('statut') || lowerQuestion.includes('sarl') || lowerQuestion.includes('juridique') || lowerQuestion.includes('société')) {
      return '📋 ARCHIMONEXT SARL\nStatut : Société de droit ivoirien (SARL)\nType : Entreprise privée\nImplantation locale solide avec une expertise reconnue en Côte d\'Ivoire.';
    }

    // Cibles clientèle
    if (lowerQuestion.includes('client') || lowerQuestion.includes('cible') || lowerQuestion.includes('pour qui')) {
      return '👥 Nos Clients ARCHIMONEXT :\n• Particuliers (projets personnels)\n• Entreprises (projets commerciaux)\n• Investisseurs (placements immobiliers)\n• Promoteurs (développements)\nChaque client bénéficie d\'un accompagnement personnalisé !';
    }

    // Réponse par défaut basée sur le RAG
    return '🤖 Je suis l\'assistant ARCHIMONEXT SARL - "Le Conseil de la Sentinelle". Pour des informations spécifiques sur nos services BTP et immobiliers, contactez-nous directement :\n📱 WhatsApp : +225 08 41 31 00\n📧 jbkconsultingsarlu@gmail.com\nNotre équipe vous donnera tous les détails personnalisés !';
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