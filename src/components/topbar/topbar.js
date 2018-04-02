import React from 'react'
import Proptypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../common/icon'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing[0]} ${props => props.theme.spacing[1]};
  background-color: ${props => props.theme.colors.yellow};
  min-height: 32px;
  color: ${props => props.theme.colors.brown};
  position: fixed;
  left: 0;
  right: 0;
`

const Title = styled.div`
  font-size: 16px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

function Topbar(props) {
  return (
    <Wrapper>
      {props.onBack &&
      <Icon size="big" name="arrow-back" onClick={props.onBack}/>
      }
      {props.title &&
      <Title>{props.title}</Title>
      }
      {props.onSave &&
      <Icon name="check" size="big" onClick={props.onSave}/>
      }
      {props.onSignOut &&
      <Flex>
        <Icon size="big" name="rpt-logo"/><Title onClick={props.onSignOut}>Sign out</Title>
      </Flex>
      }
    </Wrapper>
  )
}


Topbar.propTypes = {
  title: Proptypes.string,
  history: Proptypes.object,
  location: Proptypes.object,
  onBack: Proptypes.func,
  onSave: Proptypes.func,
  onSignOut: Proptypes.func,
}

export default withRouter(Topbar)
