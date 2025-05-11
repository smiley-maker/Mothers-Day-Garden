import React from 'react';
import wateringCan from '../assets/watering-can.svg';

const WateringCan = ({ onClick }) => (
  <img
    src={wateringCan}
    alt="Watering Can"
    style={{
      position: 'absolute',
      left: '70%',
      bottom: '13%',
      width: '5rem',
      height: '5rem',
      zIndex: 4,
      cursor: 'pointer',
    }}
    onClick={onClick}
  />
);

export default WateringCan; 