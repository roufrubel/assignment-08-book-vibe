import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])
    return (
        <div className="mt-20">
            <h4 className="text-[40px] font-bold text-center mb-6">Books</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;