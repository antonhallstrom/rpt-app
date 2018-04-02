import React from 'react'
import Proptypes from 'prop-types'
import { auth, database } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import Topbar from '../topbar/topbar'
import CreateExericesForm from './create-exercice-form'

class ExerciceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { exercises: null, currentUser: null  }
    this.handleOnSave = this.handleOnSave.bind(this)
    this.handleOnBack = this.handleOnBack.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });

    })
    var exercisesRef = database.ref('user01');

    exercisesRef.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({ exercises: snapshot.val() });
      console.log(this.state.exercises)
    })
  }

  handleOnBack() {
    this.props.history.push('/workouts')
  }

  handleOnSave() {

  }

  render() {
    return (
      <div>
        <Topbar onBack={this.handleOnBack} onSave={this.handleOnSave}/>
        <Constraint width="1200" centered>
          <PageWrapper>
              <CreateExericesForm />
          </PageWrapper>
        </Constraint>
      </div>
    )
  }
}

ExerciceContainer.propTypes = {
  history: Proptypes.object,
  location: Proptypes.object,
}

export default ExerciceContainer
