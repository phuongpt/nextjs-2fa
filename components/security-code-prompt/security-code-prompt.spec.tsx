import React from 'react'
import { render } from '@testing-library/react'

import SecurityCodePrompt from './security-code-prompt'

describe('SecurityCodePrompt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecurityCodePrompt />)
    expect(baseElement).toBeTruthy()
  })
})
