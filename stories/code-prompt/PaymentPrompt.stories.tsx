import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TwoFactorAuthenticationComponent from '../../components/two-factor-authentication/two-factor-authentication-component'
import { AuthProcessingOverlay } from '../../components/two-factor-authentication/auth-processing-overlay'
import styled from 'styled-components'

const Overlay = styled.div`
  & .overlay {
    position: static !important;
    transform: initial !important;
  }
`

export default {
  title: 'Code prompt/Payment',
  component: TwoFactorAuthenticationComponent,
  argTypes: {
    autoRequest: {
      control: {
        type: 'boolean',
      },
    },
    customClassName: {
      control: {
        type: 'text',
      },
    },
    isUnknownError: {
      control: {
        type: 'boolean',
      },
    },
    multiStepProgressFlag: {
      control: {
        type: 'boolean',
      },
    },
    overlayTitle: {
      control: {
        type: 'text',
      },
    },
    requestOnCode: {
      control: {
        type: 'boolean',
      },
    },
    skipGetCode: {
      control: {
        type: 'boolean',
      },
    },
    waitingText: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof TwoFactorAuthenticationComponent>

const DefaultTemplate: ComponentStory<
  typeof TwoFactorAuthenticationComponent
> = (args) => {
  const [finished, setFinished] = useState(false)
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {!finished ? (
        <TwoFactorAuthenticationComponent
          {...args}
          requestOnCode={false}
          onCode={async (code: string, retry: Function) => {
            setFinished(true)
          }}
          overlayTitle={'Payment.ConfirmationTimeOut'}
        />
      ) : (
        <Overlay>
          <AuthProcessingOverlay title="Transaction confirmed!" isCompleted />
        </Overlay>
      )}
    </div>
  )
}

export const Successful = DefaultTemplate.bind({})

const ErrorTemplate: ComponentStory<typeof TwoFactorAuthenticationComponent> = (
  args
) => {
  const [unknownError, setUnknownError] = useState(false)
  const handleVerifyCode = async (code: string, retry: Function) => {
    try {
      throw new Error({ message: 'message 2FA token expired or invalid' })
    } catch (e) {
      retry()
      setUnknownError(true)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TwoFactorAuthenticationComponent
        {...args}
        requestOnCode={false}
        onCode={handleVerifyCode}
        overlayTitle={'Payment.ConfirmationTimeOut'}
        isUnknownError={unknownError}
      />
    </div>
  )
}

export const Failed = ErrorTemplate.bind({})
