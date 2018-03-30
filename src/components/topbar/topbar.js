import React from 'react'
import * as R from 'ramda'
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
  font-size: 32px;
  color: ${props => props.theme.colors.yellow};
  ${props => props.rotate && 'transform: rotate(90deg)'};
  transition-timing-function: ease-out;
  transition-duration: 0.1s;
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
    this.handleOnBack = this.handleOnBack.bind(this)
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

  handleOnBack() {
    this.props.history.push('/workouts')
  }

  render() {
    if (!this.state.authenticated) {
      return null
    }

    const onBack = R.contains('exercice', this.props.location.pathname)
    return (
     <Wrapper>
        <Logo rotate={onBack} name="rpt-logo" onClick={this.handleOnBack}/>
        <StyledButton onClick={this.handleSignOut}>Sign out</StyledButton>
     </Wrapper>
    )
  }
}

export default withRouter(Topbar)
