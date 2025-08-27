import BusinessCard from '@/components/business-card/business-card';
import type { BusinessCardType } from '@/components/business-card/business-card-type';

function BusinessCardWrapper({
  businesses,
}: {
  businesses: BusinessCardType[];
}): React.ReactElement {
  return (
    <>
      {businesses.map((business) => (
        <BusinessCard key={`business_${business.id}`} business={business} />
      ))}
    </>
  );
}

export default BusinessCardWrapper;
