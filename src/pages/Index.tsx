
import React from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import SwapInterface from '../components/SwapInterface';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MarketCapCounter from '../components/MarketCapCounter';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

const Index = () => {
  // Configure supported wallets
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
  ];

  const endpoint = clusterApiUrl('mainnet-beta');

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <div className="min-h-screen bg-green-800 px-2 lg:px-6 xl:px-8" style={{
          backgroundImage: `
            linear-gradient(45deg, #166534 25%, transparent 25%),
            linear-gradient(-45deg, #166534 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #166534 75%),
            linear-gradient(-45deg, transparent 75%, #166534 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-yellow-600/30 to-green-700/80"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(0, 100, 0, 0.8) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(255, 215, 0, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(34, 139, 34, 0.7) 0%, transparent 40%)
            `
          }}></div>
          
          <Header />
          <Hero />
          
          {/* Side by side layout for MarketCap and Swap */}
          <section id="swap" className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-16 items-start">
                <MarketCapCounter />
                <SwapInterface />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="relative z-10 px-2 sm:px-4 lg:px-8 py-8 sm:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="meme-card rounded-3xl p-6 sm:p-8 lg:p-12 transform rotate-1 brutal-shadow-xl transition-bounce hover:scale-105 hover:-rotate-1 animate-slide-up">
                <h2 className="text-responsive-xl font-black text-black mb-6 sm:mb-8 crayon-text animate-wiggle text-center" style={{
                  textShadow: '2px 2px 0px #ffffff',
                  transform: 'rotate(-2deg)'
                }}>
                  About Just Buy 0.1 SOL! ◎
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-black crayon-text" style={{textShadow: '1px 1px 0px #ffffff'}}>
                  <p className="text-responsive-md font-black leading-relaxed">
                    This is just a MEME TOKEN called 0.1 SOL! ◎
                  </p>
                  
                  <p className="text-responsive-md font-black leading-relaxed">
                    The idea is SUPER EASY — just buy 0.1 SOL worth! That's it! 🚀
                  </p>
                  
                  <p className="text-responsive-md font-black leading-relaxed">
                    No complicated stuff! Just holding together as a community! 🤝
                  </p>
                  
                  <div className="bg-red-500 p-4 sm:p-6 rounded-2xl border-4 border-black transform -rotate-1 brutal-shadow-lg">
                    <p className="text-responsive-sm font-black text-white text-center" style={{textShadow: '2px 2px 0px #000000'}}>
                      ⚠️ THIS IS A MEME! NOT FINANCIAL ADVICE! ⚠️
                    </p>
                  </div>
                  
                  <p className="text-responsive-md font-black leading-relaxed">
                    Join the FUN! 🎊<br />
                    Come hang out with other 0.1 SOL holders! 😄
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                    <div className="bg-blue-400 hover:bg-blue-500 p-4 rounded-xl border-4 border-black transform rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:rotate-2 text-center">
                      <div className="text-2xl sm:text-3xl mb-2">📱</div>
                      <div className="font-black text-white text-responsive-xs" style={{textShadow: '1px 1px 0px #000000'}}>
                        Telegram - LET'S CHAT!
                      </div>
                    </div>
                    
                    <div className="bg-sky-400 hover:bg-sky-500 p-4 rounded-xl border-4 border-black transform -rotate-1 brutal-shadow transition-bounce hover:scale-105 hover:-rotate-2 text-center">
                      <div className="text-2xl sm:text-3xl mb-2">🐦</div>
                      <div className="font-black text-white text-responsive-xs" style={{textShadow: '1px 1px 0px #000000'}}>
                        Twitter - FOLLOW US!
                      </div>
                    </div>
                    
                    <div className="bg-purple-400 hover:bg-purple-500 p-4 rounded-xl border-4 border-black transform rotate-2 brutal-shadow transition-bounce hover:scale-105 hover:rotate-3 text-center">
                      <div className="text-2xl sm:text-3xl mb-2">💬</div>
                      <div className="font-black text-white text-responsive-xs" style={{textShadow: '1px 1px 0px #000000'}}>
                        Discord - MEMES HERE!
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-8 sm:mt-12">
                    <p className="text-responsive-xs font-black mb-4">
                      © 2024 0.1 SOL MEME TOKEN! Made with ❤️ and MEMES! ◎
                    </p>
                    <p className="text-responsive-xs font-black bg-yellow-400 hover:bg-yellow-500 p-3 rounded-lg border-3 border-black inline-block brutal-shadow">
                      ALWAYS DYOR! THIS IS JUST FOR FUN! 🤪
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </WalletModalProvider>
    </WalletProvider>
  );
};

export default Index;
