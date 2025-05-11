import React from 'react';

const cellStyle = {
  border: '1px solid #bfa16b',
  width: 38,
  height: 38,
  background: '#f7ecd0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 28,
};

const emojiMap = {
  Carrot: '🥕',
  Tomato: '🍅',
  Corn: '🌽',
  Broccoli: '🥦',
  Pumpkin: '🎃',
  Peas: '🫛',
};

const GardenExportArea = ({ bed, gridSize, notes }) => (
  <div style={{background: '#fffbe6', border: '4px solid #e2c290', borderRadius: 12, padding: 8, width: 'fit-content', minWidth: 180}}>
    <h3 style={{color: '#7c5a36', textAlign: 'center', margin: 0, fontWeight: 700}}>My Garden</h3>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize.cols}, 38px)`,
        gridTemplateRows: `repeat(${gridSize.rows}, 38px)`,
        gap: 2,
        justifyContent: 'center',
        margin: '0 auto 1.2rem auto',
        background: '#e2c290',
        borderRadius: 12,
        boxShadow: '0 2px 8px #bfa16b44',
        padding: 8,
        maxWidth: '100%',
      }}
    >
      {bed.map((cell, idx) => (
        <div key={idx} style={cellStyle}>
          {cell ? emojiMap[cell] || '🌱' : null}
        </div>
      ))}
    </div>
    <div style={{
      width: '100%',
      minHeight: 48,
      margin: '0.5rem 0 0 0',
      borderRadius: 8,
      border: '1px solid #bfa16b',
      padding: 8,
      fontFamily: 'inherit',
      fontSize: 16,
      background: '#f7ecd0',
      color: '#7c5a36',
      whiteSpace: 'pre-wrap',
    }}>{notes}</div>
  </div>
);

export default GardenExportArea; 