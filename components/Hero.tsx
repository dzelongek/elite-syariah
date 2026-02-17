import React from 'react';
import { MAPS_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Elite Syariah Guest House Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col gap-6">
        <span className="inline-block mx-auto px-4 py-1 bg-amber-600/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded-full mb-2 backdrop-blur-sm">
          Selamat Datang di ELITE SYARIAH
        </span>
        
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
          Kenyamanan Syariah,<br />
          <span className="text-amber-400">Senyaman Rumah Sendiri</span>
        </h1>
        
        <p className="font-lato text-gray-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Pilihan cerdas untuk keluarga wisudawan Polbangtan & transit wisata Ketep Pass.
          Guest House harian & Kost eksklusif bulanan.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a href="#pricing" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-amber-600/50 transition-all transform hover:-translate-y-1">
            Lihat Kamar & Harga
          </a>
          <a 
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-emerald-900 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg transition-all"
          >
            Lokasi Kami
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-24 md:bottom-10 animate-bounce text-white/70">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;