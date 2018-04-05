import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components'
import * as R from 'ramda'
import { database } from '../../config/firebase'

import Topbar from '../topbar/topbar'
import { Constraint, PageWrapper } from '../common/grid'
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
    value: '',
    label: 'Workouts',
  },
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
    value: '',
    label: 'Exercice',
  },
  {
    value: 'Squats',
    label: 'Squats',
  },
  {
    value: 'Bench Press',
    label: 'Bench Press',
  },
  {
    value: 'Deadlift',
    label: 'Deadlift',
  },
  {
    value: 'Weighted Chin-Up',
    label: 'Weighted Chin-Up',
  },
  {
    value: 'Row',
    label: 'Row',
  },
  {
    value: 'Calves',
    label: 'Calves',
  },
  {
    value: 'Weighted Dip',
    label: 'Bicep Curl',
  },
  {
    value: 'Weighted Dip',
    label: 'Weighted Dip',
  },
  {
    value: 'Overhead Press',
    label: 'Overhead Press',
  },
]

const goalOptions = [
  {
    value: '',
    label: 'Goal',
  },
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
    value: '',
    label: 'Sets',
  },
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

const decreaseOptions = [
  {
    value: '',
    label: 'Decrease',
  },
  {
    value: 0.1,
    label: '10 %',
  },
  {
    value: 0.05,
    label: '5 %',
  },
]

class ExerciceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: null,
      workout: '',
      exercice: '',
      goal: '',
      sets: '',
      weight: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    var exercisesRef = database.ref('user01')

      exercisesRef.on('value', snapshot => {
        if (snapshot) {
        this.setState({ exercises: snapshot.val() })
      }
    })
  }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
    })
	}


  handleBack() {
    this.props.history.push('/workouts')
  }
  // add option for body weight
  // timestamp to show date
  // how to calculate the new reps, and decrease, becuase one needs to compare to old vs the new.

  handleSubmit(event) {
    event.preventDefault()
    const workoutRef = database.ref(`user01/workouts/${this.state.workout}`)
    let exercice = []
    let count = 0

    for (let i = 0; i < this.state.sets; i++) {
      count = i !== 0 && count + 2
      const set = {
        set: i + 1,
        type: `${this.state.exercice.split(' ').join('')}${i}`,
        weight: Math.round(this.state.weight - ((this.state.decrease * i) * this.state.weight)),
        reps: count + JSON.parse(this.state.goal)
      }
      exercice = R.append(set, exercice)
    }

    workoutRef.push({ name: this.state.exercice, exercice, completed: false })
  }

  render() {
    return (
      <div>
        <Topbar onBack={this.handleBack} title="Create Exercice" onSave={this.handleSubmit}/>
        <Constraint width="1200" centered>
          <PageWrapper>
            <Select
              name="workout"
              value={this.state.workout}
              options={workoutOptions}
              onChange={this.handleChange}
            />
            <Space y={0}/>
            <Select
              name="exercice"
              value={this.state.exercice}
              options={exerciceOptions}
              onChange={this.handleChange}
            />
            <Space y={0}/>
            <Select
              name="goal"
              value={this.state.goal}
              options={goalOptions}
              onChange={this.handleChange}
              />
            <Space y={0}/>
            <Select
              name="sets"
              value={this.state.sets}
              options={setOptions}
              onChange={this.handleChange}
              />
            <Space y={0}/>
            <Select
              name="decrease"
              value={this.state.decrease}
              options={decreaseOptions}
              onChange={this.handleChange}
            />
            <Space y={0}/>
            <Wrapper>
              <InputWrapper>
                <Input
                name="weight"
                value={this.state.weight}
                placeholder="Initial Load"
                onChange={this.handleChange}
                />
                <WeightUnit>kg</WeightUnit>
              </InputWrapper>
            </Wrapper>
          </PageWrapper>
        </Constraint>
      </div>
    )
  }
}

ExerciceContainer.propTypes = {
  history: Proptypes.object,
  location: Proptypes.object,
}

export default ExerciceContainer
