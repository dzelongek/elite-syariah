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
                    Jl. Magelang - Boyolali No.130,<br />
                    Kec. Tegalrejo, Kabupaten Magelang,<br />
                    Jawa Tengah 58192
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
                    <li>• 1 Menit ke Kampus Polbangtan (Sebelah Lokasi)</li>
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
              src="https://maps.google.com/maps?q=G7M4%2BP7%20Tegalrejo%2C%20Kabupaten%20Magelang%2C%20Jawa%20Tengah&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location of Elite Syariah Guest House"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;