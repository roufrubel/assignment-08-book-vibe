import { FaRegStar } from "react-icons/fa6";
import Tags from "../Tags/Tags";


const Book = ({book}) => {
    const {image, bookName, author, category, tags, rating} = book;
    return (
        <div className="p-6 rounded-2xl border">
            <div className="flex justify-center bg-[#F3F3F3] rounded-2xl mb-4">
            <img className="p-6" src={image} alt="" />
            </div>
            <div  className="flex
        space-x-2">
                {
                    tags.map((tag, idx) => <Tags key={idx} tag={tag}></Tags>)
                }
            </div>
            <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
            <p className="mb-3">By: {author}</p>
            <div className="flex justify-between border-dashed border-t pt-4 mt-4"> 
                <p>{category}</p>
                <p className="flex justify-center items-center"><span className="mr-1">{rating}</span> <FaRegStar/></p>
            </div>
        </div>
    );
};

export default Book;