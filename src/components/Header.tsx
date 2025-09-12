
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-2 sm:px-4 py-3 sm:py-6">
      {/* WAGMI Sign at the very top - enhanced responsive */}
      <div className="w-full text-center mb-3 sm:mb-6">
        <div className="inline-block bg-red-500 hover:bg-red-600 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black brutal-shadow transition-bounce transform hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(-3deg) skew(-2deg)'
        }}>
          <span className="text-white font-black text-responsive-sm" style={{
            transform: 'rotate(2deg) scale(1.1)',
            display: 'inline-block'
          }}>
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 lg:px-8 xl:px-12">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo Section - Top Left */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-green-900 overflow-hidden">
              <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
            </div>
            <div className="meme-card p-2 rounded-xl">
              <h1 className="text-lg font-black text-green-900 tracking-wider" style={{
                letterSpacing: '2px'
              }}>
                0.1 SOL
              </h1>
            </div>
          </div>
          
          {/* Navigation Buttons - Desktop */}
          <div className="flex items-center space-x-6">
            <button 
              className="meme-button px-6 py-3 rounded-lg text-base font-black transition-bounce hover:scale-105" 
              style={{ transform: 'rotate(-1deg)' }}
            >
              SWAP
            </button>
            <button 
              className="bg-green-400 hover:bg-green-500 text-yellow-900 font-black px-6 py-3 rounded-lg border-4 border-black brutal-shadow transition-bounce hover:scale-105 text-base" 
              style={{
                transform: 'rotate(1deg)',
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000',
                letterSpacing: '1px'
              }}
            >
              ABOUT
            </button>
            <WalletMultiButton className="!bg-gradient-to-r !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-4 !border-black !rounded-lg !font-black !px-6 !py-3 !text-base !text-green-900 brutal-shadow transition-all hover:!scale-105" style={{
              fontFamily: 'Comic Sans MS, cursive',
              letterSpacing: '1px',
              textShadow: '1px 1px 0px #000000'
            }} />
          </div>
        </div>

        {/* Mobile Layout - Unchanged */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4">
            {/* Logo Section - Mobile */}
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-green-900 overflow-hidden">
                <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="meme-card p-2 rounded-xl">
                <h1 className="text-responsive-md font-black tracking-wider text-green-900" style={{
                  letterSpacing: '2px'
                }}>
                  0.1 SOL
                </h1>
                <p className="text-responsive-xs font-black text-green-800 tracking-wide" style={{
                  letterSpacing: '3px'
                }}>
                  MEME COIN!
                </p>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex items-center space-x-3 w-full justify-center">
              <button className="meme-button px-4 py-2 rounded-lg text-sm">
                SWAP!
              </button>
              <button className="bg-green-400 hover:bg-green-500 text-yellow-900 font-black px-4 py-2 rounded-lg border-4 border-black brutal-shadow text-sm" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000',
                letterSpacing: '1px'
              }}>
                ABOUT!
              </button>
              <WalletMultiButton className="!bg-gradient-to-r !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-4 !border-black !rounded-lg !font-black !px-4 !py-2 !text-sm !text-green-900 brutal-shadow transition-all hover:!scale-105" style={{
                letterSpacing: '1px',
                textShadow: '1px 1px 0px #000000'
              }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
