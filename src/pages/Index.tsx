
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
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3CradialGradient id=%22a%22 cx=%2250%22 cy=%2250%22 r=%2250%22%3E%3Cstop offset=%220%22 stop-color=%22%23ffffff%22 stop-opacity=%220.1%22/%3E%3Cstop offset=%221%22 stop-color=%22%23ffffff%22 stop-opacity=%220%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%222%22 fill=%22url(%23a)%22/%3E%3Ccircle cx=%2280%22 cy=%2240%22 r=%221.5%22 fill=%22url(%23a)%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%221%22 fill=%22url(%23a)%22/%3E%3Ccircle cx=%2290%22 cy=%2290%22 r=%221.5%22 fill=%22url(%23a)%22/%3E%3Ccircle cx=%2210%22 cy=%2260%22 r=%221%22 fill=%22url(%23a)%22/%3E%3C/svg%3E')] opacity-20"></div>
          
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
