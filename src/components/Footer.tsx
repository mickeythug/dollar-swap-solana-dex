import React from 'react';
const Footer = () => {
  return <footer className="relative z-10 px-2 sm:px-4 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Ultra-Enhanced Main Footer Content */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-[2rem] border-10 border-black p-12 sm:p-16 brutal-shadow-xl transform hover:scale-105 transition-all duration-700 hover:shadow-2xl">
            
            {/* Ultra-Enhanced Logo Section */}
            <div className="flex justify-center mb-12">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center border-8 border-black overflow-hidden brutal-shadow-xl glow-strong transform hover:scale-110 hover:rotate-12 transition-all duration-700">
                <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Ultra-Enhanced Main Message */}
            <h3 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl mb-8 crayon-text" style={{
            textShadow: '5px 5px 0px #000000, -2px -2px 0px rgba(255,255,255,0.2)',
            letterSpacing: '4px'
          }}>
              0.1 SOL TOKEN
            </h3>
            
            <p className="text-yellow-400 font-black text-xl sm:text-2xl mb-12 crayon-text" style={{
            textShadow: '4px 4px 0px #000000',
            letterSpacing: '3px'
          }}>
              The Democratic Meme Revolution!
            </p>

            {/* Ultra-Enhanced Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 p-6 rounded-3xl border-6 border-black transform rotate-1 brutal-shadow-xl transition-all duration-700 hover:scale-110 hover:-rotate-1">
                <div className="text-black font-black text-lg crayon-text" style={{
                textShadow: '3px 3px 0px #ffffff'
              }}>
                  💰 Just 0.1 SOL!
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 p-6 rounded-3xl border-6 border-black transform -rotate-1 brutal-shadow-xl transition-all duration-700 hover:scale-110 hover:rotate-1">
                <div className="text-black font-black text-lg crayon-text" style={{
                textShadow: '3px 3px 0px #ffffff'
              }}>
                  👥 Strong Community
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 p-6 rounded-3xl border-6 border-black transform rotate-2 brutal-shadow-xl transition-all duration-700 hover:scale-110 hover:-rotate-2 sm:col-span-2 lg:col-span-1">
                <div className="text-black font-black text-lg crayon-text" style={{
                textShadow: '3px 3px 0px #ffffff'
              }}>
                  💎 Diamond Hands
                </div>
              </div>
            </div>

            {/* Ultra-Enhanced Contract Address */}
            <div className="bg-black p-8 rounded-3xl border-6 border-white mb-12 transform hover:scale-105 transition-all duration-700">
              <p className="text-white font-black text-lg mb-4" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.2)'
            }}>Contract Address:</p>
              <code className="text-yellow-400 font-mono text-sm sm:text-base break-all font-black bg-gray-900 p-4 rounded-2xl border-4 border-yellow-400" style={{
              textShadow: '2px 2px 0px rgba(0,0,0,0.5)'
            }}>
                AkKKEZCQt75pm9JwughvPcVXLvXSraVGWbqwNB9Ppump
              </code>
            </div>

            {/* Ultra-Enhanced Social Links */}
            <div className="flex justify-center space-x-8 mb-12">
              <button className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-6 rounded-3xl border-6 border-black brutal-shadow-xl transition-all duration-700 hover:scale-110 transform rotate-1 hover:rotate-2">
                <img src="/social/telegram.png" alt="Telegram" className="w-12 h-12 drop-shadow-lg" />
              </button>
              <button className="bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800 p-6 rounded-3xl border-6 border-white brutal-shadow-xl transition-all duration-700 hover:scale-110 transform -rotate-1 hover:-rotate-2">
                <img src="/social/twitter.png" alt="Twitter/X" className="w-12 h-12 drop-shadow-lg" />
              </button>
            </div>

            {/* Ultra-Enhanced Disclaimer */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 p-8 rounded-3xl border-6 border-black mb-8 transform -rotate-1 brutal-shadow-xl transition-all duration-700 hover:scale-105 hover:rotate-1">
              <p className="text-white font-black text-lg sm:text-xl crayon-text" style={{
              textShadow: '3px 3px 0px #000000'
            }}>
                ⚠️ MEME TOKEN - NOT FINANCIAL ADVICE! ⚠️
              </p>
              <p className="text-white font-black text-base mt-3" style={{
              textShadow: '2px 2px 0px #000000'
            }}>
                Always Do Your Own Research (DYOR)
              </p>
            </div>
          </div>
        </div>

        {/* Ultra-Enhanced Copyright Section */}
        <div className="text-center">
          
        </div>

        {/* Ultra-Enhanced Fun Animation */}
        <div className="flex justify-center mt-12">
          <div className="text-8xl animate-bounce-slow transform hover:scale-125 transition-all duration-700">
            🚀
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;