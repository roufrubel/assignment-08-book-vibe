import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <h4 className="text-xl font-bold text-center mt-8 mb-6 bg-slate-100 p-4 rounded-xl">Books</h4>


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