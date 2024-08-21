
import React from 'react'
import styled from 'styled-components'
import { SignUp } from "@clerk/clerk-react";


const Container = styled.section`
display:  flex;
align-items: center;
margin: 2rem 0;
justify-content: center;
`


export default function Signup() {
  return (
    <Container>
      <SignUp signInUrl='/login'/>
    </Container>
  );
}








