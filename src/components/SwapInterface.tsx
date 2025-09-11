import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowDown } from 'lucide-react';
import { PumpFunService } from '@/services/pumpFunService';

// Token addresses on Solana
const TOKENS = {
  SOL: 'So11111111111111111111111111111111111111112',
  USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  BONK: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
};
const DOLLAR_TOKEN_MINT = 'AkKKEZCQt75pm9JwughvPcVXLvXSraVGWbqwNB9Ppump';
const SwapInterface = () => {
  const {
    connection
  } = useConnection();
  const {
    publicKey,
    signTransaction,
    disconnect,
    connected
  } = useWallet();
  const {
    setVisible
  } = useWalletModal();
  const [solAmount, setSolAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [solBalance, setSolBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [swapService, setSwapService] = useState<PumpFunService | null>(null);

  // Initialize PumpFunService when RPC endpoint is available
  useEffect(() => {
    const initializeService = async () => {
      try {
        const response = await fetch('/api/get-rpc-config');
        if (!response.ok) {
          throw new Error(`Failed to get RPC config: ${response.status}`);
        }
        const {
          rpcEndpoint
        } = await response.json();
        console.log('Using secure RPC endpoint');
        setSwapService(new PumpFunService(rpcEndpoint, rpcEndpoint));
      } catch (error) {
        console.error('Failed to initialize PumpFunService:', error);
        toast.error('Failed to initialize swap service');
      }
    };
    initializeService();
  }, []);
  useEffect(() => {
    if (publicKey) {
      fetchSolBalance();
    }
  }, [publicKey, connection]);
  const fetchSolBalance = async () => {
    if (!publicKey) return;
    setIsLoading(true);
    try {
      const balance = await connection.getBalance(publicKey);
      setSolBalance(balance / 1000000000); // Convert lamports to SOL
    } catch (error) {
      console.error('Error fetching SOL balance:', error);
      toast.error('Failed to fetch balance');
    } finally {
      setIsLoading(false);
    }
  };

  // Get quote from Pump.fun
  const fetchQuote = async () => {
    if (!swapService || !solAmount || parseFloat(solAmount) <= 0) return;
    try {
      setIsLoading(true);
      const inputAmount = parseFloat(solAmount) * LAMPORTS_PER_SOL;
      const quote = await swapService.getQuote({
        type: 'BUY',
        mint: DOLLAR_TOKEN_MINT,
        amount: inputAmount.toString()
      });
      setQuote(quote);
    } catch (error) {
      console.error('Error fetching quote:', error);
      toast.error('Misslyckades att hämta quote', {
        description: error instanceof Error ? error.message : 'Okänt fel'
      });
    } finally {
      setIsLoading(false);
    }
  };
  const executeSwap = async () => {
    if (!publicKey || !signTransaction || !swapService) {
      toast.error('Please connect your wallet first');
      return;
    }
    if (!solAmount || parseFloat(solAmount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    if (parseFloat(solAmount) > solBalance) {
      toast.error('Insufficient SOL balance');
      return;
    }
    setIsSwapping(true);
    try {
      const inputAmount = parseFloat(solAmount) * LAMPORTS_PER_SOL;
      const result = await swapService.executeSwap({
        publicKey,
        signTransaction,
        connected
      } as any, 'BUY', DOLLAR_TOKEN_MINT, inputAmount.toString(), 'high');
      if (result.success) {
        toast.success('Swap completed successfully!', {
          description: `Transaction: ${result.signature.slice(0, 8)}...`,
          action: {
            label: 'View on Solscan',
            onClick: () => window.open(result.explorerUrl, '_blank')
          }
        });

        // Reset form and refresh balance
        setSolAmount('');
        setQuote(null);
        fetchSolBalance();
      }
    } catch (error) {
      console.error('Swap failed:', error);
      toast.error('Swap failed', {
        description: error instanceof Error ? error.message : 'An unexpected error occurred'
      });
    } finally {
      setIsSwapping(false);
    }
  };
  const setMaxAmount = () => {
    if (solBalance > 0.01) {
      setSolAmount((solBalance - 0.01).toFixed(4)); // Leave some SOL for fees
    }
  };
  const setDollarAmount = () => {
    setSolAmount('0.1'); // Set to 0.1 SOL instead of $1 worth
  };
  const handleConnectWallet = () => {
    setVisible(true);
  };
  const handleDisconnect = async () => {
    try {
      await disconnect();
      setSolAmount('');
      setSolBalance(0);
      toast.success('Wallet disconnected successfully!');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
      toast.error('Failed to disconnect wallet');
    }
  };
  return <div className="max-w-md mx-auto w-full">
      <div className="meme-card rounded-3xl p-4 sm:p-6 lg:p-8 transform -rotate-2 brutal-shadow-xl transition-bounce hover:scale-105 hover:rotate-1">
        {/* Enhanced Header */}
        <div className="text-center mb-6 sm:mb-8 transform rotate-1">
          <div className="bg-green-400 hover:bg-green-500 rounded-2xl border-4 border-black p-4 inline-block transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
            <h2 className="text-base font-black text-white mb-2 crayon-text" style={{
            textShadow: '2px 2px 0px #000000'
          }}>SWAP TO 0.1 SOL!</h2>
            <p className="text-white text-base font-black transform rotate-1 crayon-text" style={{
            textShadow: '2px 2px 0px #000000'
          }}>SUPER EASY!</p>
          </div>
        </div>

        {/* Enhanced From Section */}
        <div className="space-y-6">
          <div className="bg-green-600 hover:bg-green-700 rounded-2xl p-4 sm:p-6 border-6 border-black transform rotate-1 brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base text-white font-black crayon-text" style={{
              textShadow: '2px 2px 0px #000000'
            }}>From</span>
              <span className="text-base text-white font-black crayon-text" style={{
              textShadow: '1px 1px 0px #000000'
            }}>
                Balance: {isLoading ? '...' : solBalance.toFixed(4)} SOL
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 meme-card rounded-xl px-4 py-3 border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full border-2 border-black glow-effect"></div>
                <span className="text-black font-black text-base crayon-text" style={{
                textShadow: '1px 1px 0px #ffffff'
              }}>SOL</span>
              </div>
              
              <div className="flex-1">
                <Input type="number" placeholder="0.00" value={solAmount} onChange={e => setSolAmount(e.target.value)} onBlur={fetchQuote} className="meme-input text-base font-black text-right p-4 rounded-xl" step="0.0001" min="0" />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <Button onClick={setDollarAmount} className="meme-button px-4 py-2 rounded-lg text-base transition-bounce hover:scale-110 hover:rotate-3">
                0.1 SOL
              </Button>
              <Button onClick={setMaxAmount} className="bg-green-500 hover:bg-green-600 text-yellow-100 font-black px-4 py-2 rounded-lg border-3 border-black transform -rotate-1 transition-bounce hover:scale-110 hover:-rotate-2 brutal-shadow text-base" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '1px 1px 0px #000000'
            }}>
                MAX
              </Button>
            </div>
          </div>

          {/* Enhanced Swap Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-yellow-600 hover:bg-yellow-700 rounded-full flex items-center justify-center border-6 border-black transform rotate-12 brutal-shadow transition-bounce hover:scale-125 hover:rotate-45 glow-effect">
              <ArrowDown size={32} className="text-green-900" strokeWidth={4} />
            </div>
          </div>

          {/* Enhanced To Section */}
          <div className="bg-green-600 hover:bg-green-700 rounded-2xl p-4 sm:p-6 border-6 border-black transform -rotate-1 brutal-shadow-lg transition-bounce hover:scale-105 hover:-rotate-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base text-white font-black crayon-text" style={{
              textShadow: '2px 2px 0px #000000'
            }}>To</span>
              <span className="text-base text-white font-black crayon-text" style={{
              textShadow: '1px 1px 0px #000000'
            }}>0.1 SOL Token</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 meme-card rounded-xl px-4 py-3 border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center border-2 border-black glow-effect">
                </div>
                <span className="text-black font-black text-base crayon-text" style={{
                textShadow: '1px 1px 0px #ffffff'
              }}>0.1SOL</span>
              </div>
              
              <div className="flex-1 text-right">
                <span className="text-white text-base font-black crayon-text" style={{
                textShadow: '2px 2px 0px #000000'
              }}>
                  {quote && quote.outAmount ? (parseFloat(quote.outAmount) / Math.pow(10, quote.meta?.outDecimals || 6)).toFixed(6) : solAmount ? '≈ ' + (parseFloat(solAmount) * 1000).toFixed(0) : '0'}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Swap/Connect Button */}
          {!connected ? <Button onClick={handleConnectWallet} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black py-6 rounded-xl transition-bounce transform hover:scale-105 border-0 text-base brutal-shadow crayon-text" style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          textShadow: '2px 2px 0px #000000'
        }}>
              Connect Wallet
            </Button> : <div className="space-y-3">
              <Button onClick={executeSwap} disabled={!solAmount || isSwapping || parseFloat(solAmount) <= 0} className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-6 rounded-2xl border-4 border-black brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-1 disabled:hover:scale-100 disabled:opacity-50 text-base crayon-text" style={{
            textShadow: '2px 2px 0px #000000'
          }}>
                {isSwapping ? <span>🔄 SWAPPING...</span> : 'SWAP TO 0.1 SOL!'}
              </Button>
              <Button onClick={handleDisconnect} variant="outline" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3 rounded-xl border-4 border-black transition-bounce text-base crayon-text" style={{
            textShadow: '2px 2px 0px #000000'
          }}>
                Disconnect Wallet
              </Button>
            </div>}

          {/* Quote Info */}
          {quote && quote.outAmount && <div className="bg-blue-600 hover:bg-blue-700 p-4 rounded-xl border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
              <p className="text-white font-black text-base crayon-text mb-2" style={{
            textShadow: '1px 1px 0px #000000'
          }}>
                You'll receive: {(parseFloat(quote.outAmount) / Math.pow(10, quote.meta?.outDecimals || 6)).toFixed(6)} 0.1SOL
              </p>
              <p className="text-white font-black text-base crayon-text" style={{
            textShadow: '1px 1px 0px #000000'
          }}>
                Market Cap: {quote.meta?.currentMarketCapInSol?.toFixed(4)} SOL
              </p>
              <p className="text-white font-black text-base crayon-text" style={{
            textShadow: '1px 1px 0px #000000'
          }}>
                Bonding Complete: {quote.meta?.isCompleted ? '✅ Yes' : '❌ No'}
              </p>
            </div>}

          {/* Enhanced Info */}
          <div className="text-center bg-green-700 hover:bg-green-800 p-4 rounded-xl border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
            <p className="text-white font-black text-base crayon-text" style={{
            textShadow: '1px 1px 0px #000000'
          }}>High Priority  • Pump.fun Protocol</p>
            <p className="text-white font-black text-base crayon-text" style={{
            textShadow: '1px 1px 0px #000000'
          }}>
          </p>
          </div>
        </div>
      </div>

      {/* Contract Address Only - Properly Fitted Container */}
      <div className="mt-8 w-full">
        <div className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl border-6 border-black p-6 sm:p-8 lg:p-10 transform rotate-1 brutal-shadow-xl transition-bounce hover:scale-105 hover:-rotate-1 overflow-hidden w-full mx-auto" style={{
        maxWidth: '200rem'
      }}>
          <div className="text-center mb-3">
            <h3 className="text-black font-black text-base crayon-text" style={{
            textShadow: '1px 1px 0px #ffffff'
          }}>
              CONTRACT ADDRESS 📋
            </h3>
          </div>
          <div className="w-full overflow-x-auto">
            <button onClick={() => {
            navigator.clipboard.writeText(DOLLAR_TOKEN_MINT);
            toast.success('Contract address copied! 📋');
          }} className="font-mono text-base bg-green-600 hover:bg-green-700 px-2 py-3 rounded-lg border-3 border-black transition-bounce hover:scale-105 min-w-full brutal-shadow-lg glow-effect block" style={{
            fontWeight: '900',
            textShadow: '1px 1px 0px #000000',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
            width: 'max-content',
            minWidth: '100%'
          }}>
              {DOLLAR_TOKEN_MINT}
            </button>
          </div>
          <div className="mt-2 text-center text-base text-black font-black crayon-text">
            👆 CLICK TO COPY! 👆
          </div>
        </div>
      </div>
    </div>;
};
export default SwapInterface;