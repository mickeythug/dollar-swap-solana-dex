import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-8 py-4 bg-yellow-300 rounded-3xl border-6 border-black border-dashed mb-8 transform -rotate-4 shadow-2xl" style={{
            boxShadow: '10px 10px 0px #000000'
          }}>
            <span className="text-2xl text-green-900 font-black transform rotate-2" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px #000000'
            }}>◎ MEME COIN IS HERE!!! ◎</span>
          </div>
          
          <h1 className="text-8xl md:text-[12rem] font-black text-yellow-400 mb-8 leading-tight transform -rotate-3" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '8px 8px 0px #000000, 16px 16px 0px #16a34a, 4px 4px 0px #fde047',
            WebkitTextStroke: '4px #000000'
          }}>
            Just Buy
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block transform rotate-4 mt-4" style={{
              WebkitTextStroke: '2px #000000'
            }}> 0.1 SOL!!!</span>
          </h1>
          
          <div className="bg-green-400 p-8 rounded-3xl border-6 border-black border-dashed transform rotate-2 shadow-2xl max-w-4xl mx-auto" style={{
            boxShadow: '12px 12px 0px #000000'
          }}>
            <p className="text-3xl md:text-5xl text-yellow-900 mb-6 leading-relaxed transform -rotate-1 font-black" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px #000000'
            }}>
              SUPER SIMPLE!!! Just buy 0.1 SOL worth!!!
            </p>
            <div className="bg-yellow-300 p-6 rounded-2xl border-4 border-black border-dashed inline-block transform rotate-1" style={{
              boxShadow: '6px 6px 0px #000000'
            }}>
              <span className="text-2xl text-green-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>
                No complicated stuff! Just HODL together! ◎🚀
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-3 bg-yellow-300 px-8 py-6 rounded-2xl border-6 border-black border-dashed transform rotate-4 shadow-2xl" style={{
              boxShadow: '8px 8px 0px #000000'
            }}>
              <span className="text-4xl">◎</span>
              <span className="text-green-900 font-black text-2xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>Just 0.1 SOL!</span>
            </div>
            <div className="flex items-center space-x-3 bg-green-400 px-8 py-6 rounded-2xl border-6 border-black border-dashed transform -rotate-3 shadow-2xl" style={{
              boxShadow: '8px 8px 0px #000000'
            }}>
              <span className="text-4xl">🤝</span>
              <span className="text-yellow-900 font-black text-2xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>Community!</span>
            </div>
            <div className="flex items-center space-x-3 bg-yellow-400 px-8 py-6 rounded-2xl border-6 border-black border-dashed transform rotate-2 shadow-2xl" style={{
              boxShadow: '8px 8px 0px #000000'
            }}>
              <span className="text-4xl">💎</span>
              <span className="text-green-900 font-black text-2xl" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>HODL!</span>
            </div>
          </div>

          <div className="flex items-center text-yellow-400 animate-bounce transform scale-[200%]" style={{
            filter: 'drop-shadow(4px 4px 0px #000000)'
          }}>
            <ArrowDown size={48} strokeWidth={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
