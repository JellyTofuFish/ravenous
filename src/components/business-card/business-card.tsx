import { Button } from '@/components/ui/button';
import StarRating from '@/components/ui/star-rating';
import { Droplet, ArrowUpRight } from 'lucide-react';
import { type BusinessCardType } from '@/components/business-card/business-card-type';

type BusinessCardProps = {
  business: BusinessCardType;
};

function BusinessCard({ business }: BusinessCardProps): React.ReactElement<'a'> {
  return (
    <a href="#" className="group @container z-110 h-full">
      <div className="h-full overflow-hidden flex flex-col @md:flex-row gap-3 sm:gap-7 p-7 sm:items-center rounded-lg bg-white group-hover:bg-rose-50 group-hover:outline-rose-400 outline-3 outline-gray-100 drop-shadow-xs transition-colors ease-in-out duration-200">
        <Droplet className="z-109 absolute -top-73 sm:-top-100 -left-45 sm:-left-12 w-175 sm:w-200 h-175 sm:h-200 sm:scale-x-50 rounded-tl-lg rounder-tr-lg rotate-90 fill-gray-100 stroke-gray-100 group-hover:fill-red-100 group-hover:stroke-red-100 transition-colors ease-in-out duration-200" />
        <div className="z-110 mx-auto sm:mx-0 sm:shrink-0 h-42 w-42 rounded-lg flex items-center border-3 border-gray-100 bg-gray-50 group-hover:bg-rose-300 group-hover:border-rose-400 transition-colors duration-200">
          <img className="rounded-lg mx-auto" src={business.image} alt="Business Logo" />
        </div>
        <div className="z-110 h-full w-full flex flex-col justify-between text-left">
          <div>
            <p className="text-xl font-semibold text-black text-center sm:text-left">
              {business.name}
            </p>
            <p className="text-md font-bold text-rose-600 mb-4">{business.categoty}</p>
            <p className="text-md text-gray-600 pb-2">
              {business.address}, {business.zip} {business.city}
              {business.state ?? ''}
            </p>
          </div>
          <div>
            <div className="flex justify-start items-center my-3">
              <StarRating rating={business.rating} />
              <span className="text-gray-500 hover:underline pl-2">
                {business.reviewCount ?? 0}
              </span>
            </div>
            <Button
              className="mt-2 w-full relative bg-rose-600 hover:bg-rose-700/95 text-white hover:text-white font-bold"
              variant="outline"
              size="default"
            >
              Website <ArrowUpRight height={20} width={20} className="size-4 absolute right-2" />
            </Button>
          </div>
        </div>
      </div>
    </a>
  );
}

export default BusinessCard;
