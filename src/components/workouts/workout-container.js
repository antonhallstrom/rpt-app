import React from 'react'
import { auth } from '../../config/firebase'
import { Constraint, PageWrapper } from '../common/grid'
import Spinner from '../spinner'
import styled from 'styled-components'
import Space from '../common/space'

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

const InputWrapper = styled.div`
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
    this.state = { authenticated: null }
  }

  componentDidMount() {
    auth.onAuthStateChanged(auth => {
      this.setState({ authenticated: auth });
    })
  }

  render() {
    if (!this.state.authenticated) {
      return <Spinner/>
    }

    return (
      <Constraint width="1200" centered>
        <PageWrapper>
          <Space bottom={0}>
          <Title>Deadlift</Title>
          <Space bottom={0}/>
          <Table>
            <tbody>
            <TableRow>
              <TableHeading>#</TableHeading>
              <TableHeading>Kg</TableHeading>
              <TableHeading>Reps</TableHeading>
            </TableRow>
            <TableRow>
              <TableData>1</TableData>
              <TableData>100</TableData>
              <InputWrapper><Input value="8"/></InputWrapper>
            </TableRow>
            <TableRow>
              <TableData>2</TableData>
              <TableData>90</TableData>
              <InputWrapper><Input value="10"/></InputWrapper>
            </TableRow>
            <TableRow>
              <TableData>3</TableData>
              <TableData>80</TableData>
              <InputWrapper><Input placeholder="12"/></InputWrapper>
            </TableRow>
            </tbody>
          </Table>
          </Space>
          <Title>Rows</Title>
          <Space bottom={0}/>
          <Table>
            <tbody>
            <TableRow>
              <TableHeading>#</TableHeading>
              <TableHeading>Kg</TableHeading>
              <TableHeading>Reps</TableHeading>
            </TableRow>
            <TableRow>
              <TableData>1</TableData>
              <TableData>100</TableData>
              <InputWrapper><Input value="8"/></InputWrapper>
            </TableRow>
            <TableRow>
              <TableData>2</TableData>
              <TableData>90</TableData>
              <InputWrapper><Input value="10"/></InputWrapper>
            </TableRow>
            <TableRow>
              <TableData>3</TableData>
              <TableData>80</TableData>
              <InputWrapper><Input value="12"/></InputWrapper>
            </TableRow>
            </tbody>
          </Table>
        </PageWrapper>
      </Constraint>
    )
  }
}

export default WorkoutContainer
