import React, { useState } from 'react';
import { ArrowUpDown, Wallet, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileSwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <section className="px-4 py-12 relative z-10">
      {/* Ultra-Enhanced Header */}
      <div className="mb-12 text-center">
        <div className="inline-block">
          <h2 className="text-3xl font-black text-black mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 px-8 py-6 rounded-3xl border-8 border-black brutal-shadow-xl transform rotate-1 hover:rotate-2 transition-all duration-700" style={{
            letterSpacing: '3px',
            textShadow: '3px 3px 0px rgba(0,0,0,0.3)'
          }}>
            Quick Swap
          </h2>
        </div>
        <p className="text-white text-xl mt-6 font-black px-2 drop-shadow-lg" style={{
          textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
        }}>
          Trade SOL for 0.1 SOL tokens instantly!
        </p>
      </div>

      {/* Ultra-Enhanced Main swap card */}
      <div className="meme-card p-8 rounded-[2rem] brutal-shadow-xl mb-12 transform rotate-1 transition-all duration-700 hover:scale-105 hover:-rotate-1 max-w-sm mx-auto border-8 border-black">
        {/* Ultra-Enhanced From section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-black font-black text-lg" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>From</span>
            <span className="text-black/70 text-base font-black" style={{
              textShadow: '1px 1px 0px rgba(255,255,255,0.6)'
            }}>Balance: 0.0</span>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-6 border-8 border-black brutal-shadow-lg transform -rotate-1 hover:scale-105 transition-all duration-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full px-6 py-4 border-4 border-black flex-shrink-0 transform hover:scale-110 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border-4 border-black overflow-hidden glow-effect">
                  <img src="/solana-logo.png" alt="SOL Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-black text-lg" style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                }}>SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.1"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1 bg-transparent text-black text-2xl font-black outline-none placeholder-black/50 min-w-0"
                style={{
                  textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Ultra-Enhanced Swap icon */}
        <div className="flex justify-center mb-8">
          <button className="bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 p-6 rounded-full border-8 border-black brutal-shadow-xl hover:scale-125 transition-all duration-700 transform rotate-45 hover:rotate-90 glow-strong">
            <ArrowUpDown className="w-8 h-8 text-black" strokeWidth={4} />
          </button>
        </div>

        {/* Ultra-Enhanced To section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-black font-black text-lg" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>To</span>
            <span className="text-black/70 text-base font-black" style={{
              textShadow: '1px 1px 0px rgba(255,255,255,0.6)'
            }}>Balance: 0.0</span>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-6 border-8 border-black brutal-shadow-lg transform rotate-1 hover:scale-105 transition-all duration-700">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-br from-green-600 to-green-700 rounded-full px-6 py-4 border-4 border-black flex-shrink-0 transform hover:scale-110 transition-all duration-500">
                <div className="w-12 h-12 rounded-full border-4 border-black overflow-hidden glow-effect">
                  <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-black text-lg" style={{
                  textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                }}>0.1SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="flex-1 bg-transparent text-black text-2xl font-black outline-none placeholder-black/50 min-w-0"
                style={{
                  textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
                }}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Ultra-Enhanced Swap button */}
        <Button className="w-full bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-black text-xl py-8 rounded-3xl border-8 border-black brutal-shadow-xl hover:scale-105 transition-all duration-700 transform -rotate-1 hover:rotate-1" style={{
          letterSpacing: '2px',
          textShadow: '3px 3px 0px rgba(255,255,255,0.8)'
        }}>
          <Wallet className="w-6 h-6 mr-3" strokeWidth={4} />
          <span className="whitespace-nowrap">Connect & Swap</span>
        </Button>
      </div>

      {/* Ultra-Enhanced Quick actions */}
      <div className="grid grid-cols-2 gap-6 mb-12 max-w-sm mx-auto">
        <button className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 border-8 border-black rounded-3xl p-6 flex flex-col items-center gap-4 brutal-shadow-xl transition-all duration-700 hover:scale-105 transform rotate-1 hover:-rotate-1">
          <TrendingUp className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={4} />
          <span className="text-white text-base font-black" style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
          }}>Price Chart</span>
        </button>
        
        <button className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-8 border-black rounded-3xl p-6 flex flex-col items-center gap-4 brutal-shadow-xl transition-all duration-700 hover:scale-105 transform -rotate-1 hover:rotate-1">
          <Settings className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={4} />
          <span className="text-white text-base font-black" style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
          }}>Settings</span>
        </button>
      </div>

      {/* Ultra-Enhanced Market info */}
      <div className="meme-card p-8 rounded-3xl brutal-shadow-xl transform rotate-1 max-w-sm mx-auto border-8 border-black hover:scale-105 transition-all duration-700">
        <h3 className="text-black font-black mb-6 text-center text-xl" style={{
          letterSpacing: '2px',
          textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
        }}>Market Stats 📊</h3>
        <div className="space-y-4">
          <div className="flex justify-between bg-white/30 p-4 rounded-2xl border-4 border-black/30 hover:scale-105 transition-all duration-500">
            <span className="text-black font-black text-base" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>Price</span>
            <span className="text-green-600 text-base font-black" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>$0.00001</span>
          </div>
          <div className="flex justify-between bg-white/30 p-4 rounded-2xl border-4 border-black/30 hover:scale-105 transition-all duration-500">
            <span className="text-black font-black text-base" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>24h Change</span>
            <span className="text-green-600 text-base font-black" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>+12.5%</span>
          </div>
          <div className="flex justify-between bg-white/30 p-4 rounded-2xl border-4 border-black/30 hover:scale-105 transition-all duration-500">
            <span className="text-black font-black text-base" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>Market Cap</span>
            <span className="text-black text-base font-black" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
            }}>$1.2M</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSwapInterface;