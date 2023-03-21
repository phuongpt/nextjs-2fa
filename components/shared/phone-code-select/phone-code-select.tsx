import React, { useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter'
import { CountryInfo } from '../../../api/data/country-info'
import Spacer from '../spacer/spacer'
import SearchIcon from '../icons/search'
import ChevronDownIcon from '../icons/chevron-down'

import {
  Flag,
  PhoneCode,
  CountryName,
  StyledPaper,
  ChevronIcon,
  CustomPopper,
  PhoneCodeItem,
  StyledInputBase,
  PhoneCodeMenuItem,
  StyledAutocomplete,
  SelectPhoneCodeButton,
  StyledPhoneCodeSelect,
} from './phone-code-select.styles'

export interface PhoneCodeSelectProps {
  phoneCodes: CountryInfo[]
  defaultPhoneCode: string
  disabled?: boolean
  onPhoneCodeSelected: (selectedPhoneCode: string) => void
}

export const PhoneCodeSelect = ({
  phoneCodes,
  defaultPhoneCode,
  disabled,
  onPhoneCodeSelected,
}: PhoneCodeSelectProps) => {
  const [open, setOpen] = useState(false)
  const [, setTemporaryPhoneCode] = useState<unknown>()
  const [, setSelectedPhoneCode] = useState(defaultPhoneCode)
  const [selectedCountry, setSelectedCountry] = useState<
    CountryInfo | undefined
  >(countryByPhoneCode(defaultPhoneCode, phoneCodes))

  useEffect(() => {
    setSelectedPhoneCode(defaultPhoneCode)
  }, [defaultPhoneCode])

  // callbacks
  const handleClickListItem = () => {
    setTemporaryPhoneCode('')
    setOpen(true)
  }

  const onChange = (e, value) => {
    setSelectedCountry(value)
    setSelectedPhoneCode(value.countryCallingCode)
    onPhoneCodeSelected(value.countryCallingCode)
  }

  // render
  return (
    <>
      <StyledPhoneCodeSelect>
        <SelectPhoneCodeButton
          onClick={handleClickListItem}
          disabled={disabled}
          type="button"
          data-cy="phone-code-btn"
        >
          <PhoneCodeItem>
            <Flag
              className={`round-flag-icon round-flag-${selectedCountry?.countryCode?.toLowerCase() === 'eu'
                  ? 'european_union'
                  : selectedCountry?.countryCode?.toLowerCase()
                }`}
            />
            <Spacer axis="x" size={10} style={{ display: 'inline-block' }} />
            <PhoneCode>{`+${selectedCountry?.countryCallingCode}`}</PhoneCode>
            <Spacer axis="x" size={10} style={{ display: 'inline-block' }} />
            {!disabled && (
              <ChevronIcon>
                <ChevronDownIcon />
              </ChevronIcon>
            )}
          </PhoneCodeItem>
        </SelectPhoneCodeButton>
      </StyledPhoneCodeSelect>
      {open && (
        <StyledAutocomplete
          open
          disableClearable
          value={selectedCountry}
          options={phoneCodes}
          onClose={() => setOpen(false)}
          onChange={onChange}
          renderInput={renderInput}
          renderOption={renderOption}
          filterOptions={filterOptions}
          getOptionLabel={(item) => (item as CountryInfo).countryNameEn}
          PaperComponent={StyledPaper}
          PopperComponent={CustomPopper}
        />
      )}
    </>
  )
}

export default PhoneCodeSelect

const filterOptions = (options, { inputValue }) => {
  return matchSorter(options, inputValue, {
    keys: ['countryNameEn', 'countryNameLocal', 'countryCallingCode'],
  })
}

const renderOption = (props, country) => {
  return (
    <PhoneCodeMenuItem
      className="list-item"
      key={country.countryCode}
      {...props}
    >
      <Flag
        className={`round-flag-icon round-flag-${country.countryCode?.toLowerCase() === 'eu'
            ? 'european_union'
            : country.countryCode?.toLowerCase()
          }`}
      />
      <Spacer axis="x" size={10} style={{ display: 'inline-block' }} />
      <PhoneCode data-cy="phone-calling-code">{`+${country.countryCallingCode}`}</PhoneCode>
      <Spacer axis="x" size={10} style={{ display: 'inline-block' }} />
      <CountryName>{country.countryNameEn}</CountryName>
    </PhoneCodeMenuItem>
  )
}

const renderInput = (params) => (
  <div
    ref={params.InputProps.ref}
    style={{
      display: 'flex',
      width: '100%',
      backgroundColor: 'white',
      zIndex: 1,
    }}
  >
    <StyledInputBase
      {...params.inputProps}
      type="text"
      autoFocus
      startAdornment={<SearchIcon />}
      placeholder={'Search for a phone code / country'}
    />
  </div>
)

const countryByPhoneCode = (phoneCode, countries: CountryInfo[]) => {
  return countries.find(
    (country) =>
      parseInt(country.countryCallingCode, 10) === parseInt(phoneCode, 10)
  )
}
