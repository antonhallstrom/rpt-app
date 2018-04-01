import React from 'react'

import { Constraint, PageWrapper } from '../common/grid'

import CreateExericesForm from './create-exercice-form'

class ExerciceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { exercices: [] }
  }

  render() {
    return (
      <Constraint width="1200" centered>
        <PageWrapper>
            <CreateExericesForm/>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default ExerciceContainer
