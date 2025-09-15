import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Removed toast notifications
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
  const { connection } = useConnection();
  const { publicKey, signTransaction, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  
  const [solAmount, setSolAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [solBalance, setSolBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [swapService, setSwapService] = useState<PumpFunService | null>(null);

  // Initialize PumpFunService with correct Jupiter API endpoint
  useEffect(() => {
    const initializeService = async () => {
      try {
        const response = await fetch('/api/get-rpc-config');
        if (!response.ok) {
          throw new Error(`Failed to get RPC config: ${response.status}`);
        }
        const { rpcEndpoint } = await response.json();
        console.log('Using secure RPC endpoint for connections');
        
        // Use the correct Jupiter API endpoint for pump-fun operations
        const jupiterApiEndpoint = 'https://jupiter-swap-api.quiknode.pro/2ed30cf5e6e264547ca0fac87762184bfdb2a995';
        setSwapService(new PumpFunService(jupiterApiEndpoint, rpcEndpoint));
      } catch (error) {
        console.error('Failed to initialize swap service:', error);
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
      console.error('Failed to fetch quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const executeSwap = async () => {
    if (!publicKey || !signTransaction || !swapService) {
      console.error('Please connect your wallet first');
      return;
    }
    if (!solAmount || parseFloat(solAmount) <= 0) {
      console.error('Please enter a valid amount');
      return;
    }
    if (parseFloat(solAmount) > solBalance) {
      console.error('Insufficient SOL balance');
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
        console.log('Swap completed successfully!', result.signature);
        
        // Reset form and refresh balance
        setSolAmount('');
        setQuote(null);
        fetchSolBalance();
      }
    } catch (error) {
      console.error('Swap failed:', error);
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
      console.log('Wallet disconnected successfully!');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="meme-card rounded-[2rem] p-6 sm:p-8 lg:p-10 transform -rotate-2 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:rotate-1">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-10 transform rotate-1">
          <div className="bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 rounded-3xl border-6 border-black p-6 inline-block transform -rotate-1 brutal-shadow-lg transition-all duration-600 hover:scale-105 hover:rotate-2">
            <h2 className="text-lg font-black text-white mb-3 crayon-text" style={{
              textShadow: '3px 3px 0px #000000'
            }}>SWAP TO 0.1 SOL!</h2>
            <p className="text-white text-lg font-black transform rotate-1 crayon-text" style={{
              textShadow: '3px 3px 0px #000000'
            }}>SUPER EASY!</p>
          </div>
        </div>

        {/* Enhanced From Section */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-3xl p-6 sm:p-8 border-8 border-black transform rotate-1 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:rotate-2">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-white font-black crayon-text" style={{
                textShadow: '3px 3px 0px #000000'
              }}>From</span>
              <span className="text-lg text-white font-black crayon-text" style={{
                textShadow: '2px 2px 0px #000000'
              }}>
                Balance: {isLoading ? '...' : solBalance.toFixed(4)} SOL
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 meme-card rounded-2xl px-6 py-4 border-6 border-black transform -rotate-1 brutal-shadow-lg transition-all duration-600 hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-3 border-black glow-effect overflow-hidden">
                  <img src="/solana-logo.png" alt="SOL Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-black font-black text-lg crayon-text" style={{
                  textShadow: '2px 2px 0px #ffffff'
                }}>SOL</span>
              </div>
              
              <div className="flex-1">
                <Input 
                  type="number" 
                  placeholder="0.00" 
                  value={solAmount} 
                  onChange={(e) => setSolAmount(e.target.value)} 
                  onBlur={fetchQuote} 
                  className="meme-input text-lg font-black text-right p-6 rounded-2xl border-6 border-black" 
                  step="0.0001" 
                  min="0" 
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 mt-6">
              <Button 
                onClick={setDollarAmount} 
                className="meme-button px-6 py-3 rounded-2xl text-lg transition-all duration-600 hover:scale-110 hover:rotate-3"
              >
                0.1 SOL
              </Button>
              <Button 
                onClick={setMaxAmount} 
                className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-yellow-100 font-black px-6 py-3 rounded-2xl border-4 border-black transform -rotate-1 transition-all duration-600 hover:scale-110 hover:-rotate-2 brutal-shadow-lg text-lg" 
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Enhanced Swap Arrow */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 rounded-full flex items-center justify-center border-8 border-black transform rotate-12 brutal-shadow-xl transition-all duration-600 hover:scale-125 hover:rotate-45 glow-strong">
              <ArrowDown size={40} className="text-green-900" strokeWidth={5} />
            </div>
          </div>

          {/* Enhanced To Section */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-3xl p-6 sm:p-8 border-8 border-black transform -rotate-1 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:-rotate-2">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-white font-black crayon-text" style={{
                textShadow: '3px 3px 0px #000000'
              }}>To</span>
              <span className="text-lg text-white font-black crayon-text" style={{
                textShadow: '2px 2px 0px #000000'
              }}>0.1 SOL Token</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 meme-card rounded-2xl px-6 py-4 border-6 border-black transform rotate-1 brutal-shadow-lg transition-all duration-600 hover:scale-105">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-3 border-black glow-effect overflow-hidden">
                  <img src="/logo.png" alt="0.1 SOL Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-black font-black text-lg crayon-text" style={{
                  textShadow: '2px 2px 0px #ffffff'
                }}>0.1SOL</span>
              </div>
              
              <div className="flex-1 text-right">
                <span className="text-white text-lg font-black crayon-text" style={{
                  textShadow: '3px 3px 0px #000000'
                }}>
                  {quote && quote.outAmount ? 
                    (parseFloat(quote.outAmount) / Math.pow(10, quote.meta?.outDecimals || 6)).toFixed(6) : 
                    solAmount ? '≈ ' + (parseFloat(solAmount) * 1000).toFixed(0) : '0'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Swap/Connect Button */}
          {!connected ? (
            <Button 
              onClick={handleConnectWallet} 
              className="w-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-black py-8 rounded-2xl transition-all duration-600 transform hover:scale-105 border-6 border-black text-lg brutal-shadow-xl crayon-text" 
              style={{
                textShadow: '3px 3px 0px #000000'
              }}
            >
              Connect Wallet
            </Button>
          ) : (
            <div className="space-y-4">
              <Button 
                onClick={executeSwap} 
                disabled={!solAmount || isSwapping || parseFloat(solAmount) <= 0} 
                className="w-full bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-black py-8 rounded-3xl border-6 border-black brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:rotate-1 disabled:hover:scale-100 disabled:opacity-50 text-lg crayon-text" 
                style={{
                  textShadow: '3px 3px 0px #000000'
                }}
              >
                {isSwapping ? <span>🔄 SWAPPING...</span> : 'SWAP TO 0.1 SOL!'}
              </Button>
              <Button 
                onClick={handleDisconnect} 
                variant="outline" 
                className="w-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black py-4 rounded-2xl border-6 border-black transition-all duration-600 text-lg crayon-text" 
                style={{
                  textShadow: '3px 3px 0px #000000'
                }}
              >
                Disconnect Wallet
              </Button>
            </div>
          )}

          {/* Enhanced Quote Info */}
          {quote && quote.outAmount && (
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-6 rounded-2xl border-6 border-black transform rotate-1 brutal-shadow-lg transition-all duration-600 hover:scale-105 hover:rotate-2">
              <p className="text-white font-black text-lg crayon-text mb-3" style={{
                textShadow: '2px 2px 0px #000000'
              }}>
                You'll receive: {(parseFloat(quote.outAmount) / Math.pow(10, quote.meta?.outDecimals || 6)).toFixed(6)} 0.1SOL
              </p>
              <p className="text-white font-black text-lg crayon-text mb-2" style={{
                textShadow: '2px 2px 0px #000000'
              }}>
                Market Cap: {quote.meta?.currentMarketCapInSol?.toFixed(4)} SOL
              </p>
              <p className="text-white font-black text-lg crayon-text" style={{
                textShadow: '2px 2px 0px #000000'
              }}>
                Bonding Complete: {quote.meta?.isCompleted ? '✅ Yes' : '❌ No'}
              </p>
            </div>
          )}

          {/* Enhanced Info */}
          <div className="text-center bg-gradient-to-br from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 p-6 rounded-2xl border-6 border-black transform rotate-1 brutal-shadow-lg transition-all duration-600 hover:scale-105 hover:rotate-2">
            <p className="text-white font-black text-lg crayon-text" style={{
              textShadow: '2px 2px 0px #000000'
            }}>High Priority • Pump.fun Protocol</p>
          </div>
        </div>
      </div>

      {/* Enhanced Contract Address Container */}
      <div className="mt-12 w-full">
        <div className="bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 rounded-3xl border-8 border-black p-8 sm:p-10 lg:p-12 transform rotate-1 brutal-shadow-xl transition-all duration-600 hover:scale-105 hover:-rotate-1 overflow-hidden w-full mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-black font-black text-xl crayon-text" style={{
              textShadow: '2px 2px 0px #ffffff'
            }}>
              CONTRACT ADDRESS 📋
            </h3>
          </div>
          <div className="w-full overflow-x-auto">
            <button 
              onClick={() => {
                navigator.clipboard.writeText(DOLLAR_TOKEN_MINT);
                console.log('Contract address copied! 📋');
              }} 
              className="font-mono text-lg bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-4 rounded-2xl border-4 border-black transition-all duration-600 hover:scale-105 min-w-full brutal-shadow-xl glow-effect block text-white" 
              style={{
                fontWeight: '900',
                textShadow: '2px 2px 0px #000000',
                letterSpacing: '1px',
                whiteSpace: 'nowrap',
                width: 'max-content',
                minWidth: '100%'
              }}
            >
              {DOLLAR_TOKEN_MINT}
            </button>
          </div>
          <div className="mt-4 text-center text-lg text-black font-black crayon-text">
            👆 CLICK TO COPY! 👆
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;