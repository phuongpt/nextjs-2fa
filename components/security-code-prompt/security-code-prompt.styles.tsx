import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import { Theme } from '@app/shared/styles'
import { DarkButton } from '../shared/button/button'
import React from 'react'

export const StyledPaper = styled(Paper)`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &.signup {
    padding-top: 10px;
  }

  @media (max-width: 1230px) {
    min-height: 425px;
  }
` as typeof Paper

export const OrderCodeBlock = styled.div`
  padding-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`

export const OrderCodeButton = styled(DarkButton)`
  display: inline-flex;
  height: 44px;
  padding: 0 24px;
  border-radius: 50px;

  &:disabled {
    background-color: ${Theme.palette.grey.nobel};
  }

  &:hover {
    background-color: ${Theme.palette.grey.darkCharcoal};
  }
`

export const CodeExpiration = styled.div`
  gap: 9px;
  display: flex;
  height: 34px;
  align-items: baseline;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 35px;
  opacity: 1;

  &.is-invisible {
    opacity: 0;
  }

  &.is-hidden {
    display: none;
  }
`

export const Timer = styled.span`
  color: ${Theme.palette.black};
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`

export const Subheading = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${Theme.palette.black};
  margin-bottom: 40px;

  &.error {
    color: ${Theme.palette.red.primary};
  }
`

export const GetCodeBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

export const HelpText = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  display: block;
  color: ${Theme.palette.black};
  min-height: 20px;
`

export const TooltipTitle = styled.span`
  display: block;
  color: ${Theme.palette.white};
  font-size: 14px;
  line-height: 18px;
`

export const TooltipSubtitle = styled.span`
  display: block;
  color: ${Theme.palette.grey.nobel};
  font-size: 14px;
  line-height: 18px;
`

export const TooltipWrapper = styled.div`
  text-align: center;
  display: block;
`

interface OrderCodeTooltipProps {
  title: string
  subtitle: string
}

export const OrderCodeTooltip = ({
  title,
  subtitle,
}: OrderCodeTooltipProps) => {
  return (
    <TooltipWrapper>
      <TooltipTitle>{title}</TooltipTitle>
      <TooltipSubtitle>{subtitle}</TooltipSubtitle>
    </TooltipWrapper>
  )
}

export const CodeInput = styled.div`
  margin-bottom: 32px;
  --ReactInputVerificationCode-itemWidth: 40px;
  --ReactInputVerificationCode-itemHeight: 50px;
  --ReactInputVerificationCode-itemSpacing: 10px;

  .ReactInputVerificationCode__item:not(:empty)::after {
    background: transparent;
  }

  .ReactInputVerificationCode__item,
  .ReactInputVerificationCode__item.is-active {
    border-color: ${Theme.palette.black};
    background-color: ${Theme.palette.white};
    box-shadow: none;
  }

  .ReactInputVerificationCode__item {
    color: ${Theme.palette.black};
    user-select: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 46px;
    position: relative;
    border-radius: 4px;
    background-color: ${Theme.palette.grey.primary};
    border: 2px solid ${Theme.palette.grey.primary};
    transition: border-color var(--transitionDuration),
      background-color var(--transitionDuration);
  }

  .ReactInputVerificationCode__item:not(:empty) {
    box-shadow: none;
  }

  display: flex;
  align-items: center;
`

export const StyledDisabledCodeInput = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledInputItem = styled.div`
  height: 50px;
  width: 40px;
  outline: none !important;
  border: 2px solid ${Theme.palette.grey.primary};
  border-radius: 4px;
  background-color: ${Theme.palette.grey.primary};
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  min-height: 45px;
  font-weight: 400;
  color: ${Theme.palette.red.pomegranate};
  font-size: 15px;
`

export const ValidForText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${Theme.palette.black};
`
