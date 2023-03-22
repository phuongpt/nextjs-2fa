import React, { useMemo, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SimpleSelect from '../../components/form/select/simple-select/simple-select'
import 'flag-icons/css/flag-icons.css'
import 'round-flag-icons/css/round-flag-icons.css'
import { Country } from '../../api/organization/organization.schemas'
import { Currency } from '../../api/fx/fx.schemas'

export default {
  title: 'Selects/Simple select',
  component: SimpleSelect,
  argTypes: {
    defaultSelected: {
      control: false,
    },
  },
} as ComponentMeta<typeof SimpleSelect>

const options = [
  {
    id: 51,
    code: 'AUD',
    name: 'Australian dollar',
    symbol: 'A$',
    countryCode: 'AU',
    minAmount: 3.0,
  },
  {
    id: 43,
    code: 'GBP',
    name: 'British pound',
    symbol: '£',
    countryCode: 'GB',
    minAmount: 1.0,
  },
  {
    id: 46,
    code: 'CAD',
    name: 'Canadian dollar',
    symbol: 'C$',
    countryCode: 'CA',
    minAmount: 3.0,
  },
  {
    id: 54,
    code: 'CZK',
    name: 'Czech koruna',
    symbol: 'Kč',
    countryCode: 'CZ',
    minAmount: 35.0,
  },
  {
    id: 45,
    code: 'DKK',
    name: 'Danish krone',
    symbol: 'Kr.',
    countryCode: 'DK',
    minAmount: 10.0,
  },
  {
    id: 1,
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    countryCode: 'EU',
    minAmount: 2.0,
  },
  {
    id: 49,
    code: 'HKD',
    name: 'Hong Kong dollar',
    symbol: 'HK$.',
    countryCode: 'HK',
    minAmount: 15.0,
  },
  {
    id: 52,
    code: 'HUF',
    name: 'Hungarian forint',
    symbol: 'Ft',
    countryCode: 'HU',
    minAmount: 1000.0,
  },
  {
    id: 60,
    code: 'JPY',
    name: 'Japanese yen',
    symbol: '¥',
    countryCode: 'JP',
    minAmount: 200.0,
  },
  {
    id: 68,
    code: 'NZD',
    name: 'New Zealand dollar',
    symbol: 'NZ$',
    countryCode: 'NZ',
    minAmount: 3.0,
  },
  {
    id: 42,
    code: 'NOK',
    name: 'Norwegian krone',
    symbol: 'kr',
    countryCode: 'NO',
    minAmount: 15.0,
  },
  {
    id: 44,
    code: 'PLN',
    name: 'Polish zloty',
    symbol: 'zł',
    countryCode: 'PL',
    minAmount: 10.0,
  },
  {
    id: 66,
    code: 'RON',
    name: 'Romanian leu',
    symbol: 'lei',
    countryCode: 'RO',
    minAmount: 10.0,
  },
  {
    id: 64,
    code: 'SGD',
    name: 'Singapore dollar',
    symbol: 'S$',
    countryCode: 'SG',
    minAmount: 3.0,
  },
  {
    id: 47,
    code: 'SEK',
    name: 'Swedish krona',
    symbol: 'kr',
    countryCode: 'SE',
    minAmount: 20.0,
  },
  {
    id: 48,
    code: 'CHF',
    name: 'Swiss franc',
    symbol: 'Fr.',
    countryCode: 'CH',
    minAmount: 2.0,
  },
  {
    id: 62,
    code: 'TRY',
    name: 'Turkish lira',
    symbol: '₺',
    countryCode: 'TR',
    minAmount: 50.0,
  },
  {
    id: 2,
    code: 'USD',
    name: 'US dollar',
    symbol: '$',
    countryCode: 'US',
    minAmount: 2.0,
  },
] as Currency[]

const EmptyTemplate: ComponentStory<typeof SimpleSelect> = (args) => (
  <SimpleSelect {...args} items={[]} />
)

export const Empty = EmptyTemplate.bind({})

Empty.argTypes = {
  currencies: {
    control: false,
  },
}

const DisabledTemplate: ComponentStory<typeof SimpleSelect> = (args) => (
  <SimpleSelect {...args} items={[]} disabled />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  currencies: {
    control: false,
  },
  disabled: {
    control: false,
  },
}

const SelectWithValueTemplate: ComponentStory<typeof SimpleSelect> = (args) => {
  const [initialSelectedValue, setInitialSelectedValue] = useState<string>(
    options[0].code
  )

  const selectedItem = useMemo(() => {
    if (!initialSelectedValue) return {} as Currency

    const res = options.find((item) => item.code === initialSelectedValue)
    return !res ? {} : res
  }, [initialSelectedValue, options])

  return (
    <SimpleSelect
      {...args}
      items={args?.items?.length ? args?.items : options}
      defaultSelected={selectedItem as Country}
      onChange={({ code }) => setInitialSelectedValue(code)}
    />
  )
}

export const WithValue = SelectWithValueTemplate.bind({})

const SelectWithValueForSignupTemplate: ComponentStory<typeof SimpleSelect> = (
  args
) => {
  const [initialSelectedValue, setInitialSelectedValue] = useState<string>(
    options[0].code
  )

  const selectedItem = useMemo(() => {
    if (!initialSelectedValue) return {} as Currency

    const res = options.find((item) => item.code === initialSelectedValue)
    return !res ? {} : res
  }, [initialSelectedValue, options])

  return (
    <SimpleSelect
      {...args}
      items={args?.items?.length ? args?.items : options}
      defaultSelected={selectedItem as Country}
      onChange={({ code }) => setInitialSelectedValue(code)}
      roundedListItems={false}
    />
  )
}

export const WithValueForSignup = SelectWithValueForSignupTemplate.bind({})
