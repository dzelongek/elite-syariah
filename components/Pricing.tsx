import React, { useState } from 'react';
import { PricingMode } from '../types';
import { PRICING_DAILY, PRICING_MONTHLY, WHATSAPP_NUMBER } from '../constants';

const Pricing: React.FC = () => {
  const [mode, setMode] = useState<PricingMode>('daily');

  const plans = mode === 'daily' ? PRICING_DAILY : PRICING_MONTHLY;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-emerald-900">
            Pilih Paket Menginap
          </h2>
          <p className="text-gray-600 mt-4">Sesuaikan dengan kebutuhan Anda</p>
          
          {/* Hybrid Pricing Toggle Switch */}
          <div className="flex justify-center mt-8">
            <div className="bg-white p-1.5 rounded-full shadow-md inline-flex relative border border-gray-200">
              {/* Background Pill Animation */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border transition-transform hover:-translate-y-2 duration-300 flex flex-col ${
                plan.recommended ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="bg-amber-500 text-white text-xs font-bold px-4 py-1 absolute top-0 right-0 rounded-bl-lg uppercase tracking-wider">
                  Terpopuler
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-emerald-900">{plan.price}</span>
                  <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <i className="fa-solid fa-check text-emerald-600 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin,%20saya%20tertarik%20booking%20${encodeURIComponent(plan.title)}%20(${mode === 'daily' ? 'Harian' : 'Bulanan'})`}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.recommended 
                      ? 'bg-emerald-900 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-900/20' 
                      : 'bg-white border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50'
                  }`}
                >
                  Pilih {mode === 'daily' ? 'Kamar' : 'Kost'} Ini
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          *Harga dapat berubah sewaktu-waktu. Hubungi kami untuk ketersediaan.
        </p>
      </div>
    </section>
  );
};

export default Pricing;