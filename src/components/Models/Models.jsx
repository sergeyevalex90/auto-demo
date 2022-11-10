import { useTranslation } from 'react-i18next';
import Cars from '../../config/Cars';
import Model from './Model/Model';

//Styles
import './Models.css';

const Models = () => {
  const { t } = useTranslation();
  return (
    <div className="models">
      <h1>{t('models.availableCars')}</h1>
      <div className="wrapper">
        <div className="models-inner">
          {Cars.map((model) => (
            <Model key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
