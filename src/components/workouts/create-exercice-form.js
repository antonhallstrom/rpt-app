import React from 'react'
import styled from 'styled-components'

import Icon from '../common/icon'

const Wrapper = styled.div`
  position: relative;
`

const Select = styled.select`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  width: 100%;
  border: 2px solid ghostwhite;
  padding: ${props => props.theme.spacing[0]};
  outline: none;
  appearance: none;
  box-shadow: none;
  background-image: none;
  background-color: ${props => props.theme.colors.white};

  &:focus {
    border-color: ${props => props.theme.colors.green};
  }
`

const Arrow = styled(Icon)`
  position: absolute;
  top: 50%;
  right: ${props => props.theme.spacing[0]};
  margin-top: -0.5em;
`

function CreateExerciceForm() {
  return (
  <Wrapper>
    <Select>
      <option value={'Deadlift'}>Deadlift</option>
    </Select>
    <Arrow name="caret-down"/>
  </Wrapper>
  )
}

export default CreateExerciceForm
