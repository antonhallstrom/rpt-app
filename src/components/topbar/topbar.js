import React from 'react'
import Button from '../common/button'
import { auth } from '../../config/firebase'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../common/icon'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[0]};
  border-bottom: 1px solid rgba(0,0,0,0.1);
`

const Logo = styled(Icon)`
  font-size: 52px;
  color: ${props => props.theme.colors.yellow};
`

const StyledButton = styled(Button)`
  height: 100%;
  padding: 12px 16px;
  font-size: 12px;
  border: none;
`

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
     <Wrapper>
        <Logo name="rpt-logo"/>
        <StyledButton onClick={this.handleSignOut}>Sign out</StyledButton>
     </Wrapper>
    )
  }
}

export default withRouter(Topbar)
