import React from 'react';
import { MessageCircle, Twitter, Hash, ExternalLink } from 'lucide-react';

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

      {/* Main description card - mobile-friendly font */}
      <div className="meme-card rounded-3xl p-4 transform rotate-1 brutal-shadow-xl transition-bounce hover:scale-105 hover:-rotate-1 mb-6 max-w-sm mx-auto">
        <div className="space-y-3 text-black font-black">
          <div className="text-center mb-4">
            <span className="bg-yellow-500 px-3 py-1 rounded-full text-xs border-2 border-black">
              💎 THE VISION 💎
            </span>
          </div>
          
          <p className="text-sm leading-relaxed">
            This is <span className="text-red-600">0.1 SOL TOKEN</span> - the most democratic meme on Solana!
          </p>
          
          <p className="text-sm leading-relaxed">
            <span className="text-green-700">🎯 THE RULE:</span> Everyone ONLY buys exactly 0.1 SOL worth to minimize risk!
          </p>
          
          <p className="text-sm leading-relaxed">
            <span className="text-blue-700">🚀 THE DREAM:</span> Through unity and diamond hands, we're taking this to MILLIONS in market cap!
          </p>
          
          <div className="bg-red-100 p-3 rounded-xl border-2 border-red-500 my-3">
            <p className="text-red-700 text-center text-sm font-black">
              📈 INSPIRED BY GAMESTOP 📈<br/>
              "Buy 0.1 SOL & FORGET for 2-3 YEARS!"
            </p>
          </div>
          
          <p className="text-sm leading-relaxed">
            <span className="text-purple-700">💪 THE PLAN:</span> We work together for our bags and prove all doubters WRONG!
          </p>
          
          <p className="text-sm leading-relaxed">
            <span className="text-orange-700">🔥 WHY WE'LL WIN:</span> Low individual risk + massive community power = MOON MISSION! 🌙
          </p>
          
          <div className="bg-green-100 p-3 rounded-xl border-2 border-green-500 text-center">
            <p className="text-green-800 text-xs font-black">
              "0.1 SOL today, millionaire tomorrow!"<br/>
              💎🙌 DIAMOND HANDS ONLY 🙌💎
            </p>
          </div>
        </div>
      </div>

      {/* Warning card - mobile-friendly font */}
      <div className="bg-red-500 p-4 rounded-2xl border-4 border-black transform -rotate-1 brutal-shadow-lg mb-8">
        <p className="text-white font-black text-center text-lg">
          ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
        </p>
      </div>

      {/* Small logo before community section */}
      <div className="flex justify-center mb-4">
        <img 
          src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
          alt="0.1 SOL Community Logo"
          className="w-96 h-auto max-w-full transform rotate-1 drop-shadow-lg"
        />
      </div>
      
      {/* Community section - mobile-friendly font */}
      <div className="mb-6">
        <h3 className="text-white font-black text-lg mb-4 text-center px-2">
          Join the FUN!<br />
          Come hang out with other 0.1 SOL holders!
        </h3>
        
        <div className="space-y-3 max-w-sm mx-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 border-4 border-black rounded-xl p-3 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-1 hover:rotate-2">
            <MessageCircle className="w-5 h-5 text-white flex-shrink-0" strokeWidth={3} />
            <div className="text-left flex-1 min-w-0">
              <div className="text-white font-black text-sm">Telegram</div>
              <div className="text-white/80 text-xs font-black">LET&apos;S CHAT!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-white flex-shrink-0" strokeWidth={3} />
          </button>
          
          <button className="w-full bg-sky-600 hover:bg-sky-700 border-4 border-black rounded-xl p-3 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform -rotate-1 hover:-rotate-2">
            <Twitter className="w-5 h-5 text-white flex-shrink-0" strokeWidth={3} />
            <div className="text-left flex-1 min-w-0">
              <div className="text-white font-black text-sm">Twitter</div>
              <div className="text-white/80 text-xs font-black">FOLLOW US!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-white flex-shrink-0" strokeWidth={3} />
          </button>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 border-4 border-black rounded-xl p-3 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-2 hover:rotate-3">
            <Hash className="w-5 h-5 text-white flex-shrink-0" strokeWidth={3} />
            <div className="text-left flex-1 min-w-0">
              <div className="text-white font-black text-sm">Discord</div>
              <div className="text-white/80 text-xs font-black">MEMES HERE!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-white flex-shrink-0" strokeWidth={3} />
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