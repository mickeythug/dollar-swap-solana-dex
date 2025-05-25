
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-yellow-200/30 backdrop-blur-sm rounded-full border-4 border-green-600 border-dashed mb-8 transform -rotate-3 shadow-lg">
            <span className="text-xl text-green-800 font-black transform rotate-1" style={{fontFamily: 'Comic Sans MS, cursive'}}>💵 MEME COIN IS HERE!!! 💵</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-green-900 mb-8 leading-tight transform -rotate-2" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '6px 6px 0px #fde047, 12px 12px 0px #16a34a, -3px -3px 0px #dcfce7'
          }}>
            Just Buy
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent block transform rotate-3 mt-4"> $1 DOLLAR!!!</span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-green-800 mb-8 max-w-3xl mx-auto leading-relaxed transform rotate-1 font-black" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '2px 2px 0px #fde047'
          }}>
            SUPER SIMPLE!!! Just buy $1 worth!!!
            <span className="block mt-4 text-xl text-green-700 transform -rotate-2 bg-yellow-200/20 p-3 rounded-lg border-3 border-green-500 border-dashed inline-block">
              No complicated stuff! Just HODL together! 💵🚀
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-3 bg-green-500/30 px-6 py-4 rounded-xl border-4 border-yellow-400 border-dashed transform rotate-3 shadow-xl">
              <span className="text-3xl">💵</span>
              <span className="text-green-900 font-black text-lg" style={{fontFamily: 'Comic Sans MS, cursive'}}>Just $1!</span>
            </div>
            <div className="flex items-center space-x-3 bg-yellow-300/30 px-6 py-4 rounded-xl border-4 border-green-600 border-dashed transform -rotate-2 shadow-xl">
              <span className="text-3xl">🤝</span>
              <span className="text-green-900 font-black text-lg" style={{fontFamily: 'Comic Sans MS, cursive'}}>Community!</span>
            </div>
            <div className="flex items-center space-x-3 bg-green-400/30 px-6 py-4 rounded-xl border-4 border-yellow-500 border-dashed transform rotate-1 shadow-xl">
              <span className="text-3xl">💎</span>
              <span className="text-green-900 font-black text-lg" style={{fontFamily: 'Comic Sans MS, cursive'}}>HODL!</span>
            </div>
          </div>

          <div className="flex items-center text-green-700 animate-bounce transform scale-150">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
