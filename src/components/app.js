import React from 'react'
import reset from 'styled-reset'
import { ThemeProvider, injectGlobal } from 'styled-components'
import baseTheme from './theme'

import SignUp from './sign-up/sign-up'

injectGlobal`
  ${reset};
`

function App() {
  return (
    <ThemeProvider theme={baseTheme}>

    </ThemeProvider>
  )
}

export default App
