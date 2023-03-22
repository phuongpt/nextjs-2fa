import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mui/material'
import { DarkButton } from '../../components/core/button/button'

export default {
  title: 'Buttons/Dark button',
  component: DarkButton,
  argTypes: {
    color: { table: { disable: true } },
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
    startIcon: {
      control: false
    },
    endIcon: {
      control: false
    },
    centerRipple: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    disableElevation: {
      control: {
        type: 'boolean'
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
    disableTouchRipple: {
      control: {
        type: 'boolean'
      }
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
    tabIndex: {
      control: {
        type: 'number'
      }
    }
  }
} as ComponentMeta<typeof Button>

const PlainTemplate: ComponentStory<typeof Button> = (args) => (
  <DarkButton {...args} />
)

export const Plain = PlainTemplate.bind({})

Plain.args = {
  children: 'button',
}

const DisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <DarkButton {...args} disabled />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.args = {
  children: 'button',
}

Disabled.argTypes = {
  disabled: {
    control: false
  }
}
