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
    <div className="max-w-md mx-auto">
      <div className="bg-yellow-300 rounded-3xl border-8 border-black border-dashed p-8 transform -rotate-2 shadow-2xl" style={{
        boxShadow: '16px 16px 0px #000000'
      }}>
        <div className="text-center mb-8 transform rotate-1">
          <div className="bg-green-400 rounded-2xl border-4 border-black p-4 inline-block transform -rotate-1" style={{
            boxShadow: '6px 6px 0px #000000'
          }}>
            <h2 className="text-4xl font-black text-yellow-900 mb-2" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px #000000'
            }}>SWAP TO 1 DOLLAR!</h2>
            <p className="text-green-900 text-xl font-black transform rotate-1" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>SUPER EASY! 💵</p>
          </div>
        </div>

        {/* From Section */}
        <div className="space-y-6">
          <div className="bg-green-400 rounded-2xl p-6 border-6 border-black transform rotate-1" style={{
            boxShadow: '8px 8px 0px #000000'
          }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl text-yellow-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>From</span>
              <span className="text-xl text-yellow-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>
                Balance: {solBalance.toFixed(4)} SOL
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-yellow-300 rounded-xl px-4 py-3 border-4 border-black transform -rotate-1" style={{
                boxShadow: '4px 4px 0px #000000'
              }}>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-black"></div>
                <span className="text-green-900 font-black text-xl" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>SOL</span>
              </div>
              
              <div className="flex-1">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={solAmount}
                  onChange={(e) => setSolAmount(e.target.value)}
                  className="bg-yellow-200 border-4 border-black text-green-900 text-2xl font-black text-right p-4 rounded-xl"
                  style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    textShadow: '1px 1px 0px #000000',
                    boxShadow: 'inset 4px 4px 0px #000000'
                  }}
                  step="0.0001"
                  min="0"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-4">
              <Button
                onClick={setDollarAmount}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-black px-4 py-2 rounded-lg border-3 border-black transform rotate-2 hover:rotate-3 hover:scale-110 transition-all"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000',
                  boxShadow: '3px 3px 0px #000000'
                }}
              >
                $1 Worth
              </Button>
              <Button
                onClick={setMaxAmount}
                className="bg-green-500 hover:bg-green-600 text-yellow-100 font-black px-4 py-2 rounded-lg border-3 border-black transform -rotate-1 hover:-rotate-2 hover:scale-110 transition-all"
                style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000',
                  boxShadow: '3px 3px 0px #000000'
                }}
              >
                MAX
              </Button>
            </div>
          </div>

          {/* Swap Arrow */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center border-6 border-black transform rotate-12 shadow-lg" style={{
              boxShadow: '6px 6px 0px #000000'
            }}>
              <ArrowDown size={32} className="text-green-900" strokeWidth={4} />
            </div>
          </div>

          {/* To Section */}
          <div className="bg-green-400 rounded-2xl p-6 border-6 border-black transform -rotate-1" style={{
            boxShadow: '8px 8px 0px #000000'
          }}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl text-yellow-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>To</span>
              <span className="text-xl text-yellow-900 font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>1 Dollar Token</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-yellow-300 rounded-xl px-4 py-3 border-4 border-black transform rotate-1" style={{
                boxShadow: '4px 4px 0px #000000'
              }}>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center border-2 border-black">
                  <span className="text-lg font-black text-green-900">$</span>
                </div>
                <span className="text-green-900 font-black text-xl" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>1DOLLAR</span>
              </div>
              
              <div className="flex-1 text-right">
                <span className="text-yellow-900 text-2xl font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '2px 2px 0px #000000'
                }}>
                  {solAmount ? '≈ ' + (parseFloat(solAmount) * 1000).toFixed(0) : '0'}
                </span>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <Button
            onClick={executeSwap}
            disabled={!publicKey || !solAmount || isSwapping || parseFloat(solAmount) <= 0}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-green-900 font-black py-6 rounded-2xl transition-all duration-200 transform hover:scale-105 hover:rotate-1 disabled:hover:scale-100 disabled:opacity-50 border-6 border-black text-2xl"
            style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000',
              boxShadow: '8px 8px 0px #000000'
            }}
          >
            {!publicKey 
              ? 'CONNECT WALLET!' 
              : isSwapping 
              ? 'SWAPPING...' 
              : 'SWAP TO 1 DOLLAR! 💵'
            }
          </Button>

          {/* Info */}
          <div className="text-center bg-green-500 p-4 rounded-xl border-4 border-black transform rotate-1" style={{
            boxShadow: '6px 6px 0px #000000'
          }}>
            <p className="text-yellow-100 font-black text-lg" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>Slippage: 10% • Priority Fee: 0.0001 SOL</p>
            <p className="text-yellow-100 font-black text-lg" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>Powered by PumpPortal • Auto Pool</p>
          </div>
        </div>
      </div>

      {/* Token Info */}
      <div className="mt-8 bg-yellow-300 rounded-2xl border-6 border-black p-6 transform rotate-2 shadow-2xl" style={{
        boxShadow: '8px 8px 0px #000000'
      }}>
        <h3 className="text-green-900 font-black mb-4 text-2xl" style={{
          fontFamily: 'Comic Sans MS, cursive',
          textShadow: '2px 2px 0px #000000'
        }}>TOKEN INFO! 📊</h3>
        <div className="space-y-3 text-lg">
          <div className="flex justify-between text-green-800 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Contract:</span>
            <span className="font-mono text-sm bg-green-400 px-2 py-1 rounded border-2 border-black">3o8h...pump</span>
          </div>
          <div className="flex justify-between text-green-800 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Network:</span>
            <span>Solana</span>
          </div>
          <div className="flex justify-between text-green-800 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>
            <span>Type:</span>
            <span>MEME TOKEN! 🚀</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;
