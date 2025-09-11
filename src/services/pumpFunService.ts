import { Connection, Transaction, VersionedTransaction } from '@solana/web3.js';

interface PumpFunQuoteParams {
  mint: string;
  type: 'BUY' | 'SELL';
  amount: string; // Raw amount in base units
}

interface PumpFunSwapParams {
  wallet: string;
  type: 'BUY' | 'SELL';
  mint: string;
  inAmount: string; // Raw amount in base units
  priorityFeeLevel?: 'low' | 'medium' | 'high';
}

interface PumpFunQuoteResponse {
  quote: {
    mint: string;
    bondingCurve: string;
    type: string;
    inAmount: string;
    inAmountUi: number;
    inTokenAddress: string;
    outAmount: string;
    outAmountUi: number;
    outTokenAddress: string;
    meta: {
      isCompleted: boolean;
      outDecimals: number;
      inDecimals: number;
      totalSupply: string;
      currentMarketCapInSol: number;
    };
  };
}

interface PumpFunSwapResponse {
  tx: string; // Base-64 encoded transaction
}

export class PumpFunService {
  private rpcEndpoint: string;
  private connection: Connection;

  constructor(rpcEndpoint: string) {
    this.rpcEndpoint = rpcEndpoint;
    this.connection = new Connection(rpcEndpoint, 'confirmed');
  }

  async getQuote(params: PumpFunQuoteParams): Promise<PumpFunQuoteResponse> {
    const url = `${this.rpcEndpoint}pump-fun/quote?mint=${params.mint}&type=${params.type}&amount=${params.amount}`;
    
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`Pump.fun quote failed (${response.status}): ${text || response.statusText}`);
    }

    return await response.json();
  }

  async getSwapTransaction(params: PumpFunSwapParams): Promise<PumpFunSwapResponse> {
    const url = `${this.rpcEndpoint}pump-fun/swap`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        wallet: params.wallet,
        type: params.type,
        mint: params.mint,
        inAmount: params.inAmount,
        priorityFeeLevel: params.priorityFeeLevel || 'high',
      }),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`Pump.fun swap failed (${response.status}): ${text || response.statusText}`);
    }

    return await response.json();
  }

  async executeSwap(
    wallet: any,
    params: PumpFunSwapParams
  ): Promise<{ success: boolean; signature?: string; explorerUrl?: string; error?: string }> {
    try {
      if (!wallet.publicKey || !wallet.signTransaction) {
        throw new Error('Wallet not connected or does not support signing');
      }

      // Get swap transaction
      const swapResponse = await this.getSwapTransaction({
        ...params,
        wallet: wallet.publicKey.toBase58(),
      });

      // Decode transaction
      const transactionBuffer = Buffer.from(swapResponse.tx, 'base64');
      const transaction = VersionedTransaction.deserialize(transactionBuffer);

      // Sign transaction
      const signedTransaction = await wallet.signTransaction(transaction);

      // Send transaction
      const signature = await this.connection.sendTransaction(signedTransaction, {
        maxRetries: 3,
        preflightCommitment: 'confirmed',
      });

      // Wait for confirmation
      await this.connection.confirmTransaction(signature, 'confirmed');

      return {
        success: true,
        signature,
        explorerUrl: `https://solscan.io/tx/${signature}`,
      };
    } catch (error) {
      console.error('Pump.fun swap failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }
}