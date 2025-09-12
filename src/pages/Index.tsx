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
  return <WalletContextProvider>
        <div className="min-h-screen bg-green-800 px-2 lg:px-6 xl:px-8" style={{
      backgroundImage: `
            linear-gradient(45deg, #166534 25%, transparent 25%),
            linear-gradient(-45deg, #166534 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #166534 75%),
            linear-gradient(-45deg, transparent 75%, #166534 75%)
          `,
      backgroundSize: '60px 60px',
      backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
    }}>
          
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-yellow-600/30 to-green-700/80"></div>
          <div className="absolute inset-0 bg-green-900"></div>
          
          <Header />
          <Hero />
          
          {/* Side by side layout for MarketCap and Swap */}
          <section id="swap" className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-start">
                <MarketCapCounter />
                <SwapInterface />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <div className="text-center mb-8 lg:mb-12">
                <div className="inline-block">
                  <h2 className="bg-yellow-400 text-black px-6 py-4 rounded-2xl border-4 border-black font-black text-2xl lg:text-3xl brutal-shadow-xl transform rotate-1" style={{
                    letterSpacing: '2px'
                  }}>
                    About Just Buy 0.1 SOL!
                  </h2>
                </div>
                <p className="text-white text-lg lg:text-xl font-black mt-6">
                  The simplest meme on Solana!
                </p>
              </div>

              {/* Large hero image */}
              <div className="flex justify-center mb-12 lg:mb-16">
                <img 
                  src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
                  alt="0.1 SOL Community Logo"
                  className="w-full max-w-4xl h-auto transform rotate-1 drop-shadow-lg"
                />
              </div>

              {/* Animated cartoon boxes - Desktop grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-6xl mx-auto">
                {/* Vision Box */}
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      THE VISION
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    This is <span className="text-red-700">0.1 SOL TOKEN</span> - the most democratic meme on Solana!
                  </p>
                </div>

                {/* Rule Box */}
                <div className="bg-gradient-to-br from-green-300 to-green-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="bg-black text-green-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      THE RULE
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    Everyone ONLY buys exactly 0.1 SOL worth to minimize risk!
                  </p>
                </div>

                {/* Dream Box */}
                <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="bg-black text-blue-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      THE DREAM
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    Through unity and diamond hands, we're taking this to MILLIONS in market cap!
                  </p>
                </div>

                {/* GameStop Inspiration Box */}
                <div className="bg-gradient-to-br from-red-300 to-red-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform -rotate-2 brutal-shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-500 animate-bounce-slow">
                  <div className="text-center mb-4">
                    <div className="bg-black text-red-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      GAMESTOP INSPIRED
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    "Buy 0.1 SOL & FORGET for 2-3 YEARS!"
                  </p>
                </div>

                {/* Plan Box */}
                <div className="bg-gradient-to-br from-purple-300 to-purple-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="bg-black text-purple-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      THE PLAN
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    We work together for our bags and prove all doubters WRONG!
                  </p>
                </div>

                {/* Why We'll Win Box */}
                <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="bg-black text-orange-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      WHY WE'LL WIN
                    </div>
                  </div>
                  <p className="text-black font-black text-base lg:text-lg leading-relaxed text-center">
                    Low individual risk + massive community power = MOON MISSION!
                  </p>
                </div>
              </div>

              {/* Diamond Hands Box - Full width for emphasis */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-2xl p-6 lg:p-8 border-4 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-500 animate-pulse-slow">
                  <div className="text-center mb-4">
                    <div className="bg-black text-emerald-300 px-4 py-2 rounded-full text-sm font-black inline-block">
                      DIAMOND HANDS
                    </div>
                  </div>
                  <p className="text-black font-black text-xl lg:text-2xl leading-relaxed text-center">
                    "0.1 SOL today, millionaire tomorrow!"
                  </p>
                </div>
              </div>

              {/* Warning card */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-red-500 p-6 lg:p-8 rounded-2xl border-4 border-black transform -rotate-1 brutal-shadow-lg">
                  <p className="text-white font-black text-center text-xl lg:text-2xl">
                    ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                  </p>
                </div>
              </div>

              {/* Community section */}
              <div className="mb-12">
                <h3 className="text-yellow-400 font-black text-3xl lg:text-4xl mb-8 text-center crayon-text animate-wiggle transform hover:scale-110 transition-all duration-500" style={{
                  textShadow: '3px 3px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000',
                  letterSpacing: '3px',
                  transform: 'rotate(-2deg) skew(-1deg)',
                  fontFamily: '"Comic Sans MS", "Kalam", "Permanent Marker", cursive'
                }}>
                  <span className="inline-block transform hover:rotate-3 transition-transform duration-200">Join</span>{' '}
                  <span className="inline-block transform hover:-rotate-2 transition-transform duration-200">the</span>{' '}
                  <span className="inline-block transform hover:rotate-1 transition-transform duration-200 text-4xl lg:text-5xl">FUN!</span><br />
                  <span className="inline-block transform hover:rotate-2 transition-transform duration-200">Come</span>{' '}
                  <span className="inline-block transform hover:-rotate-1 transition-transform duration-200">hang</span>{' '}
                  <span className="inline-block transform hover:rotate-3 transition-transform duration-200">out</span>{' '}
                  <span className="inline-block transform hover:-rotate-2 transition-transform duration-200">with</span>{' '}
                  <span className="inline-block transform hover:rotate-1 transition-transform duration-200">other</span>{' '}
                  <span className="inline-block transform hover:-rotate-3 transition-transform duration-200 text-4xl lg:text-5xl text-yellow-300">0.1</span>{' '}
                  <span className="inline-block transform hover:rotate-2 transition-transform duration-200 text-4xl lg:text-5xl text-yellow-300">SOL</span>{' '}
                  <span className="inline-block transform hover:-rotate-1 transition-transform duration-200">holders!</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <button className="bg-blue-600 hover:bg-blue-700 border-4 border-black rounded-xl p-4 flex flex-col items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-1 hover:rotate-2">
                    <img src="/social/telegram.png" alt="Telegram" className="w-8 h-8" />
                    <div className="text-white font-black text-base">Telegram</div>
                    <div className="text-white/80 text-sm font-black">LET'S CHAT!</div>
                  </button>
                  
                  <button className="bg-black hover:bg-gray-800 border-4 border-black rounded-xl p-4 flex flex-col items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform -rotate-1 hover:-rotate-2">
                    <img src="/social/twitter.png" alt="Twitter/X" className="w-8 h-8" />
                    <div className="text-white font-black text-base">Twitter/X</div>
                    <div className="text-white/80 text-sm font-black">FOLLOW US!</div>
                  </button>
                </div>
              </div>

              {/* Final reminder */}
              <div className="text-center">
                <div className="bg-yellow-600 hover:bg-yellow-700 p-4 lg:p-6 rounded-lg border-4 border-black inline-block brutal-shadow transform rotate-1">
                  <p className="text-black font-black text-lg lg:text-xl">
                    ALWAYS DYOR! THIS IS JUST FOR FUN!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Community />
          
          <Footer />
        </div>
    </WalletContextProvider>;
};
export default Index;