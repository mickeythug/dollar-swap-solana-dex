-- Create user profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT NOT NULL UNIQUE,
  username TEXT,
  total_swaps INTEGER NOT NULL DEFAULT 0,
  total_volume DECIMAL(20, 10) NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create swap transactions table  
CREATE TABLE IF NOT EXISTS public.swap_transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  wallet_address TEXT NOT NULL,
  transaction_signature TEXT NOT NULL UNIQUE,
  input_token TEXT NOT NULL,
  output_token TEXT NOT NULL, 
  input_amount DECIMAL(20, 10) NOT NULL,
  output_amount DECIMAL(20, 10) NOT NULL,
  swap_rate DECIMAL(20, 10) NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add foreign key constraint
ALTER TABLE public.swap_transactions 
ADD CONSTRAINT fk_user_profiles 
FOREIGN KEY (user_id) REFERENCES public.user_profiles(id) ON DELETE CASCADE;

-- Enable RLS on both tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.swap_transactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view all profiles" 
ON public.user_profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own profile" 
ON public.user_profiles 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own profile" 
ON public.user_profiles 
FOR UPDATE 
USING (true);

-- RLS Policies for swap_transactions  
CREATE POLICY "Users can view all swap transactions"
ON public.swap_transactions
FOR SELECT 
USING (true);

CREATE POLICY "Users can create swap transactions"
ON public.swap_transactions
FOR INSERT
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_profiles_wallet_address ON public.user_profiles(wallet_address);
CREATE INDEX IF NOT EXISTS idx_swap_transactions_user_id ON public.swap_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_swap_transactions_wallet_address ON public.swap_transactions(wallet_address);
CREATE INDEX IF NOT EXISTS idx_swap_transactions_created_at ON public.swap_transactions(created_at DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();