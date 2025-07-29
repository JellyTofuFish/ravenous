import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SiteHeader />
    </div>
  );
}
