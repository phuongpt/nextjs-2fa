import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { DateTime } from 'luxon'
import * as Auth from '../api/auth/methods'
import { Scrollbars } from 'react-custom-scrollbars'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DEFAULT_PASSWORD, TERMS_AND_CONDITIONS } from '../constants'

import { TextField } from '../components/shared/input/text-field/text-field'
import ArrowContinueIcon from '../components/shared/icons/arrow-continue'
import { TwoFactorAuthenticationComponent } from '../components/two-factor-authentication/two-factor-authentication-component'
import Spacer from '../components/shared/spacer/spacer'
import {
  PageContainer,
  StyledHeader,
  StyledGrid,
  Heading,
  FormContent,
  FormWrapper,
  LoginButtonContainer,
  LoginButton,
  StyledDivider,
  ForgotPassword,
  TermsAndPolicy,
  NewToTradebrite,
  StyledContainer,
  ContentCenter,
  CustomLink,
} from '../components/login-page/login-page.styles'
import {
  StorageKey,
  getLocalStorageItem,
  removeLocalStorageItem,
} from '../utils/local-storage'


const Login = () => {
  const router = useRouter()
  const [password, setPassword] = useState(DEFAULT_PASSWORD || "")
  const [loginToken, setLoginToken] = useState('')
  const [show2fa, setShow2fa] = useState(false)
  const [email, setEmail] = useState('')

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { query } = router
  const { t } = useTranslation(['signin'])

  useEffect(() => {
    const emailParam = query?.email ? String(query.email) : 'user@user.com'
    const lastActivity = query?.last_activity
      ? parseInt(query.last_activity as string, 10)
      : null

    setEmail(emailParam)
  }, [query])


  const logIn = async () => {
    setErrorMessage(null)
    try {
      const { token } = await Auth.logIn({ email, password })
      setLoginToken(token)
      setShow2fa(true)
    } catch (e) {
      setErrorMessage('The username or password you have entered is invalid')
    }
  }

  const redirect = () => {
    try {
      const token = getLocalStorageItem(StorageKey.TOKENS)
      if (token) {
        const path = router.asPath.split('return=')
        const url = path[path.length - 1]
        router.push(url !== '/login' ? url : '/home')
      }
    } catch (err) {
      console.log(err)
    }
  }


  const handleVerifyCode = async (code: string, retry: CallableFunction) => {
    try {
      await Auth.logIn2fa({ email, password, code })
      let returnPath = '/'
      if (
        typeof Router.query.return === 'string' &&
        Router.query.return.startsWith('/')
      ) {
        returnPath = Router.query.return
      }

      if (
        (typeof Router.query.return === 'string') ||
        !Router.query.return
      ) {
        returnPath = '/home'
      }

      Router.replace(returnPath);
    } catch (e) {
      console.log('message', e.message)
      retry()
      setErrorMessage(e.message)
    }
  }

  const getToken = () => loginToken

  return (
    <PageContainer data-cy="loginpage">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        hideTracksWhenNotNeeded
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <StyledGrid container>
          <StyledContainer>
            <FormWrapper>
              <FormContent className="content">
                {!show2fa ? (
                  <>
                    <Spacer axis="y" size={50} />
                    <h1>{t("SignIn.WelcomeBack")}</h1>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault()
                        logIn()
                      }}
                    >
                      <TextField
                        type="text"
                        placeholder="Email"
                        inputProps={{
                          'data-cy': 'email',
                        }}
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                      />
                      <TextField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        inputProps={{
                          'data-cy': 'password',
                        }}
                        errorMessage={
                          errorMessage !== '' && errorMessage !== null
                            ? errorMessage
                            : ''
                        }
                      />
                      <Spacer axis="y" size={13} />
                      <LoginButtonContainer>
                        <LoginButton type="submit" data-cy="loginbutton">
                          {t('SignIn.SignIn')}
                          <ArrowContinueIcon />
                        </LoginButton>
                      </LoginButtonContainer>
                    </form>
                    <Spacer axis="y" size={40} />
                  </>
                ) : (
                  <>
                    <Spacer axis="y" size={22} />
                    <ContentCenter>
                      <TwoFactorAuthenticationComponent
                        onCode={handleVerifyCode}
                        requestOnCode={true}
                        waitingText={t('SignIn.RedirectText')}
                        customGetToken={getToken}
                        autoRequest
                      />
                    </ContentCenter>
                  </>
                )}
                <StyledDivider />
                <Spacer axis="y" size={20} />

              </FormContent>
            </FormWrapper>
          </StyledContainer>
        </StyledGrid>
      </Scrollbars>
    </PageContainer>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'signin'])),
  },
})

export default Login
