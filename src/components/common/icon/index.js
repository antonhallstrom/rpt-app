import './assets/rpt-logo.icon.svg'
import './assets/add-circle-outline.icon.svg'
import './assets/caret-down.icon.svg'
import './assets/account-circle.icon.svg'
import './assets/arrow-back.icon.svg'
import './assets/check.icon.svg'
import './assets/add.icon.svg'

import PropTypes from 'prop-types'
import * as R from 'ramda'
import React from 'react'
import styled from 'styled-components'

function size(props) {
  if (!props.size) {
    return ''
  }

  return `font-size: ${props.size === 'big' ? '24px' : '16px'};`
}

const DefaultIcon = styled.span`
  ${size};
`

const SvgIconWrapper = styled(DefaultIcon)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
`

const SvgIcon = styled.svg`
  width: 1em;
  height: 1em;
`

const PngIcon = styled(DefaultIcon)`
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: bottom;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${props => props.backgroundImage}');
`

const SVG_ICONS = [
  'rpt-logo',
  'add-circle-outline',
  'caret-down',
  'account-circle',
  'arrow-back',
  'check',
  'add',
]

const PNG_ICONS = []

function Icon(props) {
  const iconName = props.name.toLowerCase()

  if (R.contains(iconName, SVG_ICONS)) {
    return (
      <SvgIconWrapper
        className={props.className}
        size={props.size}
        onClick={props.onClick}
      >
        <SvgIcon>
          <use xlinkHref={`#${iconName}.icon`} />
        </SvgIcon>
      </SvgIconWrapper>
    )
  } else if (R.contains(iconName, PNG_ICONS)) {
    const icon = require(`./assets/${iconName}.icon.png`)

    return (
      <PngIcon
        backgroundImage={icon}
        className={props.className}
        size={props.size}
        onClick={props.onClick}
      />
    )
  }

  return (
    <DefaultIcon
      className={props.className}
      size={props.size}
      onClick={props.onClick}
    />
  )
}

export default Icon

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'big']),
  onClick: PropTypes.func,
}
