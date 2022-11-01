import React from 'react';
import Link from '@mui/material/Link';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <div className="header-logo">AUTO DEMO</div>
        <div className="header-menu">
          <Link href="#" underline="none" color="inherit">
            Models
          </Link>
          <Link href="#" underline="none" color="inherit">
            About
          </Link>
          <Link href="#" underline="none" color="inherit">
            Contacts
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
