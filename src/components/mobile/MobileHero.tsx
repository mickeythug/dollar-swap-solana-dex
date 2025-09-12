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
        {/* Animated cartoon message box */}
        <div className="mb-8 max-w-sm">
          <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-4 border-4 border-black transform rotate-2 brutal-shadow-xl animate-bounce hover:scale-105 hover:-rotate-1 transition-all duration-300">
            <div className="text-center mb-2">
              <div className="bg-black text-yellow-300 px-3 py-1 rounded-full text-xs font-black inline-block">
                THE MESSAGE
              </div>
            </div>
            <p className="text-black font-black text-sm leading-relaxed text-center">
              "Just buy 0.1 SOL worth of it - it's not that big of a deal!"
            </p>
          </div>
        </div>
        
        <img 
          src="/lovable-uploads/a2925ada-d9a1-4459-b346-251f5ca5b59d.png" 
          alt="0.1 SOL Community Logo"
          className="w-screen h-screen object-cover select-none pointer-events-none scale-150"
        />
      </div>
    </div>
  );
};

export default MobileHero;