
import React from 'react'
import { SignInButton } from "@clerk/clerk-react";



export default function Login() {
  return (
    <div>
    <h1>Sign in with</h1>

        <SignInButton mode="modal" redirectUrl="/Home" />
  
  
    </div>
  );
}








