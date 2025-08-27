export const YelpSortFilter = ['best_match', 'rating', 'review_count'] as const;

export type YelpBusinessesSearchReponse = {
  businesses: YelpBusiness[];
  region: YelpBusinessesRegion;
  total: number;
};

export type YelpBusiness = {
  alias: string;
  attributes: {
    menu_url: string;
  };
  categories: {
    alias: string;
    title: string;
  }[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  display_phone: string;
  distance: number;
  id: string;
  image_url: string;
  is_closed: boolean;
  location: {
    address1: string;
    address2: string | null;
    address3: string | null;
    city: string;
    country: string;
    display_address: string[];
    state: string;
    zip_code: string;
  };
  name: string;
  phone: string;
  price?: string;
  rating: number;
  review_count: number;
  transactions: string[];
  url: string;
  business_hours?: {
    open: {
      is_overnight: boolean;
      start: number;
      end: number;
      day: number;
    }[];
    hours_type: string;
    is_open_now: boolean;
  };
};

type YelpBusinessesRegion = {
  region: {
    center: {
      latitude: number;
      longitude: number;
    };
  };
};
