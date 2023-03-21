import styled from 'styled-components'
import { Theme } from '../../../../libs/shared/styles/src'


export const StyledTelephoneInput = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 600px;
  width: 100%;
  max-height: 46px;
  height: 46px;
  cursor: text;

  @media (max-width: 991px) {
    margin: 0;
  }
`

export const InputWrapper = styled.div`
  background-color: ${Theme.palette.white};
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  height: 100%;
`

export const InputAndErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 138px);
`
