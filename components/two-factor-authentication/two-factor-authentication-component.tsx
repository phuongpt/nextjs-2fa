import React, { useCallback, useEffect, useState } from 'react'

import { SecurityCodePrompt } from '../security-code-prompt/security-code-prompt'
import { AuthProcessingOverlay } from './auth-processing-overlay'

import { StyledSecurityCodePromptWrapper } from './two-factor-authentication-component.styles'
import { send2faCode } from '../../api/auth/methods'
import { useCountdown } from '../../utils/use-countdown'

const CODE_VALIDITY_PERIOD = 1000 * 60 * 5 // 5 minutes
const RESEND_CODE_COOLDOWN = 1000 * 60 // 1 minute
const SECURITY_CODE_LENGTH = 6

interface TwoFactorAuthenticationComponentProps {
  autoRequest?: boolean
  onCode: (code: string, retry: () => void) => void
  skipGetCode?: boolean
  multiStepProgressFlag?: boolean
  isCompleted?: boolean
  overlayTitle?: string
  customGetCodeCb?: () => void
  customGetToken?: () => string
  customClassName?: string
  isUnknownError?: boolean
  requestOnCode?: boolean
  waitingText?: string | null
}

export const TwoFactorAuthenticationComponent = ({
  requestOnCode = true,
  onCode,
  autoRequest,
  skipGetCode = false,
  multiStepProgressFlag = false,
  isCompleted = false,
  overlayTitle = 'Processing...',
  customGetCodeCb,
  customGetToken,
  customClassName,
  isUnknownError,
  waitingText = null,
}: TwoFactorAuthenticationComponentProps) => {
  const [code, setCode] = useState('')
  const [isExpired, setIsExpired] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isCodeError, setIsCodeError] = useState(false)
  const [isCodeRequested, setIsCodeRequested] = useState(false)
  const [codeExpiryDate, setCodeExpiryDate] = useState<Date>(new Date())
  const [canRequestNewCodeDate, setCanRequestNewCodeDate] = useState<Date>(new Date())

  const { secondsRemaining: secondsUntilCanRequestNewCode } = useCountdown(
    canRequestNewCodeDate
  )
  const { secondsRemaining: secondsUntilCodeExpires } =
    useCountdown(codeExpiryDate)

  const retry = useCallback(() => {
    setCode('')
    setIsWaiting(false)
    setIsExpired(false)
    setIsCodeError(true)
    setIsCodeRequested(false)
    setCodeExpiryDate(new Date())
    setCanRequestNewCodeDate(new Date())
  }, [setIsCodeError])

  const onCodeChanged = (code: string) => {
    if (code?.length) {
      setIsCodeError(false)
      if (!requestOnCode) {
        setCode(code)
      }
    }
  }

  const onCodeCompleted = (code) => {
    setCode(code)
    setIsWaiting(true)
    setIsCodeError(false)

    // imitate timeout for animation purposes
    setTimeout(() => {
      onCode(code, retry)
    }, 1000)
  }

  const requestCode = () => {
    setCode('')
    setIsExpired(false)
    setIsCodeError(false)
    setIsCodeRequested(true)
    setCodeExpiryDate(new Date(Date.now() + CODE_VALIDITY_PERIOD))
    setCanRequestNewCodeDate(new Date(Date.now() + RESEND_CODE_COOLDOWN))

    if (!skipGetCode) {
      let token: string | null = null
      if (customGetToken) {
        token = customGetToken()
      }
      send2faCode(token)
    }

    if (customGetCodeCb) customGetCodeCb()
  }

  // code expiration condition
  useEffect(() => {
    if (!isWaiting && !!secondsUntilCodeExpires && isCodeRequested && secondsUntilCodeExpires <= 0) {
      setIsExpired(true)
      return
    }
    setIsExpired(false)
  }, [secondsUntilCodeExpires, isCodeRequested, isWaiting])

  // request code when component mounts
  useEffect(() => {
    if (autoRequest) requestCode()
  }, [])

  return (
    <StyledSecurityCodePromptWrapper data-cy="twofactor">
      <SecurityCodePrompt
        code={code}
        isWaiting={isWaiting}
        isExpired={isExpired}
        isCodeError={isCodeError}
        requestCode={requestCode}
        codeLength={SECURITY_CODE_LENGTH}
        onCodeChanged={onCodeChanged}
        onCodeCompleted={onCodeCompleted}
        secondsUntilCodeExpires={secondsUntilCodeExpires}
        secondsUntilCanRequestNewCode={secondsUntilCanRequestNewCode}
        skipGetCode={skipGetCode}
        customClassName={customClassName}
      />
      {(isWaiting || isCompleted) && (
        <AuthProcessingOverlay
          title={overlayTitle}
          isCompleted={multiStepProgressFlag || isCompleted}
          isUnknownError={isUnknownError}
          withoutGif={waitingText}
        />
      )}
    </StyledSecurityCodePromptWrapper>
  )
}

export default TwoFactorAuthenticationComponent
