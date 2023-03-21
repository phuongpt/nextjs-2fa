import React from 'react'

interface LockIconProps {
  color?: string
}

const LockIcon = ({ color }: LockIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="14"
      fill="none"
      viewBox="0 0 11 14"
    >
      <path
        fill={color ? color : '#000000'}
        d="M2.375 13.702h6.398c.52 0 .914-.141 1.183-.424.269-.278.403-.697.403-1.258V7.175c0-.556-.134-.973-.403-1.251-.269-.278-.663-.417-1.183-.417H2.375c-.52 0-.914.139-1.183.417C.924 6.2.79 6.618.79 7.173v4.848c0 .56.135.98.403 1.257.27.283.663.424 1.183.424zM2.04 6.08h1.285V3.776c0-.533.103-.982.308-1.346.205-.37.478-.65.82-.841a2.256 2.256 0 011.121-.287c.406 0 .78.095 1.121.287.342.191.616.472.82.84.21.365.315.814.315 1.347V6.08h1.278V3.906c0-.843-.166-1.547-.499-2.112A3.26 3.26 0 007.311.509a3.63 3.63 0 00-1.737-.43 3.63 3.63 0 00-1.736.43c-.538.287-.973.715-1.306 1.285-.328.565-.492 1.27-.492 2.112V6.08z"
      />
    </svg>
  )
}

export default LockIcon
