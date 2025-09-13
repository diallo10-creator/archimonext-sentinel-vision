import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
      
      {/* Floating Elements */}
      <ChatWidget />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
