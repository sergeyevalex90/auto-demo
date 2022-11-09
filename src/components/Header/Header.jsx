import React from 'react';
import MobileMenu from './MobileMenu/MobileMenu';

//Styles
import './Header.css';

//Assets
import logoImg from '../../assets/img/bmw-logo.svg';

//Material UI
import Link from '@mui/material/Link';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <Link href="/" className="header-logo">
          <img src={logoImg} alt="Auto demo" />
        </Link>
        <div className="header-menu">
          <Link href="/models" underline="none" color="inherit">
            Models
          </Link>
          <Link href="#" underline="none" color="inherit">
            About
          </Link>
          <Link href="#" underline="none" color="inherit">
            Contacts
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
