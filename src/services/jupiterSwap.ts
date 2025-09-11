import { Connection, PublicKey, VersionedTransaction } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';
import axios from 'axios';

interface SwapConfig {
  inputMint: string;
  outputMint: string;
  amount: number;
  slippageBps?: number;
  userPublicKey: string;
}

export class JupiterSwapService {
  private connection: Connection;
  private jupiterQuoteApi = 'https://quote-api.jup.ag/v6';

  constructor(rpcEndpoint: string) {
    this.connection = new Connection(rpcEndpoint);
  }

  // Get quote from Jupiter
  async getQuote(config: SwapConfig) {
    try {
      const params = new URLSearchParams({
        inputMint: config.inputMint,
        outputMint: config.outputMint,
        amount: config.amount.toString(),
        slippageBps: (config.slippageBps || 50).toString(), // 0.5% default slippage
      });

      const response = await axios.get(`${this.jupiterQuoteApi}/quote?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching quote:', error);
      throw error;
    }
  }

  // Create swap transaction
  async createSwapTransaction(
    quoteResponse: any,
    userPublicKey: string
  ) {
    try {
      const response = await axios.post(
        `${this.jupiterQuoteApi}/swap`,
        {
          quoteResponse,
          userPublicKey,
          wrapAndUnwrapSol: true,
          computeUnitPriceMicroLamports: 'auto',
          dynamicComputeUnitLimit: true,
        }
      );

      return response.data.swapTransaction;
    } catch (error) {
      console.error('Error creating swap transaction:', error);
      throw error;
    }
  }

  // Execute swap
  async executeSwap(
    wallet: WalletContextState,
    config: SwapConfig
  ) {
    if (!wallet.publicKey || !wallet.signTransaction) {
      throw new Error('Wallet is not connected');
    }

    try {
      // 1. Get quote
      console.log('Fetching quote...');
      const quoteResponse = await this.getQuote(config);
      
      // 2. Create swap transaction
      console.log('Creating transaction...');
      const swapTransaction = await this.createSwapTransaction(
        quoteResponse,
        wallet.publicKey.toBase58()
      );

      // 3. Deserialize and sign transaction
      console.log('Signing transaction...');
      const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
      
      const signedTransaction = await wallet.signTransaction(transaction);

      // 4. Send transaction
      console.log('Sending transaction...');
      const rawTransaction = signedTransaction.serialize();
      const txid = await this.connection.sendRawTransaction(rawTransaction, {
        skipPreflight: false,
        maxRetries: 2,
      });

      // 5. Confirm transaction
      console.log('Confirming transaction...');
      const latestBlockHash = await this.connection.getLatestBlockhash();
      await this.connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: txid,
      });

      console.log(`Swap completed! Transaction: ${txid}`);
      return {
        success: true,
        signature: txid,
        explorerUrl: `https://solscan.io/tx/${txid}`,
      };
    } catch (error) {
      console.error('Swap failed:', error);
      throw error;
    }
  }
}