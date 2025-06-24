import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react'
import Button from './button';

export function LoginOrProfileButton() {
  const { openSignIn } = useClerk();

  return (
    <>
      <SignedOut>
        <Button onClick={() => openSignIn()}>
          Login/Sign Up
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}