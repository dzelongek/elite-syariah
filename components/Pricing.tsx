import React, { useState } from 'react';
import { PricingMode, PricingPlan } from '../types';
import { PRICING_DAILY, PRICING_MONTHLY, WHATSAPP_NUMBER } from '../constants';

// Sub-component untuk Card dengan Image Slider
const RoomCard: React.FC<{ plan: PricingPlan; mode: PricingMode }> = ({ plan, mode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % plan.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + plan.images.length) % plan.images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col h-full group ${
        plan.recommended ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-gray-100'
      }`}
    >
      {plan.recommended && (
        <div className="absolute top-4 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-l-md z-20 shadow-md uppercase tracking-wider">
          Terlaris
        </div>
      )}

      {/* Image Slider Area */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-200 group-hover:scale-[1.01] transition-transform duration-500">
        {/* Images */}
        {plan.images.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={img} 
              alt={`${plan.title} - View ${idx + 1}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay for better text readability if needed, but clean is better here */}
          </div>
        ))}

        {/* Navigation Arrows (Visible on Hover or Mobile) */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100"
          aria-label="Previous Image"
        >
          <i className="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100"
          aria-label="Next Image"
        >
          <i className="fa-solid fa-chevron-right text-sm"></i>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-0 w-full z-20 flex justify-center gap-1.5">
          {plan.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => goToImage(idx, e)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-montserrat font-bold text-lg md:text-xl text-emerald-900 mb-1 leading-tight">
          {plan.title}
        </h3>
        
        <div className="flex items-baseline gap-1 mb-4 border-b border-gray-100 pb-4">
          <span className="text-2xl md:text-3xl font-bold text-amber-600">{plan.price}</span>
          <span className="text-gray-400 text-xs md:text-sm font-medium">{plan.period}</span>
        </div>
        
        <ul className="space-y-3 mb-6 flex-grow">
          {plan.features.slice(0, 5).map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
              <i className="fa-solid fa-check text-emerald-600 mt-0.5 shrink-0 text-xs"></i>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
          {plan.features.length > 5 && (
            <li className="text-xs text-amber-600 font-medium italic pl-5">
              + {plan.features.length - 5} fasilitas lainnya
            </li>
          )}
        </ul>

        <div className="mt-auto">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin,%20saya%20tertarik%20booking%20kamar%20*${encodeURIComponent(plan.title)}*%20(${mode === 'daily' ? 'Harian' : 'Bulanan'})%20seharga%20${encodeURIComponent(plan.price)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all transform active:scale-95 ${
              plan.recommended 
                ? 'bg-emerald-900 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl' 
                : 'bg-white border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50'
            }`}
          >
            Pesan Via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [mode, setMode] = useState<PricingMode>('daily');

  const plans = mode === 'daily' ? PRICING_DAILY : PRICING_MONTHLY;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-emerald-900">
            Pilih Paket Menginap
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Temukan kamar yang pas dengan kebutuhan dan budget Anda. Geser foto untuk melihat detail ruangan.
          </p>
          
          {/* Hybrid Pricing Toggle Switch */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1.5 rounded-full shadow-md inline-flex relative border border-gray-200">
              <div 
                className={`absolute top-1.5 bottom-1.5 rounded-full bg-emerald-900 transition-all duration-300 w-[140px] md:w-[160px] ${
                  mode === 'daily' ? 'left-1.5' : 'left-[146px] md:left-[166px]'
                }`}
              ></div>
              
              <button
                onClick={() => setMode('daily')}
                className={`relative z-10 w-[140px] md:w-[160px] py-3 rounded-full font-bold text-sm md:text-base transition-colors duration-300 flex items-center justify-center gap-2 ${
                  mode === 'daily' ? 'text-white' : 'text-gray-500 hover:text-emerald-900'
                }`}
              >
                <i className="fa-solid fa-suitcase"></i> Harian
              </button>
              <button
                onClick={() => setMode('monthly')}
                className={`relative z-10 w-[140px] md:w-[160px] py-3 rounded-full font-bold text-sm md:text-base transition-colors duration-300 flex items-center justify-center gap-2 ${
                  mode === 'monthly' ? 'text-white' : 'text-gray-500 hover:text-emerald-900'
                }`}
              >
                <i className="fa-solid fa-calendar-days"></i> Bulanan
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <RoomCard key={plan.id} plan={plan} mode={mode} />
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-12 italic">
          *Harga sudah termasuk pajak dan pelayanan. Waktu Check-in 14:00, Check-out 12:00.
        </p>
      </div>
    </section>
  );
};

export default Pricing;