export const getBooks = async () => {
    const res = await fetch("https://online-book-borrowing-xi.vercel.app/data.json", {
        next: { revalidate: 3600 }  
    });
    const books = await res.json();
    return books;
};

export const getCategory = async () => {
    const res = await fetch("https://online-book-borrowing-xi.vercel.app/category.json", {
        next: { revalidate: 3600 }  
    });
    const category = await res.json();
    return category;
};