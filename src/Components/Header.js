import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <img src="./" alt="Job Scout Logo" />

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
