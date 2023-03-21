import React from 'react'
import Lottie from 'react-lottie'
import animStart from './animated-svg/anim-start.json'

type Props = {
  width?: number
  loop?: boolean
  autoplay?: boolean
}

const ConfirmationStartIcon = ({
  width = 94,
  loop = true,
  autoplay = true,
}: Props) => {
  const animOptions = {
    loop,
    autoplay,
    animationData: animStart,
  }

  return <Lottie options={animOptions} width={width} />
}

export default ConfirmationStartIcon
