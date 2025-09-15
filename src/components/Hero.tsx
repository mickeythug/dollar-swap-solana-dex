import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-2 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          
          {/* Enhanced Main Title with better micro typography */}
          <div className="flex justify-center">
            <h1 className="inline-block bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-3xl border-6 border-black crayon-text super-thick mb-6 sm:mb-8 lg:mb-12 leading-tight drop-shadow-2xl glow-strong" style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              transform: 'rotate(-1deg) skew(-0.5deg)',
              letterSpacing: '4px',
              animationDelay: '0.2s',
              textShadow: '4px 4px 0px rgba(0,0,0,0.4)'
            }}>
            <span className="block transition-all duration-600 hover:scale-110 hover:rotate-1" style={{
              transform: 'rotate(-2deg) translateX(-5px)',
              display: 'inline-block'
            }}>Just</span>{' '}
            <span className="block transition-all duration-600 hover:scale-110 hover:-rotate-1" style={{
              transform: 'rotate(1deg) translateY(-3px)',
              display: 'inline-block'
            }}>Buy</span>
            <span className="text-red-600 block mt-3 sm:mt-6 transition-all duration-600 hover:scale-110 hover:rotate-2" style={{
              transform: 'rotate(2deg) skew(1deg) translateX(10px)',
              letterSpacing: '6px',
              filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.5))'
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
            <span className="block mt-4 sm:mt-6 text-black bg-white px-4 py-3 rounded-2xl border-4 border-black inline-block transition-all duration-600 hover:scale-110 hover:-rotate-1" style={{
              transform: 'rotate(-1deg) translateX(-10px)',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              letterSpacing: '3px',
              textShadow: '3px 3px 0px rgba(0,0,0,0.3)'
            }}>
              It's not that big of a deal!
            </span>
          </h1>
          </div>
          
          {/* Enhanced Description Box with improved depth */}
          <div className="meme-card bg-gradient-to-br from-green-600 via-green-700 to-green-800 p-6 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[2rem] brutal-shadow-xl max-w-5xl mx-auto transition-all duration-600 hover:scale-105 hover:rotate-1" style={{
            transform: 'rotate(1deg) skew(-0.5deg)',
            position: 'relative',
            animationDelay: '0.4s'
          }}>
            <p className="text-responsive-lg text-white mb-4 sm:mb-6 lg:mb-8 leading-relaxed crayon-text" style={{
              transform: 'rotate(-1deg) skew(0.5deg)',
              letterSpacing: '3px',
              textShadow: '4px 4px 0px #000000'
            }}>
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg) translateY(-2px)'
              }}>SUPER</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg) translateX(3px)'
              }}>SIMPLE!!!</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(1deg) translateY(1px)'
              }}>Just</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(-2deg) scale(1.1)'
              }}>buy</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg) translateX(-2px)'
              }}>0.1</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg) translateY(-1px)'
              }}>SOL</span>{' '}
              <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                transform: 'rotate(3deg) scale(1.05)'
              }}>worth!!!</span>
            </p>
            
            {/* Enhanced Sub-description with better styling */}
            <div className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-6 border-black border-dashed inline-block brutal-shadow-lg transition-all duration-600 hover:scale-105 hover:rotate-2" style={{
              transform: 'rotate(-2deg) skew(1deg)',
              position: 'relative'
            }}>
              <span className="text-responsive-sm text-black crayon-text" style={{
                transform: 'rotate(1deg) translateX(-1px)',
                display: 'inline-block',
                letterSpacing: '2px',
                textShadow: '3px 3px 0px #ffffff'
              }}>
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(-1deg)'
                }}>No</span>{' '}
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(2deg) translateY(-1px)'
                }}>complicated</span>{' '}
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(-1deg) scale(1.05)'
                }}>stuff!</span>{' '}
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(1deg) translateX(2px)'
                }}>Just</span>{' '}
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(-2deg) translateY(1px)'
                }}>HODL</span>{' '}
                <span className="transition-all duration-500 hover:scale-110 inline-block" style={{
                  transform: 'rotate(2deg)'
                }}>together!</span>
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards with improved spacing and effects */}
        <div className="flex flex-col items-center space-y-8 sm:space-y-12">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 text-sm">
            <div className="flex items-center space-x-3 sm:space-x-4 meme-card px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-2xl sm:rounded-3xl brutal-shadow-xl transition-all duration-600 hover:scale-110 hover:rotate-3" style={{
              transform: 'rotate(-3deg) skew(-1deg)',
              animationDelay: '0.6s'
            }}>
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border-6 sm:border-8 lg:border-10 border-green-900 brutal-shadow-lg transition-all duration-600 hover:scale-110 hover:rotate-12 glow-strong overflow-hidden" style={{
                transform: 'rotate(-5deg) scale(1.05)'
              }}>
                <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-black crayon-text text-responsive-sm" style={{
                transform: 'rotate(1deg) translateY(-1px)',
                letterSpacing: '3px',
                textShadow: '2px 2px 0px #ffffff'
              }}>
                Just 0.1 SOL!
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-6 rounded-2xl border-6 border-black transform -rotate-1 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:-rotate-2 text-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl transition-all duration-600 hover:scale-125" style={{
                transform: 'rotate(-3deg)',
                display: 'inline-block'
              }}>👥</span>
              <span className="text-white crayon-text text-responsive-sm block mt-2" style={{
                transform: 'rotate(-1deg) translateX(1px)',
                letterSpacing: '2px',
                textShadow: '3px 3px 0px #000000'
              }}>
                Community!
              </span>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 p-6 rounded-2xl border-6 border-black transform rotate-2 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:rotate-3 text-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl transition-all duration-600 hover:scale-125" style={{
                transform: 'rotate(4deg)',
                display: 'inline-block'
              }}>⭐</span>
              <span className="text-black crayon-text text-responsive-sm block mt-2" style={{
                transform: 'rotate(2deg) translateY(1px)',
                letterSpacing: '3px',
                textShadow: '2px 2px 0px #ffffff'
              }}>
                HODL!
              </span>
            </div>
          </div>

          {/* Enhanced Arrow with improved animation */}
          <div className="flex items-center text-yellow-400 drop-shadow-2xl transition-all duration-600 hover:scale-125 hover:text-yellow-300" style={{
            transform: 'rotate(-2deg)',
            animationDelay: '1.2s'
          }}>
            <ArrowDown size={56} strokeWidth={5} className="sm:w-20 sm:h-20 glow-strong animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;