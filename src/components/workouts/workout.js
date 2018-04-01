import React from 'react'
import { auth } from '../../config/firebase'
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'
import Spinner from '../spinner'
import { Card } from '../common/card'
import Space from '../common/space'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: ${props => props.theme.fonts.head};
`

class Workout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
  }

  componentDidMount() {
    auth.onAuthStateChanged(auth => {
      this.setState({ authenticated: auth });
    })
  }

  render() {
    if (!this.state.authenticated) {
      return <Spinner/>
    }

    return (
      <Constraint width="1200" centered>
        <PageWrapper>
          <Space bottom={0}>
            <Card>
              <Header>
              </Header>
            </Card>
          </Space>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
