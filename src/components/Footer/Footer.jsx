import { useTranslation } from 'react-i18next';
import MainMenu from '../Header/MainMenu/MainMenu';

//Style
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-menu">
          <MainMenu />
        </div>
        <div className="copyright">{t('footer.copyright')}</div>
      </div>
    </footer>
  );
};

export default Footer;
