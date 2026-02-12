import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyMobileNav from './components/StickyMobileNav';
import { WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Facilities />
        <Pricing />
        <Location />
      </main>
      
      <Footer />
      
      {/* Mobile Conversion Elements */}
      <StickyMobileNav />
      
      {/* Global WhatsApp Floating Button (Desktop) */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-green-500 text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-bounce-slow"
        aria-label="Chat WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};

export default App;