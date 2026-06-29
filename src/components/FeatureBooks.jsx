import { getBooks } from '@/lib/getBooks';
import React from 'react';
import Books from './Books';
import Link from 'next/link';
import { Button } from '@heroui/react';

const FeatureBooks = async () => {
  const featureBooks = await getBooks();
  const allBooks = featureBooks.slice(0, 4);
  console.log(allBooks);

  return (
    <div className="my-16">

      {/* Section header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-violet-500 bg-violet-50 border border-violet-200 rounded-full px-3 py-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
          Handpicked for you
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Featured <span className="text-violet-500">books</span>
        </h2>
        <p className="text-default-400 mt-2 text-sm max-w-md mx-auto">
          Carefully selected titles across genres — start your next adventure here.
        </p>
      </div>

      {/* Book grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {allBooks.map((item) => (
          <Books key={item.id} item={item} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/all-books">
          <Button
            variant="bordered"
            className="border-violet-400 text-violet-500 hover:bg-violet-50 font-medium px-8"
          >
            View all books
          </Button>
        </Link>
      </div>

    </div>
  );
};

export default FeatureBooks;