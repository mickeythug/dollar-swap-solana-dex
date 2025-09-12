import React, { useState } from 'react';
import { ArrowUpDown, Wallet, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileSwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <div className="px-4 py-6">
      {/* Header - better sized and centered */}
      <div className="mb-6 text-center">
        <div className="inline-block">
          <h2 className="text-2xl font-black text-black mb-3 crayon-text bg-yellow-400 px-4 py-2 rounded-2xl border-4 border-black brutal-shadow-lg transform rotate-1" style={{
            textShadow: '2px 2px 0px #ffffff',
            letterSpacing: '2px'
          }}>
            Quick Swap
          </h2>
        </div>
        <p className="text-white text-base mt-4 crayon-text px-2" style={{
          textShadow: '1px 1px 0px #000000'
        }}>
          Trade SOL for 0.1 SOL tokens instantly!
        </p>
      </div>

      {/* Main swap card - better responsive sizing */}
      <div className="meme-card p-4 rounded-3xl brutal-shadow-xl mb-6 transform rotate-1 transition-bounce hover:scale-105 hover:-rotate-1 max-w-sm mx-auto">
        {/* From section - better text sizing */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-black crayon-text font-black text-sm" style={{textShadow: '1px 1px 0px #ffffff'}}>From</span>
            <span className="text-black/70 text-xs crayon-text">Balance: 0.0</span>
          </div>
          
          <div className="bg-green-100 rounded-2xl p-3 border-4 border-black brutal-shadow transform -rotate-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-purple-600 rounded-full px-2 py-1 border-2 border-black flex-shrink-0">
                <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-black"></div>
                <span className="text-white font-black text-xs crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.1"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1 bg-transparent text-black text-lg font-black outline-none placeholder-black/50 crayon-text min-w-0"
                style={{textShadow: '1px 1px 0px #ffffff'}}
              />
            </div>
          </div>
        </div>

        {/* Swap icon - cartoon style */}
        <div className="flex justify-center mb-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full border-4 border-black brutal-shadow-lg hover:scale-110 transition-bounce transform rotate-45 hover:rotate-90">
            <ArrowUpDown className="w-6 h-6 text-black" strokeWidth={3} />
          </button>
        </div>

        {/* To section - better text sizing */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-black crayon-text font-black text-sm" style={{textShadow: '1px 1px 0px #ffffff'}}>To</span>
            <span className="text-black/70 text-xs crayon-text">Balance: 0.0</span>
          </div>
          
          <div className="bg-yellow-100 rounded-2xl p-3 border-4 border-black brutal-shadow transform rotate-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-600 rounded-full px-2 py-1 border-2 border-black flex-shrink-0">
                <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-black"></div>
                <span className="text-white font-black text-xs crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>0.1SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="flex-1 bg-transparent text-black text-lg font-black outline-none placeholder-black/50 crayon-text min-w-0"
                style={{textShadow: '1px 1px 0px #ffffff'}}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Swap button - better responsive text */}
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-base py-4 rounded-2xl border-4 border-black brutal-shadow-lg hover:scale-105 transition-bounce crayon-text transform -rotate-1 hover:rotate-1" style={{
          textShadow: '2px 2px 0px #ffffff',
          letterSpacing: '1px'
        }}>
          <Wallet className="w-5 h-5 mr-2" strokeWidth={3} />
          <span className="whitespace-nowrap">Connect & Swap</span>
        </Button>
      </div>

      {/* Quick actions - better sizing */}
      <div className="grid grid-cols-2 gap-3 mb-6 max-w-sm mx-auto">
        <button className="bg-green-600 hover:bg-green-700 border-4 border-black rounded-2xl p-3 flex flex-col items-center gap-2 brutal-shadow transition-bounce hover:scale-105 transform rotate-1 hover:-rotate-1">
          <TrendingUp className="w-5 h-5 text-white" strokeWidth={3} />
          <span className="text-white text-xs font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Price Chart</span>
        </button>
        
        <button className="bg-purple-600 hover:bg-purple-700 border-4 border-black rounded-2xl p-3 flex flex-col items-center gap-2 brutal-shadow transition-bounce hover:scale-105 transform -rotate-1 hover:rotate-1">
          <Settings className="w-5 h-5 text-white" strokeWidth={3} />
          <span className="text-white text-xs font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Settings</span>
        </button>
      </div>

      {/* Market info - better responsive sizing */}
      <div className="meme-card p-4 rounded-2xl brutal-shadow transform rotate-1 max-w-sm mx-auto">
        <h3 className="text-black font-black mb-3 crayon-text text-center text-base" style={{
          textShadow: '1px 1px 0px #ffffff',
          letterSpacing: '1px'
        }}>Market Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between bg-white/20 p-2 rounded-lg border-2 border-black/20">
            <span className="text-black font-black text-xs crayon-text">Price</span>
            <span className="text-green-600 text-xs font-black crayon-text">$0.00001</span>
          </div>
          <div className="flex justify-between bg-white/20 p-2 rounded-lg border-2 border-black/20">
            <span className="text-black font-black text-xs crayon-text">24h Change</span>
            <span className="text-green-600 text-xs font-black crayon-text">+12.5%</span>
          </div>
          <div className="flex justify-between bg-white/20 p-2 rounded-lg border-2 border-black/20">
            <span className="text-black font-black text-xs crayon-text">Market Cap</span>
            <span className="text-black text-xs font-black crayon-text">$1.2M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSwapInterface;