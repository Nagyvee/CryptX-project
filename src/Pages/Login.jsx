
import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Login() {
  return (
    <div>Login

<SignedOut>
        <SignInButton />
      </SignedOut>
     
    </div>
  )
}

  
