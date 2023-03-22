import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MultiSelect from '@/components/form/select/multi-select/multi-select'

export default {
  title: 'Selects/Multiselect',
  component: MultiSelect,
  argTypes: {
    listItem: {
      control: false,
    },
  },
} as ComponentMeta<typeof MultiSelect>

const options = [
  { id: '1', name: 'Bold', dataCy: 'option' },
  { id: '2', name: 'Italic', dataCy: 'option' },
  { id: '3', name: 'Semi bold', dataCy: 'option' },
  { id: '4', name: 'Thin', dataCy: 'option' },
  { id: '5', name: 'Regular', dataCy: 'option' },
]

const DisabledTemplate: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect
    {...args}
    items={[]}
    selectedItems={[]}
    placeholder={'Select'}
    disabled
  />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  items: {
    control: false,
  },
  selectedItems: {
    control: false,
  },
  disabled: {
    control: false,
  },
}

const SelectWithValueTemplate: ComponentStory<typeof MultiSelect> = (args) => {
  const [initialSelectedValues, setInitialSelectedValues] = useState([])

  return (
    <MultiSelect
      {...args}
      items={args?.items?.length ? args?.items : options}
      onValueChange={setInitialSelectedValues}
      selectedItems={initialSelectedValues}
      placeholder={'Select'}
      renderValue={(value) => {
        const newValue = value.map((item) => item.name)
        return newValue.toString()
      }}
      renderOption={(option) => option.name}
    />
  )
}

export const WithValue = SelectWithValueTemplate.bind({})

const SelectWithValueForSignupTemplate: ComponentStory<typeof MultiSelect> = (
  args
) => {
  const [initialSelectedValues, setInitialSelectedValues] = useState([])

  return (
    <MultiSelect
      {...args}
      items={args?.items?.length ? args?.items : options}
      onValueChange={setInitialSelectedValues}
      selectedItems={initialSelectedValues}
      placeholder={'Select'}
      renderValue={(value) => {
        const newValue = value.map((item) => item.name)
        return newValue.toString()
      }}
      renderOption={(option) => option.name}
      roundedListItems={false}
    />
  )
}

export const WithValueForSignup = SelectWithValueForSignupTemplate.bind({})
