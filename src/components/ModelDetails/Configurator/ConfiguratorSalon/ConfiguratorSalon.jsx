import React from 'react';
import './ConfiguratorSalon.css';
import LeatherImg from '../../../../assets/img/salon/leather.webp';
import ClothImg from '../../../../assets/img/salon/cloth.webp';

const ConfiguratorSalon = () => {
  return (
    <div className="configuration-group">
      <div className="configurator-label">Salon</div>
      <div className="configurator-select">
        <div className="salon-link active">
          <div className="salon-nav">
            <img src={LeatherImg} alt="leather" />
          </div>
        </div>
        <div className="salon-link">
          <div className="salon-nav">
            <img src={ClothImg} alt="cloth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorSalon;
