import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RadioButtons from '../../components/core/radio-buttons/radio-buttons'

export default {
  title: 'Radio/Radio buttons group',
  component: RadioButtons,
  argTypes: {
    value: {
      control: false,
    },
    classNameRadio: {
      control: {
        type: 'text',
      },
    },
    classNameRadioLabel: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof RadioButtons>

const DefaultTemplate: ComponentStory<typeof RadioButtons> = (args) => {
  const [value, setValue] = useState('yes')
  return (
    <RadioButtons
      {...args}
      buttons={[
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ]}
      name="details-type"
      onChange={(value) => {
        setValue(value)
      }}
      classNameRadio="details-type-radio-group"
      value={value}
    />
  )
}

export const Default = DefaultTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof RadioButtons> = (args) => {
  const [value, setValue] = useState('yes')
  return (
    <RadioButtons
      {...args}
      buttons={[
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
          disabled: true,
        },
      ]}
      name="details-type"
      onChange={(value) => {
        setValue(value)
      }}
      classNameRadio="details-type-radio-group"
      value={value}
    />
  )
}

export const Disabled = DisabledTemplate.bind({})

Default.argTypes = {
  default: {
    control: false,
  },
}
