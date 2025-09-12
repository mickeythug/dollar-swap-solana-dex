
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 px-2 sm:px-4 py-3 sm:py-6">
      {/* WAGMI Sign at the very top - enhanced responsive */}
      <div className="w-full text-center mb-3 sm:mb-6">
        <div className="inline-block bg-red-500 hover:bg-red-600 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black brutal-shadow transition-bounce transform hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(-3deg) skew(-2deg)'
        }}>
          <span className="text-white kid-text super-thick text-responsive-sm" style={{
            transform: 'rotate(2deg) scale(1.1)',
            display: 'inline-block'
          }}>
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 lg:px-8 xl:px-12">
        {/* Mobile menu button */}
        <div className="flex justify-end mb-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="meme-button px-4 py-2 rounded-lg text-sm"
          >
            {isMenuOpen ? '✕' : '☰'} MENU
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo Section - Static */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-green-900 brutal-shadow-lg overflow-hidden">
              <img src="/src/assets/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
            </div>
            <div className="meme-card p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl">
              <h1 className="text-responsive-md crayon-text super-thick text-green-900" style={{
                letterSpacing: '2px'
              }}>
                0.1 SOL
              </h1>
              <p className="text-responsive-xs text-green-800 crayon-text super-thick" style={{
                letterSpacing: '3px'
              }}>
                MEME COIN!
              </p>
            </div>
          </div>
          
          {/* Navigation & Wallet Section - Fixed Layout */}
          <div className={`flex items-center space-x-3 lg:space-x-6 ${isMenuOpen ? 'flex-col space-y-4 w-full md:flex-row md:space-y-0 md:w-auto' : 'hidden md:flex'} transition-smooth`}>
            {/* Navigation Links */}
            <div className={`flex items-center space-x-3 lg:space-x-6 ${isMenuOpen ? 'flex-col space-y-3 space-x-0' : 'flex'}`}>
              <a 
                href="#swap" 
                className="meme-button px-3 lg:px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-bounce hover:scale-105" 
                style={{
                  transform: 'rotate(-1deg)'
                }}
              >
                SWAP!
              </a>
              <a 
                href="#about" 
                className="bg-green-400 hover:bg-green-500 text-yellow-900 font-black px-3 lg:px-4 py-2 rounded-lg border-4 border-black brutal-shadow transition-bounce hover:scale-105 text-sm whitespace-nowrap" 
                style={{
                  transform: 'rotate(1deg)',
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000',
                  letterSpacing: '1px'
                }}
              >
                ABOUT!
              </a>
            </div>
            
            {/* Wallet Button - Fixed Container */}
            <div className="flex-shrink-0">
              <WalletMultiButton className="!bg-gradient-to-r !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-4 !border-black !rounded-lg crayon-text super-thick !px-4 !py-2 !text-sm !text-green-900 brutal-shadow transition-all hover:!scale-105 !whitespace-nowrap !max-w-none" style={{
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
