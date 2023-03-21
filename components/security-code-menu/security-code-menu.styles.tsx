import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem'
import { Theme } from '../../libs/shared/styles/src'

export const StyledMenuItem = styled(MenuItem)`
  margin: 0;
  border: 0;
  height: 32px;
  color: ${Theme.palette.black};
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${Theme.palette.white};
  transition: background-color var(--transitionDuration);

  &.MuiMenuItem-button:hover:not(.mui-disabled) {
    background-color: ${Theme.palette.grey.primary};
  }

  &.MuiMenuItem-button:active:not(.mui-disabled) {
    background-color: ${Theme.palette.grey.primary};
  }

  &.mui-disabled {
    opacity: 1;
    color: ${Theme.palette.grey.nobel};
  }

  a {
    outline: transparent !important;
  }
`

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
  min-width: 150px;
  background: ${Theme.palette.white};
`

export const Wrapper = styled.div`
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  outline: 0;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  left: 50%;
  top: -10px;
  transform: translate(-50%, 0%);
  z-index: 9999;
`

interface TimerProps {
  requestCodeDelay: number
}

export const Timer = styled.span<TimerProps>`
  border: 1px solid transparent;
  margin-left: 1px;
  width: ${({ requestCodeDelay }) =>
    requestCodeDelay <= 19
      ? requestCodeDelay > 10
        ? '15px'
        : '10px'
      : '20px'};
`

export const Link = styled.a`
  display: flex;
  align-items: center;
`
