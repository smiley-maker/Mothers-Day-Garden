import React from 'react';
import bird from '../assets/bird.svg';
import useSound from 'use-sound';
import birdChirp from '../assets/bird-chirp.mp3';

const Bird = () => {
  const [play] = useSound(birdChirp, { volume: 0.5 });

  return (
    <img
      src={bird}
      alt="Bird"
      style={{
        position: 'absolute',
        left: '65%',
        bottom: '34%',
        width: '3.5rem',
        zIndex: 6,
        pointerEvents: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={() => play()}
    />
  );
};

export default Bird; 