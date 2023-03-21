import styled from 'styled-components'
import { InputBase } from '@mui/material'
import { Theme } from '../../../../libs/shared/styles/src'

export const StyledContainer = styled.div`
  width: 100%;
`

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: ${Theme.palette.grey.darkCharcoal};
  gap: 7px;
  cursor: pointer;
`

export const StyledInputBase = styled(InputBase)`
  align-self: center;
  width: 100%;
  height: 46px;
  border: 2px solid ${Theme.palette.grey.primary};
  background-color: ${Theme.palette.grey.primary};
  border-radius: 4px;
  transition: all var(--transitionDuration);
  overflow: hidden; //for fix blue autofilled background

  color: ${Theme.palette.black};

  &:hover:not(.Mui-disabled, .Mui-focused) {
    border: 2px solid ${Theme.palette.grey.alto};
    background-color: ${Theme.palette.grey.alto};
  }

  svg {
    width: 18px;
  }

  &input::placeholder {
    color: ${Theme.palette.grey.dustyGray};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }

  .MuiInputBase-input {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    padding: 0 16px;
    height: 100%;
  }

  &.Mui-error {
    border: 2px solid ${Theme.palette.red.primary};

    .missing-data {
      opacity: 1;
    }
  }

  &.Mui-focused {
    border: 2px solid ${Theme.palette.black};
    background-color: ${Theme.palette.grey.wildSand};

    .missing-data {
      opacity: 0;
    }
  }
` as typeof InputBase

export const StyledErrorMessage = styled.div`
  color: ${Theme.palette.red.primary};
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  margin-top: 4px;
  min-height: 14px;
  padding-left: 16px;
  text-align: right;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  svg {
    display: inline-block;
    margin-right: 5px;
    width: 14px;
    height: 14px;
  }

  a {
    margin-left: 3px;
  }
`

export const MissingData = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 12px 0 16px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transitionDuration);
`

export const CriteriaList = styled.ul`
  position: absolute;
  left: 0;
  top: 46px;
  width: 100%;
  z-index: 2;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transitionDuration);
  padding: 20px;
  background-color: ${Theme.palette.white};
  box-shadow: 0 4px 15px ${Theme.palette.grey.listboxShadow};
  border-radius: 6px;

  &.full-height {
    top: 70px;
  }

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`

export const CriteriaItem = styled.li<{ valid?: boolean }>`
  color: ${(props) =>
    props.valid ? Theme.palette.green.primary : Theme.palette.grey.nobel};
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  * + * {
    margin-left: 5px;
  }

  svg {
    margin-right: 5px;
  }
`
