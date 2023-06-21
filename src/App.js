import React, { useState } from 'react';
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
          <Login onLogin={handleLogin} />
          <Signup />
        </div>
      )}

export default App;


