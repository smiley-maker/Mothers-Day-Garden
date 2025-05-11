import React, { useState } from 'react';
import { GiCarrot, GiTomato, GiCorn, GiBroccoli, GiPumpkin, GiPeas } from 'react-icons/gi';

const woodBg = `linear-gradient(135deg, #a67c52 0%, #e2c290 100%)`;

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.25)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const boardStyle = {
  background: woodBg,
  borderRadius: '2rem',
  boxShadow: '0 8px 32px rgba(60,40,10,0.25)',
  padding: '2.5rem 2rem 2rem 2rem',
  minWidth: 400,
  minHeight: 400,
  maxWidth: 700,
  width: '90vw',
  maxHeight: '90vh',
  position: 'relative',
  border: '8px solid #7c5a36',
  display: 'flex',
  flexDirection: 'column',
};

const closeBtnStyle = {
  position: 'absolute',
  top: 18,
  right: 24,
  fontSize: '2rem',
  color: '#7c5a36',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  zIndex: 2,
};

const iconPalette = [
  { icon: GiCarrot, name: 'Carrot' },
  { icon: GiTomato, name: 'Tomato' },
  { icon: GiCorn, name: 'Corn' },
  { icon: GiBroccoli, name: 'Broccoli' },
  { icon: GiPumpkin, name: 'Pumpkin' },
  { icon: GiPeas, name: 'Peas' },
];

const gridSizes = [
  { label: '4 x 4', rows: 4, cols: 4 },
  { label: '4 x 8', rows: 4, cols: 8 },
  { label: '8 x 8', rows: 8, cols: 8 },
];

const cellStyle = {
  border: '1px solid #bfa16b',
  width: 38,
  height: 38,
  background: '#f7ecd0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: 28,
  transition: 'background 0.2s',
};

const GardenPlannerModal = ({ open, onClose, onDownload }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [gridSize, setGridSize] = useState(gridSizes[0]);
  const [bed, setBed] = useState(Array(gridSizes[0].rows * gridSizes[0].cols).fill(null));
  const [notes, setNotes] = useState('');

  // Update bed when grid size changes
  React.useEffect(() => {
    setBed(Array(gridSize.rows * gridSize.cols).fill(null));
  }, [gridSize]);

  const handleCellClick = idx => {
    setBed(bed => {
      const newBed = [...bed];
      if (selectedIcon) {
        newBed[idx] = selectedIcon;
      } else {
        newBed[idx] = null;
      }
      return newBed;
    });
  };

  const handleDownload = () => {
    if (onDownload) onDownload(bed, gridSize, notes);
  };

  if (!open) return null;
  return (
    <div style={modalStyle}>
      <div style={boardStyle}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close">×</button>
        <h2 style={{textAlign: 'center', margin: 0}}>Garden Planner</h2>
        {/* Grid size selector */}
        <div style={{margin: '1rem 0', textAlign: 'center'}}>
          <label style={{color: '#7c5a36', fontWeight: 600, marginRight: 8}}>Grid size:</label>
          <select
            value={gridSize.label}
            onChange={e => {
              const found = gridSizes.find(g => g.label === e.target.value);
              setGridSize(found);
            }}
            style={{padding: '0.3rem 1rem', borderRadius: 8, border: '1px solid #bfa16b'}}
          >
            {gridSizes.map(g => (
              <option key={g.label} value={g.label}>{g.label}</option>
            ))}
          </select>
        </div>
        {/* Icon palette */}
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 16}}>
          {iconPalette.map(({icon: Icon, name}) => (
            <div
              key={name}
              style={{
                border: selectedIcon === name ? '2px solid #7c5a36' : '2px solid transparent',
                borderRadius: 8,
                padding: 4,
                background: selectedIcon === name ? '#f7ecd0' : 'none',
                cursor: 'pointer',
              }}
              title={name}
              onClick={() => setSelectedIcon(name)}
            >
              <Icon size={32} color="#7c5a36" />
            </div>
          ))}
        </div>
        {/* Interactive garden bed grid */}
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
          {bed.map((cell, idx) => {
            const Icon = iconPalette.find(i => i.name === cell)?.icon;
            return (
              <div
                key={idx}
                style={cellStyle}
                onClick={() => handleCellClick(idx)}
                title={cell ? `Remove ${cell}` : selectedIcon ? `Place ${selectedIcon}` : 'Empty'}
              >
                {Icon ? <Icon size={28} color="#7c5a36" /> : null}
              </div>
            );
          })}
        </div>
        {/* Notes area */}
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Planting ideas..."
          style={{
            width: '100%',
            minHeight: 48,
            margin: '0.5rem 0 1rem 0',
            borderRadius: 8,
            border: '1px solid #bfa16b',
            padding: 8,
            fontFamily: 'inherit',
            fontSize: 16,
            background: '#f7ecd0',
            color: '#7c5a36',
            resize: 'vertical',
          }}
        />
        {/* Download button */}
        <button
          style={{
            background: '#7c5a36',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 1.5rem',
            fontSize: 18,
            fontWeight: 600,
            cursor: 'pointer',
            alignSelf: 'center',
            marginTop: 4,
            boxShadow: '0 2px 8px #bfa16b44',
          }}
          onClick={handleDownload}
        >
          Download Garden
        </button>
      </div>
    </div>
  );
};

export default GardenPlannerModal; 