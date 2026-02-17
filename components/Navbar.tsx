import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Fasilitas', href: '#facilities' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Lokasi', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-emerald-900 shadow-lg py-3' : 'bg-transparent py-5 lg:py-6'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-lg p-1 border border-emerald-900/10 overflow-hidden">
            {/* Menggunakan path relative '/logo.png' dengan fallback */}
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Elite Syariah Logo"
                className="w-full h-full object-contain"
                width="64"
                height="64"
                onError={() => {
                  setLogoError(true);
                }}
              />
            ) : (
              <i className="fa-solid fa-hotel text-emerald-900 text-2xl"></i>
            )}
          </div>

          <div className="flex flex-col">
            <span className={`font-montserrat font-bold text-lg md:text-xl leading-none tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white drop-shadow-lg'}`}>
              ELITE SYARIAH
            </span>
            <span className={`font-lato font-bold text-[0.6rem] md:text-xs tracking-widest uppercase ${isScrolled || isMobileMenuOpen ? 'text-amber-400' : 'text-amber-300 drop-shadow-md'}`}>
              Guest House & Kost
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-amber-500 ${isScrolled ? 'text-gray-100' : 'text-white drop-shadow-md'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-transform transform hover:scale-105 shadow-lg"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-emerald-900 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] border-t border-emerald-800' : 'max-h-0'
        }`}>
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-amber-400 pl-2 border-l-2 border-transparent hover:border-amber-400 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-amber-600 text-white text-center py-3 rounded-lg font-bold shadow-md hover:bg-amber-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;