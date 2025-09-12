import React, { useState, useEffect } from 'react';

const MobileCommunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const communityImages = [
    { src: '/community/ape.png', alt: 'Ape Community', name: 'APE' },
    { src: '/community/bonk.png', alt: 'BONK Community', name: 'BONK' },
    { src: '/community/doge.png', alt: 'DOGE Community', name: 'DOGE' },
    { src: '/community/pepe.png', alt: 'PEPE Community', name: 'PEPE' },
    { src: '/community/shiba.png', alt: 'SHIBA Community', name: 'SHIBA' },
    { src: '/community/wifhat.png', alt: 'WIF HAT Community', name: 'WIF' },
  ];

  // Auto-scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= communityImages.length - 2 ? 0 : prevIndex + 2
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [communityImages.length]);

  // Handle touch events for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < communityImages.length - 2) {
      setCurrentIndex(currentIndex + 2);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const getCurrentPair = () => {
    return [
      communityImages[currentIndex],
      communityImages[currentIndex + 1] || communityImages[0]
    ];
  };

  return (
    <section className="px-4 py-8">
      <div className="max-w-md mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="bg-yellow-400 inline-block px-4 py-3 rounded-2xl border-4 border-black brutal-shadow transform -rotate-1">
            <h2 className="text-lg font-black text-black crayon-text">
              WE WELCOME ALL COMMUNITIES!
            </h2>
          </div>
          <div className="mt-4 bg-green-600 inline-block px-3 py-2 rounded-xl border-3 border-black brutal-shadow transform rotate-1">
            <p className="text-sm font-black text-white crayon-text">
              Come HODL with us! 🚀
            </p>
          </div>
        </div>

        {/* Swipeable Gallery Container */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="w-full flex-shrink-0 grid grid-cols-2 gap-3 p-2">
              {getCurrentPair().map((community, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="relative group"
                >
                  {/* Modern 2D Cartoon Frame */}
                  <div 
                    className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 p-2 rounded-xl border-4 border-black brutal-shadow transform hover:scale-105 transition-all duration-300"
                    style={{
                      transform: `rotate(${index % 2 === 0 ? '-' : ''}2deg)`,
                      background: `linear-gradient(135deg, 
                        hsl(${45 + (currentIndex + index) * 30}, 85%, 70%) 0%, 
                        hsl(${45 + (currentIndex + index) * 30}, 90%, 60%) 50%, 
                        hsl(${45 + (currentIndex + index) * 30}, 95%, 55%) 100%)`
                    }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-1 bg-white/20 rounded-lg blur-sm"></div>
                    
                    {/* Image container with minimal padding */}
                    <div className="relative bg-white/90 rounded-lg p-1 border-2 border-black/20">
                      <img
                        src={community.src}
                        alt={community.alt}
                        className="w-full h-auto rounded-md shadow-lg"
                        style={{
                          filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                        }}
                      />
                    </div>

                    {/* Community label */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black text-white px-2 py-1 rounded-lg border-2 border-white brutal-shadow-sm">
                        <span className="text-xs font-black crayon-text">
                          {community.name}
                        </span>
                      </div>
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border-2 border-black"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full border-2 border-black"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500 rounded-full border-2 border-black"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: Math.ceil(communityImages.length / 2) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full border-2 border-black transition-all duration-300 ${
                Math.floor(currentIndex / 2) === index 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index * 2)}
            />
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-6">
          <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-green-500 inline-block px-4 py-3 rounded-xl border-4 border-black brutal-shadow transform hover:scale-105 transition-all duration-300">
            <p className="text-sm font-black text-black crayon-text">
              🤝 UNITED WE HODL! 🤝
            </p>
            <p className="text-xs font-black text-black mt-1 crayon-text">
              Everyone is welcome in our 0.1 SOL family!
            </p>
          </div>
        </div>

        {/* Swipe instruction */}
        <div className="text-center mt-4">
          <p className="text-xs text-white font-black crayon-text">
            👆 Swipe to see more or wait for auto-scroll
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileCommunity;