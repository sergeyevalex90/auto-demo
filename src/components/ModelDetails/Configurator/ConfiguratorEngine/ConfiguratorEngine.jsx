import React from 'react';
import ConfiguratorEngineItem from './ConfiguratorEngineItem/ConfiguratorEngineItem';

//Material UI
import RadioGroup from '@mui/material/RadioGroup';

//Styles
import './ConfiguratorEngine.css';

const ConfiguratorEngine = (props) => {
  return (
    <div className="configurator-group">
      <div className="configurator-label">Engine</div>
      <RadioGroup
        className="radio-options"
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.engine[0].volume}
        name="radio-buttons-group"
      >
        {props.engine.map((engineItem) => (
          <ConfiguratorEngineItem
            key={engineItem.volume}
            engine={engineItem}
            onChangeEngine={props.onChangeEngine}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default ConfiguratorEngine;
