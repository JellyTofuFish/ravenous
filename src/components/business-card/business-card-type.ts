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

export const testBusiness = [
  {
    id: '1',
    image: '',
    name: 'Test Business 1',
    address: '123 Test St',
    address2: 'Suite 100',
    city: 'Testville',
    country: 'USA',
    zip: '12345',
    category: 'Testing',
    rating: 4.5,
    reviewCount: 10,
    phone: '555-1234',
    url: 'https://example.com',
    price: '$$',
  },
];
