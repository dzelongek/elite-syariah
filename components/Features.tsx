import React from 'react';
import { FEATURES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../index.css';

const Features: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={elementRef}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-emerald-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami mengutamakan keamanan dan kenyamanan tamu dengan standar pelayanan terbaik di kelasnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-700 border border-gray-100 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-emerald-900/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-900 transition-colors duration-300">
                <i className={`${feature.icon} text-2xl text-emerald-900 group-hover:text-amber-400 transition-colors duration-300`}></i>
              </div>
              <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-2 group-hover:text-emerald-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;