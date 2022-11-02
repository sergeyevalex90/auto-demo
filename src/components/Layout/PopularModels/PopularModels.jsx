import Model from '../../Models/Model';
import Button from '@mui/material/Button';

import './PopularModels.css';

const PopularModels = (props) => {
  const popularModels = props.models.filter((model) => {
    return model.popular === true;
  });

  return (
    <div className="wrapper">
      <div className="models">
        <h2 className="models-title title">Most popular models</h2>
        <div className="models-inner">
          {popularModels.map((model) => (
            <Model key={model.id} model={model} />
          ))}
        </div>
        <Button variant="contained" href="/models">
          View all
        </Button>
      </div>
    </div>
  );
};

export default PopularModels;
