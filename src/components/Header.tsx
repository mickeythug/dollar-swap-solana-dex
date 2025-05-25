
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-8 border-green-900 transform rotate-12 shadow-2xl" style={{
            boxShadow: '8px 8px 0px #000000, 4px 4px 0px #22c55e'
          }}>
            <span className="text-4xl font-black text-green-900 transform -rotate-12">$</span>
          </div>
          <div className="transform -rotate-6 bg-yellow-300 p-4 rounded-2xl border-6 border-black border-dashed" style={{
            boxShadow: '6px 6px 0px #000000'
          }}>
            <h1 className="text-4xl font-black text-green-900" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px #000000, 2px 2px 0px #fde047'
            }}>1 DOLLAR</h1>
            <p className="text-2xl text-green-800 font-black transform rotate-3" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px #000000'
            }}>MEME COIN! 💵</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#swap" className="bg-yellow-300 px-6 py-3 rounded-xl border-4 border-black transform rotate-3 hover:rotate-6 hover:scale-110 transition-all shadow-lg" style={{
              boxShadow: '4px 4px 0px #000000',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              <span className="text-green-900 font-black text-xl">SWAP!</span>
            </a>
            <a href="#about" className="bg-green-400 px-6 py-3 rounded-xl border-4 border-black transform -rotate-2 hover:-rotate-4 hover:scale-110 transition-all shadow-lg" style={{
              boxShadow: '4px 4px 0px #000000',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              <span className="text-yellow-900 font-black text-xl">ABOUT!</span>
            </a>
          </div>
          
          <div className="transform rotate-3">
            <WalletMultiButton className="!bg-yellow-400 hover:!bg-yellow-500 !border-6 !border-black !rounded-2xl !font-black !px-8 !py-4 !transition-all !duration-200 !transform hover:!scale-110 hover:!rotate-6 !text-xl !text-green-900 !shadow-lg" style={{
              fontFamily: 'Comic Sans MS, cursive',
              boxShadow: '6px 6px 0px #000000'
            }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
