import { Button } from '@/components/ui/button';
import StarRating from '@/components/ui/star-rating';
import { Droplet, ArrowUpRight, Phone, NotepadText, User } from 'lucide-react';
import { type BusinessCardType } from '@/components/business-card/business-card-type';
import defaultBusinessImage from '@asset/image/business-default-img.jpg';

type BusinessCardProps = {
  business: BusinessCardType;
};

function BusinessCard({ business }: BusinessCardProps): React.ReactElement<'a'> {
  return (
    <a className="group @container z-110 h-full">
      <div className="h-full overflow-hidden rounded-lg bg-white group-hover:bg-rose-50 group-hover:outline-rose-400 outline-2 outline-gray-100 drop-shadow-sm transition-colors ease-in-out duration-100">
        <Droplet className="z-109 absolute -top-73 @sm:-top-100 -left-45 @sm:-left-12 w-175 @sm:w-200 h-175 @sm:h-200 @sm:scale-x-50 rounded-tl-lg rounder-tr-lg rotate-90 fill-gray-100 stroke-gray-100 group-hover:fill-red-100 group-hover:stroke-red-100 transition-colors ease-in-out duration-100" />
        <div className="flex flex-wrap gap-3 sm:gap-6 p-6 justify-start">
          <p className="z-110 w-full text-xl font-semibold text-black text-center text-wrap sm:truncate">
            {business.name} {business.price && <span> • {business.price}</span>}
          </p>
          <div className="z-110 w-full flex flex-col @sm:flex-row @sm:items-center gap-3 sm:gap-6 min-w-0">
            <div className="z-110 flex-none self-center mx-auto sm:mx-0 sm:shrink-0 h-35 w-35 sm:h-43 sm:w-43 rounded-lg flex items-center border-2 border-gray-100 bg-gray-50 group-hover:bg-rose-300 group-hover:border-rose-400 transition-colors duration-100 overflow-hidden">
              <img
                className="rounded-lg object-cover max-w-none h-35 w-35 sm:h-43 sm:w-43"
                src={business.image ? business.image : defaultBusinessImage}
                alt="Business Logo"
              />
            </div>
            <div className="z-110 flex-1 flex flex-col justify-between text-left min-w-0 max-w-full px-0 @sm:px-0">
              <div>
                <p className="text-md font-bold text-rose-600 mb-5 overflow-hidden truncate">
                  {business.category}
                </p>

                <p className="text-md text-gray-600 mb-2">
                  {business.address}, {business.address2 && `${business.address2},`} {business.city}
                  , <br className="block @sm:hidden @md:block" />
                  {business.country}, {business.zip}
                </p>
                <a
                  href={`tel:${business.phone}`}
                  className="text-gray-600 hover:underline mb-2 inline-block"
                >
                  {business.phone}
                </a>
              </div>
              <div>
                <div className="flex justify-start items-center">
                  <StarRating rating={business.rating} />
                  <p className="text-gray-500 pl-2 flex items-center">
                    <User className="inline-block" height={16} width={16} />{' '}
                    {business.reviewCount ?? 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {!!business.menuUrl && (
            <Button
              onClick={() => window.open(business.menuUrl ?? '', '_blank')}
              className="z-110 flex-1 relative bg-gray-100 border-0 hover:bg-rose-700 text-gray-600 group-hover:bg-rose-500 group-hover:text-white hover:text-white font-bold"
              variant="outline"
              size="default"
            >
              <NotepadText className="size-4 left-2" />{' '}
              <span className="hidden sm:inline">Menu</span>
            </Button>
          )}
          <Button
            onClick={() => window.open(`tel:${business.phone}`, '_blank')}
            className="z-110 flex-1 relative bg-gray-100 border-0 hover:bg-rose-700 text-gray-600 group-hover:bg-rose-500 group-hover:text-white hover:text-white font-bold"
            variant="outline"
            size="default"
          >
            <Phone className="size-4 left-2" /> <span className="hidden sm:inline">Call</span>
          </Button>
          <Button
            onClick={() => window.open(business.url, '_blank')}
            className="z-110 flex-1 relative bg-gray-100 border-0 hover:bg-rose-700 text-gray-600 group-hover:bg-rose-500 group-hover:text-white hover:text-white font-bold"
            variant="outline"
            size="default"
          >
            <ArrowUpRight height={20} width={20} className="size-4 right-2" /> Website
          </Button>
        </div>
      </div>
    </a>
  );
}

export default BusinessCard;
