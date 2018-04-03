import React from 'react'
import styled from 'styled-components'

import Space from '../common/space'
import Select from '../common/select'

const Wrapper = styled.div`
  position: relative;
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
  }
  &::placeholder {
    color: ${props => props.theme.colors.black};
  }
`

const workoutOptions = [
  {
    value: 'wo1',
    label: 'Workout 1',
  },
  {
    value: 'wo2',
    label: 'Workout 2',
  },
  {
    value: 'wo3',
    label: 'Workout 3',
  },
]

const exerciceOptions = [
  {
    value: 'squats',
    label: 'Squats',
  },
  {
    value: 'benchPress',
    label: 'Bench Press',
  },
  {
    value: 'deadlift',
    label: 'Deadlift',
  },
  {
    value: 'weightedChinUp',
    label: 'Weighted Chin-Up',
  },
  {
    value: 'row',
    label: 'Row',
  },
  {
    value: 'calves',
    label: 'Calves',
  },
  {
    value: 'bicepCurl',
    label: 'Bicep Curl',
  },
  {
    value: 'weightedDip',
    label: 'Weighted Dip',
  },
  {
    value: 'overheadPress',
    label: 'Overhead Press',
  },
]

const goalOptions = [
  {
    value: 2,
    label: '2',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 12,
    label: '12',
  },
]

const setOptions = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
]


function CreateExerciceForm(props) {
  return (
    <div>
      <Select
        name="workouts"
        options={workoutOptions}
        onChange={props.onchange}
        />
      <Space y={0}/>
      <Select
        name="exercices"
        options={exerciceOptions}
        onChange={props.onchange}
        />
      <Space y={0}/>
      <Select
        name="goal"
        options={goalOptions}
        onChange={props.onchange}
        />
      <Space y={0}/>
      <Select
        name="sets"
        options={setOptions}
        onChange={props.onchange}
        />
      <Space y={0}/>
      <Wrapper>
        <InputWrapper>
          <Input
           placeholder="Initial Load"
           onChange={props.onchange}
           />
          <WeightUnit>kg</WeightUnit>
        </InputWrapper>
      </Wrapper>
    </div>
  )
}

export default CreateExerciceForm
