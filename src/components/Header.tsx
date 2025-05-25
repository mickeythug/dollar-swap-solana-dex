
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-2 sm:px-4 py-3 sm:py-6">
      {/* WAGMI Sign at the very top - responsiv */}
      <div className="w-full text-center mb-3 sm:mb-6">
        <div className="inline-block bg-red-500 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black transform -rotate-2 shadow-xl sm:shadow-2xl" style={{
          boxShadow: '6px 6px 0px #000000'
        }}>
          <span className="text-white font-black text-lg sm:text-2xl lg:text-3xl" style={{
            fontFamily: '"Trebuchet MS", Arial, sans-serif',
            textShadow: '2px 2px 0px #000000'
          }}>
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-green-900 transform rotate-12 shadow-xl sm:shadow-2xl" style={{
            boxShadow: '4px 4px 0px #000000, 2px 2px 0px #22c55e'
          }}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-900 transform -rotate-12">◎</span>
          </div>
          <div className="transform -rotate-6 bg-yellow-300 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border-3 sm:border-4 lg:border-6 border-black border-dashed" style={{
            boxShadow: '3px 3px 0px #000000'
          }}>
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-green-900" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '2px 2px 0px #000000, 1px 1px 0px #fde047'
            }}>0.1 SOL</h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-green-800 font-black transform rotate-3" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>MEME COIN! ◎</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <a href="#swap" className="bg-yellow-300 px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black transform rotate-3 hover:rotate-6 hover:scale-110 transition-all shadow-lg" style={{
              boxShadow: '3px 3px 0px #000000',
              fontFamily: '"Trebuchet MS", Arial, sans-serif'
            }}>
              <span className="text-green-900 font-black text-sm sm:text-lg lg:text-xl">SWAP!</span>
            </a>
            <a href="#about" className="bg-green-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black transform -rotate-2 hover:-rotate-4 hover:scale-110 transition-all shadow-lg" style={{
              boxShadow: '3px 3px 0px #000000',
              fontFamily: '"Trebuchet MS", Arial, sans-serif'
            }}>
              <span className="text-yellow-900 font-black text-sm sm:text-lg lg:text-xl">ABOUT!</span>
            </a>
          </div>
          
          <div className="transform rotate-3">
            <WalletMultiButton className="!bg-yellow-400 hover:!bg-yellow-500 !border-3 sm:!border-4 lg:!border-6 !border-black !rounded-lg sm:!rounded-xl lg:!rounded-2xl !font-black !px-3 sm:!px-6 lg:!px-8 !py-2 sm:!py-3 lg:!py-4 !transition-all !duration-200 !transform hover:!scale-110 hover:!rotate-6 !text-sm sm:!text-lg lg:!text-xl !text-green-900 !shadow-lg" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              boxShadow: '3px 3px 0px #000000'
            }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
