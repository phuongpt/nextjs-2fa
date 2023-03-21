import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'


import SecurityCodeDialog from '../security-code-dialog/security-code-dialog'
import SecurityCodePrompt from '../security-code-prompt/security-code-prompt'
import { AuthProcessingOverlay } from './auth-processing-overlay'

import { send2faCode } from '../../api/auth/methods'
import { useCountdown } from '../../utils/use-countdown'
import { StyledSecurityCodePromptWrapper, StyledSecurityModalWrapper } from './two-factor-authentication-component.styles'

const CODE_VALIDITY_PERIOD = 1000 * 60 * 5 // 5 minutes
const RESEND_CODE_COOLDOWN = 1000 * 60 // 1 minute
const SECURITY_CODE_LENGTH = 6

interface TwoFactorAuthenticationModalProps {
  autoRequest?: boolean
  onCode: (code: string, retry: () => void) => void
  onCancel: () => void
  needsSpinner?: boolean
  isUse2Fa?: boolean
}

export const TwoFactorAuthenticationModal = ({
  onCode,
  onCancel,
  autoRequest,
  needsSpinner = false,
  isUse2Fa = false,
}: TwoFactorAuthenticationModalProps) => {
  const { t } = useTranslation(['common'])
  const [dialogOpen, setDialogOpen] = useState(true)
  const closeDialog = () => {
    setDialogOpen(false)
    onCancel()
  }

  const [code, setCode] = useState('')
  const [isExpired, setIsExpired] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [isCodeError, setIsCodeError] = useState(false)
  const [isCodeRequested, setIsCodeRequested] = useState(false)
  const [canRequestNewCodeDate, setCanRequestNewCodeDate] = useState<Date>(
    new Date()
  )
  const [codeExpiryDate, setCodeExpiryDate] = useState<Date>(new Date())

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

  const onCodeCompleted = (code) => {
    setCode(code)
    setIsWaiting(true)
    setIsCodeError(false)

    // imitate timeout for animation purposes
    setTimeout(() => {
      onCode(code, retry)
    }, 1000)
  }

  const onCodeChanged = (code: string) => {
    if (code?.length) setIsCodeError(false)
  }

  const requestCode = () => {
    setCode('')
    setIsExpired(false)
    setIsCodeError(false)
    setIsCodeRequested(true)
    if (isUse2Fa) {
      setCodeExpiryDate(new Date(Date.now() + CODE_VALIDITY_PERIOD))
      setCanRequestNewCodeDate(new Date(Date.now() + RESEND_CODE_COOLDOWN))
      send2faCode()
    }
  }

  // code expiration condition
  useEffect(() => {
    if (!isWaiting && secondsUntilCodeExpires && isCodeRequested && secondsUntilCodeExpires <= 0) {
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
    <SecurityCodeDialog
      open={dialogOpen}
      onClose={closeDialog}
    >
      <StyledSecurityModalWrapper>
        <StyledSecurityCodePromptWrapper>
          <SecurityCodePrompt
            code={code}
            isWaiting={isWaiting}
            isExpired={isExpired}
            isCodeError={isCodeError}
            requestCode={requestCode}
            codeLength={SECURITY_CODE_LENGTH}
            onCodeChanged={onCodeChanged}
            onCodeCompleted={onCodeCompleted}
            secondsUntilCodeExpires={secondsUntilCodeExpires || 0}
            secondsUntilCanRequestNewCode={secondsUntilCanRequestNewCode || 0}
          />
          {isWaiting && needsSpinner && (
            <AuthProcessingOverlay
              title={t('CodePrompt.Processing')}
              isCompleted={false}
            />
          )}
        </StyledSecurityCodePromptWrapper>
      </StyledSecurityModalWrapper>
    </SecurityCodeDialog>
  )
}
