
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-2 sm:px-4 py-8 sm:py-12 mt-8 sm:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-300 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black border-dashed p-4 sm:p-6 lg:p-10 shadow-xl sm:shadow-2xl" style={{
          transform: 'rotate(-1deg)',
          boxShadow: '12px 12px 0px #000000'
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* About Section */}
            <div id="about" style={{ transform: 'rotate(2deg)' }}>
              <div className="bg-green-400 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black p-3 sm:p-4 lg:p-6 shadow-lg" style={{
                transform: 'rotate(-1deg)',
                boxShadow: '6px 6px 0px #000000'
              }}>
                <h3 className="text-yellow-900 font-black text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  transform: 'rotate(-1deg)',
                  textShadow: '2px 2px 0px #000000'
                }}>About Just Buy 0.1 SOL! ◎</h3>
                <p className="text-green-900 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-2 sm:mb-3 lg:mb-4 font-black" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  This is just a MEME TOKEN called 0.1 SOL! ◎
                </p>
                <p className="text-green-900 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-2 sm:mb-3 lg:mb-4 font-black" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  The idea is SUPER EASY — just buy 0.1 SOL worth! That's it! 🚀
                </p>
                <p className="text-green-900 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-3 sm:mb-4 lg:mb-6 font-black" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  No complicated stuff! Just holding together as a community! 🤝
                </p>
                <div className="bg-red-400 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-4 sm:border-6 border-black border-dashed shadow-lg" style={{
                  transform: 'rotate(-2deg)',
                  boxShadow: '4px 4px 0px #000000'
                }}>
                  <p className="text-yellow-100 text-lg sm:text-xl font-black" style={{
                    fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                    textShadow: '1px 1px 0px #000000'
                  }}>
                    ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                  </p>
                </div>
              </div>
            </div>

            {/* Community */}
            <div style={{ transform: 'rotate(-1deg)' }}>
              <div className="bg-green-400 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black p-3 sm:p-4 lg:p-6 shadow-lg" style={{
                transform: 'rotate(1deg)',
                boxShadow: '6px 6px 0px #000000'
              }}>
                <h3 className="text-yellow-900 font-black text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  transform: 'rotate(1deg)',
                  textShadow: '2px 2px 0px #000000'
                }}>Join the FUN! 🎊</h3>
                <p className="text-green-900 text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 lg:mb-6 font-black" style={{
                  fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  Come hang out with other 0.1 SOL holders! 😄
                </p>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <a href="#" className="block bg-yellow-300 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black border-dashed transition-all shadow-lg hover:scale-110" style={{
                    boxShadow: '4px 4px 0px #000000',
                    transform: 'rotate(1deg)'
                  }}>
                    <span className="text-green-900 text-lg sm:text-xl lg:text-2xl font-black" style={{
                      fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      📱 Telegram - LET'S CHAT!
                    </span>
                  </a>
                  <a href="#" className="block bg-yellow-300 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black border-dashed transition-all shadow-lg hover:scale-110" style={{
                    boxShadow: '4px 4px 0px #000000',
                    transform: 'rotate(-1deg)'
                  }}>
                    <span className="text-green-900 text-lg sm:text-xl lg:text-2xl font-black" style={{
                      fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      🐦 Twitter - FOLLOW US!
                    </span>
                  </a>
                  <a href="#" className="block bg-yellow-300 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black border-dashed transition-all shadow-lg hover:scale-110" style={{
                    boxShadow: '4px 4px 0px #000000',
                    transform: 'rotate(0.5deg)'
                  }}>
                    <span className="text-green-900 text-lg sm:text-xl lg:text-2xl font-black" style={{
                      fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                      textShadow: '1px 1px 0px #000000'
                    }}>
                      💬 Discord - MEMES HERE!
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-4 sm:border-t-6 lg:border-t-8 border-dashed border-black mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center" style={{ transform: 'rotate(1deg)' }}>
            <div className="bg-green-400 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black inline-block shadow-lg" style={{
              transform: 'rotate(-1deg)',
              boxShadow: '6px 6px 0px #000000'
            }}>
              <p className="text-yellow-900 text-lg sm:text-xl lg:text-2xl font-black" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                © 2024 0.1 SOL MEME TOKEN! Made with ❤️ and MEMES! ◎
              </p>
              <p className="text-green-900 text-base sm:text-lg lg:text-xl mt-1 sm:mt-2 font-black" style={{
                fontFamily: '"Comic Sans MS", "Chalkduster", "Bradley Hand", cursive',
                transform: 'rotate(-1deg)',
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
