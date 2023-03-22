import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ListItemWithFlag from '@/components/form/select/multi-select-with-search-tags/list-item-with-flag/list-item-with-flag'
import TagWithFlag from '@/components/form/select/multi-select-with-search-tags/tag-with-flag/tag-with-flag'
import { Country } from '../../api/organization/organization.schemas'
import MultiSelectWithSearchTags from '../../components/form/select/multi-select-with-search-tags/multi-select-with-search-tags'

export default {
  title: 'Selects/Multiselect with search with tags',
  component: MultiSelectWithSearchTags,
  argTypes: {
    listItem: {
      control: false,
    },
    initialValue: {
      control: false,
    },
  },
} as ComponentMeta<typeof MultiSelectWithSearchTags>

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

const EmptyTemplate: ComponentStory<typeof MultiSelectWithSearchTags> = (
  args
) => (
  <MultiSelectWithSearchTags
    {...args}
    items={[] as OptionType[]}
    selectedItems={[]}
  />
)

export const Empty = EmptyTemplate.bind({})

Empty.argTypes = {
  items: {
    control: false,
  },
  selectedItems: {
    control: false,
  },
  initialValue: {
    control: false,
  },
}

export const Disabled: ComponentStory<typeof MultiSelectWithSearchTags> = (
  args
) => {
  return (
    <MultiSelectWithSearchTags
      {...args}
      items={[]}
      selectedItems={[]}
      disabled
    />
  )
}

Disabled.argTypes = {
  items: {
    control: false,
  },
  selectedItems: {
    control: false,
  },
  initialValue: {
    control: false,
  },
  disabled: {
    control: false,
  },
}

const HasErrorTemplate: ComponentStory<typeof MultiSelectWithSearchTags> = (
  args
) => (
  <MultiSelectWithSearchTags
    {...args}
    items={[] as OptionType[]}
    selectedItems={[]}
    hasError
  />
)

export const HasError = HasErrorTemplate.bind({})

HasError.argTypes = {
  items: {
    control: false,
  },
  selectedItems: {
    control: false,
  },
  initialValue: {
    control: false,
  },
  hasError: {
    control: false,
  },
}

const SelectWithValueTemplate: ComponentStory<
  typeof MultiSelectWithSearchTags
> = (args) => {
  const [initialSelectedValues, setInitialSelectedValues] = useState([
    countries[0],
  ])

  return (
    <MultiSelectWithSearchTags
      {...args}
      items={args?.items?.length ? args?.items : countries}
      renderListItem={ListItemWithFlag}
      selectedItems={initialSelectedValues}
      onItemSelected={setInitialSelectedValues}
      getOptionLabel={(option) => option?.['name']}
      placeholder="Select"
      renderValueItem={(option, getTagProps, index) => {
        return (
          <TagWithFlag
            label={option.name}
            code={option.code}
            shortName={option.shortName}
            {...getTagProps({ index })}
          />
        )
      }}
    />
  )
}

export const WithValue = SelectWithValueTemplate.bind({})

const SelectWithValueTemplateForBanking: ComponentStory<
  typeof MultiSelectWithSearchTags
> = (args) => {
  const [initialSelectedValues, setInitialSelectedValues] = useState([
    countries[0],
  ])

  return (
    <MultiSelectWithSearchTags
      {...args}
      items={args?.items?.length ? args?.items : countries}
      renderListItem={ListItemWithFlag}
      selectedItems={initialSelectedValues}
      onItemSelected={setInitialSelectedValues}
      getOptionLabel={(option) => option?.['name']}
      placeholder="Select"
      renderValueItem={(option, getTagProps, index) => {
        return (
          <TagWithFlag
            label={option.name}
            code={option.code}
            shortName={option.shortName}
            {...getTagProps({ index })}
          />
        )
      }}
      roundedListItems
    />
  )
}

export const WithValueForBanking = SelectWithValueTemplateForBanking.bind({})
