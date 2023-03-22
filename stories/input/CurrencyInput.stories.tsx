import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CurrencyInput from '../../components/form/currency-input/currency-input'
import { Currency } from '../../api/fx/fx.schemas'

export default {
  title: 'Inputs/Currency input',
  component: CurrencyInput,
  argTypes: {
    defaultCurrency: {
      control: false,
    },
    dataCy: {
      control: {
        type: 'text',
      },
    },
    dataCySearchInput: {
      control: {
        type: 'text',
      },
    },
    dataCySearchList: {
      control: {
        type: 'text',
      },
    },
    dataCySearchListItem: {
      control: {
        type: 'text',
      },
    },
    dataCySelect: {
      control: {
        type: 'text',
      },
    },
    defaultAmount: {
      control: {
        type: 'number',
      },
    },
    disableCurrencySelector: {
      control: {
        type: 'boolean',
      },
    },
    locked: {
      control: {
        type: 'boolean',
      },
    },
    showMinAmountError: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof CurrencyInput>

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

const EmptyTemplate: ComponentStory<typeof CurrencyInput> = (args) => {
  const [defaulCurrency, setDefaultCurrency] = useState(options[0])
  return (
    <CurrencyInput
      {...args}
      currencies={args?.currencies?.length ? args?.currencies : options}
      defaultCurrency={defaulCurrency}
      onCurrencyChange={(currency) => setDefaultCurrency(currency)}
    />
  )
}

export const Empty = EmptyTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput
    {...args}
    currencies={args?.currencies?.length ? args?.currencies : options}
    defaultCurrency={options[0]}
    disableCurrencySelector
  />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  disableCurrencySelect: {
    control: false,
  },
}

const LockedTemplate: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput
    {...args}
    currencies={args?.currencies?.length ? args?.currencies : options}
    defaultCurrency={options[0]}
    locked
    disableCurrencySelector
  />
)

export const Locked = LockedTemplate.bind({})

Locked.argTypes = {
  locked: {
    control: false,
  },
  disableCurrencySelector: {
    control: false
  }
}

const ErrorTemplate: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput
    {...args}
    currencies={args?.currencies?.length ? args?.currencies : options}
    defaultCurrency={options[0]}
    defaultAmount={1}
    showMinAmountError
  />
)

export const Error = ErrorTemplate.bind({})

Error.argTypes = {
  defaultAmount: {
    control: false,
  },
  showMinAmountError: {
    control: false
  }
}

const ValueTemplate: ComponentStory<typeof CurrencyInput> = (args) => {
  const [defaulCurrency, setDefaultCurrency] = useState(options[0])
  return (
    <CurrencyInput
      {...args}
      currencies={args?.currencies?.length ? args?.currencies : options}
      defaultCurrency={defaulCurrency}
      onCurrencyChange={(currency) => setDefaultCurrency(currency)}
      defaultAmount={10000}
    />
  )
}

export const Value = ValueTemplate.bind({})
