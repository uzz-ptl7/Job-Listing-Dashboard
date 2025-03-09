// src/components/JobFilter.jsx
import React from "react";

const JobFilter = ({ setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Jobs"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default JobFilter;
