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
    <section className="relative z-10 px-2 sm:px-4 lg:px-8 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 inline-block px-8 sm:px-12 py-6 sm:py-8 rounded-[2rem] border-8 border-black brutal-shadow-xl transform -rotate-2 hover:rotate-1 transition-all duration-600 hover:scale-105">
            <h2 className="text-responsive-xl font-black text-black crayon-text super-thick" style={{
              textShadow: '4px 4px 0px #ffffff, -2px -2px 0px rgba(0,0,0,0.3)',
              letterSpacing: '4px',
              transform: 'rotate(1deg)'
            }}>
              WE WELCOME ALL COMMUNITIES!
            </h2>
          </div>
          <div className="mt-8 bg-gradient-to-br from-green-600 to-green-700 inline-block px-6 sm:px-8 py-4 sm:py-6 rounded-3xl border-6 border-black brutal-shadow-lg transform rotate-1 hover:-rotate-1 transition-all duration-600 hover:scale-105">
            <p className="text-responsive-md font-black text-white crayon-text" style={{
              textShadow: '3px 3px 0px #000000',
              letterSpacing: '3px'
            }}>
              Come and HODL with us! 🚀
            </p>
          </div>
        </div>

        {/* Enhanced Community Grid with improved hover effects */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {communityImages.map((community, index) => (
            <div
              key={community.name}
              className="group relative"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              {/* Enhanced Modern 2D Cartoon Frame */}
              <div 
                className="relative bg-gradient-to-br p-3 sm:p-4 lg:p-6 rounded-3xl sm:rounded-[2rem] border-6 sm:border-8 border-black brutal-shadow-xl transform hover:scale-110 hover:rotate-2 transition-all duration-600 animate-fade-in group-hover:shadow-2xl"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-' : ''}${(index % 3) + 1}deg)`,
                  background: `linear-gradient(135deg, 
                    hsl(${45 + index * 35}, 85%, 70%) 0%, 
                    hsl(${45 + index * 35}, 90%, 60%) 50%, 
                    hsl(${45 + index * 35}, 95%, 55%) 100%)`
                }}
              >
                {/* Enhanced inner glow effect */}
                <div className="absolute inset-3 bg-white/30 rounded-2xl sm:rounded-3xl blur-sm"></div>
                
                {/* Enhanced image container */}
                <div className="relative bg-white/95 rounded-2xl sm:rounded-3xl p-2 sm:p-3 border-3 sm:border-4 border-black/30 overflow-hidden">
                  <img
                    src={community.src}
                    alt={community.alt}
                    className="w-full h-auto rounded-xl sm:rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-600"
                    style={{
                      filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))'
                    }}
                  />
                </div>

                {/* Enhanced community label */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl border-3 border-white brutal-shadow-lg">
                    <span className="text-sm sm:text-base font-black crayon-text" style={{
                      letterSpacing: '2px'
                    }}>
                      {community.name}
                    </span>
                  </div>
                </div>

                {/* Enhanced decorative corners */}
                <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full border-3 border-black"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full border-3 border-black"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-3 border-black"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-purple-500 rounded-full border-3 border-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom message */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 inline-block px-8 sm:px-12 py-6 sm:py-8 rounded-3xl sm:rounded-[2rem] border-6 sm:border-8 border-black brutal-shadow-xl transform hover:scale-105 transition-all duration-600">
            <p className="text-responsive-md font-black text-black crayon-text super-thick" style={{
              textShadow: '3px 3px 0px #ffffff, -2px -2px 0px rgba(0,0,0,0.2)',
              letterSpacing: '3px'
            }}>
              🤝 UNITED WE HODL! 🤝
            </p>
            <p className="text-responsive-sm font-black text-black mt-3" style={{
              textShadow: '2px 2px 0px #ffffff',
              letterSpacing: '2px'
            }}>
              Everyone is welcome in our 0.1 SOL family!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;