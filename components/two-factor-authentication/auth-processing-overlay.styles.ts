import styled from 'styled-components'
import { Theme } from '../../libs/shared/styles/src'

export const AuthProcessingContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: none;
  height: 100%;
  position: absolute;
  background-color: ${Theme.palette.white};
  border-radius: 4px;
`

export const Wrapper = styled.div<{
  isUnknownError
}>`
  height: 100%;
  padding: 65px 0;
  display: flex;
  align-items: ${(props) => (props.isUnknownError ? 'flex-start' : 'center')};
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: ${Theme.palette.black};
  display: block;
  position: absolute;
  top: calc(50% + 75px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 90%;
`

export const WaitingText = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  color: ${Theme.palette.black};
`
