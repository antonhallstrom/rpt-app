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
    if (this.state.authenticated) {
      return <div>Done</div>
    } else {
      return  <div>Waiting</div>
    }
  }
}

export default Workout
