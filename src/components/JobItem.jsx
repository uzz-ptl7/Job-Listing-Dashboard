// src/components/JobItem.jsx
import React from "react";

const JobItem = React.memo(({ job }) => {
  console.log(job); // Add this to check the job object
  return (
    <div className="job-item">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
});

export default JobItem;
