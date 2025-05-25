
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-100/20 backdrop-blur-xl rounded-3xl border-4 border-dashed border-yellow-400 p-8 transform -rotate-1 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Section */}
            <div id="about" className="transform rotate-2">
              <h3 className="text-green-900 font-black text-3xl mb-6 transform -rotate-1" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #fde047'
              }}>About 1 DOLLAR! 💵</h3>
              <p className="text-green-800 text-xl leading-relaxed mb-4 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                This is just a MEME TOKEN called 1 dollar! 💰
              </p>
              <p className="text-green-800 text-xl leading-relaxed mb-4 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                The idea is SUPER EASY — just buy one dollar worth! That's it! 🚀
              </p>
              <p className="text-green-800 text-xl leading-relaxed mb-6 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                No complicated stuff! Just holding together as a community! 🤝
              </p>
              <p className="text-red-600 text-sm font-black transform -rotate-2 bg-yellow-200/40 p-4 rounded border-4 border-red-500 border-dashed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
              </p>
            </div>

            {/* Community */}
            <div className="transform -rotate-1">
              <h3 className="text-green-900 font-black text-3xl mb-6 transform rotate-1" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #fde047'
              }}>Join the FUN! 🎊</h3>
              <p className="text-green-800 text-xl mb-6 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                Come hang out with other $1 holders! 😄
              </p>
              <div className="space-y-4">
                <a href="#" className="block text-green-700 hover:text-green-900 text-xl font-black transition-colors transform hover:rotate-3 hover:scale-110 bg-yellow-200/20 p-3 rounded-lg border-2 border-green-500 border-dashed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  📱 Telegram - LET'S CHAT!
                </a>
                <a href="#" className="block text-green-700 hover:text-green-900 text-xl font-black transition-colors transform hover:-rotate-2 hover:scale-110 bg-yellow-200/20 p-3 rounded-lg border-2 border-green-500 border-dashed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  🐦 Twitter - FOLLOW US!
                </a>
                <a href="#" className="block text-green-700 hover:text-green-900 text-xl font-black transition-colors transform hover:rotate-1 hover:scale-110 bg-yellow-200/20 p-3 rounded-lg border-2 border-green-500 border-dashed" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  💬 Discord - MEMES HERE!
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-dashed border-green-600 mt-8 pt-6 text-center transform rotate-1">
            <p className="text-green-800 text-xl font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              © 2024 1 DOLLAR MEME TOKEN! Made with ❤️ and MEMES! 💵
            </p>
            <p className="text-green-700 text-lg mt-2 font-black transform -rotate-1" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              ALWAYS DYOR! THIS IS JUST FOR FUN! 🤪
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
