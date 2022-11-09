import React from 'react';
import ConfiguratorTooltip from '../../ConfiguratorTooltip/ConfiguratorTooltip';

//Styles
import './ConfiguratorSalonItem.css';

const ConfiguratorSalonItem = (props) => {
  //Change salon type on click
  const changeActiveSalon = () => {
    props.onChangeSalon(props.salon);
  };

  return (
    <ConfiguratorTooltip
      title={props.salon.price !== 0 ? '+ ' + props.salon.price + ' $' : ''}
    >
      <div
        className={`salon-link ${
          props.active === props.salon.type ? 'active' : ''
        }`}
      >
        <div className="salon-nav" onClick={changeActiveSalon}>
          <img src={props.salon.img} alt="leather" />
        </div>
      </div>
    </ConfiguratorTooltip>
  );
};

export default ConfiguratorSalonItem;
