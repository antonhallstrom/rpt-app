import styled from 'styled-components'

export const Card = styled.div`
  border-radius: 4px;
  padding: ${props => props.theme.spacing[1]};
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.white};
`
