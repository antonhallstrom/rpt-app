import React from 'react'
import Proptypes from 'prop-types'
import * as R from 'ramda'
import { database } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import styled from 'styled-components'
import Space from '../common/space'
import Topbar from '../topbar/topbar'

const Title = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.spacing[1]};
  padding-bottom: ${props => props.theme.spacing[1]};
  background-color: ${props => props.theme.colors.white};
`

const Table = styled.table`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
`

const TableRow = styled.tr`
  text-align: center;
  display: flex;
  width: 100%;
`

const TableHeading = styled.th`
  text-align: center;
  padding-top: ${props => props.theme.spacing[0]};
  padding-bottom: ${props => props.theme.spacing[0]};
  font-family: ${props => props.theme.fonts.head};
  width: 100%;
  border: 1px solid ghostwhite;
`

const TableData = styled.td`
  padding-top: ${props => props.theme.spacing[0]};
  padding-bottom: ${props => props.theme.spacing[0]};
  width: 100%;
  border: 1px solid ghostwhite;
`

const InputWrapper = styled.td`
  box-sizing: border-box;
  border: 1px solid ghostwhite;
  width: 100%;
`

const Input = styled.input`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  vertical-align: middle;
  height: 100%;
  box-sizing: border-box;
  border: none;
  text-align: center;
  width: 100%;
  color: ${props => props.theme.colors.purple};
  caret-color: ${props => props.theme.colors.black};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.colors.black};
  }
`

const mapIndexed = R.addIndex(R.map)

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { exercises: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRedirect = this.handleRedirect.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const exercisesRef = database.ref(`user01/workouts/${this.props.match.params.id}`)

    exercisesRef.on('value', snapshot => {
      const exercises = R.filter(R.propEq('completed', false), R.values(snapshot.val()))

      this.setState({ exercises })
    })
  }

  handleRedirect() {
    this.props.history.push('/workouts')
  }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
    })
	}

  handleSubmit() {
  const exerciceRef = database.ref(`user01/workouts/${this.props.match.params.id}`)
  // Check all the rep values, is 1 over the set rep values.
  // If they are over, then to a increase on the initial weight load, by selected decrease.
  // If a value is "" then that means the values is unchanged. Return the same value. It need to be set. Grab the data from the unmodified object.
  // If nothing is unchanged, mark as completed: true, and generate a new exercices based on the data.
  // If only some sets are increases create a new exercices with that data, and mark as complete.
  // this work, one needs the refrence to the key to update the state. Else one can.

  console.log(this.state)

    // To mark the exercice as completed.
    // exerciceRef.on('value', snapshot => {
    //   const updates = {};

    //   snapshot.forEach((childSnapshot) => {
    //     updates[childSnapshot.key + '/completed'] = true
    //     exerciceRef.update(updates)
    //   })
    // })
  }

  render() {
    return (
      <React.Fragment>
        <Topbar onBack={this.handleRedirect} onSave={this.handleSubmit}/>
        <Constraint width="1200" centered>
          <PageWrapper>
            {R.map(i => (
              <div key={i.name}>
                <Space y={0}>
                  <Title>{i.name}</Title>
                </Space>
                <Table>
                  <tbody>
                    <TableRow>
                      <TableHeading>#</TableHeading>
                      <TableHeading>Kg</TableHeading>
                      <TableHeading>Reps</TableHeading>
                    </TableRow>
                    {mapIndexed((j) => (
                      <TableRow key={j.set}>
                        <TableData>{j.set}</TableData>
                        <TableData>{j.weight}</TableData>
                        <InputWrapper>
                          <Input
                            type="number"
                            name={j.type}
                            value={this.state[j.type]}
                            placeholder={j.reps}
                            onChange={this.handleChange}/>
                        </InputWrapper>
                      </TableRow>
                      ), i.exercice)}
                  </tbody>
                </Table>
              </div>
            ), this.state.exercises)}
          </PageWrapper>
        </Constraint>
      </React.Fragment>
    )
  }
}

WorkoutContainer.propTypes = {
  history: Proptypes.object,
  location: Proptypes.object,
  match: Proptypes.object,
}


export default WorkoutContainer
