import React from 'react'
import { auth } from '../../config/firebase'
import styled from 'styled-components'
import { Constraint, PageWrapper } from '../common/grid'
import { Link } from 'react-router-dom'

const Item = styled(Link)`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[0]};
  border-radius: 4px;
  font-size: ${props => props.theme.fonts.sizes.large[2]};
  font-family: ${props => props.theme.fonts.head};
  color: ${props => props.color};
  background-color: ${props => props.bg};
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
          <Item bg="mediumspringgreen" color="cadetblue" to="/exercice/1">Workout 1</Item>
          <Item bg="ghostwhite" color="gainsboro" to="/exercice/2">Workout 2</Item>
          <Item bg="ghostwhite" color="gainsboro" to="/exercice/3">Workout 3</Item>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default Workout
