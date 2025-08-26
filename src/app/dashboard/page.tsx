import useYelpStore from '@/api/use-yelp-store';
import BusinessCardWrapper from '@/components/business-card/business-card-wrapper';
import SearchForm from '@/components/search-form/search-form';
import SiteHeader from '@/components/site-header';

function Page() {
  const yelpStore = useYelpStore();

  return (
    <div className="[--header-height:calc(--spacing(14))] font-roboto">
      <SiteHeader />
      <main className="flex h-full w-full flex-col items-center justify-center">
        <SearchForm onSearch={yelpStore.searchBusinesses}></SearchForm>

        <div className="px-6 py-6 w-full grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 auto-rows-max">
          <BusinessCardWrapper
            businesses={yelpStore.convertToBusinessCardType(yelpStore.businesses)}
          ></BusinessCardWrapper>
        </div>
      </main>
    </div>
  );
}

export default Page;
