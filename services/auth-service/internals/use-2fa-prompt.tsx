import React, { useCallback, useRef, useState } from 'react'
import { TwoFactorAuthenticationModal } from '../../../components/two-factor-authentication/two-factor-authentication-modal'

export type OnCodeCallback = (
  code: string,
  retry: Function,
  done: Function
) => void

type CancelRequest = () => void

export type Request2faCode = (
  onCode: OnCodeCallback,
  onCancel?: () => void
) => CancelRequest

const NullComponent = () => null

export const use2faPrompt = (): {
  Component: React.ComponentType
  request2faCode: Request2faCode
} => {
  const onCodeCallback = useRef<Function>()
  const onCancelCallback = useRef<Function>()
  const [isRequesting2fa, setIsRequesting2fa] = useState(false)

  const ModalComponent = useCallback(() => {
    return (
      <TwoFactorAuthenticationModal
        autoRequest={false}
        onCode={(code, retry) => {
          const done = () => setIsRequesting2fa(false)
          onCodeCallback.current(code, retry, done)
        }}
        onCancel={() => {
          if (typeof onCancelCallback.current === 'function') {
            onCancelCallback.current()
          }
          setIsRequesting2fa(false)
        }}
        needsSpinner={true}
        isUse2Fa={true}
      />
    )
  },[])

  return {
    Component: isRequesting2fa ? ModalComponent : NullComponent,
    request2faCode: (onCode, onCancel) => {
      setIsRequesting2fa(true)
      onCodeCallback.current = onCode
      onCancelCallback.current = onCancel
      return () => setIsRequesting2fa(false)
    },
  }
}
