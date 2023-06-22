import React, { useState } from 'react';
import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import JobListings from './Components/JobListings';
import JobCard from './Components/JobCard';
import SavedJobs from './Components/SavedJobs';
import ApplicationForm from './Components/ApplicationForm';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'tailwindcss';

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