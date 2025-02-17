// components/ui/WhatsAppButton.jsx
import React from 'react';
import { Send } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '+5312316123';
  const message = encodeURIComponent('Hola, estoy interesado en sus servicios de transportación.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <Send size={32} color="white" />
    </a>
  );
};