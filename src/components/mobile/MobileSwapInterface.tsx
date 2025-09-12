import React, { useState } from 'react';
import { ArrowUpDown, Wallet, TrendingUp, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MobileSwapInterface = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-black text-white mb-2 text-center">
          Quick Swap
        </h2>
        <p className="text-white/70 text-center text-sm">
          Trade SOL for 0.1 SOL tokens instantly
        </p>
      </div>

      {/* Main swap card */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-3xl shadow-2xl mb-6">
        {/* From section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm font-medium">From</span>
            <span className="text-white/50 text-xs">Balance: 0.0</span>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                <span className="text-white font-semibold text-sm">SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.1"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1 bg-transparent text-white text-xl font-semibold outline-none placeholder-white/30"
              />
            </div>
          </div>
        </div>

        {/* Swap icon */}
        <div className="flex justify-center mb-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
            <ArrowUpDown className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* To section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm font-medium">To</span>
            <span className="text-white/50 text-xs">Balance: 0.0</span>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-white font-semibold text-sm">0.1SOL</span>
              </div>
              
              <input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="flex-1 bg-transparent text-white text-xl font-semibold outline-none placeholder-white/30"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Swap button */}
        <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black font-black text-lg py-6 rounded-2xl shadow-lg hover:scale-105 transition-all">
          <Wallet className="w-5 h-5 mr-2" />
          Connect Wallet & Swap
        </Button>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <span className="text-white text-sm font-medium">Price Chart</span>
        </button>
        
        <button className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
          <Settings className="w-6 h-6 text-gray-400" />
          <span className="text-white text-sm font-medium">Settings</span>
        </button>
      </div>

      {/* Market info */}
      <Card className="bg-white/5 border-white/10 p-4 rounded-2xl">
        <h3 className="text-white font-semibold mb-3">Market Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">Price</span>
            <span className="text-green-400 text-sm font-semibold">$0.00001</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">24h Change</span>
            <span className="text-green-400 text-sm font-semibold">+12.5%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70 text-sm">Market Cap</span>
            <span className="text-white text-sm font-semibold">$1.2M</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MobileSwapInterface;