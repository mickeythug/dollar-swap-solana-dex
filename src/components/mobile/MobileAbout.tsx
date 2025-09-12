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
          <p className="text-base leading-relaxed">
            This is just a MEME TOKEN called 0.1 SOL!
          </p>
          
          <p className="text-base leading-relaxed">
            The idea is SUPER EASY — just buy 0.1 SOL worth! That&apos;s it!
          </p>
          
          <p className="text-base leading-relaxed">
            No complicated stuff! Just holding together as a community!
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