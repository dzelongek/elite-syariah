import React from 'react';
import { ROOM_FACILITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-20 bg-emerald-900 relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <i className="fa-solid fa-star-and-crescent absolute -top-10 -left-10 text-9xl text-white"></i>
        <i className="fa-solid fa-star-and-crescent absolute bottom-10 right-10 text-9xl text-white"></i>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600/30">
              <img
                src="public/fasilitas.jpg"
                alt="Fasilitas Kamar Lengkap Elite Syariah"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                width="600"
                height="400"
                loading="lazy"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  if (img.src.includes('public/')) {
                    img.src = "fasilitas.jpg";
                  } else {
                    img.src = "https://images.unsplash.com/photo-1505693416388-b0346efee53e?q=80&w=2070&auto=format&fit=crop";
                  }
                }}
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 w-full">
                <p className="text-white font-bold text-lg"><i className="fa-solid fa-check-circle text-amber-500 mr-2"></i> Bersih & Wangi</p>
              </div>
            </div>
          </div>

          {/* Text/List Side */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Fasilitas Lengkap <br />
              <span className="text-amber-400">Untuk Istirahat Berkualitas</span>
            </h2>
            <p className="text-gray-200 mb-8 text-lg">
              Setiap kamar didesain untuk memaksimalkan privasi dan kenyamanan Anda, baik untuk transit singkat maupun tinggal jangka panjang.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {ROOM_FACILITIES.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <i className={`${item.icon} text-amber-400 text-xl w-8 text-center`}></i>
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;