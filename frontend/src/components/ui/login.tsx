
import { useEffect } from 'react';
import { SignedIn, SignedOut, useClerk, UserButton, useUser } from '@clerk/clerk-react';
import  Button2 from '@/components/ui/button2';
import { syncUserToSupabase } from '@/components/database';

export function LoginOrProfileButton() {
  const { openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();

  // Sync user to Supabase when auth state changes
  useEffect(() => {
    if (isSignedIn && user) {
      syncUserToSupabase(user)
        .then(() => console.log('User synced to Supabase'))
        .catch(error => console.error('Sync failed:', error));
    }
  }, [isSignedIn, user]);

  return (
    <>
      <SignedOut>
        <Button2 onClick={() => openSignIn()}>
          Login/Sign Up
        </Button2>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}