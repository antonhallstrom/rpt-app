import React from 'react'
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'
import Button from '../common/button'
import Space from '../common/space'
import Icon from '../common/icon'
import { auth, googleAuthProvider } from '../../config/firebase'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const Bg = styled.div`
  background-image: url('/images/logo.svg');
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 140px;
  max-width: 230px;
`

const Title = styled.div`
  font-size: 42px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.brown};
`

const Logo = styled(Icon)`
  &.shift {
    color: dodgerblue;
  }
`

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isHover: false, authenticated: null }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.setState({ isHover: !this.state.isHover })
  }

  render() {
    const shift = this.state.isHover ? 'shift' : ''

    return (
      <div>
      <Bg/>
      <Constraint width="1200" centered>
        <PageWrapper>
          <Wrapper>
            <Title>Reverse P<Logo className={shift} name="rpt-logo"/>ramid Training Log</Title>
            <Space top={1}>
            <Link to="/workouts"><Button onClick={() => auth.signInWithRedirect(googleAuthProvider)} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>Sign up</Button></Link>
            </Space>
          </Wrapper>
        </PageWrapper>
      </Constraint>
      </div>
    )
  }
}

export default withRouter(LandingPage)
