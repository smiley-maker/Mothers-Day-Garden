import React from 'react';
import rose from '../assets/rose.svg';
import sunflower from '../assets/sunflower.svg';
import tulip from '../assets/tulip.svg';
import greenFlower from '../assets/green-flower.svg';
import heartPlant from '../assets/heart-plant.svg';

const flowers = [
  { src: rose, alt: 'Rose', left: '7.5%', bottom: '10.5%', width: '18rem', height: '18rem', zIndex: 4 },
  { src: sunflower, alt: 'Sunflower', left: '13.5%', bottom: '0%', width: '18rem', height: '18rem', zIndex: 4 },
  { src: tulip, alt: 'Tulip', left: '18.5%', bottom: '11.5%', width: '18rem', height: '18rem', zIndex: 4 },
  { src: greenFlower, alt: 'Green Flower', left: '22.5%', bottom: '11.5%', width: '18rem', height: '18rem', zIndex: 4 },
  { src: heartPlant, alt: 'Heart Plant', left: '27%', bottom: '11.5%', width: '18rem', height: '18rem', zIndex: 4 },
];

const FlowerRow = () => (
  <>
    {flowers.map((flower) => (
      <img
        key={flower.alt}
        src={flower.src}
        alt={flower.alt}
        style={{
          position: 'absolute',
          left: flower.left,
          bottom: flower.bottom,
          width: flower.width,
          minWidth: 24,
          maxWidth: 50,
          zIndex: flower.zIndex,
        }}
      />
    ))}
  </>
);

export default FlowerRow; 