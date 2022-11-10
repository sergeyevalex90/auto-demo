import { useTranslation } from 'react-i18next';
import Model from '../../Models/Model/Model';

//Material UI
import Button from '@mui/material/Button';

//Styles
import './PopularModels.css';

const PopularModels = (props) => {
  const { t } = useTranslation();

  const popularModels = props.models.filter((model) => {
    return model.popular === true;
  });

  return (
    <div className="wrapper">
      <div className="models">
        <h2 className="models-title title">
          {t('popularModels.popularTitle')}
        </h2>
        <div className="models-inner">
          {popularModels.map((model) => (
            <Model key={model.id} model={model} />
          ))}
        </div>
        <Button variant="contained" href="/models">
          {t('models.viewAll')}
        </Button>
      </div>
    </div>
  );
};

export default PopularModels;
