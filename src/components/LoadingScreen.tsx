import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentText, setCurrentText] = useState('LOADING...');
  
  const loadingTexts = [
    'LOADING MEMES...',
    'CONNECTING TO SOL...',
    'WARMING UP ROCKETS...',
    'PREPARING 0.1 SOL...',
    'CHARGING HOLOGRAM...',
    'ALMOST READY...',
    'LET\'S GO!!!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Change text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        if (textIndex < loadingTexts.length) {
          setCurrentText(loadingTexts[textIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 1500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete, loadingTexts]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-300 via-green-400 to-blue-400 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="loading-particle particle-1"></div>
        <div className="loading-particle particle-2"></div>
        <div className="loading-particle particle-3"></div>
        <div className="loading-particle particle-4"></div>
        <div className="loading-particle particle-5"></div>
        <div className="loading-particle particle-6"></div>
        <div className="loading-particle particle-7"></div>
        <div className="loading-particle particle-8"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Cartoon Logo Placeholder */}
        <div className="mb-8 sm:mb-12">
          <div className="loading-logo-container">
            <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center border-8 border-black brutal-shadow-xl transition-bounce hover:scale-110">
              <span className="text-4xl sm:text-6xl lg:text-8xl font-black crayon-text text-green-900" style={{
                textShadow: '4px 4px 0px #ffffff',
                animation: 'loading-bounce 1s ease-in-out infinite alternate'
              }}>
                0.1
              </span>
            </div>
          </div>
        </div>

        {/* Animated Loading Text */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black crayon-text text-white mb-4" style={{
            textShadow: '4px 4px 0px #000000, 8px 8px 0px rgba(0,0,0,0.3)',
            animation: 'text-wiggle 2s ease-in-out infinite'
          }}>
            {currentText}
          </h1>
          
          {/* Cartoon Speech Bubble */}
          <div className="inline-block relative">
            <div className="bg-white rounded-3xl px-6 sm:px-8 py-3 sm:py-4 border-6 border-black brutal-shadow-lg transform rotate-1 transition-bounce hover:scale-105">
              <span className="text-lg sm:text-2xl font-black text-green-900 crayon-text" style={{
                textShadow: '2px 2px 0px #ffffff'
              }}>
                GET READY FOR SOMETHING AWESOME!
              </span>
            </div>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white transform rotate-12"></div>
            <div className="absolute -bottom-2 left-9 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-black transform rotate-12"></div>
          </div>
        </div>

        {/* Cartoon Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-full h-8 sm:h-12 border-6 border-black brutal-shadow-lg overflow-hidden transform -rotate-1">
            <div 
              className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-loading-shine"></div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="mt-4 text-center">
            <span className="text-2xl sm:text-3xl font-black crayon-text text-white" style={{
              textShadow: '3px 3px 0px #000000'
            }}>
              {Math.round(loadingProgress)}%
            </span>
          </div>
        </div>

        {/* Cartoon Loading Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-8">
          <div className="loading-icon icon-1">
            <span className="text-3xl sm:text-5xl">🚀</span>
          </div>
          <div className="loading-icon icon-2">
            <span className="text-3xl sm:text-5xl">💰</span>
          </div>
          <div className="loading-icon icon-3">
            <span className="text-3xl sm:text-5xl">⚡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;