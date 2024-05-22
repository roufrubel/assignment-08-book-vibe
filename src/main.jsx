import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
// import Book from './components/Book/Book.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/book/:id',
        element: <BookDetails />,
        loader: () => fetch('../books.json')
      }
     
      // {
      //   path: "/applied",
      //   element: <AppliedJobs></AppliedJobs>,
      //   loader: () => fetch('../jobs.json')     // warning: do not load all the data in practical jobs
      // },
      // {
      //   path: '/job/:id',
      //   element: <JobDetails></JobDetails>,
      //   loader: () => fetch('../jobs.json')     // warning: do not load all the data in practical jobs
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
