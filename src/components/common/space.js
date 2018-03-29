import PropTypes from 'prop-types'
import * as R from 'ramda'
import styled from 'styled-components'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

export function spacing(...propNames) {
  return props =>
    R.reduceWhile(
      R.isNil,
      (_, propName) => props.theme.spacing[props[propName]],
      null,
      propNames
    ) || 0
}

const Space = styled.div`
  /* stylelint-disable */
  padding-top: ${spacing('top', 'y', 'all')};
  padding-bottom: ${spacing('bottom', 'y', 'all')};
  padding-right: ${spacing('right', 'x', 'all')};
  padding-left: ${spacing('left', 'x', 'all')};
`

Space.propTypes = {
  all: numberOrString,
  bottom: numberOrString,
  left: numberOrString,
  right: numberOrString,
  top: numberOrString,
  x: numberOrString,
  y: numberOrString,
}

export default Space
