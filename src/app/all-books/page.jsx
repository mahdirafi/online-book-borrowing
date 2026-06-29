import Books from '@/components/Books';
import Category from '@/components/Category';
import { getBooks } from '@/lib/getBooks';
import React from 'react';

const AllBooks = async({searchParams}) => {
    const {category} = await searchParams
    console.log(category);

    const allBooks  = await getBooks();
    // console.log(allBooks);
    const filteredBooks =category? allBooks.filter(books => books.category.toLowerCase() == category.toLowerCase()) : allBooks

    return (
        <div className='my-12'>
              <h2 className='text-4xl font-semibold text-center mb-22'>All Feature Books</h2>

              <Category/>
        
                   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                     {filteredBooks.map((item) => (
                            <Books key={item.id} item={item} />
                    ))}
                   </div>
                    
                </div>
    );
};

export default AllBooks;