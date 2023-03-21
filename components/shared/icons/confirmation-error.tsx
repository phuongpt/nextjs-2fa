import React from 'react'
import Lottie from 'react-lottie'
import animError from './animated-svg/anim-fail.json'

type Props = {
  width?: number
  loop?: boolean
  autoplay?: boolean
}

const ConfirmationErrorIcon = ({
  width = 94,
  loop = false,
  autoplay = true,
}: Props) => {
  const animOptions = {
    loop,
    autoplay,
    animationData: animError,
  }

  return <Lottie options={animOptions} width={width} />
}

export default ConfirmationErrorIcon
