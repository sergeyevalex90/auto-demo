import React, { useState } from 'react';
import ConfiguratorColors from './ConfiguratorColors/ConfiguratorColors';
import ConfiguratorSalon from './ConfiguratorSalon/ConfiguratorSalon';
import ConfiguratorFuel from './ConfiguratorFuel/ConfiguratorFuel';
import ConfiguratorEngine from './ConfiguratorEngine/ConfiguratorEngine';

//Styles
import './Configurator.css';

const Configurator = (props) => {
  return (
    <div className="configurator">
      <ConfiguratorColors
        colors={props.model.colors}
        onChangeColor={props.onChangeColor}
      />
      <ConfiguratorSalon
        salons={props.model.salons}
        onChangeSalon={props.onChangeSalon}
      />
      <ConfiguratorFuel
        fuel={props.model.fuel}
        onChangeFuel={props.onChangeFuel}
      />
      <ConfiguratorEngine
        engine={props.model.engine}
        onChangeEngine={props.onChangeEngine}
      />
    </div>
  );
};

export default Configurator;
