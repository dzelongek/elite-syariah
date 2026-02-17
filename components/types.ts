export type PricingMode = 'daily' | 'monthly';

export interface Amenity {
  icon: string; // FontAwesome class
  title: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  images: string[]; // Added array of image URLs
  recommended?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  rating: number;
  review: string;
}