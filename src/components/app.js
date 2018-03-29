import React from 'react'
import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${reset};

  a {
    text-decoration: none;
    color: currentColor;
  }

  body {
    background-image: url('/images/logo.svg');
    background-repeat: no-repeat;
  }

  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
`

function App() {
  return <div></div>
}

export default App
