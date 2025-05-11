import React from 'react';
import toolshed from '../assets/toolshed.svg';

const Toolshed = () => (
  <img
    src={toolshed}
    alt="Toolshed"
    style={{
      position: 'absolute',
      right: '0%',
      bottom: '15%',
      width: '18rem',
      height: '18rem',
      zIndex: 4,
    }}
  />
);

export default Toolshed; 