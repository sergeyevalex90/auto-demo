import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfiguratorColorItem from './ConfiguratorColorItem/ConfiguratorColorItem';

//Styles
import './ConfiguratorColors.css';

const ConfiguratorColors = (props) => {
  const { t } = useTranslation();

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
      <div className="configurator-label">{t('configurator.colors')}</div>
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
