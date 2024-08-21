
import React from 'react'
import styled from 'styled-components'
import { SignIn } from "@clerk/clerk-react";


const Container = styled.section`
display:  flex;
align-items: center;
margin: 2rem 0;
justify-content: center;
`


export default function Login() {
  return (
    <Container>
      <SignIn signUpUrl='/signup'/>
    </Container>
  );
}








