import React, { useState } from 'react';
import sun from '../assets/sun.svg';

const Sun = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
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
          transition: 'transform 0.7s cubic-bezier(.4,2,.6,1)',
          transform: hovered ? 'rotate(360deg)' : 'rotate(0deg)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <style>{`
        /* fallback for browsers that support :hover on img */
        @media (hover: hover) {
          img[alt="Sun"]:hover {
            /* no-op, handled in React */
          }
        }
      `}</style>
    </>
  );
};

export default Sun; 