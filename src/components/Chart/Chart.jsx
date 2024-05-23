import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import PagesToRead from "../PagesToRead/PagesToRead";



const Chart = () => {
    const books = useLoaderData();
    const [storedReadBook, setStoredReadBook] = useState([]);

    useEffect( () => {
        const storedReadIds = getStoredReadBooks ();
        if(storedReadIds.length > 0) {
            const storedReadBooks = books.filter(book => storedReadIds.includes(book.bookId));
            setStoredReadBook(storedReadBooks)
        }
    }, [books])
    return (
        <div>
            <h2>Chart</h2>
            {
                storedReadBook.map(book => <PagesToRead book={book} key={book.bookId}></PagesToRead>)
            }
        </div>
    );
};

export default Chart;