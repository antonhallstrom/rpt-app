import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../common/icon'

const Wrapper = styled.div`
  position: relative;
`

const StyledSelect = styled.select`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fonts.sizes.large[0]};
  width: 100%;
  border: 2px solid white;
  border-radius: 0;
  padding: ${props => props.theme.spacing[0]};
  outline: none;
  appearance: none;
  box-shadow: none;
  background-image: none;
  background-color: ${props => props.theme.colors.white};

  &:focus {
    border-color: ${props => props.theme.colors.green};
  }
`

const Arrow = styled(Icon)`
  position: absolute;
  top: 50%;
  right: ${props => props.theme.spacing[0]};
  margin-top: -0.5em;
  pointer-events: none;
`

class Select extends React.Component {
  handleChange(event) {
    this.props.onChange(event)
  }
  render() {
    if (this.props.options == null || this.props.options.length === 0) {
      return null
    }

    return (
      <Wrapper>
        <StyledSelect
          name={this.props.name}
          value={this.props.value}
          onChange={event => this.handleChange(event)}
          >
          {this.props.options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <Arrow name="caret-down"/>
      </Wrapper>
    )
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
}


export default Select
