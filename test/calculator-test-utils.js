import React from 'react'
import {screen, render as rtlRender} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import PropTypes from 'prop-types'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}) {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  Wrapper.propTypes = {
    children: PropTypes.node,
  }

  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render, screen}
