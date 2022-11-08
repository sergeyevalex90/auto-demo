import React from 'react';

// Material UI
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const ConfiguratorEngineItem = (props) => {
  const changeEngineHandler = () => {
    props.onChangeEngine(props.engine);
  };

  return (
    <FormControlLabel
      className="radio-label"
      value={props.engine.volume}
      control={<Radio />}
      label={props.engine.volume}
      onClick={changeEngineHandler}
    />
  );
};

export default ConfiguratorEngineItem;
