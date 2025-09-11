import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-2 sm:px-4 py-8 sm:py-12 mt-8 sm:mt-16 animate-slide-up">
      <div className="max-w-6xl mx-auto">
        <div className="meme-card rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black border-dashed p-4 sm:p-6 lg:p-10 brutal-shadow-xl transition-bounce hover:scale-105 hover:rotate-1" style={{
          transform: 'rotate(-1deg) skew(-0.5deg)'
        }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Enhanced About Section */}
            <div id="about" className="animate-bounce-in" style={{ 
              transform: 'rotate(2deg) skew(0.5deg)',
              animationDelay: '0.2s'
            }}>
              <div className="bg-green-400 hover:bg-green-500 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black p-3 sm:p-4 lg:p-6 brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-2" style={{
                transform: 'rotate(-1deg) skew(-0.5deg)'
              }}>
                <h3 className="text-yellow-900 crayon-text super-thick text-responsive-lg mb-3 sm:mb-4 lg:mb-6 animate-wiggle">
                  About Just Buy 0.1 SOL! ◎
                </h3>
                <div className="space-y-3 text-responsive-sm">
                  <p className="text-green-900 leading-relaxed font-black crayon-text super-thick">
                    This is just a MEME TOKEN called 0.1 SOL! ◎
                  </p>
                  <p className="text-green-900 leading-relaxed font-black crayon-text super-thick">
                    The idea is SUPER EASY — just buy 0.1 SOL worth! That's it! 🚀
                  </p>
                  <p className="text-green-900 leading-relaxed font-black crayon-text super-thick">
                    No complicated stuff! Just holding together as a community! 🤝
                  </p>
                </div>
                <div className="bg-red-400 hover:bg-red-500 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-4 sm:border-6 border-black border-dashed brutal-shadow mt-4 transition-bounce hover:scale-105 hover:rotate-3" style={{
                  transform: 'rotate(-2deg) skew(1deg)'
                }}>
                  <p className="text-yellow-100 text-responsive-sm crayon-text super-thick animate-wiggle">
                    ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Community Section */}
            <div className="animate-bounce-in" style={{ 
              transform: 'rotate(-1deg) skew(0.5deg)',
              animationDelay: '0.4s'
            }}>
              <div className="bg-green-400 hover:bg-green-500 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black p-3 sm:p-4 lg:p-6 brutal-shadow-lg transition-bounce hover:scale-105 hover:-rotate-2" style={{
                transform: 'rotate(1deg) skew(-0.5deg)'
              }}>
                <h3 className="text-yellow-900 crayon-text super-thick text-responsive-lg mb-3 sm:mb-4 lg:mb-6 animate-wiggle">
                  Join the FUN! 🎊
                </h3>
                <p className="text-green-900 text-responsive-sm mb-3 sm:mb-4 lg:mb-6 font-black crayon-text super-thick">
                  Come hang out with other 0.1 SOL holders! 😄
                </p>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {[
                    { icon: '📱', text: 'Telegram - LET\'S CHAT!', delay: '0.6s' },
                    { icon: '🐦', text: 'Twitter - FOLLOW US!', delay: '0.8s' },
                    { icon: '💬', text: 'Discord - MEMES HERE!', delay: '1s' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block meme-card p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-black border-dashed brutal-shadow transition-bounce hover:scale-110 hover:rotate-3 animate-bounce-in"
                      style={{
                        transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'}) skew(-0.5deg)`,
                        animationDelay: social.delay
                      }}
                    >
                      <span className="text-green-900 text-responsive-sm crayon-text super-thick">
                        {social.icon} {social.text}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Bottom */}
          <div className="border-t-4 sm:border-t-6 lg:border-t-8 border-dashed border-black mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center animate-bounce-in" style={{ 
            transform: 'rotate(1deg)',
            animationDelay: '1.2s'
          }}>
            <div className="bg-green-400 hover:bg-green-500 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black inline-block brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-3" style={{
              transform: 'rotate(-1deg) skew(-0.5deg)'
            }}>
              <p className="text-yellow-900 text-responsive-sm crayon-text super-thick animate-wiggle">
                © 2024 0.1 SOL MEME TOKEN! Made with ❤️ and MEMES! ◎
              </p>
              <p className="text-green-900 text-responsive-xs mt-1 sm:mt-2 crayon-text super-thick">
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