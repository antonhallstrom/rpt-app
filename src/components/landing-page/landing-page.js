import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'

const Image = styled.img`
  width: 200px;
  height: 200px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

function LandingPage() {
  return (
    <Constraint width="1200" centered>
      <PageWrapper>
        <Wrapper>
          <Image src="/images/logo.svg" />
          <Link to="/sign-up">
            <button>Sign up</button>
          </Link>
        </Wrapper>
      </PageWrapper>
    </Constraint>
  )
}

export default LandingPage
