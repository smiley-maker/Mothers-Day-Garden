import React from 'react';
import bench from '../assets/bench.svg';

const Bench = () => (
  <img
    src={bench}
    alt="Bench"
    style={{
      position: 'absolute',
      left: '60%',
      bottom: '20%',
      width: '8rem',
      height: '8rem',
      zIndex: 4,
    }}
  />
);

export default Bench; 