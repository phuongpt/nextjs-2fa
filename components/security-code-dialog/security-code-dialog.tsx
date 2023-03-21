import React from 'react'

import { DialogProps } from '@mui/material'

import {
  backdropProps,
  StyledSecurityCodeDialog,
} from './security-code-dialog.styles'

export const SecurityCodeDialog = (props: DialogProps) => {
  return <StyledSecurityCodeDialog {...props} BackdropProps={backdropProps} />
}

export default SecurityCodeDialog
