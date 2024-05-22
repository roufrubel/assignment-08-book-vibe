import { useLoaderData, useParams } from "react-router-dom";



const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    console.log(book, id)

    return (
        <div>
            <h2>{book.bookName}</h2>

        </div>
    );
};

export default BookDetails;