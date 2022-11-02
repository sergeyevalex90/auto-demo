import React from 'react';
import ConfiguratorColors from './ConfiguratorColors/ConfiguratorColors';
import ConfiguratorSalon from './ConfiguratorSalon/ConfiguratorSalon';
import './Configurator.css';
import ConfiguratorEngine from './ConfiguratorEngine/ConfiguratorEngine';

const Configurator = () => {
  return (
    <div className="configurator">
      <ConfiguratorColors />
      <ConfiguratorSalon />
      <ConfiguratorEngine />
    </div>
  );
};

export default Configurator;
