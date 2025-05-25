
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border-4 border-dashed border-yellow-400 p-8 transform -rotate-1">
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Section */}
            <div id="about" className="transform rotate-1">
              <h3 className="text-white font-black text-2xl mb-4" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #ff6b6b'
              }}>About 1 DOLLAR! 🎉</h3>
              <p className="text-purple-200 text-lg leading-relaxed mb-4 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                This is just a MEME TOKEN called 1 dollar! 💰
              </p>
              <p className="text-purple-200 text-lg leading-relaxed mb-4 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                The idea is SUPER EASY — just buy one dollar worth! That's it! 🚀
              </p>
              <p className="text-purple-200 text-lg leading-relaxed mb-4 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                No complicated stuff! Just holding together as a community! 🤝
              </p>
              <p className="text-yellow-300 text-sm font-black transform -rotate-1 bg-red-500/20 p-2 rounded border-2 border-red-400 border-dashed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! 
              </p>
            </div>

            {/* Community */}
            <div className="transform -rotate-1">
              <h3 className="text-white font-black text-2xl mb-4" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #4ecdc4'
              }}>Join the FUN! 🎊</h3>
              <p className="text-purple-200 text-lg mb-4 font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Come hang out with other $1 holders! 😄
              </p>
              <div className="space-y-3">
                <a href="#" className="block text-yellow-300 hover:text-white text-lg font-bold transition-colors transform hover:rotate-2" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  📱 Telegram - LET'S CHAT!
                </a>
                <a href="#" className="block text-yellow-300 hover:text-white text-lg font-bold transition-colors transform hover:-rotate-1" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  🐦 Twitter - FOLLOW US!
                </a>
                <a href="#" className="block text-yellow-300 hover:text-white text-lg font-bold transition-colors transform hover:rotate-1" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  💬 Discord - MEMES HERE!
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-dashed border-white/20 mt-8 pt-6 text-center transform rotate-1">
            <p className="text-purple-300 text-lg font-bold" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              © 2024 1 DOLLAR MEME TOKEN! Made with ❤️ and MEMES! 🎉
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-black transform -rotate-1" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              ALWAYS DYOR! THIS IS JUST FOR FUN! 🤪
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
