import React from 'react'
import styled from 'styled-components'
import Icon from '../common/icon'
import { Card } from '../common/card'
import { Constraint, PageWrapper } from '../common/grid'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const AddIcon = styled(Icon)`
  font-size: 32px;
  color: ${props => props.theme.colors.green};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: ${props => props.theme.fonts.head};
`

class ExerciceContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { exercices: [] }
  }

  render() {
    return (
      <Constraint width="1200" centered>
        <PageWrapper>
            <Card>
              <Wrapper>
                <Header>
                  Add workout <AddIcon name="add-circle-outline"/>
                </Header>
              </Wrapper>
            </Card>
          </PageWrapper>
      </Constraint>
    )
  }
}

export default ExerciceContainer
