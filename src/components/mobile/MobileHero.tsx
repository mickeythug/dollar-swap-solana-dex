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
      <div className="relative z-10 flex items-center justify-center min-h-screen">
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