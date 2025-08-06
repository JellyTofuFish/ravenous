import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

type StarRatingProps = {
  className?: string;
  rating?: number;
};

export default function StarRating({
  className,
  rating = 0,
}: StarRatingProps): React.ReactElement<'div'> {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const stars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    emptyStars.push(
      <Star key={`empty-star-${i}`} className="fill-gray-100 stroke-gray-500" strokeWidth={1} />,
    );
  }

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={`full-star-${i}`} className="fill-amber-500 stroke-amber-600" strokeWidth={1} />,
    );
  }

  if (halfStar) {
    stars.push(
      <StarHalf key="half-star" className="fill-amber-500 stroke-amber-600" strokeWidth={1} />,
    );
  }

  return (
    <div data-testid="star-rating" className={cn('relative', className)}>
      <div className="flex flex-row gap-2">{emptyStars}</div>
      <div className="absolute top-0 flex flex-row gap-2">{stars}</div>
    </div>
  );
}
