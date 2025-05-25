
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-4 py-12 mt-16 overflow-hidden">
      {/* Static cartoon elements */}
      <div className="absolute top-5 left-5 text-4xl">🎉</div>
      <div className="absolute top-10 right-10 text-3xl">💰</div>
      <div className="absolute bottom-5 left-10 text-4xl">🚀</div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full border-12 border-black border-dashed p-12 transform -rotate-1 shadow-2xl" style={{
          boxShadow: '25px 25px 0px #000000, 20px 20px 0px #16a34a, 15px 15px 0px #dc2626'
        }}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Section */}
            <div id="about" className="transform rotate-2">
              <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl border-8 border-black p-8 transform -rotate-1 shadow-lg" style={{
                boxShadow: '12px 12px 0px #000000, 8px 8px 0px #fbbf24'
              }}>
                <h3 className="text-yellow-100 font-black text-5xl mb-8 transform -rotate-1" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '4px 4px 0px #000000, 2px 2px 0px #fbbf24'
                }}>About Just Buy 0.1 SOL! ◎ 🎊</h3>
                <p className="text-green-100 text-3xl leading-relaxed mb-6 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>
                  This is just a MEME TOKEN called 0.1 SOL! ◎ 💎
                </p>
                <p className="text-green-100 text-3xl leading-relaxed mb-6 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>
                  The idea is SUPER EASY — just buy 0.1 SOL worth! That's it! 🚀 💫
                </p>
                <p className="text-green-100 text-3xl leading-relaxed mb-8 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>
                  No complicated stuff! Just holding together as a community! 🤝 ⭐
                </p>
                <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 p-8 rounded-2xl border-8 border-black border-dashed transform -rotate-2 shadow-lg" style={{
                  boxShadow: '10px 10px 0px #000000, 6px 6px 0px #fbbf24'
                }}>
                  <p className="text-yellow-100 text-2xl font-black" style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    textShadow: '2px 2px 0px #000000'
                  }}>
                    ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️ 🤪
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="transform -rotate-1">
              <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl border-8 border-black p-8 transform rotate-1 shadow-lg" style={{
                boxShadow: '12px 12px 0px #000000, 8px 8px 0px #fbbf24'
              }}>
                <h3 className="text-yellow-100 font-black text-5xl mb-8 transform rotate-1" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '4px 4px 0px #000000, 2px 2px 0px #fbbf24'
                }}>Join the FUN! 🎊 💫</h3>
                <p className="text-green-100 text-3xl mb-8 font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>
                  Come hang out with other 0.1 SOL holders! 😄 🚀
                </p>
                <div className="space-y-6">
                  <a href="#" className="block bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-2xl border-6 border-black border-dashed shadow-lg" style={{
                    boxShadow: '8px 8px 0px #000000, 4px 4px 0px #16a34a'
                  }}>
                    <span className="text-green-900 text-3xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '2px 2px 0px #000000'
                    }}>
                      📱 Telegram - LET'S CHAT! 💬
                    </span>
                  </a>
                  <a href="#" className="block bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-2xl border-6 border-black border-dashed shadow-lg" style={{
                    boxShadow: '8px 8px 0px #000000, 4px 4px 0px #16a34a'
                  }}>
                    <span className="text-green-900 text-3xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '2px 2px 0px #000000'
                    }}>
                      🐦 Twitter - FOLLOW US! 🎯
                    </span>
                  </a>
                  <a href="#" className="block bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-2xl border-6 border-black border-dashed shadow-lg" style={{
                    boxShadow: '8px 8px 0px #000000, 4px 4px 0px #16a34a'
                  }}>
                    <span className="text-green-900 text-3xl font-black" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '2px 2px 0px #000000'
                    }}>
                      💬 Discord - MEMES HERE! 🎉
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-12 border-dashed border-black mt-12 pt-12 text-center transform rotate-1">
            <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-8 rounded-3xl border-6 border-black inline-block transform -rotate-1 shadow-lg" style={{
              boxShadow: '12px 12px 0px #000000, 8px 8px 0px #fbbf24'
            }}>
              <p className="text-yellow-100 text-3xl font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>
                © 2024 0.1 SOL MEME TOKEN! Made with ❤️ and MEMES! ◎ 🎊
              </p>
              <p className="text-green-100 text-2xl mt-4 font-black transform -rotate-1" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>
                ALWAYS DYOR! THIS IS JUST FOR FUN! 🤪 💎
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
