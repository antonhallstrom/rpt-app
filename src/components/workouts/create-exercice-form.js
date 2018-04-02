import React from 'react'
import styled from 'styled-components'

import Icon from '../common/icon'
import Space from '../common/space'

const Wrapper = styled.div`
  position: relative;
`

const Select = styled.select`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  width: 100%;
  border: 2px solid white;
  border-radius: 0;
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
  border: 2px solid white;
  background-color: white;
`

const Input = styled.input`
  padding: ${props => props.theme.spacing[0]};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  box-sizing: border-box;
  -webkit-appearance: none;
  border: none;
  border-radius: none;
  outline: none;
  width: 100%;
  &:focus {
    outline: none;
    font-size: initial;
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
          <option>Select workout</option>
          <option value={'Deadlift'}>Workout 1</option>
          <option value={'Deadlift'}>Workout 2</option>
          <option value={'Deadlift'}>Workout 3</option>
        </Select>
        <Arrow name="caret-down"/>
      </Wrapper>
      <Space y={0}/>
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
      <Space y={0}/>
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
      <Space y={0}/>
      <Wrapper>
        <Select name="sets">
          <option>Sets</option>
          <option value={2}>1</option>
          <option value={4}>2</option>
          <option value={6}>3</option>
        </Select>
        <Arrow name="caret-down"/>
      </Wrapper>
      <Space y={0}/>
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
