import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const MarketCapCounter = () => {
  const [currentMarketCap, setCurrentMarketCap] = useState(0);
  const [targetMarketCap] = useState(100_000_000); // 100M target
  const [isLoading, setIsLoading] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(100);

  // Ultra-Enhanced Milestones for celebrations
  const milestones = [
    { value: 1_000_000, label: '1M!', emoji: '🎉', color: 'bg-gradient-to-br from-green-500 to-green-600' },
    { value: 5_000_000, label: '5M!', emoji: '🔥', color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { value: 10_000_000, label: '10M!', emoji: '💎', color: 'bg-gradient-to-br from-red-500 to-red-600' },
    { value: 25_000_000, label: '25M!', emoji: '⭐', color: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { value: 50_000_000, label: '50M!', emoji: '🌟', color: 'bg-gradient-to-br from-yellow-500 to-yellow-600' },
    { value: 75_000_000, label: '75M!', emoji: '🚀', color: 'bg-gradient-to-br from-pink-500 to-pink-600' },
    { value: 100_000_000, label: '100M!', emoji: '🏆', color: 'bg-gradient-to-br from-yellow-400 to-yellow-500' }
  ];

  const [reachedMilestones, setReachedMilestones] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationText, setCelebrationText] = useState('');
  const [celebrationEmoji, setCelebrationEmoji] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMarketCap(prev => {
        // Ultra-Enhanced realistic market cap growth with dynamic speed
        const baseIncrement = Math.floor(Math.random() * 75000) + 15000; // 15k-90k increments
        const speedMultiplier = prev < 10_000_000 ? 1.8 : prev < 50_000_000 ? 1.4 : 1.1;
        const increment = baseIncrement * speedMultiplier;
        const newValue = Math.min(prev + increment, targetMarketCap);
        
        // Check for milestone achievements with ultra-enhanced celebration
        milestones.forEach(milestone => {
          if (newValue >= milestone.value && !reachedMilestones.includes(milestone.value)) {
            setReachedMilestones(prevReached => [...prevReached, milestone.value]);
            setCelebrationText(milestone.label);
            setCelebrationEmoji(milestone.emoji);
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 4000); // Even longer celebration
          }
        });

        if (newValue >= targetMarketCap) {
          setIsLoading(false);
        }

        return newValue;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [reachedMilestones, targetMarketCap, animationSpeed]);

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
      <div className="meme-card rounded-[2rem] sm:rounded-[2.5rem] border-8 sm:border-10 lg:border-12 border-black border-dashed p-6 sm:p-8 lg:p-10 transform rotate-1 brutal-shadow-xl relative overflow-hidden transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
        
        {/* Ultra-Enhanced Celebration overlay */}
        {showCelebration && (
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-green-400 to-blue-400 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center z-20 border-8 sm:border-10 lg:border-12 border-red-500 glow-strong animate-pulse">
              <div className="text-center transform rotate-12 animate-bounce">
                <div className="text-6xl mb-4 animate-spin">
                  {celebrationEmoji}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-green-900 crayon-text super-thick mb-4" style={{
                  textShadow: '5px 5px 0px #000000'
                }}>
                  {celebrationText}
                </div>
                <div className="text-xl sm:text-2xl font-black text-red-600 crayon-text" style={{
                  textShadow: '3px 3px 0px #ffffff'
                }}>
                  MILESTONE REACHED!
                </div>
              </div>
          </div>
        )}

        {/* Ultra-Enhanced Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 transform -rotate-2">
          <div className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl sm:rounded-3xl border-6 sm:border-8 border-black p-4 sm:p-6 lg:p-8 inline-block transform rotate-3 brutal-shadow-xl transition-all duration-700 hover:scale-105 hover:rotate-6">
            <h2 className="text-responsive-md font-black text-white mb-2 sm:mb-3 crayon-text" style={{
              textShadow: '4px 4px 0px #000000',
              letterSpacing: '3px'
            }}>MARKETCAP COUNTER!</h2>
            <p className="text-white text-responsive-xs font-black transform -rotate-1 crayon-text" style={{
              textShadow: '3px 3px 0px #000000',
              letterSpacing: '2px'
            }}>TO THE MOON!</p>
          </div>
        </div>

        {/* Ultra-Enhanced Current marketcap display */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-8 sm:border-10 border-black transform -rotate-1 mb-6 sm:mb-8 lg:mb-10 brutal-shadow-xl transition-all duration-700 hover:scale-105 hover:-rotate-2">
          <div className="text-center">
            <div className="text-white text-responsive-xs font-black mb-3 sm:mb-4 crayon-text" style={{
              textShadow: '3px 3px 0px #000000',
              letterSpacing: '2px'
            }}>
              CURRENT MARKETCAP! 💰
            </div>
            <div className="text-responsive-xl font-black text-white mb-3 sm:mb-4 transform rotate-2 crayon-text glow-strong" style={{
              textShadow: '5px 5px 0px #000000',
              letterSpacing: '2px'
            }}>
              {formatMarketCap(currentMarketCap)}
            </div>
            <div className="text-white text-responsive-xs font-black crayon-text" style={{
              textShadow: '3px 3px 0px #000000',
              letterSpacing: '1px'
            }}>
              TARGET: {formatMarketCap(targetMarketCap)} 🎯
            </div>
          </div>
        </div>

        {/* Ultra-Enhanced Progress bar */}
        <div className="bg-gradient-to-br from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-6 sm:border-8 border-black transform rotate-1 mb-4 sm:mb-6 lg:mb-8 brutal-shadow-xl transition-all duration-700 hover:scale-105 hover:rotate-2">
          <div className="mb-4 sm:mb-6">
            <span className="text-white font-black text-responsive-xs crayon-text" style={{
              textShadow: '3px 3px 0px #000000',
              letterSpacing: '2px'
            }}>
              PROGRESS: {progressPercentage.toFixed(1)}% 📈
            </span>
          </div>
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-6 sm:h-8 lg:h-10 bg-yellow-200 border-4 sm:border-6 border-black rounded-full transition-smooth"
            />
            <div 
              className="absolute top-0 left-0 h-6 sm:h-8 lg:h-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 rounded-full border-4 sm:border-6 border-black transition-elastic glow-strong animate-pulse"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Ultra-Enhanced Milestones with better responsiveness */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-6 sm:border-8 border-black transform -rotate-1 brutal-shadow-xl transition-all duration-700 hover:scale-105 hover:-rotate-2">
          <div className="text-black font-black text-responsive-xs mb-4 sm:mb-6 crayon-text" style={{
            textShadow: '2px 2px 0px #ffffff',
            letterSpacing: '2px'
          }}>
            MILESTONES! 🏆
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {milestones.slice(0, 6).map((milestone, index) => (
              <div 
                key={milestone.value}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-4 sm:border-6 border-black text-center transform transition-all duration-700 ${
                  reachedMilestones.includes(milestone.value) 
                    ? `${milestone.color} text-white rotate-3 scale-110 glow-strong animate-bounce` 
                    : 'bg-yellow-200 text-green-900 -rotate-1 hover:scale-105'
                } transition-bounce hover:rotate-6`}
                style={{
                  boxShadow: '4px 4px 0px #000000',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="text-lg sm:text-xl mb-2">
                  {reachedMilestones.includes(milestone.value) ? milestone.emoji : '🎯'}
                </div>
                <div className="text-sm sm:text-base font-black crayon-text" style={{
                  textShadow: reachedMilestones.includes(milestone.value) ? '2px 2px 0px #000000' : '2px 2px 0px #ffffff',
                  letterSpacing: '1px'
                }}>
                  {formatMarketCap(milestone.value)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ultra-Enhanced Loading indicator */}
        {isLoading && (
              <div className="mt-6 text-center">
                <div className="text-black font-black text-responsive-xs crayon-text animate-pulse" style={{
                  textShadow: '2px 2px 0px #ffffff',
                  letterSpacing: '2px'
                }}>
                  <span className="animate-spin inline-block text-2xl">🔄</span> LOADING... MEME POWER CHARGING!
                </div>
              </div>
        )}

        {/* Speed Control - Hidden but functional */}
        <div className="hidden">
          <button onClick={() => setAnimationSpeed(50)} className="text-xs">Fast</button>
          <button onClick={() => setAnimationSpeed(100)} className="text-xs">Normal</button>
          <button onClick={() => setAnimationSpeed(200)} className="text-xs">Slow</button>
        </div>
      </div>
    </div>
  );
};

export default MarketCapCounter;