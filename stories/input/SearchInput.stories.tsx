import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchInput } from '../../components/banking-view/shared/search-input/search-input'

export default {
  title: 'Inputs/Search input',
  component: SearchInput,
  argTypes: {
    'aria-describedby': {
      control: {
        type: 'string'
      }
    },
    as: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    },
    autoComplete: {
      control: {
        type: 'string'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    autoFocus: {
      control: {
        type: 'boolean'
      }
    },
    maxRows: {
      table: {
        disable: true
      }
    },
    minRows: {
      table: {
        disable: true
      }
    },
    rows: {
      table: {
        disable: true
      }
    },
    required: {
      table: {
        disable: true
      }
    },
    multiline: {
      table: {
        disable: true
      }
    },
    readOnly: {
      control: {
        type: 'boolean'
      }
    },
    color: {
      table: {
        disable: true
      }
    },
    error: {
      control: {
        type: 'boolean'
      }
    },
    endAdornment: {
      control: false
    },
    fullWidth: {
      control: {
        type: 'boolean'
      }
    },
    id: {
      control: {
        type: 'text'
      }
    },
    inputComponent: {
      control: false
    },
    margin: {
      table: {
        disable: true
      }
    },
    rowsMax: {
      table: {
        disable: true
      }
    },
    rowsMin: {
      table: {
        disable: true
      }
    },
    name: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    value: {
      control: {
        type: 'text'
      }
    },
    type: {
      control: {
        type: 'text'
      }
    },
    startAdornment: {
      control: false
    }
  }
} as ComponentMeta<typeof SearchInput>

const EmptyTemplate: ComponentStory<typeof SearchInput> = (
  args
) => (
  <SearchInput
    {...args}
  />
)

export const Empty = EmptyTemplate.bind({})

const ValueTemplate: ComponentStory<typeof SearchInput> = (
  args
) => (
  <SearchInput
    {...args}
    value="value"
  />
)

export const WithValue = ValueTemplate.bind({})

WithValue.argTypes = {
  value: {
    control: false,
  },
}
