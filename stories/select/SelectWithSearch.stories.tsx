import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ListItemWithFlag from '@/components/form/select/multi-select-with-search-tags/list-item-with-flag/list-item-with-flag'
import { Country } from '../../api/organization/organization.schemas'
import SelectWithSearch from '../../components/form/select/select-with-search/select-with-search'

export default {
  title: 'Selects/Select with search',
  component: SelectWithSearch,
  argTypes: {
    selectedItem: {
      control: false,
    },
    listItem: {
      control: false,
    },
  },
} as ComponentMeta<typeof SelectWithSearch>

interface OptionType {
  name: string
  id: string
  code?: string
  dataCy?: string
}

const countries = [
  { id: 14, code: 'DK', name: 'Denmark', currencyCode: 'DKK' },
  { id: 3, code: 'ES', name: 'Spain', currencyCode: 'EUR' },
  { id: 1, code: 'NO', name: 'Norway', currencyCode: 'NOK' },
  { id: 6, code: 'SE', name: 'Sweden', currencyCode: 'SEK' },
  { id: 13, code: 'CZ', name: 'Czech Republic', currencyCode: 'CZK' },
  { id: 20, code: 'HU', name: 'Hungary', currencyCode: 'HUF' },
  { id: 56, code: 'JP', name: 'Japan', currencyCode: 'JPY' },
] as Country[]

const EmptyTemplate: ComponentStory<typeof SelectWithSearch> = (args) => (
  <SelectWithSearch {...args} items={[] as OptionType[]} />
)

export const Empty = EmptyTemplate.bind({})

Empty.argTypes = {
  items: {
    control: false,
  },
}

export const Disabled: ComponentStory<typeof SelectWithSearch> = (args) => {
  return <SelectWithSearch {...args} items={[]} disabled />
}

Disabled.argTypes = {
  items: {
    control: false,
  },
  disabled: {
    control: false,
  },
}

const SelectWithValueTemplate: ComponentStory<typeof SelectWithSearch> = (
  args
) => {
  const [initialSelectedValue, setInitialSelectedValue] = useState(
    countries[0]?.code
  )

  return (
    <SelectWithSearch
      {...args}
      items={args?.items?.length ? args?.items : countries}
      listItem={ListItemWithFlag}
      onItemSelected={(item) => setInitialSelectedValue(item?.code)}
      valueControlled={
        initialSelectedValue
          ? countries.find((country) => country?.code === initialSelectedValue)
          : null
      }
      placeholder="Select"
      isOptionEqualToValue={(option, value) => option.id === value.id}
      roundedListItems
    />
  )
}

export const WithValue = SelectWithValueTemplate.bind({})

const SelectWithValueForSignupTemplate: ComponentStory<
  typeof SelectWithSearch
> = (args) => {
  const [initialSelectedValue, setInitialSelectedValue] = useState(
    countries[0]?.code
  )

  return (
    <SelectWithSearch
      {...args}
      items={args?.items?.length ? args?.items : countries}
      listItem={ListItemWithFlag}
      onItemSelected={(item) => setInitialSelectedValue(item?.code)}
      valueControlled={
        initialSelectedValue
          ? countries.find((country) => country?.code === initialSelectedValue)
          : null
      }
      placeholder="Select"
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  )
}

export const WithValueForSignup = SelectWithValueForSignupTemplate.bind({})
