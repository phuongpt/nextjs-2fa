import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextField } from '../../components/core/input/text-field/text-field'

export default {
  title: 'Inputs/TextField input',
  component: TextField,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof TextField>

const EmptyTemplate: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Empty = EmptyTemplate.bind({})

const LabelAndErrorTemplate: ComponentStory<typeof TextField> = (args) => (
  <TextField
    {...args}
    label="This is label"
    errorMessage="This is error message"
  />
)

export const LabelAndError = LabelAndErrorTemplate.bind({})

LabelAndError.argTypes = {
  label: {
    control: false,
  },
  errorMessage: {
    control: false,
  },
}

const DisabledTemplate: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} disabled />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  disabled: {
    control: false,
  },
}
