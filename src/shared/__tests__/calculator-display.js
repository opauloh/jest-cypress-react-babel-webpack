import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value={'10'} />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="emotion-0"
        id="calculator-display"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          10
        </div>
      </div>
    </div>
  `)
})