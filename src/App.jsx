import React, { useState, useRef } from 'react';
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

function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [exportData, setExportData] = useState(null); // { bed, gridSize, notes }
  const exportRef = useRef(null);

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
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          background: `url(${background}) bottom/cover no-repeat`,
        }}
      >
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
