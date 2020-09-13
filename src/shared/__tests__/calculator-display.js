import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import PropTypes from 'prop-types'
import CalculatorDisplay from '../calculator-display'
import { dark } from '../../themes'

function Wrapper({ children }) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}

Wrapper.propTypes = {
  children: PropTypes.node
}

test('renders', () => {
  const { container, rerender } = render(<CalculatorDisplay value="0" />, {
    wrapper: Wrapper
  })
  rerender(<CalculatorDisplay value='0' />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: white;
      background: #1c191c;
    }

    <div>
      <div
        class="emotion-0 emotion-1"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
