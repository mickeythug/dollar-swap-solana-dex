import React from 'react';
import { MessageCircle, Twitter, Hash, ExternalLink } from 'lucide-react';

const MobileAbout = () => {
  return (
    <div className="px-4 py-8">
      {/* Title - same cartoon style */}
      <div className="text-center mb-8">
        <h2 className="bg-yellow-400 text-black px-6 py-3 rounded-2xl border-4 border-black font-black text-2xl mb-4 crayon-text brutal-shadow-xl transform rotate-1 inline-block" style={{
          textShadow: '2px 2px 0px #ffffff',
          letterSpacing: '2px'
        }}>
          About Just Buy 0.1 SOL!
        </h2>
        <p className="text-white text-lg crayon-text" style={{
          textShadow: '1px 1px 0px #000000'
        }}>
          The simplest meme on Solana!
        </p>
      </div>

      {/* Main description card - same meme style */}
      <div className="meme-card rounded-3xl p-6 transform rotate-1 brutal-shadow-xl transition-bounce hover:scale-105 hover:-rotate-1 mb-6">
        <div className="space-y-4 text-black crayon-text" style={{
          textShadow: '1px 1px 0px #ffffff'
        }}>
          <p className="text-lg font-black leading-relaxed">
            This is just a MEME TOKEN called 0.1 SOL!
          </p>
          
          <p className="text-lg font-black leading-relaxed">
            The idea is SUPER EASY — just buy 0.1 SOL worth! That's it!
          </p>
          
          <p className="text-lg font-black leading-relaxed">
            No complicated stuff! Just holding together as a community!
          </p>
        </div>
      </div>

      {/* Warning card - same style as desktop */}
      <div className="bg-red-500 p-4 rounded-2xl border-4 border-black transform -rotate-1 brutal-shadow-lg mb-8">
        <p className="text-white font-black text-center text-lg crayon-text" style={{
          textShadow: '2px 2px 0px #000000'
        }}>
          ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
        </p>
      </div>

      {/* Community section - same cartoon style */}
      <div className="mb-8">
        <h3 className="text-white font-black text-xl mb-6 text-center crayon-text" style={{
          textShadow: '2px 2px 0px #000000'
        }}>
          Join the FUN!<br />
          Come hang out with other 0.1 SOL holders!
        </h3>
        
        <div className="space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 border-4 border-black rounded-xl p-4 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-1 hover:rotate-2">
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={3} />
            <div className="text-left flex-1">
              <div className="text-white font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Telegram</div>
              <div className="text-white/80 text-sm font-black crayon-text">LET'S CHAT!</div>
            </div>
            <ExternalLink className="w-5 h-5 text-white" strokeWidth={3} />
          </button>
          
          <button className="w-full bg-sky-600 hover:bg-sky-700 border-4 border-black rounded-xl p-4 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform -rotate-1 hover:-rotate-2">
            <Twitter className="w-6 h-6 text-white" strokeWidth={3} />
            <div className="text-left flex-1">
              <div className="text-white font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Twitter</div>
              <div className="text-white/80 text-sm font-black crayon-text">FOLLOW US!</div>
            </div>
            <ExternalLink className="w-5 h-5 text-white" strokeWidth={3} />
          </button>
          
          <button className="w-full bg-purple-600 hover:bg-purple-700 border-4 border-black rounded-xl p-4 flex items-center gap-3 brutal-shadow transition-bounce hover:scale-105 transform rotate-2 hover:rotate-3">
            <Hash className="w-6 h-6 text-white" strokeWidth={3} />
            <div className="text-left flex-1">
              <div className="text-white font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Discord</div>
              <div className="text-white/80 text-sm font-black crayon-text">MEMES HERE!</div>
            </div>
            <ExternalLink className="w-5 h-5 text-white" strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Final reminder - same style as desktop */}
      <div className="text-center">
        <div className="bg-yellow-600 hover:bg-yellow-700 p-3 rounded-lg border-4 border-black inline-block brutal-shadow transform rotate-1">
          <p className="text-black font-black text-sm crayon-text" style={{
            textShadow: '1px 1px 0px #ffffff'
          }}>
            ALWAYS DYOR! THIS IS JUST FOR FUN!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;