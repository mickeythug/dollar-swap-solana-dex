
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
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-green-400/10 to-blue-400/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)
            `
          }}></div>
          
          <Header />
          <Hero />
          <SwapInterface />
          <Footer />
        </div>
      </WalletModalProvider>
    </WalletProvider>
  );
};

export default Index;
