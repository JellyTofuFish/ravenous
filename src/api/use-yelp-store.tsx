import type { YelpBusiness, YelpBusinessesSearchReponse } from '@/api/yelp-type';
import { YelpSortFilter } from '@/api/yelp-type';
import type { BusinessCardType } from '@/components/business-card/business-card-type';
import { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL + '/businesses/search';

type UseYelpStore = {
  businesses: YelpBusiness[];
  error: string | null;
  searchBusinesses: (
    location: string,
    term: string,
    sort: (typeof YelpSortFilter)[number],
  ) => Promise<void>;
  convertToBusinessCardType: (businesses: YelpBusiness[]) => BusinessCardType[];
};

export default function useYelpStore(): UseYelpStore {
  const [businesses, setBusinesses] = useState<YelpBusiness[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function searchBusinesses(
    location: string,
    term: string,
    sort: (typeof YelpSortFilter)[number],
  ): Promise<void> {
    const fetchOptions = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${API_KEY}`,
      },
    };

    const url = new URL(BASE_URL);
    url.searchParams.append('location', location);
    if (term) {
      url.searchParams.append('term', term);
    }
    url.searchParams.append('sort_by', sort);
    url.searchParams.append('limit', '15');

    try {
      const response = await fetch(url.toString(), fetchOptions);

      if (!response.ok) {
        setError(`Error fetching data: ${response.statusText}`);
      }

      const jsonResponse: YelpBusinessesSearchReponse = await response.json();
      console.log('Fetching from:', url.toString(), jsonResponse);
      setBusinesses(jsonResponse.businesses);
    } catch (error: unknown) {
      setError(`Unexpected error: ${(error as Error).message}`);
    }
  }

  function convertToBusinessCardType(businesses: YelpBusiness[]): BusinessCardType[] {
    return businesses.map((business) => ({
      id: business.id,
      name: business.name,
      address: business.location.address1,
      address2: business.location.address2,
      city: business.location.city,
      country: business.location.country,
      zip: business.location.zip_code,
      category: business.categories.map((cat) => cat.title).join(', '),
      image: business.image_url,
      rating: business.rating,
      reviewCount: business.review_count,
      url: business.url,
      menuUrl: business.attributes.menu_url,
      phone: business.phone,
      price: business.price ?? '',
    }));
  }

  return {
    businesses,
    error,
    searchBusinesses,
    convertToBusinessCardType,
  };
}
