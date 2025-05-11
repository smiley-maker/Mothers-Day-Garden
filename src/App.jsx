import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import background from './assets/garden-bg.png';
import Sun from './components/Sun';
import Birdhouse from './components/Birdhouse';
import Bench from './components/Bench';
import WateringCan from './components/WateringCan';
import Toolshed from './components/Toolshed';
import GardenFlowers from './components/GardenFlowers';
import StonePath from './components/StonePath';
import Bird from './components/Bird';
import GardenPlannerModal from './components/GardenPlannerModal';
import GardenExportArea from './components/GardenExportArea';
import { toPng } from 'html-to-image';
import useSound from 'use-sound';
import pianoMusic from './assets/peaceful-piano.mp3';
import birdsMusic from './assets/evening-birds.mp3';

// Add Google Fonts link for Inknut Antiqua
if (typeof document !== 'undefined' && !document.getElementById('inknut-antiqua-font')) {
  const link = document.createElement('link');
  link.id = 'inknut-antiqua-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@700&display=swap';
  document.head.appendChild(link);
}

function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [exportData, setExportData] = useState(null); // { bed, gridSize, notes }
  const exportRef = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(true);

  // Background music and birdsong
  const [playPiano, { stop: stopPiano, sound: pianoSound }] = useSound(pianoMusic, { volume: 0.25, loop: true, soundEnabled: musicPlaying });
  const [playBirds, { stop: stopBirds, sound: birdsSound }] = useSound(birdsMusic, { volume: 0.18, loop: true, soundEnabled: musicPlaying });

  useEffect(() => {
    if (musicPlaying) {
      playPiano();
      playBirds();
    } else {
      stopPiano();
      stopBirds();
    }
    // Cleanup on unmount
    return () => {
      stopPiano();
      stopBirds();
    };
    // eslint-disable-next-line
  }, [musicPlaying]);

  // Download handler for modal
  const handleModalDownload = (bed, gridSize, notes) => {
    setExportData({ bed, gridSize, notes });
    setTimeout(async () => {
      if (!exportRef.current) return;
      try {
        const dataUrl = await toPng(exportRef.current, { cacheBust: true });
        const link = document.createElement('a');
        link.download = 'my-garden.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        alert('Sorry, there was a problem exporting your garden.');
      }
      setExportData(null); // Clean up
    }, 200);
  };

  return (
    <>
      {/* Hidden export area for download */}
      <div style={{ position: 'absolute', left: -9999, top: 0, pointerEvents: 'none' }}>
        {exportData && (
          <div ref={exportRef}>
            <GardenExportArea {...exportData} />
          </div>
        )}
      </div>
      {/* Music control button (optional) */}
      <button
        onClick={() => setMusicPlaying((p) => !p)}
        style={{
          position: 'fixed',
          top: 18,
          right: 18,
          zIndex: 10001,
          background: musicPlaying ? '#e2c290' : '#f7ecd0',
          color: '#7c5a36',
          border: '2px solid #bfa16b',
          borderRadius: 12,
          padding: '0.5rem 1.2rem',
          fontWeight: 600,
          fontSize: 16,
          boxShadow: '0 2px 8px #bfa16b44',
          cursor: 'pointer',
        }}
      >
        {musicPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          background: `url(${background}) bottom/cover no-repeat`,
        }}
      >
        {/* Centered Happy Mother's Day heading */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            width: '100%',
            textAlign: 'center',
            zIndex: 20,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inknut Antiqua, serif',
              fontWeight: 700,
              fontSize: '6rem',
              lineHeight: '6.5rem',
              color: '#222',
              margin: 0,
              textShadow: '0 2px 8px #fffbe6cc',
            }}
          >
            Happy<br />Mother's Day!
          </h1>
        </div>
        <Sun />
        <Birdhouse />
        <StonePath />
        <Bench />
        <Bird />
        <WateringCan onClick={() => setPlannerOpen(true)} />
        <Toolshed />
        <GardenFlowers />
        <GardenPlannerModal open={plannerOpen} onClose={() => setPlannerOpen(false)} onDownload={handleModalDownload} />
      </div>
    </>
  );
}

export default App;
