
import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { VersionedTransaction } from '@solana/web3.js';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowDown } from 'lucide-react';

const DOLLAR_TOKEN_MINT = '3o8h4sjvLtxxPmVx9boN7yC4Tzd6zse5Ycb6VUHbpump';

const SwapInterface = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [solAmount, setSolAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [solBalance, setSolBalance] = useState(0);

  useEffect(() => {
    if (publicKey) {
      fetchSolBalance();
    }
  }, [publicKey, connection]);

  const fetchSolBalance = async () => {
    if (!publicKey) return;
    
    try {
      const balance = await connection.getBalance(publicKey);
      setSolBalance(balance / 1000000000); // Convert lamports to SOL
    } catch (error) {
      console.error('Error fetching SOL balance:', error);
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
    setSolAmount('1.0'); // Placeholder for $1 worth - you'd need to fetch SOL price
  };

  return (
    <section id="swap" className="relative z-10 px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Swap to 1 Dollar</h2>
              <p className="text-purple-200 text-sm">Simple, fast, and secure</p>
            </div>

            {/* From Section */}
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-purple-200">From</span>
                  <span className="text-sm text-purple-200">
                    Balance: {solBalance.toFixed(4)} SOL
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
                    <span className="text-white font-semibold">SOL</span>
                  </div>
                  
                  <div className="flex-1">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={solAmount}
                      onChange={(e) => setSolAmount(e.target.value)}
                      className="bg-transparent border-0 text-white text-xl font-semibold text-right p-0 focus:ring-0"
                      step="0.0001"
                      min="0"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={setDollarAmount}
                    className="text-xs text-purple-300 hover:text-white"
                  >
                    $1 Worth
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={setMaxAmount}
                    className="text-xs text-purple-300 hover:text-white"
                  >
                    MAX
                  </Button>
                </div>
              </div>

              {/* Swap Arrow */}
              <div className="flex justify-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                  <ArrowDown size={20} className="text-white" />
                </div>
              </div>

              {/* To Section */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-purple-200">To</span>
                  <span className="text-sm text-purple-200">1 Dollar Token</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2 border border-white/10">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">$</span>
                    </div>
                    <span className="text-white font-semibold">1DOLLAR</span>
                  </div>
                  
                  <div className="flex-1 text-right">
                    <span className="text-white text-xl font-semibold">
                      {solAmount ? '≈ ' + (parseFloat(solAmount) * 1000).toFixed(0) : '0'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <Button
                onClick={executeSwap}
                disabled={!publicKey || !solAmount || isSwapping || parseFloat(solAmount) <= 0}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
              >
                {!publicKey 
                  ? 'Connect Wallet' 
                  : isSwapping 
                  ? 'Swapping...' 
                  : 'Swap to 1 Dollar'
                }
              </Button>

              {/* Info */}
              <div className="text-center text-xs text-purple-300 space-y-1">
                <p>Slippage: 10% • Priority Fee: 0.0001 SOL</p>
                <p>Powered by PumpPortal • Auto Pool Selection</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Token Info */}
        <Card className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="p-4">
            <h3 className="text-white font-semibold mb-3">Token Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-purple-200">
                <span>Contract:</span>
                <span className="font-mono text-xs">3o8h...pump</span>
              </div>
              <div className="flex justify-between text-purple-200">
                <span>Network:</span>
                <span>Solana</span>
              </div>
              <div className="flex justify-between text-purple-200">
                <span>Type:</span>
                <span>Community Token</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SwapInterface;
