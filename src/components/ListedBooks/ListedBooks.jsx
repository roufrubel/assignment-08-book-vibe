import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <h4 className="text-xl font-bold text-center mt-8 mb-6 bg-slate-100 p-4 rounded-xl">Books</h4>

            <div className="dropdown dropdown-bottom flex justify-center">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort by <FaChevronDown className="mr-2"/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Rating</a></li>
            <li><a>Number
                of pages</a></li>
                <li><a>Published year</a></li>
                </ul>
            </div>

          <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap '>
            <Link
              to={``}
              onClick={() => setTabIndex(0)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? 'border border-b-0 font-bold bg-slate-50' : 'border-b'
              }  `}
            >
              <span>Read Books</span>
            </Link>

            <Link
              to={`wishlist`}
              onClick={() => setTabIndex(1)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? 'border border-b-0 font-bold bg-slate-50' : 'border-b'
              }  `}
            >
              <span>Wishlist Books</span>
            </Link>
            
          </div>
          <Outlet />
        </>
    );
};

export default ListedBooks;