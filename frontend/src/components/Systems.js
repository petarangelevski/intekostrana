/* eslint-disable react-hooks/exhaustive-deps */
import "./Systems.css";
import { itemss } from './data';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Posts from "./Systems/Posts";
import Pagination from "./Systems/Pagination";

export const Systems = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = itemss.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)
  const handleNextBtn = () => {
    setCurrentPage(currentPage+1);

    if(currentPage+1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  const handlePreviousBtn = () => {
    setCurrentPage(currentPage-1);

    if ((currentPage - 1)% pageNumberLimit == 0){
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <>

        <Posts items={currentPosts} />
        <Pagination
        minPageNumberLimit={minPageNumberLimit}
        maxPageNumberLimit={maxPageNumberLimit}
        handlePreviousBtn={handlePreviousBtn}
        handleNextBtn={handleNextBtn} 
        currentPage={currentPage} 
        postsPerPage={postsPerPage} 
        totalPosts={itemss.length} 
        paginate={paginate}/>  
    </>
  )
}

export default Systems