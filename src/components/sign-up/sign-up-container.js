import React from 'react'
import styled from 'styled-components'

const Input = styled.input`

`

function SignUpContainer() {
  return (
    <div>
      <Input placeholder="Username"/>
      <Input placeholder="Password"/>
    </div>
  )
}

export default SignUpContainer
