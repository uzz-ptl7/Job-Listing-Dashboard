// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ totalJobs, jobsPerPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
