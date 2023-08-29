import React from "react";

const Pagination = ({ currentPage, totalPosts, onPageChange }) => {
  const postsPerPage = 4;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-10">
    <button
      className={`pr-3 pagination-button text-violet-800 ${
        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <div className="flex space-x-3 text-violet-800">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`pagination-button ${
              page === currentPage ? " text-orange-500" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
    <button
      className={`pl-3 pagination-button text-violet-800 ${
        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
  );
};

export default Pagination;
