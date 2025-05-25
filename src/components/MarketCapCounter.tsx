
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
    <div className="relative z-10 px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="bg-yellow-300 rounded-3xl border-8 border-black border-dashed p-6 transform rotate-1 shadow-2xl relative overflow-hidden" style={{
          boxShadow: '16px 16px 0px #000000'
        }}>
          {/* Celebration overlay */}
          {showCelebration && (
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl flex items-center justify-center z-20 animate-pulse border-8 border-red-500">
              <div className="text-center transform rotate-12">
                <div className="text-6xl mb-2">🎉</div>
                <div className="text-4xl font-black text-green-900" style={{
                  fontFamily: 'Comic Sans MS, cursive',
                  textShadow: '3px 3px 0px #000000'
                }}>
                  {celebrationText}
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-6 transform -rotate-2">
            <div className="bg-green-400 rounded-2xl border-4 border-black p-4 inline-block transform rotate-3" style={{
              boxShadow: '6px 6px 0px #000000'
            }}>
              <h2 className="text-3xl font-black text-yellow-900 mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px #000000'
              }}>MARKETCAP ROCKET! 🚀</h2>
              <p className="text-green-900 text-lg font-black transform -rotate-1" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>TO THE MOON! 💵</p>
            </div>
          </div>

          {/* Current marketcap display */}
          <div className="bg-green-400 rounded-2xl p-6 border-6 border-black transform -rotate-1 mb-6" style={{
            boxShadow: '8px 8px 0px #000000'
          }}>
            <div className="text-center">
              <div className="text-yellow-900 text-lg font-black mb-2" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                CURRENT MARKETCAP! 💰
              </div>
              <div className="text-6xl font-black text-yellow-900 mb-2 transform rotate-2" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '3px 3px 0px #000000'
              }}>
                {formatMarketCap(currentMarketCap)}
              </div>
              <div className="text-green-900 text-sm font-black" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                TARGET: {formatMarketCap(targetMarketCap)} 🎯
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-green-500 rounded-xl p-4 border-4 border-black transform rotate-1 mb-4" style={{
            boxShadow: '6px 6px 0px #000000'
          }}>
            <div className="mb-3">
              <span className="text-yellow-100 font-black text-lg" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                PROGRESS: {progressPercentage.toFixed(1)}% 📈
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={progressPercentage} 
                className="h-6 bg-yellow-200 border-3 border-black rounded-full"
              />
              <div 
                className="absolute top-0 left-0 h-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 rounded-full border-3 border-black transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Milestones */}
          <div className="bg-yellow-400 rounded-xl p-4 border-4 border-black transform -rotate-1" style={{
            boxShadow: '6px 6px 0px #000000'
          }}>
            <div className="text-green-900 font-black text-lg mb-3" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '1px 1px 0px #000000'
            }}>
              MILESTONES! 🏆
            </div>
            <div className="grid grid-cols-2 gap-2">
              {milestones.slice(0, 6).map((milestone, index) => (
                <div 
                  key={milestone.value}
                  className={`p-2 rounded-lg border-3 border-black text-center transform ${
                    reachedMilestones.includes(milestone.value) 
                      ? 'bg-green-500 text-yellow-100 rotate-3 scale-110' 
                      : 'bg-yellow-200 text-green-900 -rotate-1'
                  } transition-all duration-500`}
                  style={{
                    boxShadow: '3px 3px 0px #000000'
                  }}
                >
                  <div className="text-lg font-black" style={{
                    fontFamily: 'Comic Sans MS, cursive',
                    textShadow: '1px 1px 0px #000000'
                  }}>
                    {milestone.emoji}
                  </div>
                  <div className="text-sm font-black" style={{
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
            <div className="mt-4 text-center">
              <div className="text-green-900 font-black text-lg animate-bounce" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '1px 1px 0px #000000'
              }}>
                LOADING... 🔄 MEME POWER! ⚡
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketCapCounter;
