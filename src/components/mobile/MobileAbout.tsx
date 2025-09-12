import React from 'react';

const MobileAbout = () => {
  return (
    <div className="px-4 py-6">
      {/* Title - mobile-friendly font */}
      <div className="text-center mb-6">
        <div className="inline-block max-w-xs">
          <h2 className="bg-yellow-400 text-black px-4 py-3 rounded-2xl border-4 border-black font-black text-xl brutal-shadow-xl transform rotate-1" style={{
            letterSpacing: '2px'
          }}>
            About Just Buy 0.1 SOL!
          </h2>
        </div>
        <p className="text-white text-base font-black mt-4 px-2">
          The simplest meme on Solana!
        </p>
      </div>

      {/* Large hero image */}
      <div className="flex justify-center mb-8">
        <img 
          src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
          alt="0.1 SOL Community Logo"
          className="w-full max-w-2xl h-auto transform rotate-1 drop-shadow-lg"
        />
      </div>

      {/* Animated cartoon boxes */}
      <div className="space-y-4 mb-6 max-w-sm mx-auto">
        {/* Vision Box */}
        <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 border-4 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-300 w-full max-w-lg mx-auto">
          <div className="text-center mb-4">
            <div className="bg-black text-yellow-300 px-4 py-2 rounded-full text-sm font-black inline-block">
              THE VISION
            </div>
          </div>
          <p className="text-black font-black text-base leading-relaxed text-center">
            This is <span className="text-red-700">0.1 SOL TOKEN</span> - the most democratic meme on Solana!
          </p>
        </div>

        {/* Rule Box */}
        <div className="bg-gradient-to-br from-green-300 to-green-500 rounded-2xl p-4 border-4 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-300">
          <div className="text-center mb-3">
            <div className="bg-black text-green-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              THE RULE
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            Everyone ONLY buys exactly 0.1 SOL worth to minimize risk!
          </p>
        </div>

        {/* Dream Box */}
        <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-2xl p-4 border-4 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-300">
          <div className="text-center mb-3">
            <div className="bg-black text-blue-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              THE DREAM
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            Through unity and diamond hands, we're taking this to MILLIONS in market cap!
          </p>
        </div>

        {/* GameStop Inspiration Box */}
        <div className="bg-gradient-to-br from-red-300 to-red-500 rounded-2xl p-4 border-4 border-black transform -rotate-2 brutal-shadow-xl hover:scale-105 hover:rotate-2 transition-all duration-300 animate-bounce">
          <div className="text-center mb-3">
            <div className="bg-black text-red-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              GAMESTOP INSPIRED
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            "Buy 0.1 SOL & FORGET for 2-3 YEARS!"
          </p>
        </div>

        {/* Plan Box */}
        <div className="bg-gradient-to-br from-purple-300 to-purple-500 rounded-2xl p-4 border-4 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-300">
          <div className="text-center mb-3">
            <div className="bg-black text-purple-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              THE PLAN
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            We work together for our bags and prove all doubters WRONG!
          </p>
        </div>

        {/* Why We'll Win Box */}
        <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl p-4 border-4 border-black transform -rotate-1 brutal-shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-300">
          <div className="text-center mb-3">
            <div className="bg-black text-orange-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              WHY WE'LL WIN
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            Low individual risk + massive community power = MOON MISSION!
          </p>
        </div>

        {/* Diamond Hands Box */}
        <div className="bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-2xl p-4 border-4 border-black transform rotate-2 brutal-shadow-xl hover:scale-105 hover:-rotate-2 transition-all duration-300 animate-pulse">
          <div className="text-center mb-3">
            <div className="bg-black text-emerald-300 px-3 py-1 rounded-full text-xs font-black inline-block">
              DIAMOND HANDS
            </div>
          </div>
          <p className="text-black font-black text-sm leading-relaxed text-center">
            "0.1 SOL today, millionaire tomorrow!"
          </p>
        </div>
      </div>

      {/* Warning card - mobile-friendly font */}
      <div className="bg-red-500 p-4 rounded-2xl border-4 border-black transform -rotate-1 brutal-shadow-lg mb-8">
        <p className="text-white font-black text-center text-lg">
          ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
        </p>
      </div>

      {/* Community section - mobile-friendly font */}
      <div className="mb-6">
        <h3 className="text-yellow-400 font-black text-2xl mb-4 text-center px-2 crayon-text animate-wiggle transform hover:scale-110 transition-all duration-300" style={{
          textShadow: '3px 3px 0px #000000, -1px -1px 0px #000000, 1px -1px 0px #000000, -1px 1px 0px #000000',
          letterSpacing: '3px',
          transform: 'rotate(-2deg) skew(-1deg)',
          fontFamily: '"Comic Sans MS", "Kalam", "Permanent Marker", cursive'
        }}>
          <span className="inline-block transform hover:rotate-3 transition-transform duration-200">Join</span>{' '}
          <span className="inline-block transform hover:-rotate-2 transition-transform duration-200">the</span>{' '}
          <span className="inline-block transform hover:rotate-1 transition-transform duration-200 text-3xl">FUN!</span><br />
          <span className="inline-block transform hover:rotate-2 transition-transform duration-200">Come</span>{' '}
          <span className="inline-block transform hover:-rotate-1 transition-transform duration-200">hang</span>{' '}
          <span className="inline-block transform hover:rotate-3 transition-transform duration-200">out</span>{' '}
          <span className="inline-block transform hover:-rotate-2 transition-transform duration-200">with</span>{' '}
          <span className="inline-block transform hover:rotate-1 transition-transform duration-200">other</span>{' '}
          <span className="inline-block transform hover:-rotate-3 transition-transform duration-200 text-3xl text-yellow-300">0.1</span>{' '}
          <span className="inline-block transform hover:rotate-2 transition-transform duration-200 text-3xl text-yellow-300">SOL</span>{' '}
          <span className="inline-block transform hover:-rotate-1 transition-transform duration-200">holders!</span>
        </h3>
        
        <div className="space-y-3 max-w-sm mx-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 border-4 border-black rounded-xl p-3 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-1 hover:rotate-2">
            <img src="/social/telegram.png" alt="Telegram" className="w-8 h-8 flex-shrink-0" />
            <div className="text-left flex-1 min-w-0">
              <div className="text-white font-black text-sm">Telegram</div>
              <div className="text-white/80 text-xs font-black">LET&apos;S CHAT!</div>
            </div>
          </button>
          
          <button className="w-full bg-black hover:bg-gray-800 border-4 border-black rounded-xl p-3 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform -rotate-1 hover:-rotate-2">
            <img src="/social/twitter.png" alt="Twitter/X" className="w-8 h-8 flex-shrink-0" />
            <div className="text-left flex-1 min-w-0">
              <div className="text-white font-black text-sm">Twitter/X</div>
              <div className="text-white/80 text-xs font-black">FOLLOW US!</div>
            </div>
          </button>
        </div>
      </div>

      {/* Final reminder - mobile-friendly font */}
      <div className="text-center">
        <div className="bg-yellow-600 hover:bg-yellow-700 p-3 rounded-lg border-4 border-black inline-block brutal-shadow transform rotate-1">
          <p className="text-black font-black text-sm">
            ALWAYS DYOR! THIS IS JUST FOR FUN!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;