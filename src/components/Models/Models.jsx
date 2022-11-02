import Cars from '../../config/Cars';
import Model from './Model';

import './Models.css';

const Models = () => {
  return (
    <div className="models">
      <h1>BMW Lineup</h1>
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
