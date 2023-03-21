import React, { useRef, useState } from 'react'
import {
  MainButton,
  BlackButton,
  LightGreyButton,
  WhiteButton,
  DarkButton,
  TransparentButton,
  TransparentButtonBigger,
  UnderlinedButton,
  DotsButtonStyled,
  DotsButtonContainer,
  DotsContent,
} from './button.styles'
import DotsIcon from '../icons/dots'
import SimplePopover from '../popover/popover'
import { Theme } from '../../../libs/shared/styles/src'

export {
  MainButton,
  BlackButton,
  LightGreyButton,
  WhiteButton,
  DarkButton,
  TransparentButton,
  TransparentButtonBigger,
  UnderlinedButton,
}

type DotsButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  dataCyButton?: string
  dataCyDotsContent?: string
  disabled?: boolean
  onShow?: (show: boolean) => void
  children?:
  | React.ReactNode
  | ((options: { toggleShowPopup: () => void }) => React.ReactNode)
}

export const DotsButton = ({
  dataCyButton,
  dataCyDotsContent,
  children,
  disabled = false,
  onShow,
  ...rest
}: DotsButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [show, setShow] = useState(false)

  const toggleShowPopup = () => {
    setShow(!show)
    if (onShow) {
      onShow(!show)
    }
  }

  const onClickButton = (e) => {
    e.stopPropagation()
    toggleShowPopup()
  }

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ toggleShowPopup })
    }

    return children
  }

  return (
    <DotsButtonContainer>
      <DotsButtonStyled
        type="button"
        ref={ref}
        data-cy={dataCyButton}
        onClick={onClickButton}
        disabled={disabled}
        {...rest}
      >
        <DotsIcon
          color={disabled ? Theme.palette.grey.nobel : Theme.palette.black}
        />
      </DotsButtonStyled>
      {ref?.current && show && (
        <SimplePopover
          target={ref.current}
          open={show}
          onClose={toggleShowPopup}
          positionY="bottom"
        >
          <DotsContent data-cy={dataCyDotsContent}>
            {renderChildren()}
          </DotsContent>
        </SimplePopover>
      )}
    </DotsButtonContainer>
  )
}
