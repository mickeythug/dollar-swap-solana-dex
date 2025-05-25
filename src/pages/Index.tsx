
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
        <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-green-400">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-green-300/20 to-emerald-400/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 85% 75%, rgba(253, 224, 71, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 50% 10%, rgba(20, 83, 45, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(187, 247, 208, 0.3) 0%, transparent 40%)
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
