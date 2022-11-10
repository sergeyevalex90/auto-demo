import { useTranslation } from 'react-i18next';

//Style
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-switcher">
      <div
        className={`lang-item ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </div>
      <div
        className={`lang-item ${i18n.language === 'ua' ? 'active' : ''}`}
        onClick={() => changeLanguage('ua')}
      >
        UA
      </div>
    </div>
  );
};

export default LanguageSwitcher;
