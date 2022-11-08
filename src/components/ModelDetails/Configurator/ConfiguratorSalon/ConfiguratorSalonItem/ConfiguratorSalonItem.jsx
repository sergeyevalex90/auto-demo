import React from 'react';

//Styles
import './ConfiguratorSalonItem.css';

const ConfiguratorSalonItem = (props) => {
  //Change salon type on click
  const changeActiveSalon = () => {
    props.onChangeSalon(props.salon);
  };

  return (
    <div
      className={`salon-link ${
        props.active === props.salon.type ? 'active' : ''
      }`}
    >
      <div className="salon-nav" onClick={changeActiveSalon}>
        <img src={props.salon.img} alt="leather" />
      </div>
    </div>
  );
};

export default ConfiguratorSalonItem;
