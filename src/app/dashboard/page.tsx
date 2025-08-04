import { SiteHeader } from '@/components/site-header';

function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))] font-roboto">
      <SiteHeader />
    </div>
  );
}

export default Page;
