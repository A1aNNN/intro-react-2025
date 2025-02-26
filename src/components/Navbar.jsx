import React from 'react';
import WebsiteLogo from '../images/website-logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img 
          src={WebsiteLogo}
          alt="Nugget Logo"
          className="navbar-logo-img"
        />
        <span className="navbar-logo-text">nugget.</span>
      </div>
    </div>
  );
};

export default Navbar;
