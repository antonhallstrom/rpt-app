import React from 'react'
import Proptypes from 'prop-types'
import { auth } from '../config/firebase'
import { Constraint, PageWrapper } from './common/grid'
import Spinner from './spinner'
import { Card } from './common/card'
import Space from './common/space'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Topbar from './topbar/topbar'


const Title = styled.div`
  ${props => props.isCompleted && 'text-decoration: line-through'};
  text-align: center;
`


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: null }
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged(auth => {
      if (auth) {
        this.setState({ authenticated: auth });
      }
    })
  }

  handleSignOut() {
    auth.signOut()
    this.props.history.push('/')
  }

  render() {
    if (!this.state.authenticated) {
      return <Spinner/>
    }

    return (
      <div>
      <Topbar onSignOut={this.handleSignOut} />
        <Constraint width="1200" centered>
          <PageWrapper>
            <Link to="workout/wo1">
              <Card>
                <Title>Workout 1</Title>
              </Card>
            </Link>
            <Space bottom={0}/>
            <Link to="workout/wo2">
              <Card>
                <Title isCompleted>Workout 2</Title>
              </Card>
            </Link>
            <Space bottom={0}/>
            <Link to="workout/wo3">
              <Card>
                <Title isCompleted>Workout 3</Title>
              </Card>
            </Link>
          </PageWrapper>
        </Constraint>
      </div>
    )
  }
}

HomeContainer.propTypes = {
  history: Proptypes.object,
  location: Proptypes.object,
  onSignOut: Proptypes.func,
}

export default HomeContainer
