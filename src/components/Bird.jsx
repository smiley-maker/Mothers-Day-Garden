import React from 'react';
import bird from '../assets/bird.svg';

const Bird = () => (
  <img
    src={bird}
    alt="Bird"
    style={{
      position: 'absolute',
      left: '65%',
      bottom: '34%',
      width: '3.5rem',
      zIndex: 6,
      pointerEvents: 'none',
    }}
  />
);

export default Bird; 