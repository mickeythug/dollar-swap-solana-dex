import React, { useEffect, useRef } from 'react';
import { useWallet, WalletContextState } from '@solana/wallet-adapter-react';

declare global {
  interface Window {
    Jupiter: {
      init: (config: any) => void;
      syncProps?: (props: { passthroughWalletContextState?: WalletContextState }) => void;
    };
  }
}

const JupiterTerminal = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const wallet = useWallet();

  useEffect(() => {
    const initPlugin = () => {
      if (!window.Jupiter) {
        console.error('[Jupiter] Plugin not found on window');
        return;
      }
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'jupiter-terminal',
        enableWalletPassthrough: true,
        passthroughWalletContextState: wallet as unknown as WalletContextState,
        defaultExplorer: 'Solscan',
        formProps: {
          initialAmount: '0.1',
          initialInputMint: 'So11111111111111111111111111111111111111112', // SOL
          initialOutputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8t1HqbyCMBhhKe3', // USDC
        },
        containerStyles: {
          width: '100%',
          height: '600px',
          borderRadius: '16px',
          overflow: 'hidden',
        },
        containerClassName: 'jupiter-terminal-container',
      });
    };

    if (window.Jupiter) {
      initPlugin();
    } else {
      // Wait briefly in case the script hasn't loaded yet
      const id = setInterval(() => {
        if (window.Jupiter) {
          clearInterval(id);
          initPlugin();
        }
      }, 100);
      setTimeout(() => clearInterval(id), 5000);
    }
  }, [wallet]);

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