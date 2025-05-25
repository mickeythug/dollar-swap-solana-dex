
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-8 border-green-900 transform rotate-12 shadow-2xl" style={{
            boxShadow: '12px 12px 0px #000000, 8px 8px 0px #22c55e, 4px 4px 0px #fbbf24'
          }}>
            <span className="text-5xl font-black text-green-900 transform -rotate-12">◎</span>
          </div>
          <div className="transform -rotate-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-3xl border-8 border-black border-dashed hover:rotate-3 hover:scale-110 transition-all duration-300" style={{
            boxShadow: '10px 10px 0px #000000, 6px 6px 0px #16a34a'
          }}>
            <h1 className="text-5xl font-black text-green-900" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '6px 6px 0px #000000, 3px 3px 0px #fde047, 1px 1px 0px #dc2626'
            }}>0.1 SOL</h1>
            <p className="text-3xl text-green-800 font-black transform rotate-3" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px #000000, 2px 2px 0px #fbbf24'
            }}>MEME COIN! ◎</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#swap" className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 px-8 py-4 rounded-2xl border-6 border-black transform rotate-3 hover:rotate-6 hover:scale-125 transition-all duration-300 shadow-lg" style={{
              boxShadow: '8px 8px 0px #000000, 4px 4px 0px #16a34a',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              <span className="text-green-900 font-black text-2xl" style={{
                textShadow: '2px 2px 0px #000000'
              }}>SWAP! 🚀</span>
            </a>
            <a href="#about" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-8 py-4 rounded-2xl border-6 border-black transform -rotate-2 hover:-rotate-4 hover:scale-125 transition-all duration-300 shadow-lg" style={{
              boxShadow: '8px 8px 0px #000000, 4px 4px 0px #fbbf24',
              fontFamily: 'Comic Sans MS, cursive'
            }}>
              <span className="text-yellow-100 font-black text-2xl" style={{
                textShadow: '2px 2px 0px #000000'
              }}>ABOUT! 💎</span>
            </a>
          </div>
          
          <div className="transform rotate-3 hover:rotate-6 hover:scale-110 transition-all duration-300">
            <WalletMultiButton className="!bg-gradient-to-r !from-yellow-400 !via-yellow-500 !to-yellow-600 hover:!from-yellow-500 hover:!to-yellow-700 !border-8 !border-black !rounded-3xl !font-black !px-10 !py-5 !transition-all !duration-300 !transform hover:!scale-125 hover:!rotate-12 !text-2xl !text-green-900 !shadow-2xl" style={{
              fontFamily: 'Comic Sans MS, cursive',
              boxShadow: '10px 10px 0px #000000, 6px 6px 0px #16a34a',
              textShadow: '2px 2px 0px #000000'
            }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
