import React, { useState } from 'react';
import wateringCan from '../assets/watering-can.svg';
import useSound from 'use-sound';
import waterSfx from '../assets/water.mp3';

const WateringCan = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [play] = useSound(waterSfx, { volume: 0.3 });

  return (
    <div
      style={{
        position: 'absolute',
        left: '70%',
        bottom: '13%',
        width: '5rem',
        height: '5rem',
        zIndex: 4,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => {
        setHovered(true);
        play();
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={wateringCan}
        alt="Watering Can"
        style={{ width: '100%', height: '100%' }}
      />
      {hovered && (
        <div
          style={{
            position: 'absolute',
            bottom: '110%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#fffbe6',
            color: '#7c5a36',
            border: '1.5px solid #bfa16b',
            borderRadius: 8,
            padding: '0.4rem 1rem',
            fontSize: 16,
            fontWeight: 600,
            boxShadow: '0 2px 8px #bfa16b44',
            whiteSpace: 'nowrap',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          Garden Planner
        </div>
      )}
    </div>
  );
};

export default WateringCan; 