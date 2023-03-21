import styled from 'styled-components'
import { Dialog } from '@mui/material'

export const StyledSecurityCodeDialog = styled(Dialog)`` as typeof Dialog

export const backdropProps = {
  style: {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(246, 247, 249, 0.8)',
  },
}
