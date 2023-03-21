import React from 'react'
import ConfirmationStartIcon from '../shared/icons/confirmation-start'
import ConfirmationOkIcon from '../shared/icons/confirmation-ok'

import {
  AuthProcessingContainer,
  Title,
  WaitingText,
  Wrapper,
} from './auth-processing-overlay.styles'

type Props = {
  title: string
  isCompleted: boolean
  isUnknownError?: boolean
  withoutGif?: string | null
}

export const AuthProcessingOverlay = ({
  title,
  isCompleted,
  isUnknownError,
  withoutGif = null,
}: Props) => {
  return (
    <AuthProcessingContainer className="overlay">
      <Wrapper isUnknownError={isUnknownError}>
        {!withoutGif ? (
          <>
            <Title>{title || 'processing...'}</Title>
            {!isUnknownError ? (
              isCompleted ? (
                <ConfirmationOkIcon />
              ) : (
                <ConfirmationStartIcon />
              )
            ) : null}
          </>
        ) : (
          <WaitingText>{withoutGif}</WaitingText>
        )}
      </Wrapper>
    </AuthProcessingContainer>
  )
}
