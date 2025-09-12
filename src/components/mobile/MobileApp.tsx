import React from 'react';
import MobileHero from './MobileHero';
import MobileSwapInterface from './MobileSwapInterface';
import MobileAbout from './MobileAbout';

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-green-800 overflow-x-hidden" style={{
      backgroundImage: `
        linear-gradient(45deg, #166534 25%, transparent 25%),
        linear-gradient(-45deg, #166534 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #166534 75%),
        linear-gradient(-45deg, transparent 75%, #166534 75%)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
    }}>
      {/* Same gradient overlays as desktop */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-yellow-600/30 to-green-700/80"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(0, 100, 0, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(34, 139, 34, 0.7) 0%, transparent 40%)
        `
      }}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <MobileHero />
        
        {/* Swap Section */}
        <MobileSwapInterface />
        
        {/* About Section */}
        <MobileAbout />
        
        {/* Bottom safe area */}
        <div className="h-8"></div>
      </div>
    </div>
  );
};

export default MobileApp;