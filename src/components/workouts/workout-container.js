import React from 'react'
import Proptypes from 'prop-types'
import * as R from 'ramda'
import { v4 as generateUuid } from 'uuid'
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

class WorkoutContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      exercises: [],
    }
    this.handleOnSave = this.handleOnSave.bind(this)
    this.handleOnBack = this.handleOnBack.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    var exercisesRef = database.ref(`user01/workouts/${this.props.match.params.id}`)

    exercisesRef.on('value', snapshot => {
      this.setState({ exercises: R.values(snapshot.val()) })
    })
  }

  handleOnBack() {
    this.props.history.push('/workouts')
  }

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
    })
	}

  handleOnSave() {

  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Topbar onBack={this.handleOnBack} onSave={this.handleOnSave}/>
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
                    {R.map(j => (
                      <TableRow key={j.set}>
                        <TableData>{j.set}</TableData>
                        <TableData>{j.weight}</TableData>
                        <InputWrapper>
                          <Input
                            name={`set${j.set}`}
                            value={this.state[`set${j.set}`] || ''}
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
  onSignOut: Proptypes.func,
}


export default WorkoutContainer
