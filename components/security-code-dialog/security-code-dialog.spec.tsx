import React from 'react'
import { render } from '@testing-library/react'

import SecurityCodeDialog from './security-code-dialog'

describe('SecurityCodeDialog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecurityCodeDialog />)
    expect(baseElement).toBeTruthy()
  })
})
