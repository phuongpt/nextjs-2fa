import React from 'react'
import Lottie from 'react-lottie'
import animOk from './animated-svg/anim-ok.json'

type Props = {
  width?: number
  loop?: boolean
  autoplay?: boolean
}

const ConfirmationOkIcon = ({
  width = 94,
  loop = false,
  autoplay = true,
}: Props) => {
  const animOptions = {
    loop,
    autoplay,
    animationData: animOk,
  }

  return <Lottie options={animOptions} width={width} />
}

export default ConfirmationOkIcon
