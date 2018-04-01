import React from 'react'
import { auth } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import Spinner from '../spinner'

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
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
