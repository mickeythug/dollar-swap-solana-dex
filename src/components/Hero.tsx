
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-2 sm:px-4 py-8 sm:py-12 lg:py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-yellow-300 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black border-dashed mb-4 sm:mb-6 lg:mb-8 shadow-xl sm:shadow-2xl">
            <span className="text-lg sm:text-xl lg:text-2xl text-green-900 font-black font-sans">
              ◎ MEME COIN IS HERE!!! ◎
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-yellow-400 mb-4 sm:mb-6 lg:mb-8 leading-tight font-sans drop-shadow-lg">
            Just Buy
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block mt-2 sm:mt-4"> 0.1 SOL!!!</span>
          </h1>
          
          <div className="bg-green-400 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-900 mb-3 sm:mb-4 lg:mb-6 leading-relaxed font-black font-sans">
              SUPER SIMPLE!!! Just buy 0.1 SOL worth!!!
            </p>
            <div className="bg-yellow-300 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-4 border-black border-dashed inline-block shadow-lg">
              <span className="text-lg sm:text-xl lg:text-2xl text-green-900 font-black font-sans">
                No complicated stuff! Just HODL together! ◎🚀
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 text-sm">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-yellow-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl">
              <span className="text-2xl sm:text-3xl lg:text-4xl">◎</span>
              <span className="text-green-900 font-black text-lg sm:text-xl lg:text-2xl font-sans">
                Just 0.1 SOL!
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-green-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl">
              <span className="text-2xl sm:text-3xl lg:text-4xl">🤝</span>
              <span className="text-yellow-900 font-black text-lg sm:text-xl lg:text-2xl font-sans">
                Community!
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-yellow-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl">
              <span className="text-2xl sm:text-3xl lg:text-4xl">💎</span>
              <span className="text-green-900 font-black text-lg sm:text-xl lg:text-2xl font-sans">
                HODL!
              </span>
            </div>
          </div>

          <div className="flex items-center text-yellow-400 drop-shadow-lg">
            <ArrowDown size={48} strokeWidth={4} className="sm:w-16 sm:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
