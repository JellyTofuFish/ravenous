export type BusinessCardType = {
  image: string;
  name: string;
  address: string;
  city: string;
  state: string | undefined;
  zip: string;
  categoty: string | undefined;
  rating: number;
  reviewCount: number;
};

export const DefaultBusiness: BusinessCardType[] = [
  {
    image: 'https://picsum.photos/200',
    name: "Big Mama's Pizzeria",
    address: 'Espoonlahdenkatu 1, Finland',
    city: 'Espoo',
    state: undefined,
    zip: '02320',
    categoty: 'Pizza restaurant',
    rating: 3,
    reviewCount: 20,
  },
  {
    image: 'https://picsum.photos/200',
    name: "Big Mama's Pizzeria2",
    address: 'Espoonlahdenkatu 1',
    city: 'Espoo',
    state: undefined,
    zip: '02320',
    categoty: 'Pizza restaurant',
    rating: 2.7,
    reviewCount: 30,
  },
];
