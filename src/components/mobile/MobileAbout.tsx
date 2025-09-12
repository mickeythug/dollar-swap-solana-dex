import React from 'react';
import { MessageCircle, Twitter, Hash, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MobileAbout = () => {
  return (
    <div className="px-4 py-6">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-white mb-3">
          About 0.1 SOL
        </h2>
        <p className="text-white/70 text-lg">
          The simplest meme on Solana
        </p>
      </div>

      {/* Main description card */}
      <Card className="bg-gradient-to-br from-yellow-400/20 to-orange-400/20 border-yellow-400/30 p-6 rounded-3xl mb-6">
        <div className="space-y-4">
          <p className="text-white text-lg font-semibold leading-relaxed">
            This is just a MEME TOKEN called 0.1 SOL!
          </p>
          
          <p className="text-white/90 leading-relaxed">
            The idea is SUPER EASY — just buy 0.1 SOL worth! That's it!
          </p>
          
          <p className="text-white/90 leading-relaxed">
            No complicated stuff! Just holding together as a community!
          </p>
        </div>
      </Card>

      {/* Warning card */}
      <div className="bg-red-500/20 border border-red-400/40 rounded-2xl p-4 mb-8">
        <p className="text-red-200 font-black text-center text-lg">
          ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
        </p>
      </div>

      {/* Community section */}
      <div className="mb-8">
        <h3 className="text-white font-black text-xl mb-4 text-center">
          Join the Community!
        </h3>
        
        <div className="space-y-3">
          <button className="w-full bg-blue-500/20 border border-blue-400/40 rounded-2xl p-4 flex items-center gap-3 hover:bg-blue-500/30 transition-colors">
            <MessageCircle className="w-6 h-6 text-blue-300" />
            <div className="text-left">
              <div className="text-white font-semibold">Telegram</div>
              <div className="text-blue-200 text-sm">LET'S CHAT!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-blue-300 ml-auto" />
          </button>
          
          <button className="w-full bg-sky-500/20 border border-sky-400/40 rounded-2xl p-4 flex items-center gap-3 hover:bg-sky-500/30 transition-colors">
            <Twitter className="w-6 h-6 text-sky-300" />
            <div className="text-left">
              <div className="text-white font-semibold">Twitter</div>
              <div className="text-sky-200 text-sm">FOLLOW US!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-sky-300 ml-auto" />
          </button>
          
          <button className="w-full bg-purple-500/20 border border-purple-400/40 rounded-2xl p-4 flex items-center gap-3 hover:bg-purple-500/30 transition-colors">
            <Hash className="w-6 h-6 text-purple-300" />
            <div className="text-left">
              <div className="text-white font-semibold">Discord</div>
              <div className="text-purple-200 text-sm">MEMES HERE!</div>
            </div>
            <ExternalLink className="w-4 h-4 text-purple-300 ml-auto" />
          </button>
        </div>
      </div>

      {/* Final reminder */}
      <div className="text-center">
        <div className="bg-yellow-500/20 border border-yellow-400/40 rounded-2xl p-4 inline-block">
          <p className="text-yellow-200 font-black text-sm">
            ALWAYS DYOR! THIS IS JUST FOR FUN!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileAbout;