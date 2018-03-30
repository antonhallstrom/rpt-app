import React from 'react'
import reset from 'styled-reset'
import { injectGlobal } from 'styled-components'
import { auth } from '../config/firebase'
import { Redirect } from 'react-router'
injectGlobal`
  ${reset};

  a {
    text-decoration: none;
    color: currentColor;
  }

  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
`

class AppContainer extends React.Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        return <Redirect to="/sign-up"/>
      }
    })
  }

  render() {
    return <div></div>
  }
}

export default AppContainer
