
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8">
          {/* Static Logo */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <img 
              src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
              alt="0.1 SOL Community Logo"
              className="w-96 h-auto sm:w-[32rem] lg:w-[40rem] xl:w-[48rem]"
            />
          </div>
          
          {/* Enhanced Main Title */}
          <div className="flex justify-center">
            <h1 className="inline-block bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border-4 border-black crayon-text super-thick mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-lg glow-effect" style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
            transform: 'rotate(-1deg) skew(-0.5deg)',
            letterSpacing: '4px',
            animationDelay: '0.2s'
          }}>
            <span className="block transition-bounce hover:scale-110" style={{
              transform: 'rotate(-2deg) translateX(-5px)',
              display: 'inline-block'
            }}>Just</span>{' '}
            <span className="block transition-bounce hover:scale-110" style={{
              transform: 'rotate(1deg) translateY(-3px)',
              display: 'inline-block'
            }}>Buy</span>
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent block mt-2 sm:mt-4 transition-bounce hover:scale-110" style={{
              transform: 'rotate(2deg) skew(1deg) translateX(10px)',
              letterSpacing: '5px'
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
          </div>
          
          {/* Enhanced Description Box */}
          <div className="meme-card bg-green-600 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl brutal-shadow-xl max-w-4xl mx-auto transition-bounce hover:scale-105 hover:rotate-1" style={{
            transform: 'rotate(1deg) skew(-0.5deg)',
            position: 'relative',
            animationDelay: '0.4s'
          }}>
            <p className="text-responsive-lg text-white mb-3 sm:mb-4 lg:mb-6 leading-relaxed crayon-text" style={{
              transform: 'rotate(-1deg) skew(0.5deg)',
              letterSpacing: '3px',
              textShadow: '3px 3px 0px #000000'
            }}>
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg) translateY(-2px)'
              }}>SUPER</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg) translateX(3px)'
              }}>SIMPLE!!!</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(1deg) translateY(1px)'
              }}>Just</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-2deg) scale(1.1)'
              }}>buy</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg) translateX(-2px)'
              }}>0.1</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg) translateY(-1px)'
              }}>SOL</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(3deg) scale(1.05)'
              }}>worth!!!</span>
            </p>
            
            {/* Enhanced Sub-description */}
            <div className="bg-yellow-600 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-4 border-black border-dashed inline-block brutal-shadow transition-bounce hover:scale-105 hover:rotate-2" style={{
              transform: 'rotate(-2deg) skew(1deg)',
              position: 'relative'
            }}>
              <span className="text-responsive-sm text-black crayon-text" style={{
                transform: 'rotate(1deg) translateX(-1px)',
                display: 'inline-block',
                letterSpacing: '2px',
                textShadow: '2px 2px 0px #ffffff'
              }}>
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(-1deg)'
                }}>No</span>{' '}
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(2deg) translateY(-1px)'
                }}>complicated</span>{' '}
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(-1deg) scale(1.05)'
                }}>stuff!</span>{' '}
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(1deg) translateX(2px)'
                }}>Just</span>{' '}
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(-2deg) translateY(1px)'
                }}>HODL</span>{' '}
                <span className="transition-bounce hover:scale-110 inline-block" style={{
                  transform: 'rotate(2deg)'
                }}>together!</span>
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 text-sm">
            <div className="flex items-center space-x-2 sm:space-x-3 meme-card px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl sm:rounded-2xl brutal-shadow-lg transition-bounce hover:scale-110 hover:rotate-3" style={{
              transform: 'rotate(-3deg) skew(-1deg)',
              animationDelay: '0.6s'
            }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-4 sm:border-6 lg:border-8 border-green-900 brutal-shadow-lg transition-bounce hover:scale-110 hover:rotate-12 glow-effect" style={{
                transform: 'rotate(-5deg) scale(1.05)'
              }}>
              </div>
              <span className="text-black crayon-text text-responsive-sm" style={{
                transform: 'rotate(1deg) translateY(-1px)',
                letterSpacing: '2px',
                textShadow: '1px 1px 0px #ffffff'
              }}>
                Just 0.1 SOL!
              </span>
            </div>
            
            <div className="bg-green-600 hover:bg-green-700 p-4 rounded-xl border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:-rotate-2 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl transition-bounce hover:scale-125" style={{
                transform: 'rotate(-3deg)',
                display: 'inline-block'
              }}>👥</span>
              <span className="text-white crayon-text text-responsive-sm" style={{
                transform: 'rotate(-1deg) translateX(1px)',
                letterSpacing: '2px',
                textShadow: '2px 2px 0px #000000'
              }}>
                Community!
              </span>
            </div>
            
            <div className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-xl border-4 border-black transform rotate-2 brutal-shadow transition-bounce hover:scale-105 hover:rotate-3 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl transition-bounce hover:scale-125" style={{
                transform: 'rotate(4deg)',
                display: 'inline-block'
              }}>⭐</span>
              <span className="text-black crayon-text text-responsive-sm" style={{
                transform: 'rotate(2deg) translateY(1px)',
                letterSpacing: '3px',
                textShadow: '1px 1px 0px #ffffff'
              }}>
                HODL!
              </span>
            </div>
          </div>

          {/* Enhanced Arrow */}
          <div className="flex items-center text-yellow-400 drop-shadow-lg transition-bounce hover:scale-125" style={{
            transform: 'rotate(-2deg)',
            animationDelay: '1.2s'
          }}>
            <ArrowDown size={48} strokeWidth={4} className="sm:w-16 sm:h-16 glow-effect" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
