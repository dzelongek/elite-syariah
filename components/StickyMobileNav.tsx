import React from 'react';
import { WHATSAPP_NUMBER, MAPS_URL } from '../constants';

const StickyMobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden flex border-t border-gray-100">
      <a 
        href={MAPS_URL} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-4 flex flex-col items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors border-r border-gray-100"
      >
        <i className="fa-solid fa-location-dot text-lg mb-1"></i>
        <span className="text-xs font-bold">Lokasi Maps</span>
      </a>
      
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] py-4 flex flex-col items-center justify-center bg-emerald-900 text-white hover:bg-emerald-800 transition-colors"
      >
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-whatsapp text-xl"></i>
          <span className="text-sm font-bold uppercase tracking-wide">WhatsApp Booking</span>
        </div>
      </a>
    </div>
  );
};

export default StickyMobileNav;