import React from 'react';
import ConfiguratorTooltip from '../../ConfiguratorTooltip/ConfiguratorTooltip';

// Material UI
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const ConfiguratorEngineItem = (props) => {
  const changeEngineHandler = () => {
    props.onChangeEngine(props.engine);
  };

  return (
    <ConfiguratorTooltip
      title={props.engine.price !== 0 ? '+' + props.engine.price + ' $' : ''}
    >
      <FormControlLabel
        className="radio-label"
        value={props.engine.volume}
        control={<Radio />}
        label={props.engine.volume}
        onClick={changeEngineHandler}
      />
    </ConfiguratorTooltip>
  );
};

export default ConfiguratorEngineItem;
