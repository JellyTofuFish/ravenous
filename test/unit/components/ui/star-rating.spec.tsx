import { render, screen } from '@testing-library/react';
import StarRating from '@/components/ui/star-rating';

jest.mock('lucide-react', () => ({
  Star: (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="star" {...props} />,
  StarHalf: (props: React.SVGProps<SVGSVGElement>) => <svg data-testid="star-half" {...props} />,
}));

describe('StarRating', () => {
  it('renders five empty stars by default', () => {
    render(<StarRating />);

    const emptyStars = screen.getAllByTestId('star');
    expect(emptyStars.length).toBe(5);
    expect(screen.queryByTestId('star-half')).toBeNull();
  });

  it('renders the correct number of full and empty stars for integer rating', () => {
    render(<StarRating rating={3} />);

    const allStars = screen.getAllByTestId('star');
    expect(allStars.length).toBe(8);

    const filledStars = allStars.filter(
      (star) => star.getAttribute('class')?.includes('fill-amber-500') ?? false,
    );
    expect(filledStars.length).toBe(3);

    expect(screen.queryByTestId('star-half')).toBeNull();
  });

  it('renders a half star when rating includes .5', () => {
    render(<StarRating rating={2.5} />);

    const allStars = screen.getAllByTestId('star');
    const filledStars = allStars.filter(
      (star) => star.getAttribute('class')?.includes('fill-amber-500') ?? false,
    );
    expect(filledStars.length).toBe(2);

    expect(screen.getByTestId('star-half')).toBeInTheDocument();
  });

  it('accepts and applies custom className', () => {
    render(<StarRating className="my-custom-class" />);

    const wrapper = screen.getByTestId('star-rating');
    expect(wrapper.className).toContain('my-custom-class');
  });

  it('renders all full stars when rating is 5', () => {
    render(<StarRating rating={5} />);

    const allStars = screen.getAllByTestId('star');
    const filledStars = allStars.filter(
      (star) => star.getAttribute('class')?.includes('fill-amber-500') ?? false,
    );
    expect(filledStars.length).toBe(5);
    expect(screen.queryByTestId('star-half')).toBeNull();
  });

  it('renders zero overlay stars for rating 0', () => {
    render(<StarRating rating={0} />);

    const allStars = screen.getAllByTestId('star');
    const filledStars = allStars.filter(
      (star) => star.getAttribute('class')?.includes('fill-amber-500') ?? false,
    );
    expect(filledStars.length).toBe(0);
    expect(allStars.length).toBe(5);
  });
});

describe('StarRating - Snapshot', () => {
  it('renders correctly with default props', () => {
    const { asFragment } = render(<StarRating />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a rating of 2.5', () => {
    const { asFragment } = render(<StarRating rating={2.5} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with custom className', () => {
    const { asFragment } = render(<StarRating rating={4} className="my-custom-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
