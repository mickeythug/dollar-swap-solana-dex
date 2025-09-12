import React from 'react';


const MobileHero = () => {
  return (
    <div className="min-h-screen bg-green-800 relative overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(45deg, #166534 25%, transparent 25%),
        linear-gradient(-45deg, #166534 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #166534 75%),
        linear-gradient(-45deg, transparent 75%, #166534 75%)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
    }}>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Modern 2D cartoon message box */}
        <div className="mb-8 max-w-sm relative z-20">
          <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-3xl p-6 border-4 border-black transform rotate-1 brutal-shadow-xl hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out">
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-yellow-400 border-l-4 border-b-4 border-black transform rotate-45"></div>
            </div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-2xl pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-3">
                <div className="bg-black text-yellow-300 px-4 py-2 rounded-full text-xs font-black inline-block shadow-lg transform -rotate-2">
                  💡 THE MESSAGE
                </div>
              </div>
              <p className="text-black font-black text-xl leading-relaxed text-center transform rotate-1" style={{
                textShadow: '3px 3px 0px rgba(255,255,255,0.9)',
                letterSpacing: '1px'
              }}>
                "Just buy 0.1 SOL worth of it - it's not that big of a deal!"
              </p>
            </div>
          </div>
        </div>
        
        <img 
          src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
          alt="0.1 SOL Community Logo"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-150 z-0"
        />
      </div>
    </div>
  );
};

export default MobileHero;