import React, { useState } from 'react';
import { Home, ArrowLeftRight, Info, Wallet } from 'lucide-react';

interface MobileNavigationProps {
  activeSection: 'hero' | 'swap' | 'about';
  onSectionChange: (section: 'hero' | 'swap' | 'about') => void;
}

const MobileNavigation = ({ activeSection, onSectionChange }: MobileNavigationProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-green-800 border-b-4 border-black" style={{
      backgroundImage: `
        linear-gradient(45deg, #166534 25%, transparent 25%),
        linear-gradient(-45deg, #166534 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #166534 75%),
        linear-gradient(-45deg, transparent 75%, #166534 75%)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
    }}>
      <div className="bg-gradient-to-r from-green-900/90 to-yellow-600/40 backdrop-blur-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center brutal-shadow overflow-hidden">
                <img src="/src/assets/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
              </div>
              <span className="ml-2 text-white font-black text-sm">
                SOL
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button 
                onClick={() => onSectionChange('hero')}
                className={`px-3 py-2 rounded-xl border-2 border-black font-black text-xs brutal-shadow transition-bounce hover:scale-110 ${
                  activeSection === 'hero' 
                    ? 'bg-yellow-400 text-black transform rotate-1' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Home className="w-4 h-4" strokeWidth={3} />
              </button>
              
              <button 
                onClick={() => onSectionChange('swap')}
                className={`px-3 py-2 rounded-xl border-2 border-black font-black text-xs brutal-shadow transition-bounce hover:scale-110 ${
                  activeSection === 'swap' 
                    ? 'bg-yellow-400 text-black transform -rotate-1' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <ArrowLeftRight className="w-4 h-4" strokeWidth={3} />
              </button>
              
              <button 
                onClick={() => onSectionChange('about')}
                className={`px-3 py-2 rounded-xl border-2 border-black font-black text-xs brutal-shadow transition-bounce hover:scale-110 ${
                  activeSection === 'about' 
                    ? 'bg-yellow-400 text-black transform rotate-1' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Info className="w-4 h-4" strokeWidth={3} />
              </button>

              <button className="px-3 py-2 rounded-xl border-2 border-black bg-green-600 hover:bg-green-700 text-white font-black text-xs brutal-shadow transition-bounce hover:scale-110 transform rotate-2">
                <Wallet className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;