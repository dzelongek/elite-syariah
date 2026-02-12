import { Amenity, Feature, PricingPlan } from './types';

export const WHATSAPP_NUMBER = "6281234567890"; // Example number
export const MAPS_URL = "https://google.com/maps?output=search&q=elite+syariah+tegalrejo&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3m3YPDt_NFnmjs_fvB4vA8XwQ7cBGEwcMVqmOYmqbh0wrG-CpfOPic0WHgFCZBq1WNU-6TnyYIv4ckfRQc6GbQVl-jfxJ9ySzGcFkeelF-CWEirEqvcTaoNy0UzZqZXRv6fEWg9RymZrs8IOoW-CGSJIBXeTri3H7MraqFfF_N-EpExFqw&entry=mc&ved=1t:200715&ictx=111";

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
    description: "5 Menit ke Polbangtan, akses mudah ke jalur wisata."
  }
];

export const ROOM_FACILITIES: Amenity[] = [
  { icon: "fa-solid fa-snowflake", title: "AC Dingin" },
  { icon: "fa-solid fa-shower", title: "Water Heater" },
  { icon: "fa-solid fa-tv", title: "TV LED" },
  { icon: "fa-solid fa-wifi", title: "Free WiFi Kencang" },
  { icon: "fa-solid fa-bed", title: "Springbed Nyaman" },
  { icon: "fa-solid fa-restroom", title: "Kamar Mandi Dalam" },
];

export const PRICING_DAILY: PricingPlan[] = [
  {
    id: 'd1',
    title: 'Standard Room',
    price: 'Rp 150.000',
    period: '/malam',
    features: ['AC', 'TV', 'Kamar Mandi Dalam', 'Breakfast (Roti/Teh)'],
    recommended: false
  },
  {
    id: 'd2',
    title: 'Deluxe Room',
    price: 'Rp 200.000',
    period: '/malam',
    features: ['AC', 'Water Heater', 'Smart TV', 'Kamar Mandi Luas', 'Breakfast Lengkap'],
    recommended: true
  }
];

export const PRICING_MONTHLY: PricingPlan[] = [
  {
    id: 'm1',
    title: 'Kost Eksklusif A',
    price: 'Rp 1.200.000',
    period: '/bulan',
    features: ['Listrik Token', 'Free WiFi', 'Kamar Mandi Dalam', 'Springbed'],
    recommended: false
  },
  {
    id: 'm2',
    title: 'Kost Eksklusif B (VIP)',
    price: 'Rp 1.600.000',
    period: '/bulan',
    features: ['AC', 'Water Heater', 'Free WiFi', 'Cleaning Service Mingguan'],
    recommended: true
  }
];