import React from 'react'

import {
  StyledTooltip,
  TooltipTitle,
  TwoLevelDescription,
  TwoLevelTitle,
} from './tooltip.styles'

export interface TooltipProps {
  title: unknown
  description?: unknown
  children: unknown
  placement?: string
  enterDelay?: number
  leaveDelay?: number
  enterNextDelay?: number
  $tooltipStyle?: string
}

interface TwoLevelTooltipProps {
  title: string
  description: string
}

const TwoLevelTooltip = ({ title, description }: TwoLevelTooltipProps) => {
  return (
    <>
      <TwoLevelTitle>{title}</TwoLevelTitle>
      <TwoLevelDescription>{description}</TwoLevelDescription>
    </>
  )
}

export const Tooltip = ({
  title,
  children,
  placement,
  enterDelay,
  leaveDelay,
  enterNextDelay,
  $tooltipStyle,
  description,
}: TooltipProps) => {
  const titleToDisplay =
    typeof title !== 'string' ? (
      title
    ) : !title ? null : (
      <TooltipTitle
        text={title}
        align="center"
        variant="h6"
        $tooltipStyle={$tooltipStyle}
      />
    )

  return titleToDisplay ? (
    <StyledTooltip
      title={
        description ? (
          <TwoLevelTooltip title={title} description={description} />
        ) : (
          titleToDisplay
        )
      }
      placement={placement}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      enterNextDelay={enterNextDelay}
      $tooltipStyle={$tooltipStyle}
    >
      <div>{children}</div>
    </StyledTooltip>
  ) : (
    children
  )
}

export default Tooltip
