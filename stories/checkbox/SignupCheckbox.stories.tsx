import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SignupCheckbox from './SignupCheckbox'

export default {
  title: 'Checkboxes/Signup checkbox',
  component: SignupCheckbox,
  argTypes: {
    autoFocus: {
      control: {
        type: 'boolean'
      }
    },
    centerRipple: {
      control: {
        type: 'boolean'
      }
    },
    checked: {
      control: {
        type: 'boolean'
      }
    },
    checkedIcon: {
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
    defaultChecked: {
      control: {
        type: 'boolean'
      }
    },
    disabled: {
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
    icon: {
      control: false
    },
    id: {
      control: {
        type: 'text'
      }
    },
    indeterminate: {
      control: {
        type: 'boolean'
      }
    },
    indeterminateIcon: {
      control: false
    },
    name: {
      control: {
        type: 'text'
      }
    },
    readOnly: {
      control: {
        type: 'boolean'
      }
    },
    required: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    tabIndex: {
      control: {
        type: 'number'
      }
    },
    value: {
      control: false
    }
  }
} as ComponentMeta<typeof SignupCheckbox>

const DefaultTemplate: ComponentStory<typeof SignupCheckbox> = (args) => {
  return (
    <SignupCheckbox {...args} />
  )
}

export const Default = DefaultTemplate.bind({})

const CheckedTemplate: ComponentStory<typeof SignupCheckbox> = (args) => {
  return (
    <SignupCheckbox {...args} checked />
  )
}

export const Checked = CheckedTemplate.bind({})
