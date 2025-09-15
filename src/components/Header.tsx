import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-10 px-2 sm:px-4 py-4 sm:py-8">
      {/* Enhanced WAGMI Sign with improved styling */}
      <div className="w-full text-center mb-4 sm:mb-8">
        <div className="inline-block bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-3xl sm:rounded-[2rem] border-6 sm:border-8 lg:border-10 border-black brutal-shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(-3deg) skew(-2deg)'
        }}>
          <span className="text-white font-black text-responsive-md drop-shadow-lg" style={{
            transform: 'rotate(2deg) scale(1.1)',
            display: 'inline-block',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)'
          }}>
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 lg:px-8 xl:px-12">
        {/* Enhanced Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center border-6 border-green-900 overflow-hidden brutal-shadow-lg glow-effect transform hover:scale-110 hover:rotate-12 transition-all duration-500">
              <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
            </div>
            <div className="meme-card p-3 rounded-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
              <h1 className="text-xl font-black text-green-900 tracking-wider drop-shadow-sm" style={{
                letterSpacing: '3px',
                textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
              }}>
                0.1 SOL
              </h1>
            </div>
          </div>
          
          {/* Enhanced Navigation Buttons */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('swap')}
              className="meme-button px-8 py-4 rounded-xl text-lg font-black transition-all duration-500 hover:scale-110 transform hover:rotate-2" 
              style={{ transform: 'rotate(-1deg)' }}
            >
              SWAP
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-yellow-900 font-black px-8 py-4 rounded-xl border-6 border-black brutal-shadow-lg transition-all duration-500 hover:scale-110 text-lg" 
              style={{
                transform: 'rotate(1deg)',
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000',
                letterSpacing: '2px'
              }}
            >
              ABOUT
            </button>
            <WalletMultiButton className="!bg-gradient-to-br !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-6 !border-black !rounded-xl !font-black !px-8 !py-4 !text-lg !text-green-900 brutal-shadow-lg transition-all duration-500 hover:!scale-110" style={{
              fontFamily: 'Comic Sans MS, cursive',
              letterSpacing: '2px',
              textShadow: '2px 2px 0px #000000'
            }} />
          </div>
        </div>

        {/* Enhanced Mobile Layout */}
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-6">
            {/* Enhanced Mobile Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-6 border-green-900 overflow-hidden brutal-shadow-lg glow-effect transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <div className="meme-card p-3 rounded-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                <h1 className="text-responsive-md font-black tracking-wider text-green-900 drop-shadow-sm" style={{
                  letterSpacing: '3px',
                  textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
                }}>
                  0.1 SOL
                </h1>
                <p className="text-responsive-xs font-black text-green-800 tracking-wide drop-shadow-sm" style={{
                  letterSpacing: '4px',
                  textShadow: '1px 1px 0px rgba(255,255,255,0.6)'
                }}>
                  MEME COIN!
                </p>
              </div>
            </div>
            
            {/* Enhanced Mobile Navigation */}
            <div className="flex items-center space-x-4 w-full justify-center">
              <button 
                onClick={() => scrollToSection('swap')}
                className="meme-button px-6 py-3 rounded-xl text-base font-black transition-all duration-500 hover:scale-110 hover:rotate-2"
              >
                SWAP!
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-yellow-900 font-black px-6 py-3 rounded-xl border-6 border-black brutal-shadow-lg text-base transition-all duration-500 hover:scale-110" 
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000',
                  letterSpacing: '2px'
                }}
              >
                ABOUT!
              </button>
              <WalletMultiButton className="!bg-gradient-to-br !from-yellow-400 !to-yellow-500 hover:!from-yellow-500 hover:!to-yellow-600 !border-6 !border-black !rounded-xl !font-black !px-6 !py-3 !text-base !text-green-900 brutal-shadow-lg transition-all duration-500 hover:!scale-110" style={{
                letterSpacing: '2px',
                textShadow: '2px 2px 0px #000000'
              }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;