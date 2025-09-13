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

    // Services BTP
    if (lowerQuestion.includes('btp') || lowerQuestion.includes('construction') || lowerQuestion.includes('travaux')) {
      return 'ARCHIMONEXT SARL propose des services BTP complets : construction de bâtiments, travaux publics, et rénovation. Nous intervenons sur tous types de projets avec notre équipe expérimentée.';
    }

    // Services immobiliers
    if (lowerQuestion.includes('immobilier') || lowerQuestion.includes('achat') || lowerQuestion.includes('vente') || lowerQuestion.includes('location')) {
      return 'Nos services immobiliers incluent l\'achat, la vente et la gestion de biens immobiliers. Nous vous accompagnons dans tous vos projets d\'investissement immobilier.';
    }

    // Contact et localisation
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('adresse') || lowerQuestion.includes('téléphone') || lowerQuestion.includes('où')) {
      return 'Nous sommes situés à Abidjan, Yopougon Maroc – Carrefour Tiken Jah. Contactez-nous au +225 08 41 31 00 (WhatsApp disponible) ou par email : jbkconsultingsarlu@gmail.com';
    }

    // Devis et tarifs
    if (lowerQuestion.includes('devis') || lowerQuestion.includes('prix') || lowerQuestion.includes('tarif') || lowerQuestion.includes('coût')) {
      return 'Nous offrons des devis gratuits pour tous nos services. Contactez-nous avec les détails de votre projet pour recevoir une estimation personnalisée sous 24h.';
    }

    // Délais
    if (lowerQuestion.includes('délai') || lowerQuestion.includes('durée') || lowerQuestion.includes('combien de temps')) {
      return 'Les délais varient selon la complexité du projet. Pour les projets BTP, comptez généralement 2-6 mois selon l\'envergure. Nous vous fournirons un planning détaillé avec votre devis.';
    }

    // Gérant
    if (lowerQuestion.includes('gérant') || lowerQuestion.includes('directeur') || lowerQuestion.includes('responsable')) {
      return 'ARCHIMONEXT SARL est dirigée par M. Bohoussou Kouame Juste, notre gérant expérimenté qui supervise tous nos projets avec professionnalisme et engagement.';
    }

    // Horaires
    if (lowerQuestion.includes('heure') || lowerQuestion.includes('horaire') || lowerQuestion.includes('ouvert')) {
      return 'Nos horaires : Lundi-Vendredi 8h-18h, Samedi 8h-14h. Pour les urgences, contactez-nous 24h/7j via WhatsApp au +225 08 41 31 00.';
    }

    // Réponse par défaut
    return 'Pour cette question spécifique, je vous recommande de contacter directement notre équipe au +225 08 41 31 00 (WhatsApp) ou jbkconsultingsarlu@gmail.com. Nous pourrons vous donner des informations détaillées et personnalisées.';
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