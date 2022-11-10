import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

//Styles
import './MobileMenu.css';

const MobileMenu = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { t } = useTranslation();

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
          <a href="/models">{t('headerMenu.models')}</a>
        </li>
        <li>
          <a href="/about">{t('headerMenu.about')}</a>
        </li>
        <li>
          <a href="/contacts">{t('headerMenu.contacts')}</a>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
