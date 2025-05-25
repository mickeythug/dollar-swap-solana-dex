
import React from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
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
    new BackpackWalletAdapter(),
  ];

  const endpoint = clusterApiUrl('mainnet-beta');

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cdefs%3E%3CradialGradient id="a" cx="50" cy="50" r="50"%3E%3Cstop offset="0" stop-color="%23ffffff" stop-opacity="0.1"/%3E%3Cstop offset="1" stop-color="%23ffffff" stop-opacity="0"/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx="20" cy="20" r="2" fill="url(%23a)"/%3E%3Ccircle cx="80" cy="40" r="1.5" fill="url(%23a)"/%3E%3Ccircle cx="40" cy="80" r="1" fill="url(%23a)"/%3E%3Ccircle cx="90" cy="90" r="1.5" fill="url(%23a)"/%3E%3Ccircle cx="10" cy="60" r="1" fill="url(%23a)"/%3E%3C/svg%3E')] opacity-20"></div>
          
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
