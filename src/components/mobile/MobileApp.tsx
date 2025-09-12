import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileHero from './MobileHero';
import MobileSwapInterface from './MobileSwapInterface';
import MobileAbout from './MobileAbout';

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 overflow-x-hidden">
      {/* Hero Section */}
      <MobileHero />
      
      {/* Swap Section */}
      <div className="bg-gradient-to-br from-indigo-800 to-purple-900">
        <MobileSwapInterface />
      </div>
      
      {/* About Section */}
      <div className="bg-gradient-to-br from-purple-900 to-indigo-900">
        <MobileAbout />
      </div>
      
      {/* Bottom safe area */}
      <div className="h-8 bg-indigo-900"></div>
    </div>
  );
};

export default MobileApp;