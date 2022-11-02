import React from 'react';
import './ConfiguratorEngine.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const ConfiguratorEngine = () => {
  return (
    <div className="configurator-group">
      <div className="configurator-label">Engine</div>
      <RadioGroup
        className="radio-options"
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          className="radio-label"
          value="2"
          control={<Radio />}
          label="2.0"
        />
        <FormControlLabel
          className="radio-label"
          value="2.5"
          control={<Radio />}
          label="2.5"
        />
        <FormControlLabel
          className="radio-label"
          value="3"
          control={<Radio />}
          label="3.0"
        />
      </RadioGroup>
    </div>
  );
};

export default ConfiguratorEngine;
