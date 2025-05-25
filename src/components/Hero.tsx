
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-2 sm:px-4 py-8 sm:py-12 lg:py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-yellow-300 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black border-dashed mb-4 sm:mb-6 lg:mb-8 shadow-xl sm:shadow-2xl" style={{
            transform: 'rotate(-2deg) skew(-1deg) scale(1.05)',
            animation: 'wiggle 3s ease-in-out infinite'
          }}>
            <span className="text-lg sm:text-xl lg:text-2xl text-green-900 font-black" style={{
              fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
              transform: 'rotate(3deg) translateY(-1px)',
              display: 'inline-block',
              letterSpacing: '2px'
            }}>
              ◎ MEME COIN IS HERE!!! ◎
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-yellow-400 mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-lg" style={{
            fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
            transform: 'rotate(-1deg) skew(-0.5deg)',
            letterSpacing: '3px'
          }}>
            <span style={{
              transform: 'rotate(-2deg) translateX(-5px)',
              display: 'inline-block'
            }}>Just</span>{' '}
            <span style={{
              transform: 'rotate(1deg) translateY(-3px)',
              display: 'inline-block'
            }}>Buy</span>
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block mt-2 sm:mt-4" style={{
              transform: 'rotate(2deg) skew(1deg) translateX(10px)',
              letterSpacing: '4px'
            }}>
              <span style={{
                transform: 'rotate(-1deg)',
                display: 'inline-block'
              }}>0.1</span>{' '}
              <span style={{
                transform: 'rotate(3deg) translateY(-2px)',
                display: 'inline-block'
              }}>SOL!!!</span>
            </span>
          </h1>
          
          <div className="bg-green-400 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl max-w-4xl mx-auto" style={{
            transform: 'rotate(1deg) skew(-0.5deg)',
            position: 'relative'
          }}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-yellow-900 mb-3 sm:mb-4 lg:mb-6 leading-relaxed font-black" style={{
              fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
              transform: 'rotate(-1deg) skew(0.5deg)',
              letterSpacing: '2px'
            }}>
              <span style={{
                transform: 'rotate(2deg) translateY(-2px)',
                display: 'inline-block'
              }}>SUPER</span>{' '}
              <span style={{
                transform: 'rotate(-1deg) translateX(3px)',
                display: 'inline-block'
              }}>SIMPLE!!!</span>{' '}
              <span style={{
                transform: 'rotate(1deg) translateY(1px)',
                display: 'inline-block'
              }}>Just</span>{' '}
              <span style={{
                transform: 'rotate(-2deg) scale(1.1)',
                display: 'inline-block'
              }}>buy</span>{' '}
              <span style={{
                transform: 'rotate(2deg) translateX(-2px)',
                display: 'inline-block'
              }}>0.1</span>{' '}
              <span style={{
                transform: 'rotate(-1deg) translateY(-1px)',
                display: 'inline-block'
              }}>SOL</span>{' '}
              <span style={{
                transform: 'rotate(3deg) scale(1.05)',
                display: 'inline-block'
              }}>worth!!!</span>
            </p>
            <div className="bg-yellow-300 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-4 border-black border-dashed inline-block shadow-lg" style={{
              transform: 'rotate(-2deg) skew(1deg)',
              position: 'relative'
            }}>
              <span className="text-lg sm:text-xl lg:text-2xl text-green-900 font-black" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                transform: 'rotate(1deg) translateX(-1px)',
                display: 'inline-block',
                letterSpacing: '1px'
              }}>
                <span style={{
                  transform: 'rotate(-1deg)',
                  display: 'inline-block'
                }}>No</span>{' '}
                <span style={{
                  transform: 'rotate(2deg) translateY(-1px)',
                  display: 'inline-block'
                }}>complicated</span>{' '}
                <span style={{
                  transform: 'rotate(-1deg) scale(1.05)',
                  display: 'inline-block'
                }}>stuff!</span>{' '}
                <span style={{
                  transform: 'rotate(1deg) translateX(2px)',
                  display: 'inline-block'
                }}>Just</span>{' '}
                <span style={{
                  transform: 'rotate(-2deg) translateY(1px)',
                  display: 'inline-block'
                }}>HODL</span>{' '}
                <span style={{
                  transform: 'rotate(2deg)',
                  display: 'inline-block'
                }}>together!</span> ◎🚀
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 text-sm">
            <div className="flex items-center space-x-2 sm:space-x-3 bg-yellow-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl" style={{
              transform: 'rotate(-3deg) skew(-1deg)',
              animation: 'bounce 2s infinite'
            }}>
              <span className="text-2xl sm:text-3xl lg:text-4xl" style={{
                transform: 'rotate(5deg)',
                display: 'inline-block'
              }}>◎</span>
              <span className="text-green-900 font-black text-lg sm:text-xl lg:text-2xl" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                transform: 'rotate(1deg) translateY(-1px)',
                letterSpacing: '1px'
              }}>
                Just 0.1 SOL!
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-green-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl" style={{
              transform: 'rotate(2deg) skew(1deg)',
              animation: 'wiggle 2.5s ease-in-out infinite'
            }}>
              <span className="text-2xl sm:text-3xl lg:text-4xl" style={{
                transform: 'rotate(-3deg)',
                display: 'inline-block'
              }}>🤝</span>
              <span className="text-yellow-900 font-black text-lg sm:text-xl lg:text-2xl" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                transform: 'rotate(-1deg) translateX(1px)',
                letterSpacing: '1px'
              }}>
                Community!
              </span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 bg-yellow-400 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black border-dashed shadow-xl sm:shadow-2xl" style={{
              transform: 'rotate(-1deg) skew(-0.5deg)',
              animation: 'pulse 2s infinite'
            }}>
              <span className="text-2xl sm:text-3xl lg:text-4xl" style={{
                transform: 'rotate(4deg)',
                display: 'inline-block'
              }}>💎</span>
              <span className="text-green-900 font-black text-lg sm:text-xl lg:text-2xl" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                transform: 'rotate(2deg) translateY(1px)',
                letterSpacing: '2px'
              }}>
                HODL!
              </span>
            </div>
          </div>

          <div className="flex items-center text-yellow-400 drop-shadow-lg" style={{
            transform: 'rotate(-2deg)',
            animation: 'bounce 1.5s infinite'
          }}>
            <ArrowDown size={48} strokeWidth={4} className="sm:w-16 sm:h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
