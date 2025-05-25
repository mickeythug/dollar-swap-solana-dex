
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const MarketCapCounter = () => {
  const [currentMarketCap, setCurrentMarketCap] = useState(0);
  const [targetMarketCap] = useState(100_000_000); // 100M target
  const [isLoading, setIsLoading] = useState(true);

  // Milestones for celebrations
  const milestones = [
    { value: 1_000_000, label: '1M! 🚀', emoji: '🎉' },
    { value: 5_000_000, label: '5M! 💎', emoji: '💎' },
    { value: 10_000_000, label: '10M! 🔥', emoji: '🔥' },
    { value: 25_000_000, label: '25M! 🌙', emoji: '🌙' },
    { value: 50_000_000, label: '50M! ⭐', emoji: '⭐' },
    { value: 75_000_000, label: '75M! 🎊', emoji: '🎊' },
    { value: 100_000_000, label: '100M! 👑', emoji: '👑' }
  ];

  const [reachedMilestones, setReachedMilestones] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationText, setCelebrationText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMarketCap(prev => {
        // Simulate realistic market cap growth with some randomness
        const increment = Math.floor(Math.random() * 50000) + 10000; // 10k-60k increments
        const newValue = Math.min(prev + increment, targetMarketCap);
        
        // Check for milestone achievements
        milestones.forEach(milestone => {
          if (newValue >= milestone.value && !reachedMilestones.includes(milestone.value)) {
            setReachedMilestones(prevReached => [...prevReached, milestone.value]);
            setCelebrationText(milestone.label);
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 2000);
          }
        });

        if (newValue >= targetMarketCap) {
          setIsLoading(false);
        }

        return newValue;
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [reachedMilestones, targetMarketCap]);

  const formatMarketCap = (value: number) => {
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`;
    } else if (value >= 1_000) {
      return `$${(value / 1_000).toFixed(0)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  const progressPercentage = (currentMarketCap / targetMarketCap) * 100;

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full border-12 border-black border-dashed p-8 transform rotate-1 shadow-2xl relative overflow-hidden hover:-rotate-1 hover:scale-105 transition-all duration-700 animate-pulse" style={{
        boxShadow: '20px 20px 0px #000000, 15px 15px 0px #16a34a, 10px 10px 0px #dc2626'
      }}>
        {/* Celebration overlay */}
        {showCelebration && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-600 rounded-full flex items-center justify-center z-20 border-12 border-red-500 animate-bounce" style={{
            animation: 'bounce 0.5s infinite, pulse 0.3s infinite, spin 2s linear infinite'
          }}>
            <div className="text-center transform rotate-12">
              <div className="text-8xl mb-4 animate-spin">🎉</div>
              <div className="text-5xl font-black text-green-900" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '4px 4px 0px #000000, 2px 2px 0px #fbbf24'
              }}>
                {celebrationText} 💫
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-8 transform -rotate-2 hover:rotate-2 transition-all duration-500">
          <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl border-6 border-black p-6 inline-block transform rotate-3 shadow-lg hover:-rotate-3 hover:scale-110 transition-all duration-500 animate-bounce" style={{
            boxShadow: '10px 10px 0px #000000, 6px 6px 0px #fbbf24'
          }}>
            <h2 className="text-4xl font-black text-yellow-100 mb-4" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '3px 3px 0px #000000'
            }}>MARKETCAP ROCKET! 🚀 💎</h2>
            <p className="text-green-100 text-2xl font-black transform -rotate-1 animate-pulse" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>TO THE MOON! 💵 🌙</p>
          </div>
        </div>

        {/* Current marketcap display */}
        <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-3xl p-8 border-8 border-black transform -rotate-1 mb-8 hover:rotate-1 hover:scale-105 transition-all duration-500" style={{
          boxShadow: '12px 12px 0px #000000, 8px 8px 0px #fbbf24'
        }}>
          <div className="text-center">
            <div className="text-yellow-100 text-2xl font-black mb-4 animate-bounce" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>
              CURRENT MARKETCAP! 💰 ⭐
            </div>
            <div className="text-7xl font-black text-yellow-100 mb-4 transform rotate-2 animate-pulse" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '4px 4px 0px #000000, 2px 2px 0px #16a34a'
            }}>
              {formatMarketCap(currentMarketCap)}
            </div>
            <div className="text-green-100 text-lg font-black animate-bounce" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>
              TARGET: {formatMarketCap(targetMarketCap)} 🎯 💫
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-2xl p-6 border-6 border-black transform rotate-1 mb-6 hover:-rotate-1 transition-all duration-500" style={{
          boxShadow: '10px 10px 0px #000000, 6px 6px 0px #fbbf24'
        }}>
          <div className="mb-4">
            <span className="text-yellow-100 font-black text-2xl animate-pulse" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000'
            }}>
              PROGRESS: {progressPercentage.toFixed(1)}% 📈 🚀
            </span>
          </div>
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-8 bg-yellow-200 border-4 border-black rounded-full"
            />
            <div 
              className="absolute top-0 left-0 h-8 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 rounded-full border-4 border-black transition-all duration-300 animate-pulse"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-6 border-6 border-black transform -rotate-1 hover:rotate-1 transition-all duration-500" style={{
          boxShadow: '10px 10px 0px #000000, 6px 6px 0px #16a34a'
        }}>
          <div className="text-green-900 font-black text-2xl mb-4 animate-bounce" style={{
            fontFamily: 'Comic Sans MS, cursive',
            textShadow: '2px 2px 0px #000000'
          }}>
            MILESTONES! 🏆 💎
          </div>
          <div className="grid grid-cols-2 gap-3">
            {milestones.slice(0, 6).map((milestone, index) => (
              <div 
                key={milestone.value}
                className={`p-4 rounded-2xl border-4 border-black text-center transform transition-all duration-500 ${
                  reachedMilestones.includes(milestone.value) 
                    ? 'bg-gradient-to-r from-green-500 to-green-700 text-yellow-100 rotate-6 scale-125 animate-bounce' 
                    : 'bg-gradient-to-r from-yellow-200 to-yellow-300 text-green-900 -rotate-2 hover:rotate-2 hover:scale-110'
                }`}
                style={{
                  boxShadow: '6px 6px 0px #000000, 3px 3px 0px #16a34a'
                }}
              >
                <div className="text-2xl font-black mb-2" style={{
                  animation: reachedMilestones.includes(milestone.value) 
                    ? 'bounce 1s infinite, spin 2s linear infinite' 
                    : 'pulse 2s infinite'
                }}>
                  {milestone.emoji}
                </div>
                <div className="text-lg font-black" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  {formatMarketCap(milestone.value)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="mt-6 text-center">
            <div className="text-green-900 font-black text-2xl animate-bounce" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px #000000',
              animation: 'bounce 1s infinite, pulse 2s infinite'
            }}>
              LOADING... 🔄 MEME POWER! ⚡ 💫
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketCapCounter;
