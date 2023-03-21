import React, { useEffect, useState, useRef } from 'react'
import ReactInputVerificationCode from 'react-input-verification-code'
import SecurityCodeMenu from '../security-code-menu/security-code-menu'
import { formatSecondsAsMinutesSeconds } from '@/utils/seconds-as-minutes'
import { useTranslation } from 'next-i18next'

import {
  Timer,
  Title,
  HelpText,
  CodeInput,
  Subheading,
  StyledPaper,
  GetCodeBlock,
  CodeExpiration,
  OrderCodeBlock,
  OrderCodeButton,
  OrderCodeTooltip,
  StyledDisabledCodeInput,
  StyledInputItem,
  ValidForText,
} from './security-code-prompt.styles'

export interface SecurityCodePromptProps {
  code: string
  isWaiting: boolean
  isExpired: boolean
  codeLength: number
  isCodeError: boolean
  requestCode: () => void
  onCodeChanged: (code: string) => void
  onCodeCompleted: (code: string) => void
  secondsUntilCodeExpires: number
  secondsUntilCanRequestNewCode: number
  skipGetCode?: boolean
  customClassName?: string
}

export const SecurityCodePrompt = ({
  code,
  isWaiting,
  isExpired,
  codeLength,
  isCodeError,
  requestCode,
  onCodeChanged,
  onCodeCompleted,
  secondsUntilCodeExpires,
  secondsUntilCanRequestNewCode,
  skipGetCode = false,
  customClassName,
}: SecurityCodePromptProps) => {
  const orderCodeButton = useRef<HTMLButtonElement>(null)
  const [menuOpener, setMenuOpener] = useState<HTMLDivElement | null>(null)
  const { t } = useTranslation(['common'])

  // focus on request code button if time expired
  useEffect(() => {
    if (
      (secondsUntilCodeExpires <= 0 || secondsUntilCodeExpires === null) &&
      orderCodeButton.current
    ) {
      orderCodeButton.current.focus()
    }
  }, [secondsUntilCodeExpires])

  useEffect(() => {
    if (skipGetCode) requestCode()
  }, [])

  // close menu and execute selected action if present
  const setMenuClosed = (selectedOption) => {
    setMenuOpener(null)
    processSelectedAction(selectedOption)
  }

  // action processor
  const processSelectedAction = (selectedOption) => {
    if (!selectedOption) return
  }

  const getError = () => {
    switch (true) {
      case isExpired && secondsUntilCodeExpires < 6:
        return t('CodePrompt.NoCode')
      case isCodeError:
        return t('CodePrompt.Incorrect')
      case isExpired:
        return t('CodePrompt.TimeIsOut')
      default:
        break
    }
  }

  const hasError = isCodeError || isExpired

  return (
    <StyledPaper
      elevation={0}
      className={!customClassName ? '' : customClassName}
    >
      <Title>{t('CodePrompt.AppSecurity')}</Title>
      <Subheading data-cy="securitysubheading">
        {hasError
          ? getError()
          : secondsUntilCodeExpires > 0
            ? t('CodePrompt.EnterCode')
            : t('CodePrompt.SixDigit')}
      </Subheading>
      <CodeInput>
        {isWaiting || secondsUntilCodeExpires <= 0 ? (
          <StyledDisabledCodeInput>
            <StyledInputItem />
            <StyledInputItem />
            <StyledInputItem />
            <StyledInputItem />
            <StyledInputItem />
            <StyledInputItem />
          </StyledDisabledCodeInput>
        ) : (
          <ReactInputVerificationCode
            autoFocus
            value={code}
            placeholder=""
            length={codeLength}
            onChange={onCodeChanged}
            onCompleted={onCodeCompleted}
          />
        )}
      </CodeInput>
      <CodeExpiration
        className={secondsUntilCodeExpires > 0 ? '' : 'is-hidden'}
      >
        <ValidForText>{t('CodePrompt.CodeValid')} </ValidForText>
        <Timer>{formatSecondsAsMinutesSeconds(secondsUntilCodeExpires)}</Timer>
      </CodeExpiration>
      <GetCodeBlock>
        {menuOpener && (
          <SecurityCodeMenu
            target={menuOpener}
            setMenuClosed={setMenuClosed}
            onRequestNewCode={requestCode}
            requestCodeDelay={secondsUntilCanRequestNewCode}
          />
        )}
      </GetCodeBlock>
      {secondsUntilCodeExpires <= 0 && !skipGetCode && (
        <OrderCodeBlock>
          <OrderCodeButton
            disableRipple
            onClick={() => {
              requestCode()
            }}
            ref={orderCodeButton}
            data-cy="getcode"
          >
            {t('CodePrompt.GetCode')}
          </OrderCodeButton>
        </OrderCodeBlock>
      )}
    </StyledPaper>
  )
}

export default SecurityCodePrompt
