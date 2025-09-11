import { supabase } from '@/integrations/supabase/client';

export interface UserProfile {
  id: string;
  wallet_address: string;
  username?: string;
  total_swaps: number;
  total_volume: number;
  created_at: string;
  updated_at: string;
}

export interface SwapTransaction {
  id: string;
  user_id: string;
  wallet_address: string;
  transaction_signature: string;
  input_token: string;
  output_token: string;
  input_amount: number;
  output_amount: number;
  swap_rate: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export class UserService {
  // Create or update user profile
  async createOrUpdateUser(walletAddress: string, username?: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .upsert(
          {
            wallet_address: walletAddress,
            username: username,
            updated_at: new Date().toISOString(),
          },
          {
            onConflict: 'wallet_address',
            ignoreDuplicates: false,
          }
        )
        .select()
        .single();

      if (error) {
        console.error('Error creating/updating user:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in createOrUpdateUser:', error);
      return null;
    }
  }

  // Get user profile by wallet address
  async getUserByWallet(walletAddress: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('wallet_address', walletAddress)
        .single();

      if (error) {
        console.error('Error fetching user:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in getUserByWallet:', error);
      return null;
    }
  }

  // Record a swap transaction
  async recordSwapTransaction(
    userId: string,
    walletAddress: string,
    transactionSignature: string,
    inputToken: string,
    outputToken: string,
    inputAmount: number,
    outputAmount: number
  ): Promise<SwapTransaction | null> {
    try {
      const swapRate = outputAmount / inputAmount;
      
      const { data, error } = await supabase
        .from('swap_transactions')
        .insert({
          user_id: userId,
          wallet_address: walletAddress,
          transaction_signature: transactionSignature,
          input_token: inputToken,
          output_token: outputToken,
          input_amount: inputAmount,
          output_amount: outputAmount,
          swap_rate: swapRate,
          status: 'completed',
        })
        .select()
        .single();

      if (error) {
        console.error('Error recording swap transaction:', error);
        return null;
      }

      // Update user stats
      await this.updateUserStats(userId, inputAmount);

      return data;
    } catch (error) {
      console.error('Error in recordSwapTransaction:', error);
      return null;
    }
  }

  // Update user statistics
  private async updateUserStats(userId: string, swapAmount: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({
          total_swaps: supabase.sql`total_swaps + 1`,
          total_volume: supabase.sql`total_volume + ${swapAmount}`,
          updated_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) {
        console.error('Error updating user stats:', error);
      }
    } catch (error) {
      console.error('Error in updateUserStats:', error);
    }
  }

  // Get user's swap history
  async getUserSwapHistory(walletAddress: string): Promise<SwapTransaction[]> {
    try {
      const { data, error } = await supabase
        .from('swap_transactions')
        .select('*')
        .eq('wallet_address', walletAddress)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching swap history:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getUserSwapHistory:', error);
      return [];
    }
  }

  // Get leaderboard (top users by volume)
  async getLeaderboard(limit: number = 10): Promise<UserProfile[]> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('total_volume', { ascending: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getLeaderboard:', error);
      return [];
    }
  }
}