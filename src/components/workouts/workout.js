import React from 'react'
import { auth } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import Spinner from '../spinner'
import { Card } from '../common/card'
import Space from '../common/space'
import { Link } from 'react-router-dom'

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
          <Card>
            <Link to="workout">Workout 1</Link>
          </Card>
          <Space bottom={0}/>
          <Card>
            Workout 2
          </Card>
          <Space bottom={0}/>
          <Card>
            Workout 3
          </Card>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
