import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'dummy-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

let accessTokenProvider: () => Promise<string | null> | string | null = () => null;

export const setSupabaseAccessTokenProvider = (provider: () => Promise<string | null> | string | null) => {
  accessTokenProvider = provider;
};

export const clearSupabaseAccessTokenProvider = () => {
  accessTokenProvider = () => null;
};


export const apiClient = {} as any;
