import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utility/localstorage";
import Tags from "../Tags/Tags";
import { FaRegStar } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdInsertPageBreak } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";


const Read = () => {
    const books = useLoaderData();
    const [storedReadBook, setStoredReadBook] = useState([]);
    const [sortingBooks, setSortingBooks] = useState([]);

    const handleFilter = filter => {
        // new
        let sortedBooks = [...storedReadBook];
        if(filter === 'year') {
            // const publishYear =storedReadBook.filter(book => book.yearOfPublishing);
            // const publishYearSort = publishYear.sort();
            // // console.log(publishYearSort)
            // setSortingBooks(publishYearSort)

             // new
             sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }
        if(filter === 'pages') {
                        // const pagesNumber =storedReadBook.filter(book => book.totalPages);
            // const pagesNumberSort = pagesNumber.sort();
            // setSortingBooks(pagesNumberSort)
            // console.log(pagesNumberSort)

            // new
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
        }
        if(filter === 'rating') {
            // const ratings =storedReadBook.filter(book => book.rating);
            // const ratingsSort = ratings.sort();
            // setSortingBooks(ratingsSort)
            // console.log(ratingsSort)

            // new
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }
        // new
        setSortingBooks(sortedBooks);
    }

    useEffect( () => {
        const storedReadIds = getStoredReadBooks();
        if(storedReadIds.length > 0) {
            const storedReadBooks = books.filter(book => storedReadIds.includes(book.bookId));
            setStoredReadBook(storedReadBooks);
            setSortingBooks(storedReadBooks);
        }
    }, [books])
    return (
        <div className="max-w-3xl px-6 py-6">

<div className="dropdown dropdown-bottom flex justify-center">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort by <FaChevronDown className="mr-2"/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
            <li onClick={() => handleFilter('pages')}><a>Number
                of pages</a></li>
                <li onClick={() => handleFilter('year')}><a>Published year</a></li>
                </ul>
            </div>

            {
                sortingBooks.map(book => <div key={book.bookId} className="p-6 rounded-2xl border flex gap-6 mb-6">          

                <div className="flex justify-center bg-[#F3F3F3] rounded-2xl mb-2">
                <img className="p-6" src={book.image} alt="" />
                </div>
                <div>
                <h2 className="text-2xl font-bold mb-2">{book.bookName}</h2>
                <p className="mb-2">By: {book.author}</p>
                <div  className="flex
            space-x-2 justify-center items-center"> <p className="font-bold">Tag</p>
                    {
                        book.tags.map((tag, idx) => <Tags key={idx} tag={tag}></Tags>)
                    }
                    <p className="flex justify-center items-center"><FiMapPin className="mr-1" /> <span>Year of Publishing: {book.yearOfPublishing}</span></p>
                </div>
                <div className="flex space-x-3 items-center mt-1 pt-1 pb-2 border-solid border-b">
                    <p className="flex justify-center items-center"><CgProfile className="mr-1"/> Publisher: {book.publisher}</p>
                    <p className="flex items-center "><MdInsertPageBreak className="mr-1"/> Page: {book.totalPages}</p>
                </div>
                <div className="flex space-x-2 mt-4"> 
                    <p className="bg-[#328EFF26] px-3 py-1 rounded-full">Category: {book.category}</p>
                    <p className="flex justify-center items-center bg-[#FFAC3326] px-3 py-1 rounded-full"><span className="mr-1">Rating: {book.rating} </span> <FaRegStar/></p>
                    <Link to={`/book/${book.bookId}`} className="bg-[#23BE0A] px-3 py-1 rounded-full text-white font-semibold">View Details</Link>
                </div>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default Read;