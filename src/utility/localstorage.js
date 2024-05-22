const getStoredReadBooks = () => {
    const storedReadBook = localStorage.getItem('read');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const savedReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(jobId => jobId ===id);
    if(!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBooks));
    }
}

export {
    getStoredReadBooks,
    savedReadBooks
} 





const getStoredWishlistBooks = () => {
    const storedWishlistBook = localStorage.getItem('wishlist');
    if(storedWishlistBook){
        return JSON.parse(storedWishlistBook);
    }
    return [];
}

const savedWishlistBooks = id => {
    const storedWishlistBooks = getStoredWishlistBooks();
    const exists = storedWishlistBooks.find(jobId => jobId ===id);
    if(!exists) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistBooks));
    }
}

export {
    getStoredWishlistBooks,
    savedWishlistBooks
} 
