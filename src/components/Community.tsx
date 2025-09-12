import React from 'react';

const Community = () => {
  const communityImages = [
    { src: '/community/ape.png', alt: 'Ape Community', name: 'APE' },
    { src: '/community/bonk.png', alt: 'BONK Community', name: 'BONK' },
    { src: '/community/doge.png', alt: 'DOGE Community', name: 'DOGE' },
    { src: '/community/pepe.png', alt: 'PEPE Community', name: 'PEPE' },
    { src: '/community/shiba.png', alt: 'SHIBA Community', name: 'SHIBA' },
    { src: '/community/wifhat.png', alt: 'WIF HAT Community', name: 'WIF' },
  ];

  return (
    <section className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-yellow-400 inline-block px-6 sm:px-8 py-4 sm:py-6 rounded-3xl border-6 border-black brutal-shadow-xl transform -rotate-2 hover:rotate-1 transition-all duration-300">
            <h2 className="text-responsive-xl font-black text-black crayon-text super-thick" style={{
              textShadow: '3px 3px 0px #ffffff',
              letterSpacing: '3px',
              transform: 'rotate(1deg)'
            }}>
              VI VÄLKOMNAR ALLA COMMUNITIES!
            </h2>
          </div>
          <div className="mt-6 bg-green-600 inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-4 border-black brutal-shadow transform rotate-1 hover:-rotate-1 transition-all duration-300">
            <p className="text-responsive-md font-black text-white crayon-text" style={{
              textShadow: '2px 2px 0px #000000',
              letterSpacing: '2px'
            }}>
              Kom och HODLA tillsammans med oss! 🚀
            </p>
          </div>
        </div>

        {/* Community Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {communityImages.map((community, index) => (
            <div
              key={community.name}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Modern 2D Cartoon Frame */}
              <div 
                className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 p-2 sm:p-3 lg:p-4 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black brutal-shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-300 animate-fade-in"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-' : ''}${(index % 3) + 1}deg)`,
                  background: `linear-gradient(135deg, 
                    hsl(${45 + index * 30}, 85%, 70%) 0%, 
                    hsl(${45 + index * 30}, 90%, 60%) 50%, 
                    hsl(${45 + index * 30}, 95%, 55%) 100%)`
                }}
              >
                {/* Inner glow effect */}
                <div className="absolute inset-2 bg-white/20 rounded-xl sm:rounded-2xl blur-sm"></div>
                
                {/* Image container with minimal padding */}
                <div className="relative bg-white/90 rounded-xl sm:rounded-2xl p-1 sm:p-2 border-2 sm:border-3 border-black/20">
                  <img
                    src={community.src}
                    alt={community.alt}
                    className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                    style={{
                      filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                </div>

                {/* Community label */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl border-2 border-white brutal-shadow-sm">
                    <span className="text-xs sm:text-sm font-black crayon-text" style={{
                      letterSpacing: '1px'
                    }}>
                      {community.name}
                    </span>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-black"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full border-2 border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-2 border-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 inline-block px-6 sm:px-8 py-4 sm:py-6 rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-black brutal-shadow-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-responsive-md font-black text-black crayon-text super-thick" style={{
              textShadow: '2px 2px 0px #ffffff',
              letterSpacing: '2px'
            }}>
              🤝 UNITED WE HODL! 🤝
            </p>
            <p className="text-responsive-sm font-black text-black mt-2" style={{
              textShadow: '1px 1px 0px #ffffff',
              letterSpacing: '1px'
            }}>
              Alla är välkomna i vår 0.1 SOL familj!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;