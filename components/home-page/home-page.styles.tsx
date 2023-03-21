import styled from 'styled-components'
import { Button, Container, Divider, Grid } from '@mui/material'
import { Theme } from '../../libs/shared/styles/src/index'

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  position: relative;
  height: calc(100vh - 60px);
  align-items: center;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 60px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  background-color: ${Theme.palette.black};

  svg {
    width: 107px;
    height: auto;
  }
`

export const PageContainer = styled.div`
  padding-top: 60px;
`

export const LogoutButtonContainer = styled.div`
  padding-top: 50px
`

export const LogoutButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  color: ${Theme.palette.white};
  height: 44px;
  min-width: 130px;
  background: ${Theme.palette.black};
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  padding: 0 24px;
  text-transform: none;
  border-radius: 50px;
  transition: background-color var(--transitionDuration),
    opacity var(--transitionDuration), color var(--transitionDuration);
  pointer-events: auto;

  svg {
    margin-left: 10px;
  }

  &.Mui-disabled {
    opacity: 0.5;
    color: ${Theme.palette.white};
  }

  &:hover {
    background-color: ${Theme.palette.grey.darkCharcoal};
  }

  @media (max-width: 991px) {
    & {
      position: fixed;
      right: 50px;
      bottom: 50px;
      z-index: 2;
    }
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 670px) {
    padding: 30px;
  }
`

export const StyledDivider = styled(Divider)`
  width: 100%;
  margin: auto;
`

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
`
