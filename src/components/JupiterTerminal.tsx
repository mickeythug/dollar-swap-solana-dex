import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Jupiter: {
      init: (config: any) => void;
    };
  }
}

const JupiterTerminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Jupiter Terminal script
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v1.0.0.js';
    script.onload = () => {
      if (window.Jupiter && terminalRef.current) {
        window.Jupiter.init({
          displayMode: 'integrated',
          integratedTargetId: 'jupiter-terminal',
          endpoint: 'https://small-evocative-diamond.solana-mainnet.quiknode.pro/2ed30cf5e6e264547ca0fac87762184bfdb2a995/',
          strictTokenList: false,
          defaultExplorer: 'Solscan',
          formProps: {
            initialAmount: '0.1',
            initialInputMint: 'So11111111111111111111111111111111111111112',
            initialOutputMint: '9bb876876c4B2d7896F12C73F0e50e22D4dE75uG4FqK3StXJ9WJ7Cu',
          },
          containerStyles: {
            maxHeight: '90vh',
          },
          containerClassName: 'jupiter-terminal-container',
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="meme-card rounded-3xl p-6 transform -rotate-1 brutal-shadow-xl transition-bounce hover:scale-105 hover:rotate-1">
        <h2 className="text-responsive-lg font-black text-black mb-6 crayon-text text-center" style={{
          textShadow: '2px 2px 0px #ffffff',
          transform: 'rotate(2deg)'
        }}>
          🚀 BUY 0.1 SOL TOKEN! 🔥
        </h2>
        
        <div 
          id="jupiter-terminal" 
          ref={terminalRef} 
          className="w-full min-h-[500px] rounded-2xl overflow-hidden"
          style={{
            // Custom styles to match our theme
            background: 'linear-gradient(135deg, #fef3c7, #fde047)',
            border: '4px solid #000000',
            boxShadow: 'var(--shadow-brutal)'
          }}
        />
        
        <div className="mt-6 text-center">
          <p className="text-responsive-xs font-black text-black crayon-text" style={{
            textShadow: '1px 1px 0px #ffffff'
          }}>
            💎 THE SIMPLEST MEME TOKEN EVER! 💎
          </p>
          <p className="text-responsive-xs font-black text-red-600 mt-2" style={{
            textShadow: '1px 1px 0px #ffffff'
          }}>
            ⚠️ NOT FINANCIAL ADVICE! JUST FOR FUN! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
};

export default JupiterTerminal;