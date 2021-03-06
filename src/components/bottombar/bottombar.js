import React from 'react'
import { auth } from '../../config/firebase'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../common/icon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing[2]};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #EEEEEE;
`

const AddIcon = styled(Icon)`
  font-size: 48px;
  color: ${props => props.theme.colors.green};
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  position: fixed;
  border-radius: 50%;
  background-color: white;
`

class Bottombar extends React.Component {
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
      return null
    }

    return (
     <Wrapper>
       <Link to="/create-exercice"><AddIcon name="add-circle-outline"/></Link>
     </Wrapper>
    )
  }
}

export default withRouter(Bottombar)
