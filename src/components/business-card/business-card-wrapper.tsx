import BusinessCard from '@/components/business-card/business-card';
import type { BusinessCardType } from '@/components/business-card/business-card-type';

type BusinessCardWrapperProps = {
  businesses: BusinessCardType[];
};

function BusinessCardWrapper({ businesses }: BusinessCardWrapperProps): React.ReactElement {
  return (
    <>
      {businesses.map((business) => (
        <BusinessCard key={`business_${business.name.trim()}`} business={business} />
      ))}
    </>
  );
}

export default BusinessCardWrapper;
