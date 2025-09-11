import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { VersionedTransaction } from '@solana/web3.js';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowDown } from 'lucide-react';

const DOLLAR_TOKEN_MINT = '3o8h4sjvLtxxPmVx9boN7yC4Tzd6zse5Ycb6VUHbpump';

const SwapInterface = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, disconnect, connected } = useWallet();
  const { setVisible } = useWalletModal();
  const [solAmount, setSolAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [solBalance, setSolBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  const executeSwap = async () => {
    if (!publicKey || !signTransaction) {
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
      // Call PumpPortal API
      const response = await fetch('https://pumpportal.fun/api/trade-local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicKey: publicKey.toString(),
          action: 'buy',
          mint: DOLLAR_TOKEN_MINT,
          denominatedInSol: 'true',
          amount: parseFloat(solAmount),
          slippage: 10,
          priorityFee: 0.0001,
          pool: 'auto'
        }),
      });

      if (response.status === 200) {
        const data = await response.arrayBuffer();
        const tx = VersionedTransaction.deserialize(new Uint8Array(data));
        
        // Sign the transaction
        const signedTx = await signTransaction(tx);
        
        // Send the transaction
        const signature = await connection.sendTransaction(signedTx);
        
        // Wait for confirmation
        await connection.confirmTransaction(signature, 'confirmed');
        
        toast.success('Swap completed successfully!', {
          description: `Transaction: ${signature.slice(0, 8)}...`,
          action: {
            label: 'View on Solscan',
            onClick: () => window.open(`https://solscan.io/tx/${signature}`, '_blank'),
          },
        });

        // Reset form and refresh balance
        setSolAmount('');
        fetchSolBalance();
        
      } else {
        const errorText = await response.text();
        console.error('Swap error:', errorText);
        toast.error('Swap failed', {
          description: 'Please try again or check your input values',
        });
      }
    } catch (error) {
      console.error('Swap error:', error);
      toast.error('Swap failed', {
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
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

  return (
    <div className="max-w-md mx-auto w-full animate-slide-up">
      <div className="meme-card rounded-3xl p-4 sm:p-6 lg:p-8 transform -rotate-2 brutal-shadow-xl transition-bounce hover:scale-105 hover:rotate-1">
        {/* Enhanced Header */}
        <div className="text-center mb-6 sm:mb-8 transform rotate-1 animate-bounce-in">
          <div className="bg-green-400 hover:bg-green-500 rounded-2xl border-4 border-black p-4 inline-block transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
            <h2 className="text-responsive-lg font-black text-white mb-2 crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>SWAP TO 0.1 SOL!</h2>
            <p className="text-white text-responsive-sm font-black transform rotate-1 crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>SUPER EASY! ◎</p>
          </div>
        </div>

        {/* Enhanced From Section */}
        <div className="space-y-6">
          <div className="bg-green-400 hover:bg-green-500 rounded-2xl p-4 sm:p-6 border-6 border-black transform rotate-1 brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-responsive-sm text-white font-black crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>From</span>
              <span className="text-responsive-xs text-white font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>
                Balance: {isLoading ? '...' : solBalance.toFixed(4)} SOL
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 meme-card rounded-xl px-4 py-3 border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 rounded-full border-2 border-black glow-effect animate-wiggle"></div>
                <span className="text-black font-black text-responsive-sm crayon-text" style={{textShadow: '1px 1px 0px #ffffff'}}>SOL</span>
              </div>
              
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={solAmount}
                  onChange={(e) => setSolAmount(e.target.value)}
                  className="meme-input text-2xl font-black text-right p-4 rounded-xl text-responsive-sm"
                  step="0.0001"
                  min="0"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <Button
                onClick={setDollarAmount}
                className="meme-button px-4 py-2 rounded-lg text-responsive-xs transition-bounce hover:scale-110 hover:rotate-3"
              >
                0.1 SOL
              </Button>
              <Button
                onClick={setMaxAmount}
                className="bg-green-500 hover:bg-green-600 text-yellow-100 font-black px-4 py-2 rounded-lg border-3 border-black transform -rotate-1 transition-bounce hover:scale-110 hover:-rotate-2 brutal-shadow text-responsive-xs"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Enhanced Swap Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center border-6 border-black transform rotate-12 brutal-shadow transition-bounce hover:scale-125 hover:rotate-45 glow-effect animate-wiggle">
              <ArrowDown size={32} className="text-green-900" strokeWidth={4} />
            </div>
          </div>

          {/* Enhanced To Section */}
          <div className="bg-green-400 hover:bg-green-500 rounded-2xl p-4 sm:p-6 border-6 border-black transform -rotate-1 brutal-shadow-lg transition-bounce hover:scale-105 hover:-rotate-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-responsive-sm text-white font-black crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>To</span>
              <span className="text-responsive-xs text-white font-black crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>0.1 SOL Token</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 meme-card rounded-xl px-4 py-3 border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center border-2 border-black glow-effect animate-wiggle">
                  <span className="text-lg font-black text-green-900">◎</span>
                </div>
                <span className="text-black font-black text-responsive-sm crayon-text" style={{textShadow: '1px 1px 0px #ffffff'}}>0.1SOL</span>
              </div>
              
              <div className="flex-1 text-right">
                <span className="text-white text-responsive-sm font-black crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>
                  {solAmount ? '≈ ' + (parseFloat(solAmount) * 1000).toFixed(0) : '0'}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Swap/Connect Button */}
          {!connected ? (
            <Button
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-bounce transform hover:scale-105 border-0 text-responsive-sm brutal-shadow glow-effect animate-bounce-in"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Connect Wallet
            </Button>
          ) : (
            <div className="space-y-3">
              <Button
                onClick={executeSwap}
                disabled={!solAmount || isSwapping || parseFloat(solAmount) <= 0}
                className="w-full meme-button py-6 rounded-2xl text-responsive-sm brutal-shadow-lg transition-bounce hover:scale-105 hover:rotate-1 disabled:hover:scale-100 disabled:opacity-50 glow-effect"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}
              >
                {isSwapping ? (
                  <span className="animate-wiggle">🔄 SWAPPING...</span>
                ) : (
                  'SWAP TO 0.1 SOL! ◎'
                )}
              </Button>
              <Button
                onClick={handleDisconnect}
                variant="outline"
                className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-3 rounded-xl border-2 border-red-300 hover:border-red-400 transition-bounce text-responsive-xs"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                Disconnect Wallet
              </Button>
            </div>
          )}

          {/* Enhanced Info */}
          <div className="text-center bg-green-500 hover:bg-green-600 p-4 rounded-xl border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
            <p className="text-white font-black text-responsive-xs crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Slippage: 10% • Priority Fee: 0.0001 SOL</p>
            <p className="text-white font-black text-responsive-xs crayon-text" style={{textShadow: '1px 1px 0px #000000'}}>Powered by PumpPortal • Auto Pool</p>
          </div>
        </div>
      </div>

      {/* Enhanced Token Info */}
      <div className="mt-8 meme-card rounded-2xl border-6 border-black p-6 transform rotate-2 brutal-shadow-xl transition-bounce hover:scale-105 hover:rotate-3">
        <h3 className="text-black font-black mb-4 text-responsive-sm crayon-text animate-wiggle" style={{textShadow: '1px 1px 0px #ffffff'}}>TOKEN INFO! 📊</h3>
        <div className="space-y-3 text-lg">
          <div className="flex justify-between text-green-800 font-black text-responsive-xs" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Contract:</span>
            <span className="font-mono text-sm bg-green-400 px-2 py-1 rounded border-2 border-black">3o8h...pump</span>
          </div>
          <div className="flex justify-between text-green-800 font-black text-responsive-xs" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Network:</span>
            <span>Solana</span>
          </div>
          <div className="flex justify-between text-green-800 font-black text-responsive-xs" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Type:</span>
            <span className="animate-wiggle">MEME TOKEN! 🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;
