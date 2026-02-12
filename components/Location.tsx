import React from 'react';
import { MAPS_URL } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 rounded-3xl p-6 md:p-10 shadow-inner">
          
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="font-montserrat font-bold text-3xl text-emerald-900 mb-6">
              Lokasi Strategis
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-map-pin text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Alamat Lengkap</h4>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    Jl. Raya Magelang-Boyolali, Tegalrejo, Magelang.<br/>
                    (Sebelah J&T Cargo Tegalrejo, Depan Alfamart)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-route text-amber-600"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Akses Terdekat</h4>
                  <ul className="text-gray-600 mt-1 text-sm space-y-1">
                    <li>• 5 Menit ke Kampus Polbangtan</li>
                    <li>• 20 Menit ke Ketep Pass</li>
                    <li>• 15 Menit ke Kota Magelang</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <a 
              href={MAPS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 text-emerald-900 font-bold hover:text-amber-600 transition-colors"
            >
              Buka di Google Maps <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="w-full lg:w-2/3 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md border-2 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.270477218698!2d110.27989537486603!3d-7.435293992575486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8e5a7e6b7b7b%3A0x7b7b7b7b7b7b7b7b!2sTegalrejo%2C%20Magelang!5e0!3m2!1sen!2sid!4v1689123456789!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;