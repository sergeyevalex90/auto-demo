import React from 'react';

const ModelDetailsImg = (props) => {
  return (
    <div className="model-left-img">
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default ModelDetailsImg;
