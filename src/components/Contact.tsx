import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Send,
  Clock,
  Building
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simuler l'envoi du formulaire
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-corporate-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 text-corporate-blue border-corporate-gold">
            Contact
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-corporate-blue mb-4 sm:mb-6">
            Contactez-nous dès aujourd'hui
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-corporate-gray max-w-3xl mx-auto leading-relaxed px-4">
            Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner 
            et répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Information Cards */}
          <Card className="shadow-corporate border-corporate-gold/20 hover:shadow-gold transition-shadow">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-corporate-blue mb-2">Adresse</h3>
              <p className="text-sm sm:text-base text-corporate-gray leading-relaxed">
                Abidjan, Yopougon Maroc<br />
                Carrefour Tiken Jah<br />
                Côte d'Ivoire
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-corporate border-corporate-gold/20 hover:shadow-gold transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-semibold text-corporate-blue mb-2">Téléphone</h3>
              <div className="space-y-2">
                <a 
                  href="tel:+22508413100" 
                  className="block text-corporate-gray hover:text-corporate-gold transition-colors"
                >
                  +225 08 41 31 00
                </a>
                <a 
                  href="https://wa.me/22508413100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-corporate border-corporate-gold/20 hover:shadow-gold transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-corporate-blue mb-2">Email</h3>
              <a 
                href="mailto:jbkconsultingsarlu@gmail.com" 
                className="text-corporate-gray hover:text-corporate-gold transition-colors break-all"
              >
                jbkconsultingsarlu@gmail.com
              </a>
              <div className="flex items-center justify-center gap-2 mt-3 text-sm text-corporate-gray">
                <Clock className="h-4 w-4" />
                Réponse sous 24h
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-corporate border-corporate-gold/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-corporate-blue">
                Demander un devis gratuit
              </CardTitle>
              <p className="text-corporate-gray">
                Remplissez le formulaire ci-dessous et nous vous contacterons rapidement
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleChange('nom', e.target.value)}
                      placeholder="Votre nom et prénom"
                      required
                      className="border-corporate-gold/30 focus:border-corporate-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      required
                      className="border-corporate-gold/30 focus:border-corporate-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      value={formData.telephone}
                      onChange={(e) => handleChange('telephone', e.target.value)}
                      placeholder="+225 XX XX XX XX"
                      className="border-corporate-gold/30 focus:border-corporate-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service demandé *</Label>
                    <Select onValueChange={(value) => handleChange('service', value)} required>
                      <SelectTrigger className="border-corporate-gold/30 focus:border-corporate-gold">
                        <SelectValue placeholder="Choisir un service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btp">Services BTP</SelectItem>
                        <SelectItem value="immobilier">Services Immobiliers</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="renovation">Rénovation</SelectItem>
                        <SelectItem value="achat-vente">Achat/Vente Immobilier</SelectItem>
                        <SelectItem value="gestion">Gestion Immobilière</SelectItem>
                        <SelectItem value="conseil">Conseil & Expertise</SelectItem>
                        <SelectItem value="autre">Autre service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Décrivez votre projet en détail..."
                    rows={6}
                    required
                    className="border-corporate-gold/30 focus:border-corporate-gold"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  Envoyer ma demande
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-corporate-gray text-center">
                  * Champs obligatoires - Vos données sont protégées et ne seront pas partagées
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto shadow-corporate border-corporate-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Building className="h-5 w-5 text-corporate-gold" />
                <h3 className="font-semibold text-corporate-blue">Horaires de bureau</h3>
              </div>
              <div className="space-y-1 text-corporate-gray">
                <p>Lundi - Vendredi: 8h00 - 18h00</p>
                <p>Samedi: 8h00 - 14h00</p>
                <p className="text-sm text-corporate-gold font-medium">
                  Urgences 24h/7j via WhatsApp
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;