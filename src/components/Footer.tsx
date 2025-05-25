
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-12 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-300 rounded-3xl border-8 border-black border-dashed p-10 transform -rotate-1 shadow-2xl" style={{
          boxShadow: '20px 20px 0px #000000'
        }}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Section */}
            <div id="about" className="transform rotate-2">
              <div className="bg-green-400 rounded-2xl border-6 border-black p-6 transform -rotate-1 shadow-lg" style={{
                boxShadow: '8px 8px 0px #000000'
              }}>
                <h3 className="text-yellow-900 font-black text-4xl mb-6 transform -rotate-1" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>About Just Buy 0.1 SOL! ◎</h3>
                <p className="text-green-900 text-2xl leading-relaxed mb-4 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  This is just a MEME TOKEN called 0.1 SOL! ◎
                </p>
                <p className="text-green-900 text-2xl leading-relaxed mb-4 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  The idea is SUPER EASY — just buy 0.1 SOL worth! That's it! 🚀
                </p>
                <p className="text-green-900 text-2xl leading-relaxed mb-6 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  No complicated stuff! Just holding together as a community! 🤝
                </p>
                <div className="bg-red-400 p-6 rounded-xl border-6 border-black border-dashed transform -rotate-2 shadow-lg" style={{
                  boxShadow: '6px 6px 0px #000000'
                }}>
                  <p className="text-yellow-100 text-xl font-black" style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    textShadow: '1px 1px 0px #000000'
                  }}>
                    ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="transform -rotate-1">
              <div className="bg-green-400 rounded-2xl border-6 border-black p-6 transform rotate-1 shadow-lg" style={{
                boxShadow: '8px 8px 0px #000000'
              }}>
                <h3 className="text-yellow-900 font-black text-4xl mb-6 transform rotate-1" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>Join the FUN! 🎊</h3>
                <p className="text-green-900 text-2xl mb-6 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  Come hang out with other 0.1 SOL holders! 😄
                </p>
                <div className="space-y-4">
                  <a href="#" className="block bg-yellow-300 p-4 rounded-xl border-4 border-black border-dashed transform hover:rotate-3 hover:scale-110 transition-all shadow-lg" style={{
                    boxShadow: '6px 6px 0px #000000'
                  }}>
                    <span className="text-green-900 text-2xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      📱 Telegram - LET'S CHAT!
                    </span>
                  </a>
                  <a href="#" className="block bg-yellow-300 p-4 rounded-xl border-4 border-black border-dashed transform hover:-rotate-2 hover:scale-110 transition-all shadow-lg" style={{
                    boxShadow: '6px 6px 0px #000000'
                  }}>
                    <span className="text-green-900 text-2xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      🐦 Twitter - FOLLOW US!
                    </span>
                  </a>
                  <a href="#" className="block bg-yellow-300 p-4 rounded-xl border-4 border-black border-dashed transform hover:rotate-1 hover:scale-110 transition-all shadow-lg" style={{
                    boxShadow: '6px 6px 0px #000000'
                  }}>
                    <span className="text-green-900 text-2xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      💬 Discord - MEMES HERE!
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-8 border-dashed border-black mt-8 pt-8 text-center transform rotate-1">
            <div className="bg-green-400 p-6 rounded-2xl border-4 border-black inline-block transform -rotate-1 shadow-lg" style={{
              boxShadow: '8px 8px 0px #000000'
            }}>
              <p className="text-yellow-900 text-2xl font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                © 2024 0.1 SOL MEME TOKEN! Made with ❤️ and MEMES! ◎
              </p>
              <p className="text-green-900 text-xl mt-2 font-black transform -rotate-1" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                ALWAYS DYOR! THIS IS JUST FOR FUN! 🤪
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
