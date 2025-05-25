
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-300/20 backdrop-blur-sm rounded-full border-2 border-yellow-400 border-dashed mb-6 transform -rotate-1">
            <span className="text-lg text-yellow-300 font-bold">🚀 MEME COIN IS HERE!!!</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight transform -rotate-1" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '4px 4px 0px #ff6b6b, 8px 8px 0px #4ecdc4'
          }}>
            Just Buy
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block transform rotate-2"> $1 DOLLAR!!!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed transform rotate-1" style={{
            fontFamily: 'Comic Sans MS, cursive'
          }}>
            SUPER SIMPLE!!! Just buy $1 worth!!!
            <span className="block mt-2 text-xl text-yellow-300 transform -rotate-1">
              No complicated stuff! Just HODL together! 🚀🌙
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-lg border-2 border-pink-400 border-dashed transform rotate-2">
              <span className="text-2xl">🎉</span>
              <span className="text-white font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>Just $1!</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg border-2 border-green-400 border-dashed transform -rotate-1">
              <span className="text-2xl">🤝</span>
              <span className="text-white font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>Community!</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg border-2 border-blue-400 border-dashed transform rotate-1">
              <span className="text-2xl">💎</span>
              <span className="text-white font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>HODL!</span>
            </div>
          </div>

          <div className="flex items-center text-yellow-300 animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
