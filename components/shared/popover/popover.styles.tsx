import styled from 'styled-components'

import Popover from '@mui/material/Popover'
import { Theme } from '../../../libs/shared/styles/src'

export const StyledPopover = styled(Popover)`
  .MuiPopover-paper {
    box-shadow: 0px 4px 15px ${Theme.palette.grey.listboxShadow};
    border-radius: 4px;
    margin-top: 2px;
  }
`
