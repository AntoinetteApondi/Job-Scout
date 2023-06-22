import React from 'react';

const Header = ({ isLoggedIn, onLogOut }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      {/* Logo */}
      <img src="/Asset/jscout.png" alt="Job Scout Logo" w="50" h="50"/> <h4 className="text-2xl font-bold">JobScout</h4> 

      {/* Navigation */}
      <nav>
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Saved Jobs</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
