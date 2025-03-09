import React, { useState } from "react";
import useFetchJobs from "../hooks/useFetchJobs";

const JobList = () => {
  const { data, loading, error } = useFetchJobs();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const jobsPerPage = 10;

  // Filter jobs based on search query
  const filteredJobs = data.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the current jobs to display based on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>Error loading jobs: {error}</div>;

  return (
    <div>
      <h2>Job Listings</h2>

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search jobs"
        className="search-input"
      />

      {filteredJobs.length === 0 ? (
        <div>No jobs available</div>
      ) : (
        <ul>
          {currentJobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobList;
