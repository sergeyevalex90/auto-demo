import React from 'react';
import ConfiguratorTooltip from '../../ConfiguratorTooltip/ConfiguratorTooltip';

//Styles
import './ConfiguratorColorItem.css';

const ConfiguratorColor = (props) => {
  //Change color on click
  const changeActiveColor = () => {
    props.onChangeColor(props.color);
  };

  return (
    <ConfiguratorTooltip
      title={props.color.price !== 0 ? '+' + props.color.price + ' $' : ''}
    >
      <div
        className={`color-link ${
          props.active === props.color.colorName ? 'active' : ''
        }`}
        data-color={props.color.colorName}
        onClick={changeActiveColor}
      >
        <div className={`color-nav color-${props.color.colorName}`}>
          <div className="color-cirle"></div>
        </div>
      </div>
    </ConfiguratorTooltip>
  );
};

export default ConfiguratorColor;
