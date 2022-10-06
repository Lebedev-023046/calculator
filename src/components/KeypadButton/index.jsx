import React from 'react'
import PropTypes from 'prop-types'
import { SKeypadButton } from './styled'

export function KeypadButton({ value }) {
    return (
        <SKeypadButton>{ value }</SKeypadButton>
    )
}



KeypadButton.propTypes = {
  value: PropTypes.string,
}
