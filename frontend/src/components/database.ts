import { createClient } from '@supabase/supabase-js';

// For production, replace these with your actual values
// or use environment variables as shown below
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
// Client-side safe initialization
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Type definitions
export type UserProfile = {
  clerk_user_id: string;
  email: string;
  name?: string | null;
  created_at?: string;
};

// Sync function
export const syncUserToSupabase = async (user: any) => {
  if (!user) return null;

  const { data, error } = await supabase
    .from('users')
    .upsert({
      clerk_user_id: user.id,
      email: user.primaryEmailAddress?.emailAddress,
      name: user.fullName || `${user.firstName} ${user.lastName}`,
    })
    .select()
    .single();

  if (error) {
    console.error('Supabase error:', error);
    return null;
  }

  return data;
};