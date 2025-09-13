import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappUrl = "https://wa.me/22508413100?text=Bonjour%2C%20je%20viens%20de%20votre%20site%20web%20et%20j%27aimerais%20avoir%20plus%20d%27informations.";

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div
        className={`transition-all duration-300 ${
          isHovered ? 'transform -translate-y-1' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-200 ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          Contactez-nous sur WhatsApp
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          className={`w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group ${
            isHovered ? 'animate-pulse scale-110' : 'hover:scale-105'
          }`}
        >
          <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-200" />
          
          {/* Pulse Ring Animation */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-75"></div>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;