import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'
import Button from '../common/button'
import Space from '../common/space'
import Icon from '../common/icon'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 210px;
`

const Title = styled.div`
  font-family: 'Bungee Shade', cursive;
  font-size: 42px;
  color: ${props => props.theme.colors.brown};
`

const Logo = styled(Icon)`

`

function LandingPage() {
  return (
    <Constraint width="1200" centered>
      <PageWrapper>
        <Wrapper>
          <Link to="/sign-up">
            <Title>Reverse P<Logo name="rpt-logo"/>ramid Training Log</Title>
            <Space top={1}>
            <Button>Sign up</Button>
            </Space>
          </Link>
        </Wrapper>
      </PageWrapper>
    </Constraint>
  )
}

export default LandingPage
