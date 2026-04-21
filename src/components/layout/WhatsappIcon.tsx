import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsappIcon = () => {
  const whatsappNumber = '+254799756831';
  const message = 'Hi Coach Ronax, I would like to book a tennis lesson.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9999] group flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      {/* Pulse Animation Layers */}
      <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-20 animate-ping group-hover:animate-none"></span>
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-500 opacity-40 animate-pulse group-hover:scale-110 transition-transform"></span>
      
      {/* Main Button */}
      <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-110 flex items-center justify-center">
        <MessageCircle size={32} fill="white" className="relative z-10" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-gray-100 pointer-events-none">
          Book with Coach Ronax
        </span>
      </div>
    </a>
  );
};

export default WhatsappIcon;
