import React, { useState } from 'react';

//Material UI
import Link from '@mui/material/Link';

//Styles
import './MobileMenu.css';

const MobileMenu = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <nav className="mobile-nav">
      <div
        className={`hamburger ${navbarOpen ? 'open' : ''}`}
        onClick={toggleHandler}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
        <span className="bar bar4"></span>
      </div>
      <ul className={`menu-nav ${navbarOpen ? ' show-nav' : ''}`}>
        <li>
          <a href="/models">Models</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
