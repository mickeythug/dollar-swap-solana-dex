import React, { FC, ReactNode, useMemo, useState, useEffect } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { supabase } from "@/integrations/supabase/client";

// Import default styles for wallet adapter
import '@solana/wallet-adapter-react-ui/styles.css';

interface Props {
  children: ReactNode;
}

export const WalletContextProvider: FC<Props> = ({ children }) => {
  const [endpoint, setEndpoint] = useState('https://small-evocative-diamond.solana-mainnet.quiknode.pro/2ed30cf5e6e264547ca0fac87762184bfdb2a995/');
  
  useEffect(() => {
    const fetchRpcConfig = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-rpc-config');
        
        if (error) {
          console.error('Error fetching RPC config:', error);
          return;
        }
        
        if (data?.rpcEndpoint) {
          console.log('Using secure RPC endpoint');
          setEndpoint(data.rpcEndpoint);
        }
      } catch (error) {
        console.error('Failed to fetch RPC config:', error);
      }
    };
    
    fetchRpcConfig();
  }, []);

  // Configure supported wallets
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};