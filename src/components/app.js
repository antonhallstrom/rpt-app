import React from 'react'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset};
`

function App() {
  baseStyles()

  return (
    <h1>Hello World!</h1>
  )
}

export default App
