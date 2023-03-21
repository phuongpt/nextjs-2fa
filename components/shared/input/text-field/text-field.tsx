import React, { useCallback } from 'react'
import { InputBaseProps } from '@mui/material/InputBase/InputBase'
import {
  StyledContainer,
  StyledErrorMessage as ErrorMessage,
  StyledInputBase,
  StyledLabel as FieldLabel,
} from './text-field.styles'

export type TextFieldProps = InputBaseProps & {
  showErrorText?: boolean
  label?: (() => React.ReactNode) | string
  errorMessage?: (() => React.ReactNode) | string | boolean | null
  idFor?: string
}

const TextField = ({
  label,
  errorMessage,
  idFor,
  showErrorText = true,
  inputProps,
  ...rest
}: TextFieldProps) => {
  const renderLabel = useCallback(() => {
    if (!label) {
      return null
    }

    if (typeof label === 'function') {
      return label()
    }

    return label
  }, [label])

  const renderErrorMessage = useCallback(() => {
    if (!errorMessage) {
      return null
    }

    if (typeof errorMessage === 'function') {
      return errorMessage()
    }

    return errorMessage
  }, [errorMessage])

  const errorText = renderErrorMessage()

  return (
    <StyledContainer>
      {label && <FieldLabel htmlFor={idFor}>{renderLabel()}</FieldLabel>}
      <StyledInputBase
        id={idFor}
        error={!!errorText}
        inputProps={inputProps}
        {...rest}
      />
      {showErrorText && (
        <ErrorMessage
          data-cy={
            inputProps && inputProps['data-cy']
              ? `error-${inputProps['data-cy']}`
              : null
          }
        >
          {errorText}
        </ErrorMessage>
      )}
    </StyledContainer>
  )
}

export { FieldLabel, TextField, ErrorMessage }
