import React from 'react'
import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'


injectGlobal`
  ${reset};
`

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
