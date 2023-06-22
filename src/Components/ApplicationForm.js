import React, { useState } from 'react';

const ApplicationForm = ({ job }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCoverLetterChange = (event) => {
    setCoverLetter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send application data to server
  };

  return (
    <form onSubmit={handleSubmit}>
            <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />

      <label>Cover Letter</label>
      <textarea
        placeholder="Write your cover letter"
        value={coverLetter}
        onChange={handleCoverLetterChange}
      />

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;
