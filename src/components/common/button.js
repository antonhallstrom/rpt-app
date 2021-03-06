import styled from 'styled-components'

const Button = styled.button`
  padding: 16px 32px;
  color: ${props => props.theme.colors.brown};
  cursor: pointer;
  outline: none;
  border-radius: 32px;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.33);
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: mediumspringgreen;
    color: rgba(0, 0, 0, 0.33);
  }
`

export default Button
