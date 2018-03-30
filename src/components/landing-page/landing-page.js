import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'
import Button from '../common/button'
import Space from '../common/space'
import Icon from '../common/icon'

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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 180px;
  max-width: 260px;
`

const Title = styled.div`
  font-family: 'Bungee Shade', cursive;
  font-size: 42px;
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
    this.state = { isHover: false }
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.setState({ isHover: !this.state.isHover })
  }

  render() {
    const shift = this.state.isHover ? 'shift' : ''
    return (
      <Constraint width="1200" centered>
        <Bg/>
        <PageWrapper>
          <Wrapper>
            <Link to="/sign-up">
              <Title>Reverse P<Logo className={shift} name="rpt-logo"/>ramid Training Log</Title>
              <Space top={1}>
              <Button onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>Sign up</Button>
              </Space>
            </Link>
          </Wrapper>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default LandingPage
