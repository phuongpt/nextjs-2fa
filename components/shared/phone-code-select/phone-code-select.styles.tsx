import React from 'react'
import styled from 'styled-components'
import { InputBase, Paper, Popper, Autocomplete, MenuItem } from '@mui/material'
import { Theme } from '../../../libs/shared/styles/src'

export const StyledPhoneCodeSelect = styled.div`
  margin-right: 16px;
  border: 2px solid ${Theme.palette.grey.primary};
  height: 46px;
  background-color: ${Theme.palette.grey.primary};
  border-radius: 4px;
  transition: background-color var(--transitionDuration),
    border var(--transitionDuration);

  &:hover {
    background-color: ${Theme.palette.grey.alto};
    border: 2px solid ${Theme.palette.grey.alto};
  }
`

export const CustomPopper = (props) => {
  return (
    <Popper
      {...props}
      data-cy="phone-code-list"
      placement="bottom"
      disablePortal
      modifiers={[
        {
          name: 'flip',
          enabled: false,
        },
      ]}
    />
  )
}

export const SelectPhoneCodeButton = styled.button`
  max-width: 143px;
  width: 100%;
  max-height: 46px;
  height: 46px;
  ${(props) => props.disabled && 'cursor: auto;'}
`

export const StyledAutocomplete = styled(Autocomplete)`
  position: absolute;
  margin: 0;
  padding: 0;
  margin-left: -1px;
  width: calc(100% + 2px);
  z-index: 1;
`

export const StyledInputBase = styled(InputBase)`
  width: 100%;
  height: 46px;
  padding-left: 16px;
  border-radius: 4px;
  border: 2px solid ${Theme.palette.black};
  background-color: ${Theme.palette.white};

  .MuiInputBase-input {
    padding: 0 16px 0 16px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
  }
`

export const PhoneCodeItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 46px;
  padding: 0 14px;
`

export const PhoneCodeMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 52px;
  padding: 0 16px;
  margin-bottom: 2px;
  transition: background-color var(--transitionDuration);
  cursor: pointer;

  &.MuiAutocomplete-option[aria-selected='true'] {
    background-color: ${Theme.palette.grey.primary};

    &.Mui-focused {
      background-color: ${Theme.palette.grey.primary};
    }
  }

  .MuiAutocomplete-option.Mui-focused {
    background-color: ${Theme.palette.grey.primary};
  }

  &:last-child {
    margin-bottom: initial;
  }
`

export const PhoneCode = styled.span`
  min-width: 55px;
  width: 55px;
  white-space: nowrap;
  display: inline-block;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: black;
`

export const CountryName = styled(PhoneCode)`
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: black;
  text-align: left;
`

export const Flag = styled.span`
  &.z-1 {
    z-index: -1;
  }
  flex-shrink: 0;
  border-radius: 50%;
  width: 19px;
  height: 19px;
`

export const ChevronIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPaper = styled(Paper)`
  margin-top: 2px;
  margin-left: 1px;

  border-radius: 6px;
  transition-duration: 0s !important;
  box-shadow: 0px 4px 15px ${Theme.palette.grey.listboxShadow};

  .MuiAutocomplete-listbox {
    padding-top: 0;
    padding-bottom: 0;
  }
`
