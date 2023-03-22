import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mui/material'
import { LightGreyButton } from '../../components/core/button/button'

export default {
  title: 'Buttons/Gray button',
  component: LightGreyButton,
  argTypes: {
    color: { table: { disable: true } },
    size: { table: { disable: true } },
    variant: { table: { disable: true } },
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
    centerRipple: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    disableElevation: {
      control: {
        type: 'boolean',
      },
    },
    disableFocusRipple: {
      control: {
        type: 'boolean',
      },
    },
    disableRipple: {
      control: {
        type: 'boolean',
      },
    },
    disableTouchRipple: {
      control: {
        type: 'boolean',
      },
    },
    focusRipple: {
      control: {
        type: 'boolean',
      },
    },
    focusVisibleClassName: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    tabIndex: {
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Button>

const LightTemplate: ComponentStory<typeof Button> = (args) => (
  <LightGreyButton {...args} />
)

export const Light = LightTemplate.bind({})

Light.args = {
  children: 'button',
}

const LightDisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <LightGreyButton {...args} disabled />
)

export const LightDisabled = LightDisabledTemplate.bind({})

LightDisabled.args = {
  children: 'button',
}

LightDisabled.argTypes = {
  disabled: {
    control: false,
  },
}
