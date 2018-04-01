import styled, { keyframes } from 'styled-components'


const spin = keyframes`
  to {transform: rotate(360deg)};
}
`

const Spinner = styled.div`

&:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border-radius: 50%;
  border-top: 2px solid mediumspringgreen;
  border-right: 2px solid cadetblue;
  animation: ${spin} .6s linear infinite;
}
`

export default Spinner
