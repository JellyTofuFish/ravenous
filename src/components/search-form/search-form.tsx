'use client';

import { searchFilters } from '@/components/search-form/search-form-type';
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
  filter: z.optional(z.enum(searchFilters)),
  business: z.string().min(2, 'Business must be at least 2 characters').max(100),
  location: z.string().max(100),
});

function SearchForm(): React.ReactElement {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      filter: undefined,
      business: '',
      location: '',
    },
  });

  function onSubmit(data: z.infer<typeof searchFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form className="space-y-2 p-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2 mb-4">
          {searchFilters.map((option) => (
            <button
              key={option}
              type="button"
              className={`px-4 py-2 rounded font-semibold border transition-colors duration-150 ${form.watch('filter') === option ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-rose-600 border-rose-300 hover:bg-rose-50'}`}
              onClick={() => {
                form.setValue('filter', option);
                form.handleSubmit(onSubmit)();
              }}
              aria-pressed={form.watch('filter') === option}
            >
              {option
                .split('-')
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
          className="mt-2 w-full relative bg-rose-600 hover:bg-rose-700/95 text-white hover:text-white font-bold"
          variant="outline"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default SearchForm;
