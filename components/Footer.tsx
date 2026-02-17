import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../index.css';

const Footer: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4" ref={elementRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-amber-400">ELITE SYARIAH</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Guest House & Kost Eksklusif dengan lingkungan islami, aman, dan nyaman di Magelang.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label={link.icon}
                >
                  <i className={`${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="font-montserrat font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Beranda</a></li>
              <li><a href="#features" className="hover:text-amber-400 transition-colors">Keunggulan</a></li>
              <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Fasilitas</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Harga Sewa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="font-montserrat font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-amber-400"></i>
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-amber-400"></i>
                <span className="text-sm">{CONTACT_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-envelope text-amber-400"></i>
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 text-center text-gray-400 text-sm transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>&copy; {new Date().getFullYear()} Elite Syariah Guest House & Kost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;