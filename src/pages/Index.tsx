import React from 'react';
import { ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletContextProvider } from '../contexts/WalletContextProvider';
import { useIsMobile } from '../hooks/use-mobile';
import SwapInterface from '../components/SwapInterface';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MarketCapCounter from '../components/MarketCapCounter';
import Community from '../components/Community';
import MobileApp from '../components/mobile/MobileApp';

const Index = () => {
  const isMobile = useIsMobile();

  // Return mobile-specific app for mobile devices
  if (isMobile) {
    return (
      <WalletContextProvider>
        <MobileApp />
      </WalletContextProvider>
    );
  }

  // Return desktop version for non-mobile devices
  return (
    <WalletContextProvider>
      <div className="min-h-screen px-2 lg:px-6 xl:px-8" style={{
        backgroundImage: 'url(/bgbild.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        
        {/* Enhanced gradient overlays with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-yellow-600/30 to-green-700/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-800/40 via-transparent to-yellow-500/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(0, 100, 0, 0.7) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, rgba(255, 215, 0, 0.5) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(34, 139, 34, 0.6) 0%, transparent 35%)
          `
        }}></div>
        
        <Header />
        <Hero />
        
        {/* Enhanced side by side layout with improved spacing */}
        <section id="swap" className="relative z-10 px-2 sm:px-4 lg:px-8 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">
              <MarketCapCounter />
              <SwapInterface />
            </div>
          </div>
        </section>

        {/* Enhanced About Section with micro improvements */}
        <section id="about" className="relative z-10 px-2 sm:px-4 lg:px-8 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced title section */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-block">
                <h2 className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black px-8 py-6 rounded-3xl border-6 border-black font-black text-3xl lg:text-4xl brutal-shadow-xl transform rotate-1 hover:rotate-2 transition-all duration-500" style={{
                  letterSpacing: '2px',
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)'
                }}>
                  About Just Buy 0.1 SOL!
                </h2>
              </div>
              <p className="text-white text-xl lg:text-2xl font-black mt-8 drop-shadow-lg">
                The simplest meme on Solana!
              </p>
            </div>

            {/* Enhanced hero image with better positioning */}
            <div className="flex justify-center mb-16 lg:mb-20">
              <img 
                src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
                alt="0.1 SOL Community Logo"
                className="w-full max-w-5xl h-auto transform rotate-1 drop-shadow-2xl hover:rotate-2 transition-all duration-700"
              />
            </div>

            {/* Enhanced animated cartoon boxes with improved styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 max-w-6xl mx-auto">
              {/* Vision Box - Enhanced */}
              <div className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-600 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-yellow-300 px-6 py-3 rounded-full text-base font-black inline-block transform -rotate-1">
                    THE VISION
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  This is <span className="text-red-700 drop-shadow-sm">0.1 SOL TOKEN</span> - the most democratic meme on Solana!
                </p>
              </div>

              {/* Rule Box - Enhanced */}
              <div className="bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-600 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-green-300 px-6 py-3 rounded-full text-base font-black inline-block transform rotate-1">
                    THE RULE
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  Everyone ONLY buys exactly 0.1 SOL worth to minimize risk!
                </p>
              </div>

              {/* Dream Box - Enhanced */}
              <div className="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-600 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-blue-300 px-6 py-3 rounded-full text-base font-black inline-block transform -rotate-2">
                    THE DREAM
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  Through unity and diamond hands, we're taking this to MILLIONS in market cap!
                </p>
              </div>

              {/* GameStop Inspiration Box - Enhanced */}
              <div className="bg-gradient-to-br from-red-300 via-red-400 to-red-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform -rotate-2 brutal-shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-600 animate-bounce-slow hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-red-300 px-6 py-3 rounded-full text-base font-black inline-block transform rotate-2">
                    GAMESTOP INSPIRED
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  "Buy 0.1 SOL & FORGET for 2-3 YEARS!"
                </p>
              </div>

              {/* Plan Box - Enhanced */}
              <div className="bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-600 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-purple-300 px-6 py-3 rounded-full text-base font-black inline-block transform -rotate-1">
                    THE PLAN
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  We work together for our bags and prove all doubters WRONG!
                </p>
              </div>

              {/* Why We'll Win Box - Enhanced */}
              <div className="bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-3xl p-8 lg:p-10 border-6 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-600 hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-black text-orange-300 px-6 py-3 rounded-full text-base font-black inline-block transform rotate-1">
                    WHY WE'LL WIN
                  </div>
                </div>
                <p className="text-black font-black text-lg lg:text-xl leading-relaxed text-center">
                  Low individual risk + massive community power = MOON MISSION!
                </p>
              </div>
            </div>

            {/* Enhanced Diamond Hands Box */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-emerald-300 via-emerald-400 to-emerald-500 rounded-3xl p-10 lg:p-12 border-6 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-600 animate-pulse-slow hover:shadow-2xl">
                <div className="text-center mb-8">
                  <div className="bg-black text-emerald-300 px-8 py-4 rounded-full text-lg font-black inline-block transform -rotate-2">
                    💎 DIAMOND HANDS 💎
                  </div>
                </div>
                <p className="text-black font-black text-2xl lg:text-3xl leading-relaxed text-center drop-shadow-sm">
                  "0.1 SOL today, millionaire tomorrow!"
                </p>
              </div>
            </div>

            {/* Enhanced warning card */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 lg:p-10 rounded-3xl border-6 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-500">
                <p className="text-white font-black text-center text-2xl lg:text-3xl drop-shadow-lg">
                  ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                </p>
              </div>
            </div>

            {/* Enhanced community section */}
            <div className="mb-16">
              <h3 className="text-yellow-400 font-black text-4xl lg:text-5xl mb-12 text-center crayon-text animate-wiggle transform hover:scale-110 transition-all duration-600" style={{
                textShadow: '4px 4px 0px #000000, -2px -2px 0px #000000, 2px -2px 0px #000000, -2px 2px 0px #000000',
                letterSpacing: '4px',
                transform: 'rotate(-2deg) skew(-1deg)',
                fontFamily: '"Comic Sans MS", "Kalam", "Permanent Marker", cursive'
              }}>
                <span className="inline-block transform hover:rotate-3 transition-transform duration-300">Join</span>{' '}
                <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">the</span>{' '}
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300 text-5xl lg:text-6xl">FUN!</span><br />
                <span className="inline-block transform hover:rotate-2 transition-transform duration-300">Come</span>{' '}
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300">hang</span>{' '}
                <span className="inline-block transform hover:rotate-3 transition-transform duration-300">out</span>{' '}
                <span className="inline-block transform hover:-rotate-2 transition-transform duration-300">with</span>{' '}
                <span className="inline-block transform hover:rotate-1 transition-transform duration-300">other</span>{' '}
                <span className="inline-block transform hover:-rotate-3 transition-transform duration-300 text-5xl lg:text-6xl text-yellow-300">0.1</span>{' '}
                <span className="inline-block transform hover:rotate-2 transition-transform duration-300 text-5xl lg:text-6xl text-yellow-300">SOL</span>{' '}
                <span className="inline-block transform hover:-rotate-1 transition-transform duration-300">holders!</span>
              </h3>
              
              {/* Enhanced social buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-6 border-black rounded-2xl p-6 flex flex-col items-center gap-4 brutal-shadow-lg transition-all duration-500 hover:scale-105 transform rotate-1 hover:rotate-2 hover:shadow-2xl">
                  <img src="/social/telegram.png" alt="Telegram" className="w-12 h-12 drop-shadow-lg" />
                  <div className="text-white font-black text-lg drop-shadow-sm">Telegram</div>
                  <div className="text-white/90 text-base font-black drop-shadow-sm">LET'S CHAT!</div>
                </button>
                
                <button className="bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800 border-6 border-black rounded-2xl p-6 flex flex-col items-center gap-4 brutal-shadow-lg transition-all duration-500 hover:scale-105 transform -rotate-1 hover:-rotate-2 hover:shadow-2xl">
                  <img src="/social/twitter.png" alt="Twitter/X" className="w-12 h-12 drop-shadow-lg" />
                  <div className="text-white font-black text-lg drop-shadow-sm">Twitter/X</div>
                  <div className="text-white/90 text-base font-black drop-shadow-sm">FOLLOW US!</div>
                </button>
              </div>
            </div>

            {/* Enhanced final reminder */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 p-8 lg:p-10 rounded-2xl border-6 border-black inline-block brutal-shadow-xl transform rotate-1 hover:scale-105 hover:-rotate-1 transition-all duration-500">
                <p className="text-black font-black text-xl lg:text-2xl drop-shadow-sm">
                  ALWAYS DYOR! THIS IS JUST FOR FUN!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Community />
        
        <Footer />
      </div>
    </WalletContextProvider>
  );
};

export default Index;