
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-sm text-purple-200">🚀 Now Live on Solana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Just Buy
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> $1 Worth</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            No complicated stuff. No risk of losing your money. Just holding together as a community.
            <span className="block mt-2 text-lg text-purple-300">
              Simple. Honest. Community-driven.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-200">
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Fixed Supply</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Community Rewards</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Anti-Whale Protection</span>
            </div>
          </div>

          <div className="flex items-center text-purple-300 animate-bounce">
            <ArrowDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
