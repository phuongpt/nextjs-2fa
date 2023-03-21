import React, { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { PhoneCodeSelect } from '../../phone-code-select/phone-code-select'
import { CountryInfo } from '../../../../api/data/country-info'

import {
  InputAndErrorContainer,
  InputWrapper,
  StyledTelephoneInput,
} from './telephone-input.styles'
import { TextField } from '../../input/text-field/text-field'

export interface TelephoneInputProps {
  onChange: (phoneCode: string, phoneNumber: number) => void
  disabled?: boolean
  phoneCodes: Array<CountryInfo>
  defaultPhoneCode: string
  defaultPhoneNumber: number
  dataCy?: string
  validPhoneNumberFormat: boolean
}

export const TelephoneInput = ({
  onChange,
  disabled,
  phoneCodes,
  defaultPhoneCode,
  defaultPhoneNumber,
  dataCy,
  validPhoneNumberFormat,
}: TelephoneInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dialCode, setDialCode] = useState(
    defaultPhoneCode || phoneCodes[0].countryCallingCode
  )
  const [phoneNumber, setPhoneNumber] = useState(defaultPhoneNumber)
  const { t } = useTranslation(['common'])

  useEffect(() => {
    setPhoneNumber(defaultPhoneNumber)
  }, [defaultPhoneNumber])

  useEffect(() => {
    if (!defaultPhoneCode) {
      return
    }
    onChange(defaultPhoneCode, defaultPhoneNumber)
  }, [defaultPhoneCode])

  // Execute callback when state changes and is valid
  useEffect(() => {
    onChange(dialCode, phoneNumber)
  }, [dialCode, phoneNumber])

  // render
  return (
    <StyledTelephoneInput className="telephone-input-wrapper">
      <InputWrapper onClick={() => inputRef?.current?.focus()}>
        <PhoneCodeSelect
          phoneCodes={phoneCodes}
          defaultPhoneCode={dialCode}
          onPhoneCodeSelected={setDialCode}
          disabled={disabled}
        />
        <InputAndErrorContainer>
          <TextField
            required
            autoFocus
            disabled={disabled}
            inputProps={{
              type: 'text',
              inputMode: 'tel',
              autoComplete: 'off',
              'data-cy': dataCy,
            }}
            inputRef={inputRef}
            placeholder={t('TelephoneInput.Placeholder')}
            value={phoneNumber || ''}
            onChange={(e) => setPhoneNumber(parseInt(e.target.value, 10))}
            errorMessage={!validPhoneNumberFormat && t('TelephoneInput.Error')}
          />
        </InputAndErrorContainer>
      </InputWrapper>
    </StyledTelephoneInput>
  )
}

TelephoneInput.displayName = 'TelephoneInput'

export default TelephoneInput
