import React from 'react'
import { render } from '@testing-library/react'

import ProSettleTooltip from './tooltip'

describe('ProSettleTooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ProSettleTooltip title="Jest">Jest</ProSettleTooltip>
    )
    expect(baseElement).toBeTruthy()
  })
})
