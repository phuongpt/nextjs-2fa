import { Button } from '@mui/material'
import styled from 'styled-components'
import { Theme } from '../../../libs/shared/styles/src'

export const MainButton = styled(Button)`
  display: flex;
  align-items: center;
  color: ${Theme.palette.white};
  border: none;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  line-height: 16px;
  height: 34px;
  border-radius: 0;
  text-transform: none;
  box-sizing: border-box;
  transition: background-color var(--transitionDuration),
    opacity var(--transitionDuration);
  outline: none !important;

  &:disabled {
    pointer-events: none;
    color: ${Theme.palette.white};
  }
` as typeof Button

export const BlackButton = styled(MainButton)`
  border-radius: 9999px;
  height: ${({ size }) =>
    size === 'small' ? '34px' : size === 'medium' ? '44px' : '50px'};
  padding: 0 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  background-color: ${Theme.palette.black};

  svg {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${Theme.palette.grey.darkCharcoal};
  }

  &:disabled {
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const LightGreyButton = styled(MainButton)`
  background-color: ${Theme.palette.grey.primary};
  border-radius: 5px;
  color: ${Theme.palette.black};
  height: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;

  &:hover {
    background-color: ${Theme.palette.grey.alto};
  }
`

export const WhiteButton = styled(MainButton)`
  background-color: ${Theme.palette.white};
  border-radius: 50px;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  padding: 0 18px;
  color: ${Theme.palette.black};
  height: 30px;
  &:hover {
    background-color: ${Theme.palette.grey.primary};
  }
`

export const DarkButton = styled(MainButton)`
  background-color: ${Theme.palette.black};

  &:hover {
    background-color: ${Theme.palette.black};
  }

  &:disabled {
    background-color: ${Theme.palette.grey.nobel};
  }
` as typeof Button

export const TransparentButton = styled(MainButton)`
  position: relative;
  color: ${Theme.palette.black};
  background: none;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 7px;
    height: 1px;
    background-color: ${Theme.palette.black};
    transform: scaleX(0) translateZ(0);
    transform-origin: left center;
    transition: transform var(--transitionDuration);
    will-change: transform;
  }

  &:hover {
    background: none;

    &::before {
      transform: scaleX(1) translateZ(0);
    }
  }

  &:disabled {
    color: ${Theme.palette.grey.bombay};
  }
` as typeof Button

export const TransparentButtonBigger = styled(TransparentButton)`
  height: 40px;
  padding: 0 30px;

  &::before {
    left: 30px;
    right: 30px;
    top: 31px;
  }
` as typeof Button

export const UnderlinedButton = styled.button`
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: ${Theme.palette.black};
  position: relative;
  background: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: ${Theme.palette.black};
    transform-origin: left center;
    transform: scaleX(1) translateZ(0);
    transition: transform var(--transitionDuration);
    will-change: transform;
  }

  &:hover {
    &::before {
      transform: scaleX(0) translateZ(0);
    }
  }
`

export const DotsButtonContainer = styled.div`
  position: relative;
`

export const DotsButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${Theme.palette.grey.primary};
  border-radius: 6px;
  cursor: pointer;
  transition: background-color var(--transitionDuration);
  outline: 0;

  &:hover:not(:disabled) {
    background-color: ${Theme.palette.grey.alto};
  }

  &:disabled {
    cursor: default;
  }
`

export const DotsContent = styled.div`
  padding: 10px;
  background-color: ${Theme.palette.white};
  width: 180px;
  display: flex;
  flex-direction: column;

  button {
    display: block;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    padding: 0 14px;
    border-radius: 4px;
    height: 44px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    background-color: ${Theme.palette.white};
    cursor: pointer;
    transition: background-color var(--transitionDuration);
    color: ${Theme.palette.black};

    &:hover:not(:disabled) {
      background-color: ${Theme.palette.grey.primary};
    }

    &:disabled {
      cursor: default;
      color: ${Theme.palette.grey.nobel};
    }
  }
`
