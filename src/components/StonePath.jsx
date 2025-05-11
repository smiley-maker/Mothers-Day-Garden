import React from 'react';
import stonePath from '../assets/stone path.svg';

const StonePath = () => (
  <img
    src={stonePath}
    alt="Stone Path"
    style={{
      position: 'absolute',
      left: '57.5%',
      bottom: '0%',
      width: '16rem',
      zIndex: 3,
      pointerEvents: 'none',
    }}
  />
);

export default StonePath; 