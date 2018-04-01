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
  pointer-events: none;
`

const WeightUnit = styled.span`
  position: absolute;
  top: 50%;
  right: ${props => props.theme.spacing[0]};
  margin-top: -0.5em;
  font-family: ${props => props.theme.fonts.body};
`

const InputWrapper = styled.div`
  box-sizing: border-box;
  border: 2px solid ghostwhite;
  border-radius: 4px;
`

const Input = styled.input`
  padding: ${props => props.theme.spacing[0]};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  box-sizing: border-box;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.colors.black};
  }
`

function CreateExerciceForm() {
  return (
    <div>
      <Wrapper>
        <Select name="exercices">
          <option>Exercices</option>
          <option value={'Deadlift'}>Deadlift</option>
          <option value={'Deadlift'}>Squats</option>
          <option value={'Deadlift'}>Bench Press</option>
          <option value={'Deadlift'}>Overhead Press</option>
          <option value={'Deadlift'}>Weighted Chinups</option>
        </Select>
        <Arrow name="caret-down"/>
      </Wrapper>
      <Wrapper>
        <Select name="goal">
          <option>Goal</option>
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
        </Select>
        <Arrow name="caret-down"/>
      </Wrapper>
      <Wrapper>
        <InputWrapper>
          <Input placeholder="Initial Load" />
          <WeightUnit>kg</WeightUnit>
        </InputWrapper>
      </Wrapper>
    </div>
  )
}

export default CreateExerciceForm
