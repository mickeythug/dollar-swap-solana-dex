
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-4 py-16 text-center overflow-hidden">
      {/* Static cartoon elements */}
      <div className="absolute top-10 left-10 text-6xl">🚀</div>
      <div className="absolute top-20 right-20 text-5xl">💎</div>
      <div className="absolute bottom-20 left-20 text-4xl">🌙</div>
      <div className="absolute bottom-10 right-10 text-5xl">⭐</div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-8">
          <div className="inline-flex items-center px-10 py-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full border-8 border-black border-dashed mb-8 transform -rotate-4 shadow-2xl" style={{
            boxShadow: '15px 15px 0px #000000, 10px 10px 0px #16a34a, 5px 5px 0px #dc2626'
          }}>
            <span className="text-3xl text-green-900 font-black transform rotate-2" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px #000000, 2px 2px 0px #fbbf24'
            }}>◎ MEME COIN IS HERE!!! ◎ 🎉</span>
          </div>
          
          <h1 className="text-8xl md:text-[14rem] font-black text-yellow-400 mb-8 leading-tight transform -rotate-3" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '12px 12px 0px #000000, 24px 24px 0px #16a34a, 8px 8px 0px #fde047, 4px 4px 0px #dc2626',
            WebkitTextStroke: '6px #000000'
          }}>
            Just Buy
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent block transform rotate-4 mt-4" style={{
              WebkitTextStroke: '4px #000000'
            }}> 0.1 SOL!!!</span>
          </h1>
          
          <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-10 rounded-full border-8 border-black border-dashed transform rotate-2 shadow-2xl max-w-4xl mx-auto" style={{
            boxShadow: '20px 20px 0px #000000, 15px 15px 0px #fbbf24, 10px 10px 0px #dc2626'
          }}>
            <p className="text-4xl md:text-6xl text-yellow-100 mb-8 leading-relaxed transform -rotate-1 font-black" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '6px 6px 0px #000000, 3px 3px 0px #16a34a'
            }}>
              SUPER SIMPLE!!! Just buy 0.1 SOL worth!!! 🎊
            </p>
            <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-8 rounded-full border-6 border-black border-dashed inline-block transform rotate-1" style={{
              boxShadow: '10px 10px 0px #000000, 6px 6px 0px #16a34a'
            }}>
              <span className="text-3xl text-green-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #000000'
              }}>
                No complicated stuff! Just HODL together! ◎🚀💎
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-4 bg-gradient-to-r from-yellow-300 to-yellow-500 px-10 py-8 rounded-full border-8 border-black border-dashed transform rotate-4 shadow-2xl" style={{
              boxShadow: '12px 12px 0px #000000, 8px 8px 0px #16a34a'
            }}>
              <span className="text-5xl">◎</span>
              <span className="text-green-900 font-black text-3xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #000000'
              }}>Just 0.1 SOL! 🎯</span>
            </div>
            <div className="flex items-center space-x-4 bg-gradient-to-r from-green-400 to-green-600 px-10 py-8 rounded-full border-8 border-black border-dashed transform -rotate-3 shadow-2xl" style={{
              boxShadow: '12px 12px 0px #000000, 8px 8px 0px #fbbf24'
            }}>
              <span className="text-5xl">🤝</span>
              <span className="text-yellow-100 font-black text-3xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #000000'
              }}>Community! 💫</span>
            </div>
            <div className="flex items-center space-x-4 bg-gradient-to-r from-yellow-400 to-yellow-600 px-10 py-8 rounded-full border-8 border-black border-dashed transform rotate-2 shadow-2xl" style={{
              boxShadow: '12px 12px 0px #000000, 8px 8px 0px #dc2626'
            }}>
              <span className="text-5xl">💎</span>
              <span className="text-green-900 font-black text-3xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #000000'
              }}>HODL! 🚀</span>
            </div>
          </div>

          <div className="flex items-center text-yellow-400 transform scale-[300%]" style={{
            filter: 'drop-shadow(6px 6px 0px #000000)'
          }}>
            <ArrowDown size={64} strokeWidth={6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
