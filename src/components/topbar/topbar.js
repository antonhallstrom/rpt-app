import React from 'react'
import Button from '../common/button'
import { auth } from '../../config/firebase'
import { withRouter } from 'react-router-dom'

class Topbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged(auth => {
      this.setState({ authenticated: auth });
    })
  }

  handleSignOut() {
    auth.signOut()
    this.props.history.push('/')
  }

  render() {
    if (!this.state.authenticated) {
      return null
    }
    return (
     <div>
        <Button onClick={this.handleSignOut}>Sign out</Button>
     </div>
    )
  }
}

export default withRouter(Topbar)
