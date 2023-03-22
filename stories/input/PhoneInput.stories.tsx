import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TelephoneInput from '../../components/core/input/telephone-input/telephone-input'

export default {
  title: 'Inputs/Phone input',
  component: TelephoneInput,
} as ComponentMeta<typeof TelephoneInput>

const options = [
  {
    countryNameEn: 'Denmark',
    countryNameLocal: 'Danmark',
    countryCode: 'DK',
    currencyCode: 'DKK',
    currencyNameEn: 'Danish krone',
    tinType: 'CVR',
    tinName: 'Momsregistreringsnummer',
    officialLanguageCode: 'da',
    officialLanguageNameEn: 'Danish',
    officialLanguageNameLocal: 'dansk',
    countryCallingCode: '45',
    region: 'Europe',
    flag: '🇩🇰',
  },
  {
    countryNameEn: 'Spain',
    countryNameLocal: 'España',
    countryCode: 'ES',
    currencyCode: 'EUR',
    currencyNameEn: 'Euro',
    tinType: 'NIF (CIF)',
    tinName:
      'Número de Identificación Fiscal (formerly named Código de Identificación Fiscal)',
    officialLanguageCode: 'ast',
    officialLanguageNameEn: '',
    officialLanguageNameLocal: '',
    countryCallingCode: '34',
    region: 'Europe',
    flag: '🇪🇸',
  },
  {
    countryNameEn: 'Norway',
    countryNameLocal: 'Norge, Noreg',
    countryCode: 'NO',
    currencyCode: 'NOK',
    currencyNameEn: 'Norwegian krone',
    tinType: 'Orgnr',
    tinName: 'Organisasjonsnummer',
    officialLanguageCode: 'nb',
    officialLanguageNameEn: 'Norwegian Bokmål',
    officialLanguageNameLocal: 'Norsk Bokmål',
    countryCallingCode: '47',
    region: 'Europe',
    flag: '🇳🇴',
  },
  {
    countryNameEn: 'Sweden',
    countryNameLocal: 'Sverige',
    countryCode: 'SE',
    currencyCode: 'SEK',
    currencyNameEn: 'Swedish krona/kronor',
    tinType: 'Momsnr.',
    tinName: 'VAT-nummer',
    officialLanguageCode: 'sv',
    officialLanguageNameEn: 'Swedish',
    officialLanguageNameLocal: 'Svenska',
    countryCallingCode: '46',
    region: 'Europe',
    flag: '🇸🇪',
  },
]

const EmptyTemplate: ComponentStory<typeof TelephoneInput> = (args) => (
  <TelephoneInput
    {...args}
    phoneCodes={options}
    validPhoneNumberFormat
  />
)

export const Empty = EmptyTemplate.bind({})

Empty.argTypes = {
  phoneCodes: {
    control: false,
  },
  validPhoneNumberFormat: {
    control: false
  },
  defaultPhoneNumber: {
    control: false
  },
  defaultPhoneCode: {
    control: false
  }
}

const DisabledTemplate: ComponentStory<typeof TelephoneInput> = (args) => (
  <TelephoneInput
    {...args}
    phoneCodes={options}
    validPhoneNumberFormat
    disabled
  />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  phoneCodes: {
    control: false,
  },
  validPhoneNumberFormat: {
    control: false
  },
  defaultPhoneNumber: {
    control: false
  },
  defaultPhoneCode: {
    control: false
  },
  disabled: {
    control: false
  }
}

const HasErrorTemplate: ComponentStory<typeof TelephoneInput> = (args) => (
  <TelephoneInput
    {...args}
    phoneCodes={options}
    validPhoneNumberFormat={false}
  />
)

export const HasError = HasErrorTemplate.bind({})

HasError.argTypes = {
  phoneCodes: {
    control: false,
  },
  validPhoneNumberFormat: {
    control: false
  },
  defaultPhoneNumber: {
    control: false
  },
  defaultPhoneCode: {
    control: false
  }
}

const WithValueTemplate: ComponentStory<
  typeof TelephoneInput
> = (args) => {
  const [mobile, setMobile] = useState<number | null>(null)

  return (
    <TelephoneInput
      {...args}
      phoneCodes={args?.phoneCodes?.length ? args?.phoneCodes : options}
      defaultPhoneNumber={args?.defaultPhoneNumber ? args?.defaultPhoneNumber : mobile}
      onChange={(dialCode, phoneNumber) => {
        setMobile(phoneNumber)
      }}
      validPhoneNumberFormat
    />
  )
}

export const WithValue = WithValueTemplate.bind({})

WithValue.argTypes = {
  defaultPhoneCode: {
    control: false
  }
}
