import React from 'react'
import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'
import { auth } from '../config/firebase'

injectGlobal`
  ${reset};

  a {
    text-decoration: none;
    color: currentColor;
  }

  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
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
