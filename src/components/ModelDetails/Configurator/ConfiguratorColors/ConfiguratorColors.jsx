import React, { useState } from 'react';
import './ConfiguratorColors.css';
import ConfiguratorColorItem from './ConfiguratorColorItem/ConfiguratorColorItem';

const ConfiguratorColors = (props) => {
  const defaultColor = props.colors.find((color) => {
    return color.default === true;
  });

  const [activeColor, setActiveColor] = useState(defaultColor.colorName);

  // Set active color on click
  const changeColorHandler = (color) => {
    setActiveColor(color.colorName);
    props.onChangeColor(color);
  };

  return (
    <div className="configurator-group">
      <div className="configurator-label">Colors</div>
      <div className="configurator-select">
        {props.colors.map((color) => (
          <ConfiguratorColorItem
            active={activeColor}
            key={color.colorName}
            color={color}
            onChangeColor={changeColorHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfiguratorColors;
