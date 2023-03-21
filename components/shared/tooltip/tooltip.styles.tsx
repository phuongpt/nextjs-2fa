import React from 'react'
import styled from 'styled-components'
import { Tooltip } from '@mui/material'
import { Theme } from '@app/shared/styles'

export const StyledTooltip = styled((props) => (
  <Tooltip
    arrow
    placement={props.placement || 'bottom'}
    leaveDelay={props.leaveDelay || 0}
    enterDelay={props.enterDelay || 500}
    enterNextDelay={props.enterNextDelay || 500}
    classes={{ popper: props.className, tooltip: 'tooltip' }}
    {...props}
  />
))`
  width: max-content;

  .tooltip {
    max-width: 220px;
    padding: 12px;
    transition: none !important;
    border-radius: ${(props) =>
    props.$tooltipStyle !== 'white' ? '6px' : '0'};
    color: ${(props) =>
    props.$tooltipStyle !== 'white'
      ? Theme.palette.white
      : Theme.palette.black};
    background-color: ${(props) =>
    props.$tooltipStyle !== 'white'
      ? Theme.palette.black
      : Theme.palette.white};
    box-shadow: ${(props) =>
    props.$tooltipStyle !== 'white'
      ? 'none'
      : `0px 4px 10px ${Theme.palette.grey.listboxShadow}`};

    .MuiTooltip-arrow {
      color: ${(props) =>
    props.$tooltipStyle !== 'white'
      ? Theme.palette.black
      : Theme.palette.white};
    }
  }
`

export const TooltipTitle = styled.span<{
  $tooltipStyle?: string
}>`
  color: ${(props) =>
    props.$tooltipStyle !== 'white'
      ? Theme.palette.white
      : Theme.palette.black};
  font-size: ${(props) => (props.$tooltipStyle !== 'white' ? '14px' : '12px')};
  margin-bottom: 0;
`

export const TwoLevelTitle = styled.h4`
  margin: 0 0 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${Theme.palette.white};
  text-align: center;
`

export const TwoLevelDescription = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${Theme.palette.grey.nobel};
  text-align: center;
`
