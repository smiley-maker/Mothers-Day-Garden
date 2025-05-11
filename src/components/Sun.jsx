import React from 'react';
import sun from '../assets/sun.svg';

const Sun = () => (
  <img
    src={sun}
    alt="Sun"
    style={{
      position: 'absolute',
      right: '10%',
      top: '2%',
      width: '8rem',
      height: '8rem',
      zIndex: 6,
      cursor: 'pointer',
    }}
  />
);

export default Sun; 