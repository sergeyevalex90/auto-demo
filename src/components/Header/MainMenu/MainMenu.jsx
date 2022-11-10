import React from 'react';
import { useTranslation } from 'react-i18next';

//Material UI
import Link from '@mui/material/Link';

//Style
import './MainMenu.css';

const MainMenu = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Link href="/models" underline="none" color="inherit">
        {t('headerMenu.models')}
      </Link>
      <Link href="#" underline="none" color="inherit">
        {t('headerMenu.about')}
      </Link>
      <Link href="#" underline="none" color="inherit">
        {t('headerMenu.contacts')}
      </Link>
    </React.Fragment>
  );
};

export default MainMenu;
