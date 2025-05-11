import React from 'react';
import birdhouse from '../assets/birdhouse.svg';

const Birdhouse = () => (
  // width: 15.25rem;
  // height: 15.25rem;
  <img
    src={birdhouse}
    alt="Birdhouse"
    style={{
      position: 'absolute',
      left: '.5%',
      bottom: '0%',
      width: '12.25rem',
      height: '12.25rem',
      zIndex: 6,
      cursor: 'pointer',
    }}
  />
);

export default Birdhouse; 