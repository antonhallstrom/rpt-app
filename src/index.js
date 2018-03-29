import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Router from './components/router'
import { ThemeProvider } from 'styled-components'
import baseTheme from './components/theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={baseTheme}>
      <Router/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
)
