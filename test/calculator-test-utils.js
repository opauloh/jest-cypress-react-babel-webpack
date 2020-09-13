import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import { dark } from '../src/themes'

function Wrapper({ children }) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

function render(ui, options) {
  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export * from '@testing-library/react'
export { render }