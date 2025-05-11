import React from 'react';
import rose from '../assets/rose.svg';
import sunflower from '../assets/sunflower.svg';
import tulip from '../assets/tulip.svg';
import greenFlower from '../assets/green-flower.svg';
import heartPlant from '../assets/heart-plant.svg';
import pinkPlant from '../assets/pink-plant.svg';
import purplePlant from '../assets/purple-plant.svg';
import leafPlant from '../assets/leaf-plant.svg';

const flowers = [
  { src: rose, alt: 'Rose', left: '2%', bottom: '0%', width: '20rem', zIndex: 2 },
  { src: sunflower, alt: 'Sunflower', left: '13%', bottom: '0%', width: '17rem', zIndex: 4 },
  { src: tulip, alt: 'Tulip', left: '75%', bottom: '0%', width: '8rem', zIndex: 4 },
  { src: greenFlower, alt: 'Green Flower', left: '27%', bottom: '0%', width: '15rem', zIndex: 4 },
  { src: heartPlant, alt: 'Heart Plant', left: '57%', bottom: '18%', width: '5rem', zIndex: 4 },
  { src: pinkPlant, alt: 'Pink Plant', left: '80%', bottom: '0%', width: '12rem', zIndex: 4 },
  { src: purplePlant, alt: 'Purple Plant', left: '88%', bottom: '0%', width: '13rem', zIndex: 4 },
  { src: leafPlant, alt: 'Leaf Plant', left: '70%', bottom: '0%', width: '8rem', zIndex: 4 },
  { src: leafPlant, alt: 'Leaf Plant', left: '63%', bottom: '0%', width: '9rem', zIndex: 4 },
];

const GardenFlowers = () => (
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
        }}
      />
    ))}
  </>
);

export default GardenFlowers; 