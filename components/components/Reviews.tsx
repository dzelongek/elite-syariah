import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
    // Helper to get initials from name
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    // Helper to generate consistent background color based on name length
    const getBgColor = (name: string) => {
        const colors = [
            'bg-red-500', 'bg-orange-500', 'bg-amber-500',
            'bg-yellow-500', 'bg-lime-500', 'bg-green-500',
            'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500',
            'bg-sky-500', 'bg-blue-500', 'bg-indigo-500',
            'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500',
            'bg-pink-500', 'bg-rose-500'
        ];
        return colors[name.length % colors.length];
    };

    return (
        <section id="reviews" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-emerald-900 mb-4">
                        Kata Mereka
                    </h2>
                    <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Cerita pengalaman asli dari tamu yang pernah menginap di Elite Syariah.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative"
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-6 right-6 text-6xl text-gray-100 font-serif leading-none select-none">
                                "
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 relative z-10">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star text-amber-400 text-sm"></i>
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 italic mb-8 flex-grow relative z-10">
                                "{review.review}"
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                <div className={`w-12 h-12 rounded-full ${getBgColor(review.name)} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                                    {getInitials(review.name)}
                                </div>
                                <div>
                                    <h4 className="font-montserrat font-bold text-gray-900 text-sm">
                                        {review.name}
                                    </h4>
                                    <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <span>Tamu Terverifikasi</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Button */}
                <div className="mt-16 text-center">
                    <a
                        href="https://www.google.com/maps/place/Elite+Syariah+Guest+House+%26+Kost+Magelang+(Area+Tegalrejo)/@-7.4657288,110.2531546,17z/data=!4m8!3m7!1s0x2e7a87321b9d246d:0x48cd592518df21d3!8m2!3d-7.4657288!4d110.2557295!9m1!1b1!16s%2Fg%2F11r_cqb0xx?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-emerald-900 text-emerald-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <i className="fa-brands fa-google"></i>
                        Lihat Ulasan di Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
