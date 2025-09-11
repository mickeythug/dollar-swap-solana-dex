import { Connection, VersionedTransaction, PublicKey } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';

interface PumpFunQuoteParams {
  type: 'BUY' | 'SELL';
  mint: string;
  amount: string;
  commitment?: string;
}

interface PumpFunSwapParams {
  wallet: string;
  type: 'BUY' | 'SELL';
  mint: string;
  inAmount: string;
  priorityFeeLevel?: 'low' | 'medium' | 'high' | 'extreme';
  slippageBps?: string;
  commitment?: string;
  feeAccount?: string;
  platformFeeBps?: number;
}

export class PumpFunService {
  private baseUrl: string;
  private connection: Connection;

  constructor(apiEndpoint: string, rpcEndpoint?: string) {
    // VIKTIGT: Använd rätt URL-format utan trailing slash
    this.baseUrl = apiEndpoint.replace(/\/$/, ''); // Ta bort trailing slash om det finns
    this.connection = new Connection(rpcEndpoint || apiEndpoint);
  }

  // Hämta prisuppgift från Pump.fun
  async getQuote(params: PumpFunQuoteParams) {
    try {
      // Bygg query parameters
      const queryParams = new URLSearchParams({
        type: params.type,
        mint: params.mint,
        amount: params.amount,
        commitment: params.commitment || 'confirmed'
      });

      // VIKTIGT: Använd GET request för quote
      const url = `${this.baseUrl}/pump-fun/quote?${queryParams.toString()}`;
      
      console.log('Fetching quote from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Quote request failed:', response.status, errorText);
        throw new Error(`Failed to get quote: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Quote response:', data);
      return data.quote;
    } catch (error) {
      console.error('Error fetching Pump.fun quote:', error);
      throw error;
    }
  }

  // Skapa swap-transaktion
  async getSwapTransaction(params: PumpFunSwapParams) {
    try {
      const url = `${this.baseUrl}/pump-fun/swap`;
      
      // VIKTIGT: POST request med JSON body för swap
      const requestBody = {
        wallet: params.wallet,
        type: params.type,
        mint: params.mint,
        inAmount: params.inAmount,
        priorityFeeLevel: params.priorityFeeLevel || 'medium',
        slippageBps: params.slippageBps || '100', // 1% default slippage
        commitment: params.commitment || 'confirmed'
      };

      // Lägg till fee parameters om de finns
      if (params.feeAccount && params.platformFeeBps) {
        requestBody['feeAccount'] = params.feeAccount;
        requestBody['platformFeeBps'] = params.platformFeeBps;
      }

      console.log('Requesting swap transaction:', url, requestBody);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Swap request failed:', response.status, errorText);
        throw new Error(`Failed to get swap transaction: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Swap transaction response:', data);
      
      if (!data.tx) {
        throw new Error('No transaction returned from API');
      }

      return data.tx;
    } catch (error) {
      console.error('Error getting Pump.fun swap transaction:', error);
      throw error;
    }
  }

  // Utför komplett swap
  async executeSwap(
    wallet: WalletContextState,
    type: 'BUY' | 'SELL',
    mint: string,
    amount: string,
    priorityFeeLevel?: 'low' | 'medium' | 'high' | 'extreme'
  ) {
    if (!wallet.publicKey || !wallet.signTransaction) {
      throw new Error('Wallet not connected or does not support signing');
    }

    try {
      // 1. Hämta quote först (valfritt men rekommenderat för att visa användaren vad de får)
      console.log('Getting quote...');
      const quote = await this.getQuote({
        type,
        mint,
        amount
      });

      console.log('Quote result:', {
        inAmount: quote.inAmountUi,
        outAmount: quote.outAmountUi,
        inToken: type === 'BUY' ? 'SOL' : 'Token',
        outToken: type === 'BUY' ? 'Token' : 'SOL'
      });

      // 2. Hämta swap-transaktion
      console.log('Getting swap transaction...');
      const swapTx = await this.getSwapTransaction({
        wallet: wallet.publicKey.toBase58(),
        type,
        mint,
        inAmount: amount,
        priorityFeeLevel: priorityFeeLevel || 'medium'
      });

      // 3. Deserialisera och signera transaktion
      console.log('Signing transaction...');
      const swapTransactionBuf = Buffer.from(swapTx, 'base64');
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
      
      const signedTransaction = await wallet.signTransaction(transaction);

      // 4. Skicka transaktion
      console.log('Sending transaction...');
      const rawTransaction = signedTransaction.serialize();
      const txid = await this.connection.sendRawTransaction(rawTransaction, {
        skipPreflight: false,
        maxRetries: 3,
      });

      // 5. Bekräfta transaktion
      console.log('Confirming transaction...');
      const latestBlockHash = await this.connection.getLatestBlockhash();
      
      const confirmation = await this.connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: txid,
      }, 'confirmed');

      if (confirmation.value.err) {
        throw new Error(`Transaction failed: ${JSON.stringify(confirmation.value.err)}`);
      }

      console.log(`Pump.fun swap successful! Transaction: ${txid}`);
      
      return {
        success: true,
        signature: txid,
        explorerUrl: `https://solscan.io/tx/${txid}`,
        quote: {
          inAmount: quote.inAmountUi,
          outAmount: quote.outAmountUi,
        }
      };
    } catch (error) {
      console.error('Pump.fun swap failed:', error);
      throw error;
    }
  }

  // Hjälpfunktion för att formatera token-mängder
  static formatAmount(amount: number, decimals: number = 6): string {
    return Math.floor(amount * Math.pow(10, decimals)).toString();
  }

  // Hjälpfunktion för att parsa token-mängder
  static parseAmount(amount: string, decimals: number = 6): number {
    return parseInt(amount) / Math.pow(10, decimals);
  }
}