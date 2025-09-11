
import React, { useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 px-2 sm:px-4 py-3 sm:py-6 animate-slide-up">
      {/* WAGMI Sign at the very top - enhanced responsive */}
      <div className="w-full text-center mb-3 sm:mb-6 animate-bounce-in">
        <div className="inline-block bg-red-500 hover:bg-red-600 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black brutal-shadow transition-bounce transform hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(-3deg) skew(-2deg)'
        }}>
          <span className="text-white kid-text super-thick text-responsive-sm animate-wiggle" style={{
            transform: 'rotate(2deg) scale(1.1)',
            display: 'inline-block'
          }}>
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
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
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-2 sm:space-x-3 animate-bounce-in">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-green-900 brutal-shadow-lg transition-bounce hover:scale-110 hover:rotate-12 glow-effect" style={{
              transform: 'rotate(-5deg) scale(1.05)'
            }}>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-900 animate-wiggle" style={{
                transform: 'rotate(10deg)'
              }}>◎</span>
            </div>
            <div className="meme-card p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl transition-bounce hover:scale-105 hover:rotate-2" style={{
              transform: 'rotate(2deg) skew(1deg)',
              position: 'relative'
            }}>
              <h1 className="text-responsive-md crayon-text super-thick text-green-900" style={{
                transform: 'rotate(-2deg) scale(1.1)',
                letterSpacing: '2px'
              }}>
                0.1 SOL
              </h1>
              <p className="text-responsive-xs text-green-800 crayon-text super-thick" style={{
                transform: 'rotate(3deg) translateX(-2px)',
                letterSpacing: '3px'
              }}>
                MEME COIN! ◎
              </p>
            </div>
          </div>
          
          {/* Navigation & Wallet Section - Enhanced Responsive */}
          <div className={`flex items-center space-x-2 sm:space-x-4 ${isMenuOpen ? 'flex-col space-y-4 w-full md:flex-row md:space-y-0 md:w-auto' : 'hidden md:flex'} transition-smooth`}>
            {/* Navigation Links - Enhanced */}
            <div className={`flex items-center space-x-3 lg:space-x-6 ${isMenuOpen ? 'flex-col space-y-3 space-x-0' : 'hidden lg:flex'}`}>
              <a 
                href="#swap" 
                className="meme-button px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl text-responsive-xs transition-bounce hover:scale-110 hover:rotate-2" 
                style={{
                  transform: 'rotate(-2deg) skew(1deg)'
                }}
              >
                SWAP!
              </a>
              <a 
                href="#about" 
                className="bg-green-400 hover:bg-green-500 text-yellow-900 font-black px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border-4 border-black brutal-shadow transition-bounce hover:scale-110 hover:rotate-2 text-responsive-xs" 
                style={{
                  transform: 'rotate(3deg) skew(-1deg)',
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000',
                  letterSpacing: '2px'
                }}
              >
                ABOUT!
              </a>
            </div>
            
            {/* Enhanced Wallet Button */}
            <div className="transition-bounce hover:scale-105" style={{
              transform: 'rotate(-1deg) scale(1.02)'
            }}>
              <WalletMultiButton className="!bg-gradient-to-r !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-4 !border-black !rounded-lg sm:!rounded-xl lg:!rounded-2xl crayon-text super-thick !px-3 sm:!px-6 lg:!px-8 !py-2 sm:!py-3 lg:!py-4 text-responsive-xs !text-green-900 brutal-shadow transition-bounce hover:!scale-105 glow-effect" style={{
                transform: 'skew(-1deg)',
                letterSpacing: '2px',
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
