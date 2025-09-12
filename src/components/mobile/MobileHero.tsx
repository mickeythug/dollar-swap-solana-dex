import React from 'react';
import { ArrowDown } from 'lucide-react';

const MobileHero = () => {
  return (
    <div className="min-h-screen bg-green-800 relative overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(45deg, #166534 25%, transparent 25%),
        linear-gradient(-45deg, #166534 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #166534 75%),
        linear-gradient(-45deg, transparent 75%, #166534 75%)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
    }}>
      {/* Same gradient overlays as desktop */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-yellow-600/30 to-green-700/80"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(0, 100, 0, 0.8) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(34, 139, 34, 0.7) 0%, transparent 40%)
        `
      }}></div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-8 flex flex-col items-center text-center">
        {/* Logo section - 2x bigger */}
        <div className="mb-8 mt-16">
          <div className="flex justify-center px-4">
            <img 
              src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
              alt="0.1 SOL Community Logo"
              className="w-96 h-auto max-w-full"
            />
          </div>
        </div>

        {/* Title - unified text style without shadows */}
        <div className="mb-8 px-2">
          <div className="flex justify-center">
            <div className="max-w-sm w-full">
              <h1 className="inline-block bg-yellow-400 text-black px-4 py-3 rounded-2xl border-4 border-black crayon-text super-thick mb-6 leading-tight drop-shadow-lg glow-effect text-center w-full" style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                transform: 'rotate(-1deg) skew(-0.5deg)',
                letterSpacing: '2px'
              }}>
                <span className="block transition-bounce hover:scale-110" style={{
                  transform: 'rotate(-2deg) translateX(-2px)',
                  display: 'inline-block'
                }}>Just</span>{' '}
                <span className="block transition-bounce hover:scale-110" style={{
                  transform: 'rotate(1deg) translateY(-1px)',
                  display: 'inline-block'
                }}>Buy</span>
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent block mt-2 transition-bounce hover:scale-110" style={{
                  transform: 'rotate(2deg) skew(1deg) translateX(3px)',
                  letterSpacing: '3px'
                }}>
                  <span style={{
                    transform: 'rotate(-1deg)',
                    display: 'inline-block'
                  }}>0.1</span>{' '}
                  <span style={{
                    transform: 'rotate(3deg) translateY(-1px)',
                    display: 'inline-block'
                  }}>SOL!!!</span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description card - unified text style */}
        <div className="meme-card bg-green-600 p-4 rounded-2xl brutal-shadow-xl max-w-xs mx-auto mb-8 transition-bounce hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(1deg) skew(-0.5deg)'
        }}>
          <div className="text-white leading-relaxed crayon-text text-base overflow-hidden" style={{
            transform: 'rotate(-1deg) skew(0.5deg)',
            letterSpacing: '1px'
          }}>
            <p className="mb-3">
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg) translateY(-1px)'
              }}>SUPER</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg) translateX(1px)'
              }}>SIMPLE!!!</span>
            </p>
            <p className="mb-3">
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(1deg)'
              }}>Just</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-2deg) scale(1.02)'
              }}>buy</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(2deg)'
              }}>0.1</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(-1deg)'
              }}>SOL</span>{' '}
              <span className="transition-bounce hover:scale-110 inline-block" style={{
                transform: 'rotate(3deg)'
              }}>worth!</span>
            </p>
          </div>
          
          {/* Warning - unified text style */}
          <div className="bg-red-500 p-3 rounded-xl border-4 border-black transform -rotate-1 brutal-shadow-lg mt-4">
            <p className="text-white text-xs font-black text-center crayon-text leading-tight">
              ⚠️ THIS IS A MEME!<br />NOT FINANCIAL ADVICE! ⚠️
            </p>
          </div>
        </div>

        {/* Feature cards - unified text style */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 px-2">
          <div className="flex items-center space-x-2 meme-card px-3 py-2 rounded-xl brutal-shadow-lg transition-bounce hover:scale-110 hover:rotate-3" style={{
            transform: 'rotate(-2deg) skew(-0.5deg)'
          }}>
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-3 border-green-900 brutal-shadow-lg transition-bounce hover:scale-110 hover:rotate-12 glow-effect" style={{
              transform: 'rotate(-3deg) scale(1.05)'
            }}>
            </div>
            <span className="text-black crayon-text text-xs whitespace-nowrap" style={{
              transform: 'rotate(1deg)',
              letterSpacing: '1px'
            }}>
              Just 0.1!
            </span>
          </div>
          
          <div className="bg-green-600 hover:bg-green-700 p-2 rounded-xl border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:-rotate-2 text-center min-w-0">
            <span className="text-xl transition-bounce hover:scale-125 block" style={{
              transform: 'rotate(-2deg)',
              display: 'inline-block'
            }}>👥</span>
            <span className="text-white crayon-text text-xs block" style={{
              transform: 'rotate(-1deg)',
              letterSpacing: '1px'
            }}>
              Community!
            </span>
          </div>
          
          <div className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded-xl border-4 border-black transform rotate-2 brutal-shadow transition-bounce hover:scale-105 hover:rotate-3 text-center min-w-0">
            <span className="text-xl transition-bounce hover:scale-125 block" style={{
              transform: 'rotate(3deg)',
              display: 'inline-block'
            }}>⭐</span>
            <span className="text-black crayon-text text-xs block" style={{
              transform: 'rotate(1deg)',
              letterSpacing: '1px'
            }}>
              HODL!
            </span>
          </div>
        </div>

        {/* Enhanced Arrow - same as desktop */}
        <div className="flex items-center text-yellow-400 drop-shadow-lg transition-bounce hover:scale-125 mb-4" style={{
          transform: 'rotate(-1deg)'
        }}>
          <ArrowDown size={32} strokeWidth={4} className="glow-effect" />
        </div>

        {/* Scroll indicator - unified text style */}
        <p className="text-white crayon-text text-sm px-4 text-center">Swipe up to trade!</p>
      </div>
    </div>
  );
};

export default MobileHero;