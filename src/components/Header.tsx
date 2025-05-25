
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white transform rotate-12 shadow-lg">
            <span className="text-2xl font-black text-white">$</span>
          </div>
          <div className="transform -rotate-2">
            <h1 className="text-3xl font-black text-white" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #ff6b6b'
            }}>1 DOLLAR</h1>
            <p className="text-lg text-yellow-300 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>MEME COIN! 🚀</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6 text-purple-200">
            <a href="#swap" className="hover:text-yellow-300 transition-colors font-bold text-lg transform hover:rotate-3" style={{fontFamily: 'Comic Sans MS, cursive'}}>SWAP!</a>
            <a href="#about" className="hover:text-yellow-300 transition-colors font-bold text-lg transform hover:-rotate-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>ABOUT!</a>
          </div>
          
          <div className="transform rotate-1">
            <WalletMultiButton className="!bg-gradient-to-r !from-pink-500 !to-purple-600 hover:!from-pink-600 hover:!to-purple-700 !border-4 !border-white !rounded-full !font-black !px-6 !py-3 !transition-all !duration-200 !transform hover:!scale-110 hover:!rotate-3 !text-lg" style={{fontFamily: 'Comic Sans MS, cursive'}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
