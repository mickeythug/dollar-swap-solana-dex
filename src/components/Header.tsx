
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <header className="relative z-10 px-2 sm:px-4 py-3 sm:py-6">
      {/* WAGMI Sign at the very top - responsive */}
      <div className="w-full text-center mb-3 sm:mb-6">
        <div className="inline-block bg-red-500 px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black shadow-xl sm:shadow-2xl">
          <span className="text-white font-black text-lg sm:text-2xl lg:text-3xl font-sans">
            🚨 BRING BACK WAGMI 🚨
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-green-900 shadow-xl sm:shadow-2xl">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-900">◎</span>
          </div>
          <div className="bg-yellow-300 p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl border-4 border-black border-dashed shadow-lg">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-green-900 font-sans">
              0.1 SOL
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl text-green-800 font-black font-sans">
              MEME COIN! ◎
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <a href="#swap" className="bg-yellow-300 px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border-4 border-black shadow-lg font-sans">
              <span className="text-green-900 font-black text-sm sm:text-lg lg:text-xl">SWAP!</span>
            </a>
            <a href="#about" className="bg-green-400 px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border-4 border-black shadow-lg font-sans">
              <span className="text-yellow-900 font-black text-sm sm:text-lg lg:text-xl">ABOUT!</span>
            </a>
          </div>
          
          <div>
            <WalletMultiButton className="!bg-yellow-400 hover:!bg-yellow-500 !border-4 !border-black !rounded-lg sm:!rounded-xl lg:!rounded-2xl !font-black !px-3 sm:!px-6 lg:!px-8 !py-2 sm:!py-3 lg:!py-4 !text-sm sm:!text-lg lg:!text-xl !text-green-900 !shadow-lg !font-sans" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
