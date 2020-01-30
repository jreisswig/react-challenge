import React from 'react'
import styled from 'styled-components/macro'
import Form from './Form'

export default function App() {
  return (
    <Appcontainer>
      <Form />
    </Appcontainer>
  )
}

const Appcontainer = styled.div`
  height: 100vh;
`
