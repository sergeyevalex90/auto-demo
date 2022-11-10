import { useTranslation } from 'react-i18next';

//Styles
import './About.css';

//Assets
import aboutImg from '../../../assets/img/bmw-about.jpg';

const About = (props) => {
  const { t } = useTranslation();
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <h2 className="about-title title">{t('about.aboutTitle')}</h2>
        <div className="about-inner">
          <div className="about-desc">
            <h3>{t('about.aboutSubtitle1')}</h3>
            <p>{t('about.aboutText1')}</p>
            <h3>{t('about.aboutSubtitle1')}</h3>
            <p>{t('about.aboutText2')}</p>
          </div>
          <div className="aboutImage">
            <img src={aboutImg} alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
