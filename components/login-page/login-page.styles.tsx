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

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 60px 0;
`

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const LoginButton = styled(Button)`
  align-self: center;
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

export const FormWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0 30px;
  border: 2px solid;
  font-family: ${Theme.typography.inter};
  z-index: 1;

  @media screen and (max-width: 991px) {
    width: 570px;
    padding: 70px 66px 50px;
  }

  @media screen and (max-width: 670px) {
    width: 100%;
    padding: 50px 30px;
  }
`

export const Heading = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 46px;
  font-family: ${Theme.typography.poppins};
`

export const NewToTradebrite = styled.span`
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  color: ${Theme.palette.black};

  a {
    position: relative;
    margin-left: 5px;
    font-weight: 600;
    font-size: 15px;
    line-height: 21px;
    color: ${Theme.palette.black};

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background-color: ${Theme.palette.black};
      transform: scaleX(1) translateZ(0);
      transition: transform var(--transitionDuration);
      will-change: transform;
      transform-origin: left center;
    }

    :hover,
    :focus {
      &::before {
        transform: scaleX(0) translateZ(0);
      }
    }
  }
`

export const TermsAndPolicy = styled.span`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${Theme.palette.black};
`

export const CustomLink = styled.a`
  position: relative;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: ${Theme.palette.black};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: ${Theme.palette.black};
    transform: scaleX(1) translateZ(0);
    transition: transform var(--transitionDuration);
    will-change: transform;
    transform-origin: left center;
  }

  :hover,
  :focus {
    &::before {
      transform: scaleX(0) translateZ(0);
    }
  }
`

export const ForgotPassword = styled.p`
  margin: 0;
  position: relative;
  margin-left: 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
  color: ${Theme.palette.black};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: ${Theme.palette.black};
    transform: scaleX(1) translateZ(0);
    transition: transform var(--transitionDuration);
    will-change: transform;
    transform-origin: left center;
  }

  :hover,
  :focus {
    &::before {
      transform: scaleX(0) translateZ(0);
    }
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
