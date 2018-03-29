import styled from 'styled-components'

export const Constraint = styled.div`
  ${props => props.width && `max-width: ${props.width}px`};
  ${props => props.height && `max-width: ${props.height}px`};
  ${props => props.centered && `margin: auto`};
`

export const PageWrapper = styled.div`
  padding-top: ${props => props.theme.spacing[1]};
  margin-left: ${props => props.theme.spacing[1]};
  margin-right: ${props => props.theme.spacing[0]};
`
