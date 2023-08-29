import React, { useState } from "react";
import BlogGrid from "./BlogGrid.jsx";
import Pagination from "./Pagination";

const BlogContainer = ({ posts }) => {
  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = posts.slice(startIndex, endIndex);

  return (
    <>
      
      <BlogGrid posts={postsToShow}/>
      <Pagination
        currentPage={currentPage}
        totalPosts={posts.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BlogContainer;
