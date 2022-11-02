import React from 'react';
import './ConfiguratorColors.css';

const ConfiguratorColors = () => {
  return (
    <div className="configurator-group">
      <div className="configurator-label">Color</div>
      <div className="configurator-select">
        <div className="color-link active">
          <div className="color-nav color-black">
            <div className="color-cirle"></div>
          </div>
        </div>
        <div className="color-link">
          <div className="color-nav color-white">
            <div className="color-cirle"></div>
          </div>
        </div>
        <div className="color-link">
          <div className="color-nav color-brown">
            <div className="color-cirle"></div>
          </div>
        </div>
        <div className="color-link">
          <div className="color-nav color-blue">
            <div className="color-cirle"></div>
          </div>
        </div>
        <div className="color-link">
          <div className="color-nav color-red">
            <div className="color-cirle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorColors;
