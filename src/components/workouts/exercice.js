import React from 'react'
import { auth } from '../../config/firebase'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Nav = styled.div`
  padding: ${props => props.theme.spacing[0]};
  font-weight: 600;
  font-family: ${props => props.theme.fonts.head};
  font-size: ${props => props.theme.fonts.sizes.large[2]};
`

class Exercice extends React.Component {
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
    return (
     <Wrapper>
       <Nav><Link to="/workouts">wos</Link> / wo 1 / exer 1</Nav>
        {this.props.match.params.id === '1' &&
          <ul>
            <li>Deadlift – 2 x 6</li>
            <li>Row or Overhead Press – 3 x 8</li>
            <li>Accessory: Calves, biceps or triceps – 2 x 10</li>
          </ul>
        }
     </Wrapper>
    )
  }
}

export default Exercice
