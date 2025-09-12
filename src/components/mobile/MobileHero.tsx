import React from 'react';
import { ChevronDown, Sparkles, Users, Star } from 'lucide-react';

const MobileHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-6 w-24 h-24 bg-green-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-40 left-8 w-20 h-20 bg-pink-400/20 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 py-8 flex flex-col items-center text-center">
        {/* Logo section */}
        <div className="mb-8 mt-12">
          <div className="relative">
            <img 
              src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
              alt="0.1 SOL Community Logo"
              className="w-32 h-32 mx-auto rounded-full border-4 border-white/30 shadow-2xl"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-yellow-800" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
            Just Buy
          </h1>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-2xl font-black text-2xl shadow-lg transform -rotate-1">
            0.1 SOL!!!
          </div>
        </div>

        {/* Description card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-8 border border-white/20 shadow-xl">
          <p className="text-white text-lg font-semibold mb-4 leading-relaxed">
            Super simple meme token!
          </p>
          <p className="text-white/80 text-base mb-4">
            No complicated stuff - just buy 0.1 SOL worth and HODL with the community!
          </p>
          
          {/* Warning */}
          <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 mb-4">
            <p className="text-red-200 text-sm font-semibold">
              ⚠️ This is a MEME! Not financial advice!
            </p>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <div className="bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-green-300" />
            <span className="text-green-200 text-sm font-semibold">Community</span>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-full px-4 py-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-200 text-sm font-semibold">0.1 SOL Only</span>
          </div>
          
          <div className="bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2">
            <span className="text-purple-200 text-sm font-semibold">Just HODL!</span>
          </div>
        </div>

        {/* CTA Arrow */}
        <div className="animate-bounce mb-4">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>

        {/* Scroll indicator */}
        <p className="text-white/50 text-sm">Swipe up to trade</p>
      </div>
    </div>
  );
};

export default MobileHero;