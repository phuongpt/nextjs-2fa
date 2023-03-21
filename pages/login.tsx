import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { DateTime } from 'luxon'
import Spacer from '../components/shared/spacer/spacer'
import * as Auth from '../api/auth/methods'
import { TwoFactorAuthenticationComponent } from '../components/two-factor-authentication/two-factor-authentication-component'
import { Scrollbars } from 'react-custom-scrollbars'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ArrowContinueIcon from '../components/shared/icons/arrow-continue'

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
import { } from '../constants/core'
import { TERMS_AND_CONDITIONS } from '../constants'
import { TextField } from '../components/shared/input/text-field/text-field'
const Login = () => {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loginToken, setLoginToken] = useState('')
  const [show2fa, setShow2fa] = useState(false)
  const [email, setEmail] = useState('')
  const [recordedActivity, setRecordedActivity] = useState<string | null>(null)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { query } = router
  const { t } = useTranslation(['signin'])

  useEffect(() => {
    const emailParam = query?.email ? String(query.email) : ''
    const lastActivity = query?.last_activity
      ? parseInt(query.last_activity as string, 10)
      : null

    if (lastActivity) {
      // Get the diff date between now and last activity
      const diffDate = DateTime.now()
        .diff(DateTime.fromMillis(lastActivity), ['hour', 'minute', 'second'])
        .toObject()

      const recordedActivity: string[] = []
      if (diffDate.hours && diffDate.hours > 0) {
        recordedActivity.push(String(getFormattedTime(diffDate.hours)))
      }

      recordedActivity.push(
        String(getFormattedTime(diffDate.minutes)).padStart(2, '0')
      )

      recordedActivity.push(
        String(getFormattedTime(diffDate.seconds)).padStart(2, '0')
      )

      setRecordedActivity(recordedActivity.join(':'))
    }

    setEmail(emailParam)
  }, [query])

  const getFormattedTime = (time?: number): number => {
    return Math.max(Math.ceil(time || 0), 0)
  }

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
        router.push(url !== '/login' ? url : '/banking/home')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (getLocalStorageItem(StorageKey.SIGNUP_ID)) {
      removeLocalStorageItem(StorageKey.SIGNUP_ID)
    }

    window.addEventListener('storage', redirect)
    return () => window.removeEventListener('storage', redirect)
  }, [])

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

      //temporary solution until we will have completed channels
      if (
        (typeof Router.query.return === 'string' &&
          Router.query.return.startsWith('/channel')) ||
        !Router.query.return
      ) {
        returnPath = '/banking'
      }

      Router.replace(returnPath)
    } catch (e) {
      console.log('message', e.message)
      retry()
      setErrorMessage(e.message)
    }
  }

  const getToken = () => loginToken

  return (
    <PageContainer data-cy="loginpage">
      <StyledHeader>
        {/* <Logo /> */}
      </StyledHeader>
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
                <Heading>

                </Heading>
                <Spacer axis="y" size={20} />
                <NewToTradebrite>

                </NewToTradebrite>
                {!show2fa ? (
                  <>
                    <Spacer axis="y" size={50} />
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
                      <ForgotPassword>
                        <Link href="/reset-password">
                          {t('SignIn.ForgotPassword')}
                        </Link>
                      </ForgotPassword>
                      <Spacer axis="y" size={30} />
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
                        requestOnCode={false}
                        waitingText={t('SignIn.RedirectText')}
                        customGetToken={getToken}
                        autoRequest
                      />
                    </ContentCenter>
                  </>
                )}
                <StyledDivider />
                <Spacer axis="y" size={20} />
                <TermsAndPolicy>
                  {t('SignIn.YouAccept')}{' '}
                  <CustomLink
                    href={TERMS_AND_CONDITIONS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{t('SignIn.Terms')}</span>
                  </CustomLink>{' '}
                  {t('SignIn.And')}{' '}
                  <CustomLink
                    href={TERMS_AND_CONDITIONS}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{t('SignIn.Policy')}</span>
                  </CustomLink>
                  .
                </TermsAndPolicy>
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
