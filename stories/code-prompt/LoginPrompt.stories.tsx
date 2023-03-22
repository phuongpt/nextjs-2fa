import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TwoFactorAuthenticationComponent from '../../components/two-factor-authentication/two-factor-authentication-component'

export default {
  title: 'Code prompt/Auth',
  component: TwoFactorAuthenticationComponent,
  argTypes: {
    autoRequest: {
      control: {
        type: 'boolean'
      },
    },
    customClassName: {
      control: {
        type: 'text'
      }
    },
    isUnknownError: {
      control: {
        type: 'boolean'
      }
    },
    multiStepProgressFlag: {
      control: {
        type: 'boolean'
      }
    },
    overlayTitle: {
      control: {
        type: 'text'
      }
    },
    requestOnCode: {
      control: {
        type: 'boolean'
      }
    },
    skipGetCode: {
      control: {
        type: 'boolean'
      }
    },
    waitingText: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof TwoFactorAuthenticationComponent>

const DefaultTemplate: ComponentStory<
  typeof TwoFactorAuthenticationComponent
> = (args) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TwoFactorAuthenticationComponent
        {...args}
        onCode={() => {}}
        requestOnCode={false}
        waitingText={
          'You have successfully logged in. Redirecting to the homepage...'
        }
      />
    </div>
  )
}

export const Successful = DefaultTemplate.bind({})

const ErrorTemplate: ComponentStory<typeof TwoFactorAuthenticationComponent> = (
  args
) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const handleVerifyCode = async (code: string, retry: Function) => {
    try {
      throw new Error({ message: 'message 2FA token expired or invalid' })
    } catch (e) {
      retry()
      setErrorMessage(e.message)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TwoFactorAuthenticationComponent
        {...args}
        onCode={handleVerifyCode}
        requestOnCode={false}
        waitingText={
          'You have successfully logged in. Redirecting to the homepage...'
        }
        overlayTitle={errorMessage ? 'Payment.ConfirmationTimeOut' : undefined}
      />
    </div>
  )
}

export const Failed = ErrorTemplate.bind({})
