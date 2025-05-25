
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center border-4 border-yellow-300 transform rotate-45 shadow-lg">
            <span className="text-2xl font-black text-yellow-200 transform -rotate-45">$</span>
          </div>
          <div className="transform -rotate-3">
            <h1 className="text-3xl font-black text-green-900" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px #fde047, -2px -2px 0px #22c55e'
            }}>1 DOLLAR</h1>
            <p className="text-lg text-green-700 font-bold transform rotate-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>MEME COIN! 💵</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6 text-green-800">
            <a href="#swap" className="hover:text-yellow-600 transition-colors font-black text-lg transform hover:rotate-6 hover:scale-110" style={{fontFamily: 'Comic Sans MS, cursive'}}>SWAP!</a>
            <a href="#about" className="hover:text-yellow-600 transition-colors font-black text-lg transform hover:-rotate-4 hover:scale-110" style={{fontFamily: 'Comic Sans MS, cursive'}}>ABOUT!</a>
          </div>
          
          <div className="transform rotate-2">
            <WalletMultiButton className="!bg-gradient-to-r !from-green-600 !to-green-800 hover:!from-green-700 hover:!to-green-900 !border-4 !border-yellow-300 !rounded-full !font-black !px-6 !py-3 !transition-all !duration-200 !transform hover:!scale-110 hover:!rotate-6 !text-lg !text-yellow-100" style={{fontFamily: 'Comic Sans MS, cursive'}} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
