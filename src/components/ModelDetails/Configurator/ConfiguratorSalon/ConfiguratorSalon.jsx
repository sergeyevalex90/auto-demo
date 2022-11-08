import React, { useState } from 'react';
import ConfiguratorSalonItem from './ConfiguratorSalonItem/ConfiguratorSalonItem';

//Styles
import './ConfiguratorSalon.css';

const ConfiguratorSalon = (props) => {
  const [activeSalon, setActiveSalon] = useState(props.salons[0].type);

  // Set active salon type on click
  const changeSalonHandler = (salon) => {
    setActiveSalon(salon.type);
    props.onChangeSalon(salon);
  };

  return (
    <div className="configuration-group">
      <div className="configurator-label">Salon</div>
      <div className="configurator-select">
        {props.salons.map((salon) => (
          <ConfiguratorSalonItem
            key={salon.type}
            active={activeSalon}
            salon={salon}
            onChangeSalon={changeSalonHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfiguratorSalon;
