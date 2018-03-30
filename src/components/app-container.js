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
  render() {
    return <div>dadas</div>
  }
}

export default AppContainer
