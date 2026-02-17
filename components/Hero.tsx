import React, { useEffect, useState } from 'react';
import { MAPS_URL } from '../constants';
import '../index.css'; // Ensure animations are loaded

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay and Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.5}px)` }}
        >
          <img
            src="/hero.jpg"
            alt="Elite Syariah Guest House Exterior"
            className="w-full h-full object-cover animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
            width="1920"
            height="1080"
            fetchPriority="high"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              if (img.src !== "hero.jpg" && !img.src.includes('unsplash')) {
                // Fallback to Unsplash
                img.src = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop";
              }
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content with Scroll Reveal */}
      <div
        className="relative z-10 px-4 max-w-4xl mx-auto flex flex-col gap-6"
        style={{ transform: `translateY(${scrollY * -0.2}px)`, opacity: 1 - scrollY * 0.003 }}
      >
        <div className="animate-[fade-up_0.8s_ease-out_forwards]">
          <span className="inline-block mx-auto px-4 py-1 bg-amber-600/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded-full mb-2 backdrop-blur-sm shadow-lg border border-amber-500/30">
            Selamat Datang di ELITE SYARIAH
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg animate-[fade-up_0.8s_ease-out_0.2s_forwards] opacity-0">
          Kenyamanan Syariah,<br />
          <span className="text-amber-400 text-shadow-lg">Senyaman Rumah Sendiri</span>
        </h1>

        <p className="font-lato text-gray-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md animate-[fade-up_0.8s_ease-out_0.4s_forwards] opacity-0">
          Pilihan cerdas untuk keluarga wisudawan Polbangtan & transit wisata Ketep Pass.
          Guest House harian & Kost eksklusif bulanan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 animate-[fade-up_0.8s_ease-out_0.6s_forwards] opacity-0">
          <a href="#pricing" className="group relative bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-amber-600/50 transition-all transform hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10">Lihat Kamar & Harga</span>
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shine_3s_infinite]"></div>
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