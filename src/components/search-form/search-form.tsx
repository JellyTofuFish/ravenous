import { YelpSortFilter, type YelpBusiness } from '@/api/yelp-type';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const searchFormSchema = z.object({
  filter: z.enum(YelpSortFilter),
  business: z.string().max(100),
  location: z.string().min(3, 'Location must be at least 3 characters').max(100),
});

function SearchForm({
  onSearch,
}: {
  onSearch: (location: string, term: string, sort: (typeof YelpSortFilter)[number]) => void;
}): React.ReactElement {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      filter: z.enum(YelpSortFilter).enum['best_match'],
      business: '',
      location: '',
    },
  });

  function onSubmit(data: z.infer<typeof searchFormSchema>) {
    onSearch(data.location, data.business, data.filter);
  }

  return (
    <Form {...form}>
      <form className="space-y-2 p-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {YelpSortFilter.map((option) => (
            <button
              key={option}
              type="button"
              className={`px-4 py-2 border-2 rounded font-semibold transition-colors duration-150 ${form.watch('filter') === option ? 'bg-rose-500 text-white border-rose-500 hover:bg-rose-600' : 'bg-white text-rose-500 border-rose-500 hover:bg-rose-100 hover:border-rose-600 hover:text-rose-600'}`}
              onClick={() => {
                form.setValue('filter', option);
              }}
              aria-pressed={form.watch('filter') === option}
            >
              {option
                .split('_')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </button>
          ))}
        </div>

        <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mt-2 w-full relative bg-rose-500 hover:bg-rose-700 text-white hover:text-white font-bold"
          variant="outline"
          type="submit"
        >
          Search
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
