import React, { useEffect, useState, useRef } from 'react'
import ReactInputVerificationCode from 'react-input-verification-code'
import { ProSettleTooltip } from '../shared/tooltip/tooltip'
import SecurityCodeMenu from '../security-code-menu/security-code-menu'
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
import { formatSecondsAsMinutesSeconds } from '../../utils/seconds-as-minutes'

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

export const SecurityCodePromptWithConfirm = ({
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

  const handleSubmit = (isRequested) => {
    if (isRequested) {
      onCodeCompleted(code)
    } else {
      requestCode()
    }
  }

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
      <CodeExpiration
        className={secondsUntilCodeExpires > 0 ? '' : 'is-invisible'}
      >
        <ValidForText>{t('CodePrompt.CodeValid')} </ValidForText>
        {secondsUntilCodeExpires > 0 && (
          <Timer>
            {formatSecondsAsMinutesSeconds(secondsUntilCodeExpires)}
          </Timer>
        )}
      </CodeExpiration>
      <Title>{t('CodePrompt.KlearingSecurity')}</Title>
      <Subheading className={hasError ? 'error' : ''} data-cy="securitysubheading">
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
          />
        )}
      </CodeInput>
      <GetCodeBlock>
        <ProSettleTooltip
          title={
            secondsUntilCanRequestNewCode > 0 ? (
              <OrderCodeTooltip
                title={t('CodePrompt.NotArrived')}
                subtitle={t('CodePrompt.AnotherCode', {
                  secondsUntilCanRequestNewCode,
                })}
              />
            ) : null
          }
        >
          <div
            id="titleWrapper"
            onClick={(event) => {
              setMenuOpener(event.currentTarget)
            }}
          >
            <HelpText>
              {secondsUntilCodeExpires > 0
                ? isCodeError
                  ? t('CodePrompt.TryAgain')
                  : t('CodePrompt.DidntGet')
                : ''}
            </HelpText>
          </div>
        </ProSettleTooltip>
        {menuOpener && (
          <SecurityCodeMenu
            target={menuOpener}
            setMenuClosed={setMenuClosed}
            onRequestNewCode={requestCode}
            requestCodeDelay={secondsUntilCanRequestNewCode}
          />
        )}
      </GetCodeBlock>
      {!skipGetCode && (
        <OrderCodeBlock>
          <OrderCodeButton
            disableRipple
            onClick={() => {
              handleSubmit(secondsUntilCodeExpires > 0)
            }}
            className={
              secondsUntilCodeExpires > 0 && code.length === codeLength
                ? 'is-active'
                : ''
            }
            disabled={secondsUntilCodeExpires > 0 && code.length !== codeLength}
            ref={orderCodeButton}
            data-cy="getcode"
          >
            {secondsUntilCodeExpires <= 0
              ? t('CodePrompt.GetCode')
              : t('CodePrompt.Confirm')}
          </OrderCodeButton>
        </OrderCodeBlock>
      )}
    </StyledPaper>
  )
}

export default SecurityCodePromptWithConfirm
