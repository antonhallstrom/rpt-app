import React from 'react'
import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'
import { auth } from '../config/firebase'

injectGlobal`
  ${reset};

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  @import url('https://fonts.googleapis.com/css?family=Lora:400i');
`

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
  }

  componentDidMount() {
    auth.onAuthStateChanged(auth => {
      this.setState({ authenticated: auth });
    })
  }

  render() {
      return null
  }
}

export default AppContainer
