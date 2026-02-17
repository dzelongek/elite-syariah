import { Amenity, Feature, PricingPlan } from './types';

export const WHATSAPP_NUMBER = "6281326985098";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=G7M4%2BP7+Tegalrejo%2C+Kabupaten+Magelang%2C+Jawa+Tengah";

// Menggunakan gambar Unsplash berkualitas tinggi sebagai aset utama
// Ini mencegah gambar 'hilang' saat sinkronisasi git karena tidak bergantung pada file lokal
export const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"; // Luxury Exterior/Vibe
export const FACILITIES_IMAGE_URL = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"; // Luxury Bedroom

export const FEATURES: Feature[] = [
  {
    icon: "fa-solid fa-car",
    title: "Parkir Luas",
    description: "Area parkir aman dan luas untuk mobil & motor tamu."
  },
  {
    icon: "fa-solid fa-mosque",
    title: "Konsep Syariah",
    description: "Lingkungan tenang, amanah, dan nyaman untuk keluarga."
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Aman & Terjaga",
    description: "Sistem keamanan 24 jam dan lingkungan yang kondusif."
  },
  {
    icon: "fa-solid fa-map-location-dot",
    title: "Lokasi Strategis",
    description: "Tepat di sebelah kampus Polbangtan & jalur wisata Magelang."
  }
];

export const ROOM_FACILITIES: Amenity[] = [
  { icon: "fa-solid fa-snowflake", title: "Tersedia AC" },
  { icon: "fa-solid fa-shower", title: "Water Heater" },
  { icon: "fa-solid fa-tv", title: "Smart TV" },
  { icon: "fa-solid fa-wifi", title: "Free WiFi" },
  { icon: "fa-solid fa-bed", title: "Bed Berkualitas" },
  { icon: "fa-solid fa-restroom", title: "Kamar Mandi Dalam" },
];

export const PRICING_DAILY: PricingPlan[] = [
  {
    id: 'sd3',
    title: 'Super Deluxe 3 (AC + Teras)',
    price: 'Rp 300.000',
    period: '/malam',
    features: [
      'Lantai Bawah + Teras & Kursi Santai',
      'King Size Bed (Nyaman & Luas)',
      'AC & Kamar Mandi Air Panas',
      'Smart TV 43 Inch',
      'Luas Kamar Ekstra (4x5m)'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: true
  },
  {
    id: 'sd1',
    title: 'Super Deluxe 1 (Bathtub)',
    price: 'Rp 300.000',
    period: '/malam',
    features: [
      'Kamar Mandi Bathtub & Air Panas',
      'Bed 180x200cm (King Size)',
      'Smart TV 43 Inch',
      'Kulkas Kecil Pribadi',
      'Free WiFi Kencang'
    ],
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: true
  },
  {
    id: 'sd2',
    title: 'Super Deluxe 2 (King Bed)',
    price: 'Rp 250.000',
    period: '/malam',
    features: [
      'Bed 180x200cm (King Size)',
      'Smart TV 43 Inch',
      'Kamar Mandi Dalam & Air Panas',
      'Akses Kulkas & Dapur Umum',
      'Free WiFi'
    ],
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595526114035-0d443867891c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: false
  },
  {
    id: 'sd2-twin',
    title: 'Super Deluxe 2 (Twin Bed)',
    price: 'Rp 250.000',
    period: '/malam',
    features: [
      '2 Tempat Tidur (120x200cm)',
      'Smart TV 32 Inch',
      'Kamar Mandi Dalam & Air Panas',
      'Akses Kulkas & Dapur Umum',
      'Sangat Pas Untuk Teman/Rekan'
    ],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-b0346efee53e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: false
  },
  {
    id: 'd2',
    title: 'Deluxe 2 (Type A/B)',
    price: 'Rp 200.000',
    period: '/malam',
    features: [
      'Pilihan Bed 160cm atau 180cm',
      'Smart TV (Hingga 43 Inch)',
      'Kamar Mandi Air Panas & Kipas',
      'Akses Kulkas & Dapur Umum',
      'Free WiFi'
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512918760513-95f6929c3c38?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: false
  },
  {
    id: 'std1',
    title: 'Standar 1',
    price: 'Rp 150.000',
    period: '/malam',
    features: [
      'Bed 160x200cm',
      'Smart TV 32 Inch',
      'Kamar Mandi Dalam & Air Panas',
      'Kipas Angin',
      'Ekonomis & Tetap Nyaman'
    ],
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554646844-3c468153c945?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: false
  }
];

export const PRICING_MONTHLY: PricingPlan[] = [
  {
    id: 'm1',
    title: 'Kost Eksklusif A',
    price: 'Rp 1.200.000',
    period: '/bulan',
    features: ['Listrik Token', 'Free WiFi', 'Kamar Mandi Dalam', 'Springbed', 'Lemari & Meja'],
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: false
  },
  {
    id: 'm2',
    title: 'Kost Eksklusif B (VIP)',
    price: 'Rp 1.600.000',
    period: '/bulan',
    features: ['AC', 'Water Heater', 'Free WiFi', 'Cleaning Service Mingguan', 'Include Listrik'],
    images: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop'
    ],
    recommended: true
  }
];