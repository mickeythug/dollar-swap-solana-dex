import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const MarketCapCounter = () => {
  const [currentMarketCap, setCurrentMarketCap] = useState(0);
  const [targetMarketCap] = useState(100_000_000); // 100M target
  const [isLoading, setIsLoading] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(100);

  // Enhanced Milestones for celebrations
  const milestones = [
    { value: 1_000_000, label: '1M!', emoji: '', color: 'bg-green-500' },
    { value: 5_000_000, label: '5M!', emoji: '', color: 'bg-blue-500' },
    { value: 10_000_000, label: '10M!', emoji: '', color: 'bg-red-500' },
    { value: 25_000_000, label: '25M!', emoji: '', color: 'bg-purple-500' },
    { value: 50_000_000, label: '50M!', emoji: '', color: 'bg-yellow-500' },
    { value: 75_000_000, label: '75M!', emoji: '', color: 'bg-pink-500' },
    { value: 100_000_000, label: '100M!', emoji: '', color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' }
  ];

  const [reachedMilestones, setReachedMilestones] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationText, setCelebrationText] = useState('');
  const [celebrationEmoji, setCelebrationEmoji] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMarketCap(prev => {
        // Enhanced realistic market cap growth with dynamic speed
        const baseIncrement = Math.floor(Math.random() * 50000) + 10000; // 10k-60k increments
        const speedMultiplier = prev < 10_000_000 ? 1.5 : prev < 50_000_000 ? 1.2 : 1;
        const increment = baseIncrement * speedMultiplier;
        const newValue = Math.min(prev + increment, targetMarketCap);
        
        // Check for milestone achievements with enhanced celebration
        milestones.forEach(milestone => {
          if (newValue >= milestone.value && !reachedMilestones.includes(milestone.value)) {
            setReachedMilestones(prevReached => [...prevReached, milestone.value]);
            setCelebrationText(milestone.label);
            setCelebrationEmoji(milestone.emoji);
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 3000); // Longer celebration
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
      <div className="meme-card rounded-2xl sm:rounded-3xl border-4 sm:border-6 lg:border-8 border-black border-dashed p-3 sm:p-4 lg:p-6 transform rotate-1 brutal-shadow-xl relative overflow-hidden transition-bounce hover:scale-105 hover:rotate-2">
        
        {/* Enhanced Celebration overlay */}
        {showCelebration && (
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 rounded-2xl sm:rounded-3xl flex items-center justify-center z-20 border-4 sm:border-6 lg:border-8 border-red-500 glow-strong">
              <div className="text-center transform rotate-12">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-900 crayon-text super-thick" style={{
                  textShadow: '3px 3px 0px #000000'
                }}>
                  {celebrationText}
                </div>
                <div className="text-lg sm:text-xl mt-2 font-black text-red-600 crayon-text">
                  MILESTONE REACHED!
                </div>
              </div>
          </div>
        )}

        {/* Enhanced Header */}
        <div className="text-center mb-3 sm:mb-4 lg:mb-6 transform -rotate-2">
          <div className="bg-green-600 hover:bg-green-700 rounded-xl sm:rounded-2xl border-3 sm:border-4 border-black p-2 sm:p-3 lg:p-4 inline-block transform rotate-3 brutal-shadow transition-bounce hover:scale-105 hover:rotate-6">
            <h2 className="text-responsive-md font-black text-white mb-1 sm:mb-2 crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>MARKETCAP COUNTER!</h2>
            <p className="text-white text-responsive-xs font-black transform -rotate-1 crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>TO THE MOON!</p>
          </div>
        </div>

        {/* Enhanced Current marketcap display */}
        <div className="bg-green-600 hover:bg-green-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border-4 sm:border-6 border-black transform -rotate-1 mb-3 sm:mb-4 lg:mb-6 brutal-shadow-lg transition-bounce hover:scale-105 hover:-rotate-2">
          <div className="text-center">
            <div className="text-white text-responsive-xs font-black mb-1 sm:mb-2 crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>
              CURRENT MARKETCAP! 💰
            </div>
            <div className="text-responsive-xl font-black text-white mb-1 sm:mb-2 transform rotate-2 crayon-text glow-effect" style={{
              textShadow: '3px 3px 0px #000000'
            }}>
              {formatMarketCap(currentMarketCap)}
            </div>
            <div className="text-white text-responsive-xs font-black crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>
              TARGET: {formatMarketCap(targetMarketCap)} 🎯
            </div>
          </div>
        </div>

        {/* Enhanced Progress bar */}
        <div className="bg-green-700 hover:bg-green-800 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border-3 sm:border-4 border-black transform rotate-1 mb-2 sm:mb-3 lg:mb-4 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2">
          <div className="mb-2 sm:mb-3">
            <span className="text-white font-black text-responsive-xs crayon-text" style={{textShadow: '2px 2px 0px #000000'}}>
              PROGRESS: {progressPercentage.toFixed(1)}% 📈
            </span>
          </div>
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-4 sm:h-5 lg:h-6 bg-yellow-200 border-2 sm:border-3 border-black rounded-full transition-smooth"
            />
            <div 
              className="absolute top-0 left-0 h-4 sm:h-5 lg:h-6 bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 rounded-full border-2 sm:border-3 border-black transition-elastic glow-effect"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Enhanced Milestones with better responsiveness */}
        <div className="bg-yellow-600 hover:bg-yellow-700 rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border-3 sm:border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:-rotate-2">
          <div className="text-black font-black text-responsive-xs mb-2 sm:mb-3 crayon-text" style={{textShadow: '1px 1px 0px #ffffff'}}>
            MILESTONES!
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2">
            {milestones.slice(0, 6).map((milestone, index) => (
              <div 
                key={milestone.value}
                className={`p-1 sm:p-2 rounded-md sm:rounded-lg border-2 sm:border-3 border-black text-center transform transition-all duration-500 ${
                  reachedMilestones.includes(milestone.value) 
                    ? `${milestone.color} text-yellow-100 rotate-3 scale-110 glow-effect` 
                    : 'bg-yellow-200 text-green-900 -rotate-1 hover:scale-105'
                } transition-bounce hover:rotate-6`}
                style={{
                  boxShadow: '2px 2px 0px #000000',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-xs sm:text-sm font-black crayon-text" style={{textShadow: reachedMilestones.includes(milestone.value) ? '1px 1px 0px #000000' : '1px 1px 0px #ffffff'}}>
                  {formatMarketCap(milestone.value)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Loading indicator */}
        {isLoading && (
              <div className="mt-2 text-center">
                <div className="text-black font-black text-responsive-xs crayon-text" style={{textShadow: '1px 1px 0px #ffffff'}}>
                  <span className="animate-spin inline-block">🔄</span> LOADING... MEME POWER!
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
