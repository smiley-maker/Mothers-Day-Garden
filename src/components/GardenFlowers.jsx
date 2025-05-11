import React, { useState } from 'react';
import useSound from 'use-sound';
import rose from '../assets/rose.svg';
import sunflower from '../assets/sunflower.svg';
import tulip from '../assets/tulip.svg';
import greenFlower from '../assets/green-flower.svg';
import heartPlant from '../assets/heart-plant.svg';
import pinkPlant from '../assets/pink-plant.svg';
import purplePlant from '../assets/purple-plant.svg';
import leafPlant from '../assets/leaf-plant.svg';
import shineSfx from '../assets/shine.mp3';

const flowers = [
  { src: rose, alt: 'Rose', left: '2%', bottom: '0%', width: '20rem', zIndex: 2 },
  { src: sunflower, alt: 'Sunflower', left: '13%', bottom: '0%', width: '17rem', zIndex: 4 },
  { src: tulip, alt: 'Tulip', left: '75%', bottom: '0%', width: '8rem', zIndex: 4 },
  { src: greenFlower, alt: 'Green Flower', left: '27%', bottom: '0%', width: '15rem', zIndex: 4 },
  { src: pinkPlant, alt: 'Pink Plant', left: '80%', bottom: '0%', width: '12rem', zIndex: 4 },
  { src: purplePlant, alt: 'Purple Plant', left: '88%', bottom: '0%', width: '13rem', zIndex: 4 },
  { src: leafPlant, alt: 'Leaf Plant', left: '70%', bottom: '0%', width: '8rem', zIndex: 4 },
  { src: leafPlant, alt: 'Leaf Plant', left: '63%', bottom: '0%', width: '9rem', zIndex: 4 },
];

const heartFlowerStyle = {
  position: 'absolute',
  left: '57%',
  bottom: '18%',
  width: '5rem',
  zIndex: 5,
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

const bubbleHearts = [
  { left: '40%', bottom: '70%', delay: 0 },
  { left: '60%', bottom: '80%', delay: 0.1 },
  { left: '50%', bottom: '100%', delay: 0.2 },
  { left: '30%', bottom: '90%', delay: 0.15 },
  { left: '70%', bottom: '95%', delay: 0.18 },
];

const GardenFlowers = () => {
  const [showHearts, setShowHearts] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [play] = useSound(shineSfx, { volume: 0.5 });

  // Helper to add a random animation delay for each plant
  const getGrowDelay = (idx) => `${Math.random() * 2}s`;

  return (
    <>
      {flowers.map((flower, idx) => (
        <img
          key={flower.alt}
          src={flower.src}
          alt={flower.alt}
          style={{
            position: 'absolute',
            left: flower.left,
            bottom: flower.bottom,
            width: flower.width,
            zIndex: flower.zIndex,
            pointerEvents: 'none',
            animation: `plantGrow 3.5s ${getGrowDelay(idx)} ease-in-out infinite alternate`,
          }}
        />
      ))}
      {/* Heart Flower with animation and sound */}
      <div
        style={heartFlowerStyle}
        onMouseEnter={() => {
          setShowHearts(true);
          play();
        }}
        onMouseLeave={() => setShowHearts(false)}
        onClick={() => setModalOpen(true)}
      >
        <img src={heartPlant} alt="Heart Plant" style={{ width: '100%', pointerEvents: 'auto' }} />
        {showHearts && bubbleHearts.map((h, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: h.left,
              bottom: h.bottom,
              fontSize: '2rem',
              opacity: 0.85,
              animation: `bubbleUp 0.8s ${h.delay}s ease-out forwards`,
              pointerEvents: 'none',
            }}
          >
            ❤️
          </span>
        ))}
        <style>{`
          @keyframes bubbleUp {
            0% { transform: scale(0.7) translateY(0); opacity: 0.7; }
            60% { opacity: 1; }
            100% { transform: scale(1.2) translateY(-40px); opacity: 0; }
          }
          @keyframes plantGrow {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
        `}</style>
      </div>
      {/* Simple modal for "You're the best mom ever" */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #fffbe6 0%, #ffe0e9 100%)',
            borderRadius: '2rem',
            boxShadow: '0 8px 32px rgba(60,40,10,0.18)',
            padding: '2.5rem 2rem',
            minWidth: 320,
            textAlign: 'center',
            border: '6px solid #e2c290',
            color: '#c94f7c',
            fontSize: '2rem',
            fontWeight: 700,
            position: 'relative',
          }}>
            <button onClick={() => setModalOpen(false)} style={{
              position: 'absolute',
              top: 18,
              right: 24,
              fontSize: '2rem',
              color: '#c94f7c',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}>×</button>
            <div style={{marginTop: 16}}>
              You're the best mom ever 💖
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GardenFlowers; 