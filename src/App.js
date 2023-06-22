import React, { useState } from 'react';
import Header from './Components/Header';
import SearchForm from './SearchForm';
import JobListings from './JobListings';
import JobCard from './JobCard';
import SavedJobs from './SavedJobs';
import ApplicationForm from './ApplicationForm';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {isLoggedIn ? (
        <div>
          <SearchForm />
            <JobListings>
              {(job) => <JobCard key={job.id} job={job} />}
            </JobListings>
          <SavedJobs />
          <ApplicationForm />
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <Signup />
        </div>
      )}
    </div>
  );
};

export default App;