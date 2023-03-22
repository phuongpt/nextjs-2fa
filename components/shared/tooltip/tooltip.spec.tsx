import React from 'react'
import { render } from '@testing-library/react'

import Tooltip from './tooltip'

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tooltip title="Jest">Jest</Tooltip>
    )
    expect(baseElement).toBeTruthy()
  })
})
