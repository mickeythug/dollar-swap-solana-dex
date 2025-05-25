
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">$</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">1 Dollar</h1>
            <p className="text-sm text-purple-200">Simple. Honest. Community.</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6 text-purple-200">
            <a href="#swap" className="hover:text-white transition-colors">Swap</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
          </div>
          
          <WalletMultiButton className="!bg-gradient-to-r !from-purple-600 !to-blue-600 hover:!from-purple-700 hover:!to-blue-700 !border-0 !rounded-xl !font-semibold !px-6 !py-3 !transition-all !duration-200 !transform hover:!scale-105" />
        </div>
      </div>
    </header>
  );
};

export default Header;
