export type BusinessCardType = {
  id: string;
  image: string;
  name: string;
  address: string;
  address2: string | null;
  city: string;
  country: string;
  zip: string;
  category: string | null;
  rating: number;
  reviewCount: number;
  url: string;
  menuUrl: string | null;
  phone: string | null;
  price: string;
};
