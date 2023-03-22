import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignupButton } from '../../components/signup-view/shared/signup-step-components'
import ArrowContinueIcon from '../../components/icons/arrow-continue'

export default {
  title: 'Buttons/Signup button',
  component: SignupButton,
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    centerRipple: {
      control: false
    },
    className: {
      control: {
        type: 'text'
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    disableFocusRipple: {
      control: {
        type: 'boolean'
      }
    },
    disableRipple: {
      control: {
        type: 'boolean'
      }
    },
    endIcon: {
      control: false
    },
    focusRipple: {
      control: {
        type: 'boolean'
      }
    },
    focusVisibleClassName: {
      control: {
        type: 'text'
      }
    },
    forwardedAs: {
      table: {
        disable: true
      }
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    href: {
      control: {
        type: 'text'
      }
    },
    innerRef: {
      control: false
    },
    size: {
      table: {
        disable: true
      }
    },
    startIcon: {
      control: false
    },
    tabIndex: {
      control: {
        type: 'number'
      }
    },
    theme: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof SignupButton>

const PlainTemplate: ComponentStory<typeof SignupButton> = (args) => (
  <SignupButton {...args} disableRipple type="submit">
    Button
    <ArrowContinueIcon />
  </SignupButton>
)

export const Plain = PlainTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof SignupButton> = (args) => (
  <SignupButton {...args} disableRipple type="submit" disabled>
    Button
    <ArrowContinueIcon />
  </SignupButton>
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  disabled: {
    control: false
  }
}
