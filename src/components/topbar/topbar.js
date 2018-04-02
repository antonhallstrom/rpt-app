import React from 'react'
import * as R from 'ramda'
import { auth } from '../../config/firebase'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../common/icon'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[0]} ${props => props.theme.spacing[1]};
  background-color: ${props => props.theme.colors.yellow};
  min-height: 32px;
  color: ${props => props.theme.colors.brown};
  position: fixed;
  left: 0;
  right: 0;
`

const Title = styled.div`
  font-size: 16px;
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

    return (
     <div>
        {R.equals('/create-exercice', this.props.location.pathname) &&
        <Wrapper>
          <Icon size="big" name="arrow-back" onClick={this.handleOnBack}/><Title>Create Exercice</Title><Icon name="check" size="big"/>
        </Wrapper>
        }
        {R.equals('/workouts', this.props.location.pathname) &&
        <Wrapper>
          <Icon size="big" name="rpt-logo"/><Title onClick={this.handleSignOut}>Sign out</Title>
        </Wrapper>
        }
        {R.equals('/workout/1', this.props.location.pathname) &&
        <Wrapper>
          <Icon size="big" name="arrow-back" onClick={this.handleOnBack}/>
        </Wrapper>
        }
     </div>
    )
  }
}

export default withRouter(Topbar)
