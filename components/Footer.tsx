import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-24 md:pb-8 border-t-4 border-amber-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left">
          <div>
             <h3 className="font-montserrat font-bold text-2xl">Elite Syariah</h3>
             <p className="text-emerald-200 text-sm mt-2">Guest House & Kost Eksklusif</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-white"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <i className="fa-brands fa-instagram text-white"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <i className="fa-brands fa-facebook-f text-white"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 pt-8 text-center text-sm text-emerald-300">
          <p>&copy; 2026 Elite Syariah Guest House & Kost. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;