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
    <div className="max-w-md mx-auto w-full">
      <div className="bg-yellow-300 rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black border-dashed p-3 sm:p-4 lg:p-6 transform rotate-1 shadow-xl sm:shadow-2xl relative overflow-hidden" style={{
        boxShadow: '8px 8px 0px #000000'
      }}>
        {/* Celebration overlay */}
        {showCelebration && (
          <div className="absolute inset-0 bg-yellow-400 rounded-2xl sm:rounded-3xl flex items-center justify-center z-20 border-4 sm:border-6 lg:border-8 border-red-500">
            <div className="text-center transform rotate-12">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">🎉</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-900" style={{
                fontFamily: '"Trebuchet MS", Arial, sans-serif',
                textShadow: '3px 3px 0px #000000'
              }}>
                {celebrationText}
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-3 sm:mb-4 lg:mb-6 transform -rotate-2">
          <div className="bg-green-400 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black p-2 sm:p-3 lg:p-4 inline-block transform rotate-3" style={{
            boxShadow: '4px 4px 0px #000000'
          }}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-900 mb-1 sm:mb-2" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '2px 2px 0px #000000'
            }}>MARKETCAP ROCKET! 🚀</h2>
            <p className="text-green-900 text-sm sm:text-base lg:text-lg font-black transform -rotate-1" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>TO THE MOON! 💵</p>
          </div>
        </div>

        {/* Current marketcap display */}
        <div className="bg-green-400 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-4 sm:border-6 border-black transform -rotate-1 mb-3 sm:mb-4 lg:mb-6" style={{
          boxShadow: '6px 6px 0px #000000'
        }}>
          <div className="text-center">
            <div className="text-yellow-900 text-sm sm:text-base lg:text-lg font-black mb-1 sm:mb-2" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>
              CURRENT MARKETCAP! 💰
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-yellow-900 mb-1 sm:mb-2 transform rotate-2" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '2px 2px 0px #000000'
            }}>
              {formatMarketCap(currentMarketCap)}
            </div>
            <div className="text-green-900 text-xs sm:text-sm font-black" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>
              TARGET: {formatMarketCap(targetMarketCap)} 🎯
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-green-500 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border-3 sm:border-4 border-black transform rotate-1 mb-2 sm:mb-3 lg:mb-4" style={{
          boxShadow: '4px 4px 0px #000000'
        }}>
          <div className="mb-2 sm:mb-3">
            <span className="text-yellow-100 font-black text-sm sm:text-base lg:text-lg" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>
              PROGRESS: {progressPercentage.toFixed(1)}% 📈
            </span>
          </div>
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-4 sm:h-5 lg:h-6 bg-yellow-200 border-2 sm:border-3 border-black rounded-full"
            />
            <div 
              className="absolute top-0 left-0 h-4 sm:h-5 lg:h-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 rounded-full border-2 sm:border-3 border-black transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-yellow-400 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border-3 sm:border-4 border-black transform -rotate-1" style={{
          boxShadow: '4px 4px 0px #000000'
        }}>
          <div className="text-green-900 font-black text-sm sm:text-base lg:text-lg mb-2 sm:mb-3" style={{
            fontFamily: '"Trebuchet MS", Arial, sans-serif',
            textShadow: '1px 1px 0px #000000'
          }}>
            MILESTONES! 🏆
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
            {milestones.slice(0, 6).map((milestone, index) => (
              <div 
                key={milestone.value}
                className={`p-1 sm:p-2 rounded-md sm:rounded-lg border-2 sm:border-3 border-black text-center transform ${
                  reachedMilestones.includes(milestone.value) 
                    ? 'bg-green-500 text-yellow-100 rotate-3 scale-110' 
                    : 'bg-yellow-200 text-green-900 -rotate-1'
                } transition-all duration-500`}
                style={{
                  boxShadow: '2px 2px 0px #000000'
                }}
              >
                <div className="text-sm sm:text-base lg:text-lg font-black" style={{
                  fontFamily: '"Trebuchet MS", Arial, sans-serif',
                  textShadow: '1px 1px 0px #000000'
                }}>
                  {milestone.emoji}
                </div>
                <div className="text-xs sm:text-sm font-black" style={{
                  fontFamily: '"Trebuchet MS", Arial, sans-serif',
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
          <div className="mt-2 sm:mt-3 lg:mt-4 text-center">
            <div className="text-green-900 font-black text-sm sm:text-base lg:text-lg" style={{
              fontFamily: '"Trebuchet MS", Arial, sans-serif',
              textShadow: '1px 1px 0px #000000'
            }}>
              LOADING... 🔄 MEME POWER! ⚡
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketCapCounter;
