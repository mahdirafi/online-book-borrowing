import { getBooks } from '@/lib/getBooks';
import React from 'react';
import Books from './Books';
import Link from 'next/link';
import { Button } from '@heroui/react';
 

const FeatureBooks = async() => {
    const featureBooks = await getBooks();
    const allBooks = featureBooks.slice(0,4);
    console.log(allBooks);

    return (
        <div className='my-12'>
            <h2 className='text-4xl font-semibold text-center'>All Feature Books</h2>

           <div className='grid lg:grid-cols-3 gap-6'>
             {allBooks.map((item) => (
                    <Books key={item.id} item={item} />
            ))}
           </div>

           <div className='text-center'>
                <Link href={'/all-books'}>
                    <Button>View More Books</Button>
                </Link>
           </div>
            
        </div>
    );
};

export default FeatureBooks;