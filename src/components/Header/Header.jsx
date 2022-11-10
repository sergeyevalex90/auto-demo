import React from 'react';
import MainMenu from './MainMenu/MainMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

//Material UI
import Link from '@mui/material/Link';

//Styles
import './Header.css';

//Assets
import logoImg from '../../assets/img/bmw-logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <Link href="/" className="header-logo">
          <img src={logoImg} alt="Auto demo" />
        </Link>
        <div className="header-menu">
          <MainMenu />
        </div>
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
