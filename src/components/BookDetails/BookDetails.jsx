import { useLoaderData, useParams } from "react-router-dom";
import Tags from "../Tags/Tags";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedReadBooks, savedWishlistBooks } from "../../utility/localstorage";



const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    // console.log(book, id)
    const {review, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating} = book;

    const handleRead = () => {
        savedReadBooks(idInt);
        toast('You have added in Readlist the book!');
    }
    const handleWishlist = () => {
        savedWishlistBooks(idInt);
        toast('You have added in Wishlist the book!');
    }

    return (
        <div className="md:flex md:justify-center md:items-center gap-6 mt-16">
            <div className="p-16 bg-[#F3F3F3] rounded-2xl w-full md:w-1/2 flex  justify-center items-center">
                <img className="md:w-3/5" src={image} alt="BookCover" />
            </div>
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-4xl font-bold">{bookName}</h2>
            <p className="mb-3 mt-2">By: {author}</p>
            <p className="py-2 border-t border-b border-solid">{category}</p>
            <p className="mt-3"><span className="font-bold">Review: </span> <span className="text-[#131313B3]">{review}</span></p>
            <div  className="flex
        space-x-2 items-center border-solid border-b pb-1 mt-4">
            <p className="font-bold mr-2 pb-5 ">Tag</p>
                {
                    tags.map((tag, idx) => <Tags key={idx} tag={tag}></Tags>)
                }
            </div>
            <p className="flex justify-between mt-4">
                <span className="flex justify-start"> Number of Pages:</span>
                <span className="font-bold flex justify-end">{totalPages}</span> </p>

                <p className="flex justify-between">
                <span className="flex justify-start">Publisher: </span>
                <span className="font-bold flex justify-end">{publisher}</span> </p>

                <p className="flex justify-between">
                <span className="flex justify-start">Year of Publishing: </span>
                <span className="font-bold flex justify-end">{yearOfPublishing}</span> </p>

                <p className="flex justify-between">
                <span className="flex justify-start">Rating: </span>
                <span className="font-bold flex justify-end">{rating}</span> </p>
                <div className="flex mt-4 ">
                    <button onClick={handleRead} className="btn btn-outline mr-4">Read</button>
                    <button onClick={handleWishlist} className="btn btn-outline">Wishlist</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default BookDetails;