import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      {/* Additional job details */}
    </div>
  );
};

export default JobCard;
