import React from 'react'
import { auth } from '../../config/firebase'
import styled from 'styled-components'

// https://gist.github.com/antonhallstrom/e75e8c1ba6beee1793d62bbe12772529

const Item = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

class ExerciceForm extends React.Component {
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
       <Item>Add exercice</Item>
     </Wrapper>
    )
  }
}

export default ExerciceForm
