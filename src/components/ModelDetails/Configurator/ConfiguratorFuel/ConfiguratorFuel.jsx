import React, { useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

//Material UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Styles
import './ConfiguratorFuel.css';

const ConfiguratorFuel = (props) => {
  const [fuelValue, setFuelValue] = useState('');

  const { t } = useTranslation();

  const fuelChangeHandler = (event) => {
    setFuelValue(event.target.value);
    props.onChangeFuel(event.target.value);
  };

  const getPriceOfFuel = (item) => {
    if (item.price !== 0) {
      return ' +' + item.price + ' $';
    } else {
      return '';
    }
  };

  return (
    <div className="configuration-group">
      <div className="configurator-select">
        <FormControl
          className="select-input"
          sx={{ m: 1, minWidth: 200 }}
          size="small"
        >
          <InputLabel id="demo-select-small">
            {t('configurator.fuel')}
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={fuelValue}
            label="Fuel"
            onChange={fuelChangeHandler}
          >
            {props.fuel.map((fuelItem) => (
              <MenuItem key={Math.random().toString()} value={fuelItem.type}>
                {fuelItem.type + getPriceOfFuel(fuelItem)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ConfiguratorFuel;
