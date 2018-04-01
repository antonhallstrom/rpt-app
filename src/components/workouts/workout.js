import React from 'react'
import { auth } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import Spinner from '../spinner'
import { Card } from '../common/card'
import Space from '../common/space'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Title = styled.div`
  ${props => props.isCompleted && 'text-decoration: line-through'};
  text-align: center;
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
          <Link to="workout/1">
            <Card>
              <Title>Workout 1</Title>
            </Card>
          </Link>
          <Space bottom={0}/>
          <Link to="workout/2">
            <Card>
              <Title isCompleted>Workout 2</Title>
            </Card>
          </Link>
          <Space bottom={0}/>
          <Link to="workout/3">
            <Card>
              <Title isCompleted>Workout 3</Title>
            </Card>
          </Link>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
