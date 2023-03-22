import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mui/material'
import { TransparentButton, TransparentButtonBigger } from '../../components/core/button/button'

export default {
  title: 'Buttons/Transparent button',
  component: TransparentButton,
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
  <TransparentButton {...args} />
)

export const Plain = PlainTemplate.bind({})

Plain.args = {
  children: 'button',
}

const PlainDisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <TransparentButton {...args} disabled />
)

export const PlainDisabled = PlainDisabledTemplate.bind({})

PlainDisabled.args = {
  children: 'button',
}

PlainDisabled.argTypes = {
  disabled: {
    control: 'false'
  }
}

const BiggerTemplate: ComponentStory<typeof Button> = (args) => (
  <TransparentButtonBigger {...args} />
)

export const Bigger = BiggerTemplate.bind({})

Bigger.args = {
  children: 'button',
}

const BiggerDisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <TransparentButtonBigger {...args} disabled />
)

export const BiggerDisabled = BiggerDisabledTemplate.bind({})

BiggerDisabled.args = {
  children: 'button',
}

BiggerDisabled.argTypes = {
  disabled: {
    control: false
  }
}
