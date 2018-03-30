import React from 'react'
import { auth } from '../../config/firebase'

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
      return <div>Waiting</div>
    }
    return (
      <div>
        Workout 1
        Workout 2
        Workout 3
      </div>
    )
  }
}

export default Workout
