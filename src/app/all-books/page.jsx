import Books from '@/components/Books';
import { getBooks } from '@/lib/getBooks';
import React from 'react';

const AllBooks = async() => {
    const allBooks  = await getBooks();
    console.log(allBooks);
    return (
        <div className='my-12'>
                    <h2 className='text-4xl font-semibold text-center'>All Feature Books</h2>
        
                   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                     {allBooks.map((item) => (
                            <Books key={item.id} item={item} />
                    ))}
                   </div>
                    
                </div>
    );
};

export default AllBooks;