import React from 'react'
import { auth } from '../../config/firebase'
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'

const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[0]};
  border-radius: 4px;
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
      return <div>Waiting</div>
    }

    return (
      <Constraint width="1200" centered>
        <PageWrapper>
          <Item>Workout 1</Item>
          <Item>Workout 2</Item>
          <Item>Workout 3</Item>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
