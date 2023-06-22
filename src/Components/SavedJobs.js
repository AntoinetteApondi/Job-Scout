import React from 'react';

const SavedJobs = ({ savedJobs }) => {
  return (
    <div>
      <h2>Saved Jobs</h2>
      {savedJobs.length === 0 ? (
        <p>No saved jobs.</p>
      ) : (
        <ul>
          {savedJobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedJobs;
